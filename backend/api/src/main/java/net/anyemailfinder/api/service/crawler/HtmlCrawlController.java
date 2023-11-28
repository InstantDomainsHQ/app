package net.anyemailfinder.api.service.crawler;

import net.anyemailfinder.api.props.CrawlerProps;
import net.anyemailfinder.api.service.lead.LeadService;
import net.anyemailfinder.api.service.messaging.MessagingService;
import edu.uci.ics.crawler4j.crawler.CrawlConfig;
import edu.uci.ics.crawler4j.crawler.CrawlController;
import edu.uci.ics.crawler4j.fetcher.PageFetcher;
import edu.uci.ics.crawler4j.robotstxt.RobotstxtConfig;
import edu.uci.ics.crawler4j.robotstxt.RobotstxtServer;
import java.io.File;
import lombok.extern.slf4j.Slf4j;
import net.anyemailfinder.api.service.utils.HRUtils;

/**
 * @author Biz Melesse created on 10/31/23
 */
@Slf4j
public class HtmlCrawlController {
  private final String url;
  private final String taskId;
  private final CrawlerProps crawlerProps;
  private final MessagingService messagingService;
  private final LeadService leadService;
  private final boolean fullDomainCrawl;

  public HtmlCrawlController(String url, String taskId,
      MessagingService messagingService,
      LeadService leadService, CrawlerProps crawlerProps, boolean fullDomainCrawl) {
    this.url = url;
    this.taskId = taskId;
    this.messagingService = messagingService;
    this.leadService = leadService;
    this.crawlerProps = crawlerProps;
    this.fullDomainCrawl = fullDomainCrawl;
  }

  public void startCrawling() throws Exception {
    File crawlStorage = new File("crawler4j");

    CrawlConfig config = new CrawlConfig();
    config.setResumableCrawling(false);
    config.setFollowRedirects(true);
    config.setIncludeBinaryContentInCrawling(false);
    config.setMaxDepthOfCrawling(crawlerProps.getMaxCrawlingDepth());
    config.setUserAgentString(crawlerProps.getUserAgent());
    config.setCrawlStorageFolder(crawlStorage.getAbsolutePath());
    config.setCleanupDelaySeconds(5);
    config.setThreadMonitoringDelaySeconds(5);
    config.setThreadShutdownDelaySeconds(5);
    PageFetcher pageFetcher = new PageFetcher(config);
    RobotstxtConfig robotstxtConfig = new RobotstxtConfig();
    RobotstxtServer robotstxtServer= new RobotstxtServer(robotstxtConfig, pageFetcher);

    String seedUrl = fullDomainCrawl ? HRUtils.getSeedUrl(url) : url;
    CrawlController.WebCrawlerFactory<HtmlCrawler> factory = () ->
        new HtmlCrawler(seedUrl, taskId, messagingService, leadService, crawlerProps, fullDomainCrawl);

    CrawlController controller = new CrawlController(config, pageFetcher, robotstxtServer);

    controller.addSeed(seedUrl);
    controller.start(factory, crawlerProps.getNumCrawlers());
    while (!controller.isFinished()) {
      Thread.sleep(1000L);
    }
    leadService.onCrawlFinished(taskId, true);

    // You can monitor the crawling process here
    // For example, log the number of pages crawled, error handling, etc.
  }
}
