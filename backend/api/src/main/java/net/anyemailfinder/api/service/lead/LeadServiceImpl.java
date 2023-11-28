package net.anyemailfinder.api.service.lead;

import static org.jobrunr.scheduling.JobBuilder.aJob;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.StringJoiner;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import net.anyemailfinder.api.ChannelPageableResponse;
import net.anyemailfinder.api.EmailSearchResults;
import net.anyemailfinder.api.SubmitQueryRequest;
import net.anyemailfinder.api.TaskId;
import net.anyemailfinder.api.WebsocketPayload;
import net.anyemailfinder.api.YouTubeChannelDetail;
import net.anyemailfinder.api.data.postgres.entity.ChannelEntity;
import net.anyemailfinder.api.data.postgres.entity.LeadsEntity;
import net.anyemailfinder.api.data.postgres.entity.QueryLeadsEntity;
import net.anyemailfinder.api.data.postgres.entity.TaskEntity;
import net.anyemailfinder.api.data.postgres.entity.UserLeadsEntity;
import net.anyemailfinder.api.data.postgres.entity.YouTubeLeadsEntity;
import net.anyemailfinder.api.data.postgres.repo.ChannelRepo;
import net.anyemailfinder.api.data.postgres.repo.LeadsRepo;
import net.anyemailfinder.api.data.postgres.repo.QueryLeadsRepo;
import net.anyemailfinder.api.data.postgres.repo.TaskRepo;
import net.anyemailfinder.api.data.postgres.repo.UserLeadsRepo;
import net.anyemailfinder.api.data.postgres.repo.YouTubeLeadsRepo;
import net.anyemailfinder.api.dto.SmartProxyResultsDto;
import net.anyemailfinder.api.dto.SmartProxyTaskDto;
import net.anyemailfinder.api.props.CrawlerProps;
import net.anyemailfinder.api.props.OpenAiProps;
import net.anyemailfinder.api.props.SmartProxyProps;
import net.anyemailfinder.api.props.WebSocketProps;
import net.anyemailfinder.api.service.crawler.HtmlCrawlController;
import net.anyemailfinder.api.service.crawler.HtmlCrawler;
import net.anyemailfinder.api.service.emailVerification.EmailVerificationService;
import net.anyemailfinder.api.service.gpt.GptService;
import net.anyemailfinder.api.service.mapper.LeadsMapper;
import net.anyemailfinder.api.service.messaging.MessagingService;
import net.anyemailfinder.api.service.parser.ParserService;
import net.anyemailfinder.api.service.scraper.UserAgentService;
import net.anyemailfinder.api.service.utils.HRUtils;
import net.anyemailfinder.api.service.youtubej.YoutubeDownloader;
import net.anyemailfinder.api.service.youtubej.downloader.request.RequestSearchContinuation;
import net.anyemailfinder.api.service.youtubej.downloader.request.RequestSearchResult;
import net.anyemailfinder.api.service.youtubej.downloader.response.Response;
import net.anyemailfinder.api.service.youtubej.model.search.SearchResult;
import org.apache.http.Header;
import org.apache.http.HttpHeaders;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicHeader;
import org.apache.http.util.EntityUtils;
import org.jobrunr.JobRunrException;
import org.jobrunr.scheduling.JobScheduler;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

/**
 * @author Biz Melesse created on 2/5/23
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class LeadServiceImpl implements LeadService {
  private final YoutubeDownloader youtubeDownloader = new YoutubeDownloader();
  private final SimpMessagingTemplate messagingTemplate;
  private final WebSocketProps webSocketProps;
  private final ObjectMapper objectMapper;
  private final YouTubeLeadsRepo youTubeLeadsRepo;
  private final ChannelRepo channelRepo;
  private final SmartProxyProps smartProxyProps;
  private final UserAgentService userAgentService;
  private final TaskRepo taskRepo;
  private final JobScheduler jobScheduler;
  private final ParserService parserService;
  private final MessagingService messagingService;
  private final CrawlerProps crawlerProps;
  private final GptService gptService;
  private final LeadsRepo leadsRepo;
  private final UserLeadsRepo userLeadsRepo;
  private final QueryLeadsRepo queryLeadsRepo;
  private final LeadsMapper leadsMapper;
  private final OpenAiProps openAiProps;
  private final EmailVerificationService emailVerificationService;
  private final ExecutorService executorService = Executors.newVirtualThreadPerTaskExecutor();
  private Set<String> emailProviders = new HashSet<>();

  @PostConstruct
  public void onStart() {
    emailProviders = HRUtils.loadLines("email/allEmailProviders.txt");
  }

  private boolean extractUrls(String id) {
    YouTubeLeadsEntity leadsEntity = youTubeLeadsRepo.findById(id).get();
    List<String> urls = new ArrayList<>();
    String regex = "\\bhttps?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)";
    Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
    String text = leadsEntity.getDescription();
    if (!ObjectUtils.isEmpty(text)) {
      Matcher matcher = pattern.matcher(leadsEntity.getDescription());
      if (walkPatternMatches(leadsEntity, urls, text, matcher, true)) {
        return true;
      }
    }
    return false;
  }

  private List<String> extractUrlsFromGptResponse(String content) {
    List<String> urls = new ArrayList<>();
    String regex = "\\bhttps?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)";
    Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
    if (!ObjectUtils.isEmpty(content)) {
      Matcher matcher = pattern.matcher(content);
      while (matcher.find()) {
        urls.add(content.substring(matcher.start(0), matcher.end(0)));
      }
    }
    return urls;
  }

  private boolean walkPatternMatches(YouTubeLeadsEntity leadsEntity, List<String> values, String text,
      Matcher matcher, boolean extractUrls) {
    while (matcher.find()) {
      values.add(text.substring(matcher.start(0), matcher.end(0)));
    }
    if (!ObjectUtils.isEmpty(values)) {
      if (extractUrls) {
        leadsEntity.setUrls(String.join(",", values));
      } else {
        String emails = String.join(",", values);
        if (youTubeLeadsRepo.findByEmails(emails) == null) {
          leadsEntity.setEmails(emails);
        }
      }
      youTubeLeadsRepo.save(leadsEntity);
      return true;
    }
    return false;
  }

  private boolean extractEmailsFromYouTubeDescription(String id) {
    YouTubeLeadsEntity leadsEntity = youTubeLeadsRepo.findById(id).get();
    List<String> emails = new ArrayList<>();
    if (!ObjectUtils.isEmpty(leadsEntity.getDescription())) {
        String pattern = "[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})";
        Pattern emailPattern = Pattern.compile(pattern, Pattern.CASE_INSENSITIVE);
        String text = leadsEntity.getDescription().toLowerCase();
        Matcher matcher = emailPattern.matcher(text);
        if (walkPatternMatches(leadsEntity, emails, text, matcher, false)) {
          return true;
        }
    }
    return false;
  }

  private Set<String> extractEmailsFromCrawledPage(String html) {
    Set<String> emails = new HashSet<>();
    if (!ObjectUtils.isEmpty(html)) {
      String pattern = "[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})";
      Pattern emailPattern = Pattern.compile(pattern, Pattern.CASE_INSENSITIVE);
      Matcher matcher = emailPattern.matcher(html);
      while (matcher.find()) {
        String email = html.substring(matcher.start(0), matcher.end(0)).
            strip()
            .toLowerCase();
        if (!emails.contains(email) &&
            !email.endsWith(".png") &&
            !email.endsWith(".jpg")) {
          emails.add(email);
        }
      }
    }
    return emails;
  }

//    for (YouTubeLeadsEntity leadsEntity : youTubeLeadsRepo.findAll()) {
//      String id = leadsEntity.getId();
//
//      boolean urlsFound = extractUrls(id);
//      boolean emailsFound = extractEmailsFromYouTubeDescription(id);
//      if (!emailsFound && urlsFound && !externalInvoked) {
////        try {
////          extractEmailFromFacebook(id);
//          boolean submitted = extractEmailsFromExternalSites(id);
////          if (submitted) {
////            break;
////          }
////        } catch (IOException e) {
////          log.error(e.getLocalizedMessage());
////        }
//      }
//    }

  @Override
  public TaskId submitSearchQuery(SubmitQueryRequest request) {
      if (!ObjectUtils.isEmpty(request) &&
          !ObjectUtils.isEmpty(request.getQuery())) {

        String query = request.getQuery().strip();
        String userId = HRUtils.getSessionUser().getUserId();
        String  baseUrl = null;
        boolean isUrl = queryIsUrl(query);
        if (isUrl) {
          baseUrl = getBaseUrl(query);
        }
        String taskId = TaskEntity.newTaskId();
        if (isUrl) {
         if (urlIsAllowed(query)) {
           submitCrawlJob(request, taskId, baseUrl);
           return new TaskId()
               .taskId(taskId);
         } else {
           return new TaskId()
               .status("URL not supported");
         }
        } else {
//          submitYoutubeSearchQuery(query, taskId);
          return new TaskId()
              .taskId(taskId);
        }
    }
    return new TaskId();
  }

  private boolean queryIsUrl(String query) {
    try {
      return new URL(query) != null;
    } catch (MalformedURLException e) {
      // pass
    }
    return false;
  }

  private String getBaseUrl(String url) {
    try {
      return new URL(url).getHost().replace("www.", "");
    } catch (MalformedURLException e) {
      // pass
    }
    return url;
  }

  private boolean urlIsAllowed(String url) {
    // TODO: call GPT to reason about the nature of the url
    return true;
  }

  private void extractEmailsFromCrawl(final String url, final boolean fullDomainCrawl, String taskId) {
      Thread.startVirtualThread(() -> {
        log.info("url to crawl: {}", url);
        try {
          if (HtmlCrawler.isCrawlable(url, crawlerProps, messagingService)) {
            HtmlCrawlController crawlController = new HtmlCrawlController(
                url,
                taskId,
                messagingService,
                this,
                crawlerProps,
                fullDomainCrawl);
            crawlController.startCrawling();
          } else {
            // if the seed url is not crawlable, then we shouldn't crawl the target url either.
            // Add it to the visited list for now but properly flag it later to avoid confusion
            if (fullDomainCrawl) {
              messagingService.addVisitedUrl(HRUtils.getSeedUrl(url));
            } else {
              messagingService.addVisitedUrl(url);
            }
          }
        } catch (Exception e) {
          log.error("extractEmailsFromExternalSites: {}", e.getLocalizedMessage());
        }
      });
  }

  private void submitYoutubeSearchQuery(final String query, final String taskId) {
    Thread.startVirtualThread(() -> {
      log.info("Running query: {}", query);
      Response<SearchResult> response = youtubeDownloader.search(new RequestSearchResult(query));
      if (response.ok()) {
        SearchResult result = response.data();
        try {
          submitChannelAboutJobs(taskId, new HashSet<>(parserService.getChannels(result)).stream().toList());
        } catch (IOException e) {
          log.error(e.getLocalizedMessage());
        }
        while (result != null && result.hasContinuation()) {
          result = youtubeDownloader.searchContinuation(new RequestSearchContinuation(result)).data();
          try {
            submitChannelAboutJobs(taskId, new HashSet<>(parserService.getChannels(result)).stream().toList());
          } catch (IOException e) {
            log.error(e.getLocalizedMessage());
          }
        }

      }
      queryResults.put(taskId, new ChannelPageableResponse()
          .count(0)
          .records(new ArrayList<>()));
    });
  }


  @Override
  public ChannelPageableResponse getChannelQueryResult(String jobId) {
    Future<ChannelPageableResponse> task = executorService.submit(() -> {
      ChannelPageableResponse result = null;
      int retries = 300; // Give up after 30 seconds (300*100 = 30_000)
      while (result == null && retries > 0) {
        result = queryResults.get(jobId);
        if (result == null) {
          retries--;
          Thread.sleep(100);
        }
      }
      queryResults.remove(jobId);
      return result;
    });
    try {
      return task.get();
    } catch (InterruptedException | ExecutionException e) {
      log.error("{}.getChannelQueryResult: {}",
          getClass().getSimpleName(),
          e.getMessage());
    }
    return new ChannelPageableResponse();
  }


  @Override
  public void handleCrawlerResult(String taskId, String url, String html) {
    Thread.startVirtualThread(() -> {
      String text = parserService.parseAnyHtmlPage(html);
      String metaTags = parserService.parseOpenGraphToString(html);
      text = metaTags + "\n" + text;
      messagingService.cacheCrawledPage(taskId, url, text);
      Set<String> emails = extractEmailsFromCrawledPage(text);
      if (emails.size() > 0) {
        // GPT can hallucinate and start generating non-existent leads so we should only accept
        // entries whose emails match we've validated already.
        Thread.startVirtualThread(() -> getOpenGraphMetaData(emails));
        List<LeadsEntity> extractedLeads = extractLeadInfo(emails, text);
        enrichLeadsWithOpenGraph(extractedLeads);
        List<LeadsEntity> leads = extractedLeads
            .stream()
            .filter(it -> emails.contains(it.getEmail()))
            .toList();
        leads = upsertLeads(leads, taskId); // Always enrich any existing leads or create new ones if they don't exist
        emailVerificationService.verifyEmails(emails);
        sendResultsToClient(leads, taskId);
      }
    });
  }

  private void enrichLeadsWithOpenGraph(List<LeadsEntity> extractedLeads) {
    for (LeadsEntity lead : extractedLeads) {
      if (!ObjectUtils.isEmpty(lead.getEmail())) {
        String key = getDomainFromEmail(lead.getEmail());
        if (key != null) {
          LeadsEntity leadsEntity = openGraphMetadata.get(key);
          if (leadsEntity != null) {
            leadsMapper.enrichLeadsEntity(lead, leadsEntity);
          }
        }
      }
    }
  }

  private void enrichLeadsWithAboutUs(String taskId) {
    List<String> urls = messagingService.getUrls(taskId);
    StringJoiner j = new StringJoiner("\n");
    j.add("Here are the URLS:");
    j.add(String.join("\n", urls));
    String result = gptService.gptCompletion(openAiProps.getAboutUsUrlPrompt(), j.toString());
    if (!ObjectUtils.isEmpty(result)) {
      List<String> aboutUsUrls = extractUrlsFromGptResponse(result);
      List<LeadsEntity> leadsEntities = extractLeadInfoFromAboutPages(
          String.join("\n", messagingService.getCachedPages(taskId, aboutUsUrls)));
      int x = 1;
    }
  }

  private void sendResultsToClient(List<LeadsEntity> leads, String taskId) {
    TaskEntity taskEntity = taskRepo.findById(taskId).get();
    String userId = taskEntity.getUserId();

    // Reload all entities with updated fields
    WebsocketPayload payload = new WebsocketPayload()
        .type(EmailSearchResults.class.getSimpleName())
        .data(new EmailSearchResults().results(leadsMapper.mapLeadsToResult(leads)));
    messagingTemplate.convertAndSendToUser(
        userId,
        webSocketProps.getQueue(),
        payload
    );
  }

  private List<LeadsEntity> upsertLeads(List<LeadsEntity> leads, String taskId) {
    Map<String, LeadsEntity> leadsToUpsert = leads
        .stream()
        .collect(Collectors.toMap(LeadsEntity::getEmail, it -> it));

    List<LeadsEntity> updated = new ArrayList<>();
    if (!ObjectUtils.isEmpty(leadsToUpsert)) {
      List<LeadsEntity> existingLeads = leadsRepo
          .findAllByEmails(
              leadsToUpsert.keySet()
                  .stream()
                  .toList());
      Set<String> existingLeadsEmails = new HashSet<>(existingLeads
          .stream()
          .map(LeadsEntity::getEmail)
          .toList());

      // Create new leads
      List<LeadsEntity> newLeads = leads
          .stream()
          .filter(it -> !existingLeadsEmails.contains(it.getEmail()))
          .toList();
      if (!ObjectUtils.isEmpty(newLeads)) {
        leadsRepo.saveAll(newLeads);
        updated.addAll(newLeads);
      }

      // Upsert existing leads
      existingLeads = existingLeads.stream().peek(it -> {
        LeadsEntity crawledLead = leadsToUpsert.get(it.getEmail());
        leadsMapper.enrichLeadsEntity(it, crawledLead);
      }).toList();
      leadsRepo.saveAll(existingLeads);
      updated.addAll(existingLeads);

      // Create user lead references
      createUserLeads(updated, taskId);

      return updated;
    }
    return new ArrayList<>();
  }

  private void createUserLeads(List<LeadsEntity> leads, String taskId) {
    TaskEntity taskEntity = taskRepo.findById(taskId).get();
    final String userId = taskEntity.getUserId();
    final List<String> allLeadIds = new ArrayList<>();
    allLeadIds.addAll(leads.stream().map(LeadsEntity::getId).toList());
    Thread.startVirtualThread(() -> {
      for (String leadId : allLeadIds) {
        try {
          saveNewUserLead(userId, leadId);
        } catch (DataIntegrityViolationException e) {
          // ignore any duplicate record errors
        }
        try {
          saveNewQueryLead(taskId, leadId);
        } catch (DataIntegrityViolationException e) {
          // ignore any duplicate record errors
        }
      }
    });
  }

  private void saveNewQueryLead(String taskId, String leadId) {
    QueryLeadsEntity queryLeadsEntity = new QueryLeadsEntity();
    queryLeadsEntity.setTaskId(taskId);
    queryLeadsEntity.setLeadId(leadId);
    queryLeadsRepo.save(queryLeadsEntity);
  }

  private void saveNewUserLead(String userId, String leadId) {
    UserLeadsEntity userLeadsEntity = new UserLeadsEntity();
    userLeadsEntity.setUserId(userId);
    userLeadsEntity.setLeadId(leadId);
    userLeadsRepo.save(userLeadsEntity);
  }

  private List<LeadsEntity> extractLeadInfo(Set<String> emails, String text) {
    StringJoiner j = new StringJoiner("\n");
    j.add(openAiProps.getExtractionPrompt());
    j.add("EXTRACTED EMAILS: " + String.join(",", emails));
    String result = gptService.gptCompletion(j.toString(), text);
    TypeReference<List<LeadsEntity>> typeRef = new TypeReference<>(){};
    if (!ObjectUtils.isEmpty(result)) {
      try {
        return objectMapper.readValue(result, typeRef);
      } catch (JsonProcessingException e) {
        log.error("extractLeadInfo: {}", e.getLocalizedMessage());
      }
    }
    return new ArrayList<>();
  }

  private List<LeadsEntity> extractLeadInfoFromAboutPages(String text) {
    StringJoiner j = new StringJoiner("\n");
    j.add(openAiProps.getAboutUsExtractionPrompt());
    String result = gptService.gptCompletion(j.toString(), text);
    TypeReference<List<LeadsEntity>> typeRef = new TypeReference<>(){};
    if (!ObjectUtils.isEmpty(result)) {
      try {
        return objectMapper.readValue(result, typeRef);
      } catch (JsonProcessingException e) {
        log.error("extractLeadInfoFromAboutPages: {}", e.getLocalizedMessage());
      }
    }
    return new ArrayList<>();
  }

  private LeadsEntity extractOpenGraphInfo(String email, String text) {
    StringJoiner j = new StringJoiner("\n");
    j.add(openAiProps.getOpenGraphPrompt());
    String result = gptService.gptCompletion(j.toString(), text);
    if (!ObjectUtils.isEmpty(result)) {
      try {
        LeadsEntity newLead = objectMapper.readValue(result, LeadsEntity.class);
        List<LeadsEntity> leads = leadsRepo.findAllByEmails(List.of(email));
        if (!ObjectUtils.isEmpty(leads)) {
          LeadsEntity prev = leads.get(0);
          leadsMapper.enrichLeadsEntity(prev, newLead);
          leadsRepo.save(prev);
        }
        return newLead;
      } catch (JsonProcessingException e) {
        log.error("extractOpenGraphInfo: {}", e.getLocalizedMessage());
      }
    }
    return null;
  }

  private void getOpenGraphMetaData(Set<String> emails) {
    List<CompletableFuture<String>> futures = new ArrayList<>();
    for (final String email : emails) {
      Set<String> domains = new HashSet<>();
      String domain = getDomainFromEmail(email);
      domains.add("https://wwww." + domain);
      domains.add("http://wwww." + domain);
      domains.add("https://" + domain);
      domains.add("http://" + domain);

      for (final String d : domains) {
        final String baseUrl = getBaseUrl(d);
        if (!openGraphMetadata.containsKey(baseUrl)) {
          futures.add(CompletableFuture.supplyAsync(() -> {
            try {
              String res = httpRequest(d, true);
              String parsed = parserService.parseOpenGraphToString(res);
              String thumbnail = parserService.getWebsiteImage(res);
              LeadsEntity leadsEntity = extractOpenGraphInfo(email, parsed);
              if (parsed != null && !openGraphMetadata.containsKey(baseUrl) && leadsEntity != null) {
                leadsEntity.setThumbnail(thumbnail);
                openGraphMetadata.put(baseUrl, leadsEntity);
              }
            } catch (ClientProtocolException e) {
              // pass;
            }
            catch (IOException e) {
              // pass
//              log.error("getOpenGraphMetaData: {}", e.getLocalizedMessage());
            }
            return null;
          }, executorService));
        }
      }
    }

   futures
        .stream()
        .map(CompletableFuture::join)
       .toList();
  }

  private String getDomainFromEmail(String email) {
    String domain = email.toLowerCase().substring(email.indexOf("@") + 1);
    if (emailProviders.contains(domain)) {
      return null;
    }
    return domain;
  }

  @Override
  public void onCrawlFinished(final String taskId, boolean enrich) {
    TaskEntity taskEntity = taskRepo.findById(taskId).get();
    if (enrich) {
      // Enable enrichment from about us once we figure out how to attribute the info from those
      // pages back to the email addresses correctly. For example, @gmail emails should not be
      // enriched with the about us data from gmail.com
//      Thread.startVirtualThread(() -> enrichLeadsWithAboutUs(taskId));
    }

    taskEntity.setStatus(TaskStatus.COMPLETED);
    String userId = taskEntity.getUserId();

    WebsocketPayload payload = new WebsocketPayload()
        .type(TaskStatus.class.getSimpleName())
        .data(TaskStatus.COMPLETED);

    messagingTemplate.convertAndSendToUser(
        userId,
        webSocketProps.getQueue(),
        payload);
  }

  @Override
  public EmailSearchResults getAllUserLeads() {
    // TODO: may want to paginate here eventually
    return new EmailSearchResults().results(leadsMapper.mapLeadsToResult(
        leadsRepo.findAllUserLeads(HRUtils.getSessionUser().getUserId())));
  }

  @SneakyThrows
  private void saveResponse(ChannelPageableResponse fullResponse) {
    // Save the response locally
    String outputStr = objectMapper.writeValueAsString(fullResponse);
    try (InputStream in = new ByteArrayInputStream(outputStr.getBytes(StandardCharsets.UTF_8))) {
      // Save the file to disk for processing
      String path = "/tmp/youtube-channels-request-" + LocalDateTime.now().toEpochSecond(ZoneOffset.UTC) + ".json";
      if (!new File(path).exists()) {
        new File(path).mkdirs();
      }
      File output = new File(path);
      Files.copy(in, output.toPath(), StandardCopyOption.REPLACE_EXISTING);
    }
  }

  private StringEntity getSmartProxyBody(String url) {
    Map<String, Object> body = new HashMap<>();
    body.put("target", "universal");
    body.put("locale", "en-us");
    body.put("headless", "html");
    body.put("device_type", "desktop");
    body.put("url", url);
    try {
      return new StringEntity(objectMapper.writeValueAsString(body));
    } catch (JsonProcessingException | UnsupportedEncodingException e) {
      log.error("getSmartProxyBody: {}", e.getLocalizedMessage());
    }
    return null;
  }
  private void submitCrawlJob(SubmitQueryRequest request, String taskId, String baseUrl) {
    final String userId = HRUtils.getSessionUser().getUserId();
    if (!ObjectUtils.isEmpty(baseUrl)) {
      TaskEntity taskEntity = new TaskEntity();
      taskEntity.setId(taskId);
      taskEntity.setStatus(TaskStatus.STARTED);
      taskEntity.setUserId(userId);

      // Check if there was previous query like this one
      Optional<TaskEntity> prevQueryTaskEntityOpt = taskRepo.findByQuery(baseUrl);
      if (prevQueryTaskEntityOpt.isPresent()) {
        taskEntity.setParentTaskId(prevQueryTaskEntityOpt.get().getId());
      } else {
        taskEntity.setQuery(baseUrl);
      }

      // Check if there are leads for this url from a previous query
      List<String> queryLeadIds = queryLeadsRepo.findExistingLeadsForQuery(baseUrl,
          HRUtils.getSessionUser().getMaxLeadLimit());

      if (!ObjectUtils.isEmpty(queryLeadIds)) {
        // Create new user leads references if this user doesn't already have these leads
        Set<String> userLeadIds = new HashSet<>(
            userLeadsRepo.findAllLeadsByUserId(userId));
        for (final String queryLeadId : queryLeadIds) {
          if (!userLeadIds.contains(queryLeadId)) {
            Thread.startVirtualThread(() -> saveNewUserLead(userId, queryLeadId));
          }
        }
        taskEntity.setStatus(TaskStatus.COMPLETED);
        taskRepo.save(taskEntity);
        sendResultsToClient(leadsRepo.findAllByLeadIds(queryLeadIds), taskId);
        onCrawlFinished(taskId, false);
      } else {
        taskEntity.setStatus(TaskStatus.IN_PROGRESS);
        taskRepo.save(taskEntity);
        boolean fullDomainCrawl = request.getWebpageOnly() != null && !request.getWebpageOnly();
        extractEmailsFromCrawl(request.getQuery(), fullDomainCrawl, taskEntity.getId());
      }
    }
  }

  public void submitChannelAboutJobs(final String taskId, final List<String> channels)
      throws IOException {
    if (!ObjectUtils.isEmpty(channels)) {
      TaskEntity taskEntity = taskRepo.findById(taskId).get();
      taskEntity.setStatus(TaskStatus.IN_PROGRESS);
      taskRepo.save(taskEntity);
      for (String channel : channels) {
        if (!ObjectUtils.isEmpty(channel) && youTubeLeadsRepo.findByChannelName(channel) == null) {
          final String url = String.format("https://www.youtube.com/%s/about", channel);
          final String spTaskId = submitSmartProxyTask(url);
          final String resultUrl = smartProxyProps.getResultUrl()
              .replace("\"", "")
              .replace("{}", spTaskId);
          YouTubeLeadsEntity leadsEntity = new YouTubeLeadsEntity();
          leadsEntity.setChannelUrl(url);
          leadsEntity.setChannelName(channel);
          youTubeLeadsRepo.save(leadsEntity);

          ChannelEntity channelEntity = new ChannelEntity();
          channelEntity.setChannel(channel);
          channelEntity.setTaskId(taskId);
          channelRepo.save(channelEntity);

          String jobName = String.format("about-channel-%s", channel);
          jobScheduler.create(aJob()
              .withName(jobName)
              .withAmountOfRetries(5)
              .withDetails(() ->
                  smartProxyResultHandler(resultUrl, channel, RequestType.YOUTUBE)));
        } else {
          log.info("Channel '{}' already exists from before. Skipping..", channel);
        }
      }
    }
  }

  public void smartProxyResultHandler(String resultUrl,
      String channelName, RequestType requestType) {
    try {
      String result = httpRequest(resultUrl, false);
      if (result == null) {
        throw new JobRunrException("Result not ready");
      } else if (result.toLowerCase().startsWith("no content")) {
        if (requestType == RequestType.YOUTUBE) {
          YouTubeLeadsEntity leadsEntity = youTubeLeadsRepo
              .findByChannelName(channelName);
          if (leadsEntity != null) {
            leadsEntity.setScrapingFailed(true);
            leadsEntity.setUpdatedAt(LocalDateTime.now());
            youTubeLeadsRepo.save(leadsEntity);
          }
        }
      } else {
          SmartProxyResultsDto resultsDto = objectMapper.readValue(result, SmartProxyResultsDto.class);
          if (ObjectUtils.isEmpty(resultsDto.getResults().get(0).getContent())) {
            throw new JobRunrException("Result not ready");
          } else {
            if (requestType == RequestType.YOUTUBE) {
              log.info("Channel about result for channel={}", channelName);
              YouTubeChannelDetail detail = parserService.parseChannelSoup(
                  resultsDto.getResults().get(0).getContent());
              if (detail != null) {
                detail.setChannelHandle(channelName);
              }
              String id = saveChannelDetail(detail, channelName);
              boolean urlsFound = extractUrls(id);
              boolean emailsFound = extractEmailsFromYouTubeDescription(id);
              if (!emailsFound && urlsFound) {
                extractEmailFromFacebook(id);
              }
            } else if (requestType == RequestType.FACEBOOK)  {
              log.info("Channel email result for channel={}", channelName);
              handleFacebookEmailResult(resultsDto, channelName);
            }
          }
      }
    } catch (Exception e) {
      throw new JobRunrException("Result not ready");
    }
  }

  private void handleFacebookEmailResult(SmartProxyResultsDto resultsDto, String channelName) {
    String email = parserService.parseFacebookSoup( resultsDto.getResults().get(0)
        .getContent());
    if (!ObjectUtils.isEmpty(email) && youTubeLeadsRepo.findByEmails(email) == null) {
      YouTubeLeadsEntity leadsEntity = youTubeLeadsRepo.findByChannelName(channelName);
      leadsEntity.setEmails(email);
      leadsEntity.setUpdatedAt(LocalDateTime.now());
      youTubeLeadsRepo.save(leadsEntity);
    }
  }

  private void extractEmailFromFacebook(String id)
      throws IOException {
    YouTubeLeadsEntity leadsEntity = youTubeLeadsRepo.findById(id).get();
    String channelName = leadsEntity.getChannelName();
    // Currently extract emails from their Facebook page
      String facebookUrl = Stream.of(leadsEntity.getUrls().split(","))
          .map(String::strip)
          .filter(it -> it.toLowerCase().contains("facebook.com"))
          .findFirst().orElse(null);
      if (!ObjectUtils.isEmpty(facebookUrl)) {
        log.info(this.getClass().getSimpleName()
                + ".fetchEmailAddress: Fetching email addresses for {} channel",
            channelName);
        final String spTaskId = submitSmartProxyTask(facebookUrl);
        final String resultUrl = smartProxyProps.getResultUrl()
            .replace("\"", "")
            .replace("{}", spTaskId);
        String jobName = String.format("fetch-email-%s", channelName);
        jobScheduler.create(aJob()
            .withName(jobName)
            .withAmountOfRetries(5)
            .withDetails(() ->
                smartProxyResultHandler(resultUrl, channelName, RequestType.FACEBOOK)));
      }
  }

  private String saveChannelDetail(YouTubeChannelDetail detail, String channelName) {
    YouTubeLeadsEntity leadsEntity = youTubeLeadsRepo.findByChannelName(channelName);
    leadsEntity = youTubeLeadsRepo.save(mapDetailToEntity(detail, leadsEntity));
    return leadsEntity.getId();
  }

  private String submitSmartProxyTask(String url) throws IOException {
    if (url != null) {
      try (CloseableHttpClient httpClient = HttpClients
          .custom()
          .setUserAgent(userAgentService.getRandomUserAgent())
          .setDefaultHeaders(getSmartProxyHeaders(true))
          .build()) {
        HttpPost httpPost = new HttpPost(smartProxyProps.getRequestUrl());
        StringEntity body = getSmartProxyBody(url);
        httpPost.setEntity(body);
        CloseableHttpResponse httpResponse = httpClient.execute(httpPost);
        String result = EntityUtils.toString(httpResponse.getEntity());
        SmartProxyTaskDto dto = objectMapper.readValue(result, SmartProxyTaskDto.class);
        int statusCode = httpResponse.getStatusLine().getStatusCode();
        if (statusCode >= 400) {
          throw new RuntimeException(
              String.format("Status Code: %s URL: %s", statusCode, url));
        }
        httpResponse.close();
        return dto.getId();
      }
    }
    return null;
  }

  private String httpRequest(String url, boolean defaultHeaders) throws IOException {
    try (CloseableHttpClient httpClient = getHttpClient(defaultHeaders)) {
      HttpGet httpGet = new HttpGet(url);
      CloseableHttpResponse httpResponse = httpClient.execute(httpGet);
      var entity = httpResponse.getEntity();
      String result = null;
      if (entity != null) {
        result = EntityUtils.toString(entity);
        int statusCode = httpResponse.getStatusLine().getStatusCode();
        if (statusCode >= 400) {
          throw new RuntimeException(
              String.format("Status Code: %s URL: %s", statusCode, url));
        }
      }
      httpResponse.close();
      return result;
    }
  }

  private CloseableHttpClient getHttpClient(boolean defaultHeaders) {
    if (defaultHeaders) {
      return HttpClients
          .custom()
          .setUserAgent(userAgentService.getRandomUserAgent())
          .build();
    }
    return HttpClients
        .custom()
        .setUserAgent(userAgentService.getRandomUserAgent())
        .setDefaultHeaders(getSmartProxyHeaders(false))
        .build();
  }

  private List<Header> getSmartProxyHeaders(boolean initialRequest) {
    List<Header> headers = new ArrayList<>(List.of(
        new BasicHeader(HttpHeaders.ACCEPT, "application/json"),
        new BasicHeader(HttpHeaders.AUTHORIZATION, "Basic " + smartProxyProps.getToken())));
    if (initialRequest) {
      headers.add(new BasicHeader(HttpHeaders.CONTENT_TYPE, "application/json"));
    }
    return headers;
  }

  private YouTubeLeadsEntity mapDetailToEntity(YouTubeChannelDetail detail, YouTubeLeadsEntity entity) {
    if (entity == null) {
      entity = new YouTubeLeadsEntity();
    }
    entity.setEmails(detail.getEmail());
    entity.setDescription(detail.getDescription());
    entity.setKeywords(detail.getKeywords());
    entity.setChannelUrl(detail.getChannelUrl());
    entity.setChannelName(detail.getChannelName());
    entity.setChannelHandle(detail.getChannelHandle());
    entity.setSubscribers(detail.getSubscribers());
    entity.setSubscribersValue(detail.getSubscribersValue());
    return entity;
  }

  private static class TaskStatus {
    public static final String STARTED = "Started";
    public static final String IN_PROGRESS = "In progress";
    public static final String COMPLETED = "Completed";
    public static final String FAILED = "Failed";
  }

  private enum RequestType {
    YOUTUBE,
    FACEBOOK;
  }
}
