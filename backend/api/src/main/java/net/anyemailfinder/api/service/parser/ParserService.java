package net.anyemailfinder.api.service.parser;

import com.fasterxml.jackson.databind.JsonNode;
import net.anyemailfinder.api.YouTubeChannelDetail;
import net.anyemailfinder.api.dto.OpenGraph;
import net.anyemailfinder.api.service.youtubej.model.search.SearchResult;
import java.util.List;
import java.util.Map;

/**
 * @author Biz Melesse created on 10/29/23
 */
public interface ParserService {
  OpenGraph parseOpenGraph(String soup);
  String parseOpenGraphToString(String soup);
  String getWebsiteImage(String soup);
  String parseAnyHtmlPage(String soup);
  YouTubeChannelDetail parseChannelSoup(String soup);
  String parseFacebookSoup(String soup);
  Long getSubscriberNumericalValue(String subscribers);
  Map<String, String> parseLinks(JsonNode linkNode);
  String getStandardFieldName(String name);
  JsonNode findNode(JsonNode root, String target);
  List<String> getChannels(SearchResult result);

}
