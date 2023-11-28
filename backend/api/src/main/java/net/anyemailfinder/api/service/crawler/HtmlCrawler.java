package net.anyemailfinder.api.service.crawler;

import net.anyemailfinder.api.props.CrawlerProps;
import net.anyemailfinder.api.service.lead.LeadService;
import net.anyemailfinder.api.service.messaging.MessagingService;
import edu.uci.ics.crawler4j.crawler.Page;
import edu.uci.ics.crawler4j.crawler.WebCrawler;
import edu.uci.ics.crawler4j.parser.HtmlParseData;
import edu.uci.ics.crawler4j.url.WebURL;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Set;
import java.util.regex.Pattern;
import lombok.extern.slf4j.Slf4j;

/**
 * @author Biz Melesse created on 10/31/23
 */
@Slf4j
public class HtmlCrawler extends WebCrawler {
  private final String seedUrl;
  private final String taskId;
  private final CrawlerProps crawlerProps;
  private final MessagingService messagingService;
  private final LeadService leadService;
  private final boolean fullDomainCrawl;
  private final static Pattern EXCLUSIONS
      = Pattern.compile(".*(\\.(css|js|xml|gif|jpg|png|mp3|mp4|zip|gz|pdf))$");

  public HtmlCrawler(String seedUrl, String taskId,
      MessagingService messagingService,
      LeadService leadService, CrawlerProps crawlerProps, boolean fullDomainCrawl)  {
    this.seedUrl = seedUrl;
    this.taskId = taskId;
    this.messagingService = messagingService;
    this.leadService = leadService;
    this.crawlerProps = crawlerProps;
    this.fullDomainCrawl = fullDomainCrawl;
  }

  @Override
  public boolean shouldVisit(Page referringPage, WebURL url) {
    String href = url.getURL().toLowerCase();
    if (!EXCLUSIONS.matcher(href).matches() &&
        isSameDomain(href, fullDomainCrawl) &&
        isCrawlable(href, crawlerProps, messagingService) &&
        fullDomainCrawl
    ) {
        log.info("TaskId: {} Crawling: {}", taskId, href);
        return true;
    }
    messagingService.addVisitedUrl(href);
    return false;
  }

  private boolean isSameDomain(String href, boolean fullDomainCrawl) {
    try {
      String seedHost = new URL(seedUrl).getHost();
      String currentUrlHost = new URL(href).getHost();
      if (fullDomainCrawl) {
        return seedHost.equals(currentUrlHost);
      }
    } catch (MalformedURLException e) {
      log.error("isSameDomain: {}", e.getLocalizedMessage());
    }
    return false;
  }

  @Override
  public void visit(Page page) {
    String url = page.getWebURL().getURL();
    log.info("Visited: {}", url);
    messagingService.addVisitedUrl(url);
    if (page.getParseData() instanceof HtmlParseData) {
      HtmlParseData htmlParseData = (HtmlParseData) page.getParseData();
      String html = htmlParseData.getHtml();
      leadService.handleCrawlerResult(taskId, url, html);
    }
  }

  @Override
  public void onUnhandledException(WebURL webUrl, Throwable e) {
    log.error("{}: {}", webUrl.getURL(), e.getLocalizedMessage());
    messagingService.addVisitedUrl(webUrl.getURL());
  }

  @Override
  public void onUnexpectedStatusCode(String urlStr, int statusCode, String contentType,
      String description) {
    logger.warn("Skipping URL: {}, StatusCode: {}, {}, {}", urlStr, statusCode, contentType,
        description);
    messagingService.addVisitedUrl(urlStr);
  }

  public static boolean isCrawlable(String url, CrawlerProps crawlerProps,
      MessagingService messagingService) {
    return !assetDirectory(url, crawlerProps.getAssetPaths()) &&
        !blacklisted(url, crawlerProps.getBlacklist()) &&
        !messagingService.wasVisited(url) || url.contains("kippo.com") || url.contains("ballerinafarm.com");
  }

  private static boolean assetDirectory(String url, Set<String> assetPaths) {
    return assetPaths.stream().anyMatch(it -> url.toLowerCase().contains(it.toLowerCase()));
  }

  private static boolean blacklisted(String url, Set<String> blacklist) {
    try {
      String host = new URL(url).getHost();
      return blacklist.stream().filter(host::contains).toList().size() > 0;
    } catch (MalformedURLException e) {
      log.error("blacklisted: {}", e.getLocalizedMessage());
    }
    return false;
  }
}
