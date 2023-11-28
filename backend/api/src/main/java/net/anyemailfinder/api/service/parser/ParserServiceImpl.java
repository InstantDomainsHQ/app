package net.anyemailfinder.api.service.parser;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.StringJoiner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.anyemailfinder.api.YouTubeChannelDetail;
import net.anyemailfinder.api.dto.OpenGraph;
import net.anyemailfinder.api.service.youtubej.model.search.SearchResult;
import net.anyemailfinder.api.service.youtubej.model.search.SearchResultItem;
import org.jsoup.Jsoup;
import org.jsoup.nodes.DataNode;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;
import org.jsoup.nodes.TextNode;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

/**
 * @author Biz Melesse created on 10/29/23
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class ParserServiceImpl implements ParserService {
  private final ObjectMapper objectMapper;
  private final Set<String> tags = new HashSet<>();
  private final Set<String> excludedTags = new HashSet<>(List.of(
      "script",
      "noscript",
      "form",
      "link",
      "style",
      "br",
      "img",
      "svg",
      "g",
      "input",
      "circle",
      "clippath",
      "figure",
      "path",
      "lineargradient"
  ));

  @Override
  public OpenGraph parseOpenGraph(String soup) {
    Document doc = Jsoup.parse(soup);
    Elements metaTags = doc.select("meta[property]");
    OpenGraph openGraph = new OpenGraph();
    for (Element metaTag : metaTags) {
      String property = metaTag.attr("property");
      String content = metaTag.attr("content");
      if (property.contains("description")) {
        openGraph.setDescription(content);
      } else if (property.contains("site_name")) {
        openGraph.setSiteName(content);
      } else if (property.equals("url") || property.equals("og:url")) {
        openGraph.setUrl(content);
      } else if (property.endsWith("image")) {
        openGraph.setImage(content);
      } else if (property.endsWith("title")) {
        openGraph.setTitle(content);
      }
    }
    return openGraph;
  }

  @Override
  public String parseOpenGraphToString(String soup) {
    Document doc = Jsoup.parse(soup);
    Elements metaTags = doc.select("meta[property]");
    StringJoiner joiner = new StringJoiner("\n");
    for (Element metaTag : metaTags) {
      String property = metaTag.attr("property")
          .replace("og:", ": ")
          .replace("twitter:", ": ");
      String content = metaTag.attr("content");
      joiner.add(property + content);
    }
    return joiner.toString();
  }

  @Override
  public String getWebsiteImage(String soup) {
    Document doc = Jsoup.parse(soup);
    Elements metaTags = doc.select("meta[property]");
    StringJoiner joiner = new StringJoiner("\n");
    for (Element metaTag : metaTags) {
      String property = metaTag.attr("property");
      String content = metaTag.attr("content");
      if (property.contains("image:")) {
        return content;
      }
    }
    return null;
  }

  @Override
  public String parseAnyHtmlPage(String soup) {
    soup = soup.replace("mailto:", "");
    Document doc = Jsoup.parse(soup);
    Set<String> allText = new HashSet<>();
    for (Node node : doc.childNodes()) {
      walk(node, allText, 1, false);
    }
//    log.info("Tags: {}", String.join("\n", tags));
    return String.join(" ", new HashSet<>(
        allText
        .stream()
            .map(String::toLowerCase)
            .collect(Collectors.toList())));
  }

  @Override
  public YouTubeChannelDetail parseChannelSoup(String soup) {
    Document doc = Jsoup.parse(soup);
    String json = null;
    try {
      List<DataNode> dataNodes = doc.select("script").dataNodes();
      for (DataNode dataNode : dataNodes) {
        String wholeData = dataNode.getWholeData();
        if (wholeData.startsWith("var ytInitialData")) {
          json = wholeData
              .replace("var ytInitialData = ", "")
              .replace("\n", "")
              .strip();
          break;
        }
      }
      if (json != null) {
        JsonNode jsonNode = objectMapper.readValue(json, JsonNode.class);
        if (jsonNode.get("metadata") != null) {
          if (jsonNode.get("metadata").get("channelMetadataRenderer") != null) {
            JsonNode channelMeta = jsonNode.get("metadata").get("channelMetadataRenderer");
            String channelName = "", description = "", keywords = "", channelUrl = "", subscribers = "";
            Long subscribersValue = -1L;
            if (channelMeta.get("title") != null) {
              channelName = channelMeta.get("title").asText();
            }
            if (channelMeta.get("description") != null) {
              description = channelMeta.get("description").asText();
              description = description.replace("\n", " ").strip();
            }
            if (channelMeta.get("keywords") != null) {
              keywords = channelMeta.get("keywords").asText();
            }
            if (channelMeta.get("vanityChannelUrl") != null) {
              channelUrl = channelMeta.get("vanityChannelUrl").asText();
            }
            JsonNode channelAboutMetadata = findNode(jsonNode.get("contents"),
                "channelAboutFullMetadataRenderer");
            if (ObjectUtils.isEmpty(channelUrl) &&
                channelAboutMetadata != null &&
                channelAboutMetadata.get("canonicalChannelUrl") != null) {
              channelUrl = channelAboutMetadata.get("canonicalChannelUrl").asText();
            }
            Map<String, String> links = new HashMap<>();
            if (channelAboutMetadata != null &&
                channelAboutMetadata.get("primaryLinks") != null) {
              links = parseLinks(channelAboutMetadata.get("primaryLinks"));
            }
            JsonNode subscribeNode = findNode(jsonNode.get("header"), "subscriberCountText");
            if (subscribeNode != null) {
              subscribers = subscribeNode
                  .get("simpleText")
                  .asText()
                  .replace("subscribers", "")
                  .strip();
              subscribersValue = getSubscriberNumericalValue(subscribers);
            }
            return new YouTubeChannelDetail()
                .channelName(channelName)
                .description(description)
                .keywords(keywords)
                .channelUrl(channelUrl)
                .subscribers(subscribers)
                .subscribersValue(subscribersValue)
                .twitter(links.get(SocialPlatforms.TWITTER))
                .website(links.get(SocialPlatforms.WEBSITE))
                .blog(links.get(SocialPlatforms.BLOG))
                .pinterest(links.get(SocialPlatforms.PINTEREST))
                .snapChat(links.get(SocialPlatforms.SNAPCHAT))
                .discord(links.get(SocialPlatforms.DISCORD))
                .tiktok(links.get(SocialPlatforms.TIKTOK))
                .facebook(links.get(SocialPlatforms.FACEBOOK))
                .instagram(links.get(SocialPlatforms.INSTAGRAM));
          }
        }
      }
    } catch (JsonProcessingException | NullPointerException e) {
      log.error(this.getClass().getSimpleName()+ ".parseChannelSoup: {}", e.getLocalizedMessage());
    }
    return null;
  }

  @Override
  public String parseFacebookSoup(String soup) {
    soup = soup.replace("\\u0040", "@");
    // Limit the regex search space by taking 256 characters to the left and right of the @ symbol
    int maxChars = 256;
    int soupLength = soup.length();
    StringJoiner joiner = new StringJoiner("");
    int index = soup.indexOf('@');
    while (index > 0) {
      int start = index - maxChars;
      int end = index + maxChars;
      if (start < 0) {
        start = 0;
      }
      if (end >= soup.length()) {
        end = soupLength;
      }
      String substring = soup.substring(start, end);
      joiner.add(substring);
      index = soup.indexOf('@', index + 1);
    }
    String minifiedSoup = joiner.toString();
    String pattern = "[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})";
    Pattern emailPattern = Pattern.compile(pattern, Pattern.CASE_INSENSITIVE);
    Matcher matcher = emailPattern.matcher(minifiedSoup);
    String email = null;
    // Find the first instance of an email address
    if (matcher.find()){
      email = matcher.group();
    }
    return email;
  }

  @Override
  public Long getSubscriberNumericalValue(String subscribers) {
    long value = -1L;
    if (subscribers.toLowerCase().endsWith("m")) {
      value = Math.round(Double.parseDouble(subscribers.replace("M", "")) * 1000000);
    } else if (subscribers.toLowerCase().endsWith("k")) {
      value = Math.round(Double.parseDouble(subscribers.replace("K", "")) * 1000);
    } else {
      try {
        value = Long.parseLong(subscribers);
      } catch (Exception e) {
        log.error(this.getClass().getSimpleName()+ ".getSubscriberNumericalValue: {}", e.getLocalizedMessage());
      }
    }
    return value;
  }

  @Override
  public Map<String, String>  parseLinks(JsonNode linkNode) {
    Map<String, String>  links = new HashMap<>();
    if (linkNode != null && linkNode.isArray()) {
      for (int i = 0; i < linkNode.size(); i++) {
        JsonNode link = linkNode.get(i);
        String name = null;
        if (link.get("title") != null) {
          if (link.get("title").get("simpleText") != null) {
            name = link.get("title").get("simpleText").asText();
          }
        }
        String url = null;
        if (link.get("navigationEndpoint") != null) {
          if (link.get("navigationEndpoint").get("urlEndpoint") != null) {
            if (link.get("navigationEndpoint").get("urlEndpoint").get("url") != null) {
              url = link.get("navigationEndpoint").get("urlEndpoint").get("url").asText();
            }
          }
        }
        name = getStandardFieldName(name);
        if (url != null && name != null)
        {
          try {
            URI uri = new URI(url);
            String query = uri.getQuery();
            if (query != null) {
              String wwwUrl = null;
              String httpUrl = null;
              // Remove the redirect tokens and extract the target url
              String[] wwwTokens = query.split("www");
              String[] httpTokens = query.split("http");

              if (wwwTokens.length > 1) {
                wwwUrl = "www" + wwwTokens[wwwTokens.length - 1];
              }
              if (httpTokens.length > 1) {
                httpUrl = "http" + httpTokens[httpTokens.length - 1];
              }
              String cleanUrl = wwwUrl;
              if ((cleanUrl != null &&
                  cleanUrl.toLowerCase().contains("youtube")) || httpUrl != null) {
                cleanUrl = httpUrl;
              }
              links.put(name, cleanUrl);
            }
          } catch (URISyntaxException | NullPointerException e) {
            log.error(this.getClass().getSimpleName()+ ".parseLinks: {}", e.getLocalizedMessage());
          }
        }
      }
    }
    return links;
  }

  @Override
  public String getStandardFieldName(String name) {
    // Standardize
    if (name != null) {
      if (name.toLowerCase().contains("facebook")) {
        name = SocialPlatforms.FACEBOOK;
      } else if (name.toLowerCase().contains("instagram")) {
        name = SocialPlatforms.INSTAGRAM;
      } else if (name.toLowerCase().contains("twitter")) {
        name = SocialPlatforms.TWITTER;
      } else if (name.toLowerCase().contains("website")) {
        name = SocialPlatforms.WEBSITE;
      } else if (name.toLowerCase().contains("blog")) {
        name = SocialPlatforms.BLOG;
      } else if (name.toLowerCase().contains("pinterest")) {
        name = SocialPlatforms.PINTEREST;
      } else if (name.toLowerCase().contains("snapchat")) {
        name = SocialPlatforms.SNAPCHAT;
      } else if (name.toLowerCase().contains("discord")) {
        name = SocialPlatforms.DISCORD;
      } else if (name.equalsIgnoreCase("fb")) {
        name = SocialPlatforms.FACEBOOK;
      } else if (name.equalsIgnoreCase("ig")) {
        name = SocialPlatforms.INSTAGRAM;
      } else if (name.toLowerCase().contains("tik tok")) {
        name = SocialPlatforms.TIKTOK;
      } else {
        name = null;
      }
    }
    return name;
  }

  @Override
  public JsonNode findNode(JsonNode root, String target) {
    Iterator<String> fieldNames = root.fieldNames();
    JsonNode result = null;
    while (fieldNames.hasNext()) {
      String key = fieldNames.next();
      if (key.equals(target)) {
        return root.get(key);
      }
      JsonNode child = root.get(key);
      if (child.isArray()) {
        for (int i = 0; i < child.size(); i++) {
          result= findNode(child.get(i), target);
          if (result != null) {
            return result;
          }
        }
      }
      if (child.fieldNames().hasNext()) {
        result = findNode(child, target);
        if (result != null) {
          return result;
        }
      }
    }
    return null;
  }

  @Override
  public List<String> getChannels(SearchResult result) {
    List<String> channels = new ArrayList<>();
    if (result != null && !ObjectUtils.isEmpty(result.items())) {
      for (SearchResultItem item : result.items()) {
        try {
          channels.add(item.asVideo().channelName());
        } catch (UnsupportedOperationException e) {
          log.warn(this.getClass().getSimpleName()+ ".getChannels: {} -- Ignore", e.getLocalizedMessage());
        }
      }
    }
    return channels;
  }

  private void walk(Node root, Set<String> allText, int minTokenLength, boolean alphanumeric) {
    if (root != null) {
      if (root instanceof TextNode) {
        String text = ((TextNode) root)
            .text()
            .replace("See more", "")
            .trim()
            .strip();
        if (alphanumeric) {
          text = text.replaceAll("[^A-Za-z0-9. ]", ""); // Remove all non-alphanumeric characters
        }
        if (!ObjectUtils.isEmpty(text)) {
          // Only add strings that are longer than two words
          if (text.split(" ").length >= minTokenLength) {
            allText.add(text);
            if (text.toLowerCase().contains("iceland")) {
              int x = 1;
            }
          }
        }
      } else if (root instanceof Element) {
        String tag = ((Element) root).tag().getName();
        if (!excludedTags.contains(((Element) root).tag().getName())) {
          tags.add(tag);
          for (Node childNode : root.childNodes()) {
            walk(childNode, allText, minTokenLength, alphanumeric);
          }
        }
      }
    }
  }
  private static class SocialPlatforms {
    public static final String FACEBOOK = "Facebook";
    public static final String TWITTER = "Twitter";
    public static final String INSTAGRAM = "Instagram";
    public static final String WEBSITE = "Website";
    public static final String BLOG = "Blog";
    public static final String PINTEREST = "Pinterest";
    public static final String SNAPCHAT = "SnapChat";
    public static final String TIKTOK = "TikTok";
    public static final String DISCORD = "Discord";
  }
}
