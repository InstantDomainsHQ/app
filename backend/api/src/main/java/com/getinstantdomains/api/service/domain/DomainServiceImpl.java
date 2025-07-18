package com.getinstantdomains.api.service.domain;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.getinstantdomains.api.DomainWhoIs;
import com.getinstantdomains.api.GenerateRequest;
import com.getinstantdomains.api.TaskId;
import com.getinstantdomains.api.TldResponse;
import com.getinstantdomains.api.WebsocketPayload;
import com.getinstantdomains.api.data.postgres.entity.DomainEntity;
import com.getinstantdomains.api.data.postgres.entity.TldEntity;
import com.getinstantdomains.api.data.postgres.repo.DomainRepo;
import com.getinstantdomains.api.data.postgres.repo.TldRepo;
import com.getinstantdomains.api.dto.TldDto;
import com.getinstantdomains.api.dto.WhoIsResponse;
import com.getinstantdomains.api.props.DomainProps;
import com.getinstantdomains.api.props.OpenAiProps;
import com.getinstantdomains.api.props.WebSocketProps;
import com.getinstantdomains.api.service.gpt.GptService;
import com.getinstantdomains.api.service.utils.IDUtils;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

/**
 * @author Biz Melesse created on 11/28/23
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class DomainServiceImpl implements DomainService {
  private final GptService gptService;
  private final OpenAiProps openAiProps;
  private final DomainProps domainProps;
  private final TldRepo tldRepo;
  private final DomainRepo domainRepo;
  private final WebSocketProps webSocketProps;
  private final SimpMessagingTemplate messagingTemplate;
  private final ObjectMapper objectMapper;
  private final OkHttpClient httpClient = new OkHttpClient();

  @Override
  public TldResponse getTlds() {
    return new TldResponse()
        .tlds(domainProps.getTldExtensions());
  }

  @Override
  public TaskId generateDomains(GenerateRequest generateRequest) {
    if (!ObjectUtils.isEmpty(generateRequest.getQuery())) {
      String taskId = "t_" + IDUtils.generateUid(IDUtils.SHORT_UID_LENGTH);
      log.info("Query: {}", generateRequest.getQuery());
      gptService.gptCompletion(
          IDUtils.getSessionUser().getUserId(),
          openAiProps.getDomainGeneratePrompt(),
          generateRequest.getQuery(), generateRequest.getTlds(), this);
      return new TaskId().taskId(taskId);
    }
    return new TaskId();
  }

  @Override
  public void performWhois(String domain, final String clientId, List<String> userSelectedTlds) {
    domain = domain.toLowerCase().strip().replace(" ", "");
    DomainEntity domainEntity = domainRepo.findByDomainName(domain);
    if (domainEntity == null) {
      domainEntity = new DomainEntity();
      domainEntity.setDomainName(domain);
      domainRepo.save(domainEntity);
    }
    final DomainEntity d = domainEntity;
    Thread.startVirtualThread(() -> sendDomainNameToClient(d, clientId));

    final List<TldEntity> tlds = tldRepo.findAllByTld(domain, userSelectedTlds);

    Thread.startVirtualThread(() -> sendTldsToClient(d, tlds, clientId));

    domainProps.getTlds().forEach(it -> {
      if (userSelectedTlds.contains(it.getTld())) {
        Thread.startVirtualThread(() -> whois(d, it, clientId));
      }
    });

  }

  private void whois(DomainEntity domain, TldDto tld, String clientId) {
    String fullDomain = domain.getDomainName() + tld.getTld();

    // Do whois lookup here
    WhoIsResponse whoisResponse = callWhoisProxy(fullDomain);


    // Update any existing record
    List<TldEntity> tldEntities = tldRepo.findAllByTld(domain.getDomainName(),
        List.of(tld.getTld()));
    TldEntity tldEntity = null;
    if (!ObjectUtils.isEmpty(tldEntities)) {
      tldEntity = tldEntities.get(0);
    } else {
      tldEntity = new TldEntity();
      tldEntity.setTld(tld.getTld());
      tldEntity.setDomainId(domain.getId());
    }

    // Update with the latest data and save
    if (whoisResponse != null) {
      tldEntity.setRegisteredAt(getLocalDateTime(whoisResponse.getCreatedAt()));
      tldEntity.setExpiresAt(getLocalDateTime(whoisResponse.getExpiresAt()));
      tldEntity.setUpdatedAt(getLocalDateTime(whoisResponse.getUpdatedAt()));
      try {
        tldEntity.setStatus(objectMapper.writeValueAsString(whoisResponse.getDomainStatus()));
      } catch (JsonProcessingException e) {
        // pass
//        log.error(e.getLocalizedMessage());
      }
    }
    tldRepo.save(tldEntity);

    // Send to client
    sendTldsToClient(domain, List.of(tldEntity), clientId);
  }

  private LocalDateTime getLocalDateTime(Long value) {
    if (value != null) {
      return LocalDateTime.ofEpochSecond(value, 0, ZoneOffset.UTC);
    }
    return null;
  }

  private WhoIsResponse callWhoisProxy(String domainName) {
    String url = String.format(domainProps.getWhoisNodeUrl(), domainName);
    String responseBody = null;
    // Create a Request object with the specified URL
    Request request = new Request.Builder()
        .url(url)
        .get()
        .build();

    try {
      try (Response response = httpClient.newCall(request).execute()) {
        if (response.isSuccessful()) {
          if (response.body() != null) {
            responseBody = response.body().string();
          }
          log.debug("Response: " + responseBody);
        } else {
         log.error("WhoIs failed: {}, {}", domainName,  response.code());
        }
      }
    } catch (Exception e) {
      // pass
//      log.error(e.getLocalizedMessage());
    }
    try {
      return objectMapper.readValue(responseBody, WhoIsResponse.class);
    } catch (Exception e) {
      // pass
//      log.error(e.getLocalizedMessage());
    }
    return null;
  }

  private void sendTldsToClient(DomainEntity domainEntity, List<TldEntity> tlds, String clientId) {
    for (TldEntity tld : tlds) {
      String whois = buildWhoIsUrl(domainEntity.getDomainName(), tld.getTld());
      boolean isAvailable = domainIsAvailable(tld);
      if (isAvailable) {
        log.info("{}{} Available: {}", domainEntity.getDomainName(), tld.getTld(), isAvailable);
      } else {
        log.info("{}{} Available: {} WhoIs: {}", domainEntity.getDomainName(), tld.getTld(), isAvailable, whois);
      }

      sendToClient(new DomainWhoIs()
              .name(domainEntity.getDomainName())
              .id(domainEntity.getId())
              .tld(tld.getTld())
              .price(getTldPrice(tld.getTld()))
              .whoisUrl(buildWhoIsUrl(domainEntity.getDomainName(), tld.getTld()))
              .isAvailable(isAvailable)
              .expiresAt(getTimestamp(tld.getExpiresAt()))
              .affiliateLink(buildAffiliateLink(domainEntity.getDomainName(), tld.getTld()))
              .registeredAt(getTimestamp(tld.getRegisteredAt())),
          clientId);
    }
  }

  private String buildAffiliateLink(String domain, String tld) {
    return String.format("%s%s%s", domainProps.getAffiliateBaseUrl(), domain, tld);
  }

  private String getTldPrice(String tld) {
    Optional<TldDto> dtoOpt = domainProps
        .getTlds()
        .stream()
        .filter(it -> it.getTld().equals(tld))
        .findFirst();
    if (dtoOpt.isPresent()) {
      return dtoOpt.get().getPrice();
    }
    return "??";
  }

  private String buildWhoIsUrl(String domainName, String tld) {
    return String.format("%s/%s%s", domainProps.getWhoisBaseUrl(), domainName, tld);
  }

  private Long getTimestamp(LocalDateTime time) {
    if (time != null) {
      return time.toEpochSecond(ZoneOffset.UTC);
    }
    return null;
  }

  private Boolean domainIsAvailable(TldEntity tld) {
    return tld.getRegisteredAt() == null || tld.getExpiresAt() != null && tld.getExpiresAt().isBefore(
        LocalDateTime.now());
  }

  private void sendDomainNameToClient(DomainEntity domainEntity, String clientId) {
    sendToClient(new DomainWhoIs()
        .name(domainEntity.getDomainName())
        .id(domainEntity.getId()),
        clientId);
  }

  private void sendToClient(DomainWhoIs whoIs, String clientId) {
    WebsocketPayload payload = new WebsocketPayload()
        .type(DomainWhoIs.class.getSimpleName())
        .data(whoIs);
    _log(payload);
    messagingTemplate.convertAndSendToUser(
        clientId,
        webSocketProps.getQueue(),
        payload
    );
  }

  private void _log(Object o) {
    try {
      log.debug(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(o));
    } catch (JsonProcessingException e) {
      // pass
    }
  }
}
