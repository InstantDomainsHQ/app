package net.anyemailfinder.api.service.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import net.anyemailfinder.api.UserProfile;
import net.anyemailfinder.api.dto.Pair;
import net.anyemailfinder.api.dto.SessionUser;
import net.anyemailfinder.api.props.ScraperProps;
import net.anyemailfinder.api.service.user.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.ObjectUtils;

/**
 * @author Biz Melesse created on 1/2/23
 */
@Slf4j
public class HRUtils {
  public static final int SHORT_UID_LENGTH = 8;
  public static final int LONG_UID_LENGTH = 32;
  public static final int API_KEY_LENGTH = 46;

  public static String generateUid(int length) {
    StringBuilder builder = new StringBuilder();
    // An ID length of N gives 62^N unique IDs
    for (int i = 0; i < length; i++) {
      builder.append(getRandomCharacter());
    }
    return builder.toString();
  }

  public static Character getRandomCharacter() {
    Random random = new Random();
    String uidAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqprstuvwxyz0123456789";
    int index = random.nextInt(uidAlphabet.length());
    return uidAlphabet.charAt(index);
  }

  public static String truncate(String value) {
    int maxLength = 255;
    if (value.length() > maxLength) {
      return value.substring(0, maxLength);
    }
    return value;
  }

  public static String loadFile(String path) {
    try {
      ClassPathResource classPathResource = new ClassPathResource(path);
      byte[] binaryData = FileCopyUtils.copyToByteArray(classPathResource.getInputStream());
      return new String(binaryData, StandardCharsets.UTF_8);
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  public static String getCurrentTime() {
    return LocalDateTime.now(ZoneOffset.UTC).format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
  }

  public static SessionUser getSessionUser() {
    try {
      return (SessionUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    } catch (Exception e) {
      return new SessionUser();
    }
  }

  public static UserProfile getUserProfile() {
    SessionUser sessionUser = getSessionUser();
    return new UserProfile()
        .name(sessionUser.getName())
        .email(sessionUser.getEmail())
        .userId(sessionUser.getUserId())
        .apiKey(sessionUser.getApiKey())
        .picture(sessionUser.getAvatar())
        .anonymous(sessionUser.isAnonymous());
  }

  public static String raiseHttpError(HttpServletResponse httpServletResponse,
      ObjectMapper objectMapper,
      String msg, int errorCode) {
    raiseHttpErrorHelper(httpServletResponse, objectMapper, msg, errorCode);
    return null;
  }

  public static void raiseHttpErrorHelper(HttpServletResponse httpServletResponse,
      ObjectMapper objectMapper,
      String msg, int errorCode) {
    httpServletResponse.setStatus(errorCode);
    httpServletResponse.setContentType(MediaType.APPLICATION_JSON_VALUE);
    Map<String, String> message = new HashMap<>();
    message.put("error", msg);
    try {
      objectMapper.writeValue(httpServletResponse.getWriter(), message);
    } catch (IOException e) {
      httpServletResponse.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
    }
  }

//  public static void populateSessionUser(UserEntity userEntity, SessionUser user) {
//    if (userEntity != null) {
//      user.setEmail(userEntity.getEmail());
//      user.setName(userEntity.getName());
//      user.setUserId(userEntity.getUserid());
//      user.setAvatar(userEntity.getAvatar());
//      user.setApiKey(userEntity.getApikey());
//      user.setUsername(projection.getUsername());
//      user.setMaxExecutionTime(projection.getMaxexecutiontime());
//      user.setMaxCpuTime(projection.getMaxcputtime());
//      user.setMaxMemoryUsage(projection.getMaxmemoryusage());
//      user.setMaxDataTransfer(projection.getMaxdatatransfer());
//      user.setMaxHttpCalls(projection.getMaxhttpcalls());
//      user.setMaxInvocations(projection.getMaxinvocations());
//      user.setMaxFunctions(projection.getMaxfunctions());
//      user.setMaxProjects(projection.getMaxprojects());
//    }
//  }

  public static void populateAnonymousUser(SessionUser user) {
    if (user != null) {
      user.setName("Anonymous");
      user.setAnonymous(true);
      user.setEmail("");
      user.setUserId(generateUid(SHORT_UID_LENGTH));
      user.setAvatar("");
      user.setApiKey(user.getApiKey() == null ? UserService.apiKeyPrefix + "anon-" + generateUid(API_KEY_LENGTH) : user.getApiKey());
      user.setUsername("");
    }
  }

  public static String generateCodeVersion() {
    return HRUtils.generateUid(HRUtils.SHORT_UID_LENGTH);
  }

  public static StringEntity getEntityBody(Object body) {
    try {
      return new StringEntity(new Gson().toJson(body));
    } catch (UnsupportedEncodingException e) {
      log.error("getEntityBody: {}",
          e.getMessage());
    }
    return null;
  }

  public static void httpRequest(Object body, String url, String caller, String authorization) {
    try (CloseableHttpClient httpClient = HttpClients.custom().build()) {
      HttpPost httpPost = new HttpPost(url);
      httpPost.setHeader("Cache-Control", "no-cache");
      httpPost.setHeader("Content-Type", "application/json");
      if (!ObjectUtils.isEmpty(authorization)) {
        httpPost.setHeader("Authorization", authorization);
      }
      StringEntity entityBody = HRUtils.getEntityBody(body);
      httpPost.setEntity(entityBody);
      try (CloseableHttpResponse response = httpClient.execute(httpPost)) {
        HttpEntity responseEntity = response.getEntity();

        if (responseEntity != null) {
          String responseBody = EntityUtils.toString(responseEntity);
//          log.info("Response: {}", responseBody);
        }
      }
    } catch (IOException e) {
      log.error("{}: {}",
          caller,
          e.getMessage());
    }
  }

  public static Pair<String, String> parseFullName(String fullName) {
    String firstName = "";
    String lastName = "";
    if (!ObjectUtils.isEmpty(fullName)) {
      String[] parts = fullName.split(" ");
      firstName = parts[0];
      lastName = String.join(" ", Arrays.stream(parts).toList().subList(1, parts.length));
    }
    return new Pair<>(firstName, lastName);
  }

  public static Map<String, String> getRequestHeaders(HttpServletRequest httpServletRequest) {
    // Normalize the headers by lower-casing all the keys
    Map<String, String> normalized = new HashMap<>();
    Enumeration<String> headers = httpServletRequest.getHeaderNames();
    while (headers.hasMoreElements()) {
      String header = headers.nextElement();
      normalized.put(header.toLowerCase(), httpServletRequest.getHeader(header));
    }
    return normalized;
  }

  public static long getRandomThrottle(ScraperProps scraperProps) {
    long min = scraperProps.getThrottleMin();
    long max = scraperProps.getThrottleMax();
    return new Random().nextLong((max - min) + 1) + min;
  }

  public static String getSeedUrl(String url) {
    URL urlObj = null;
    try {
      urlObj = new URL(url);
      return String.format("%s://%s", urlObj.getProtocol(), urlObj.getHost());
    } catch (MalformedURLException e) {
     return url;
    }
  }

  public static Set<String> loadLines(String path) {
    return Stream.of(
            HRUtils.loadFile(path).split("\n"))
        .filter(it -> !(ObjectUtils.isEmpty(it.strip())))
        .map(String::toLowerCase)
        .collect(Collectors.toSet());
  }
}
