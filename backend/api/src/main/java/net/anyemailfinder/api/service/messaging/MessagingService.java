package net.anyemailfinder.api.service.messaging;

import java.util.List;

/**
 * @author Biz Melesse created on 11/1/23
 */
public interface MessagingService {
  void addVisitedUrl(String url);
  boolean wasVisited(String url);
  void cacheCrawledPage(String taskId, String url, String content);
  List<String> getUrls(String taskId);
  List<String> getCachedPages(String taskId, List<String> urls);

}
