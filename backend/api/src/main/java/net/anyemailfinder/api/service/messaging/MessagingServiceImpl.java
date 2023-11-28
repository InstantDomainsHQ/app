package net.anyemailfinder.api.service.messaging;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.anyemailfinder.api.data.postgres.entity.VisitsEntity;
import net.anyemailfinder.api.data.postgres.repo.VisitsRepo;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

/**
 * @author Biz Melesse created on 11/1/23
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class MessagingServiceImpl implements MessagingService {
  private final RedisTemplate<String, Object> redisTemplate;
  private final VisitsRepo visitsRepo;

  @Override
  public void addVisitedUrl(String url) {
    url = normalizeUrl(url);
    var entities = visitsRepo.findByUrl(url);
    if (entities == null || entities.size() == 0) {
      VisitsEntity entity = new VisitsEntity();
      entity.setUrl(url);
      visitsRepo.save(entity);
    }
    redisTemplate.opsForValue().set(url, true);
  }

  @Override
  public boolean wasVisited(String url) {
    url = normalizeUrl(url);
    Object res = redisTemplate.opsForValue().get(url);
    if (res != null) {
      return (boolean) res;
    }
    return false;
  }

  @Override
  public void cacheCrawledPage(String taskId, String url, String content) {
    url = normalizeUrl(url);
    String key =  taskId + ":" + url;
    redisTemplate.opsForHash().put(taskId, url, content);
    redisTemplate.expire(key, Duration.ofSeconds(3600));
  }

  @Override
  public List<String> getUrls(String taskId) {
    return new ArrayList<>(getHashKeys(taskId));
  }

  @Override
  public List<String> getCachedPages(String taskId, List<String> urls) {
    List<String> content = new ArrayList<>();
    for (String url : urls) {
      Object res = redisTemplate.opsForHash().get(taskId, url);
      if (res != null) {
        content.add((String) res);
      }
    }
    return content;
  }

  private Set<String> getHashKeys(String taskId) {
    return redisTemplate.opsForHash().keys(taskId)
        .stream()
        .map(Object::toString)
        .collect(Collectors.toSet());
  }

  public static String normalizeUrl(String url) {
    if (url.endsWith("/")) {
      url = url.substring(0, url.length() -1);
    }
    return url.toLowerCase();
  }
}
