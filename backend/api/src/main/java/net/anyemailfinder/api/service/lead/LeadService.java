package net.anyemailfinder.api.service.lead;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import net.anyemailfinder.api.ChannelPageableResponse;
import net.anyemailfinder.api.EmailSearchResults;
import net.anyemailfinder.api.SubmitQueryRequest;
import net.anyemailfinder.api.TaskId;
import net.anyemailfinder.api.data.postgres.entity.LeadsEntity;

/**
 * @author Biz Melesse created on 2/5/23
 */
public interface LeadService {

  ConcurrentMap<String, ChannelPageableResponse> queryResults = new ConcurrentHashMap<>();
  ConcurrentMap<String, LeadsEntity> openGraphMetadata = new ConcurrentHashMap<>();

  /**
   * Get full channel details from YouTube for channels that show up for a given search
   * query. Take the resulting channel details and scrape the email from the public
   * Facebook Page of the channel, if available.
   *
   * @param request a YouTube search query, e.g. how to make egg fried rice
   * @return
   */
  TaskId submitSearchQuery(SubmitQueryRequest request);

  ChannelPageableResponse getChannelQueryResult(String jobId);

  void handleCrawlerResult(String taskId, String url, String html);

  void onCrawlFinished(String taskId, boolean enrich);

  EmailSearchResults getAllUserLeads();
}
