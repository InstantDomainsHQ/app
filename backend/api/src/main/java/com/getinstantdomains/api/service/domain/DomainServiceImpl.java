package com.getinstantdomains.api.service.domain;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.getinstantdomains.api.DomainWhoIs;
import com.getinstantdomains.api.GenerateRequest;
import com.getinstantdomains.api.TaskId;
import com.getinstantdomains.api.WebsocketPayload;
import com.getinstantdomains.api.data.postgres.entity.DomainEntity;
import com.getinstantdomains.api.data.postgres.entity.TldEntity;
import com.getinstantdomains.api.data.postgres.repo.DomainRepo;
import com.getinstantdomains.api.data.postgres.repo.TldRepo;
import com.getinstantdomains.api.props.DomainProps;
import com.getinstantdomains.api.props.OpenAiProps;
import com.getinstantdomains.api.props.WebSocketProps;
import com.getinstantdomains.api.service.gpt.GptService;
import com.getinstantdomains.api.service.utils.IDUtils;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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

  @Override
  public TaskId generateDomains(GenerateRequest generateRequest) {
    if (!ObjectUtils.isEmpty(generateRequest.getQuery()) && 
        generateRequest.getQuery().split(" ").length > 1) {
      String taskId = "t_" + IDUtils.generateUid(IDUtils.SHORT_UID_LENGTH);
      gptService.gptCompletion(
          generateRequest.getClientId(),
          openAiProps.getDomainGeneratePrompt(),
          generateRequest.getQuery(), this);
      return new TaskId().taskId(taskId);
    }
    return new TaskId();
  }

  @Override
  public void performWhois(String domain, final String clientId) {
    domain = domain.toLowerCase().strip().replace(" ", "");
    System.out.printf("WHOIS: %s: %s: %s\n", Instant.now().getEpochSecond(), clientId, domain);
    DomainEntity domainEntity = domainRepo.findByDomainName(domain);
    if (domainEntity == null) {
      domainEntity = new DomainEntity();
      domainEntity.setDomainName(domain);
      domainRepo.save(domainEntity);
    }
    final DomainEntity d = domainEntity;
    Thread.startVirtualThread(() -> sendDomainNameToClient(d, clientId));

    final List<TldEntity> tlds = tldRepo.findAllByTld(domain, domainProps.getTlds().stream().toList());

    Thread.startVirtualThread(() -> sendTldsToClient(d, tlds, clientId));

    domainProps.getTlds().stream().forEach(it -> {
      Thread.startVirtualThread(() -> whois(d, it, clientId));
    });
  }

  private void whois(DomainEntity domain, String tld, String clientId) {
    String fullDomain = domain.getDomainName() + tld;

    // Do whois lookup here

    // Update any existing record
    List<TldEntity> tldEntities = tldRepo.findAllByTld(domain.getDomainName(), List.of(tld));
    TldEntity tldEntity = null;
    if (!ObjectUtils.isEmpty(tldEntities)) {
      tldEntity = tldEntities.get(0);
    } else {
      tldEntity = new TldEntity();
      tldEntity.setTld(tld);
      tldEntity.setDomainId(domain.getId());
    }

    // Update with the latest data and save
    tldEntity.setRegisteredAt(LocalDateTime.now());
    tldEntity.setExpiresAt(LocalDateTime.now());
    tldEntity.setRegistrarUrl("hi");
    tldEntity.setRegistrarName("hi");
    tldEntity.setWhoisUrl("hi");
    tldRepo.save(tldEntity);

    // Send to client
    sendTldsToClient(domain, List.of(tldEntity), clientId);
  }

  private void sendTldsToClient(DomainEntity domainEntity, List<TldEntity> tlds, String clientId) {
    for (TldEntity tld : tlds) {
      sendToClient(new DomainWhoIs()
              .name(domainEntity.getDomainName())
              .id(domainEntity.getId())
              .tld(tld.getTld())
              .isAvailable(domainIsAvailable(tld))
              .expiresAt(getTimestamp(tld.getExpiresAt()))
              .registeredAt(getTimestamp(tld.getRegisteredAt()))
              .registrarName(tld.getRegistrarName())
              .registrarUrl(tld.getRegistrarUrl()),
          clientId);
    }
  }

  private Long getTimestamp(LocalDateTime time) {
    if (time != null) {
      return time.toEpochSecond(ZoneOffset.UTC);
    }
    return null;
  }

  private Boolean domainIsAvailable(TldEntity tld) {
    return tld.getRegisteredAt() == null || tld.getExpiresAt() != null && tld.getExpiresAt().isAfter(
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
      log.info(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(o));
    } catch (JsonProcessingException e) {
      log.error(e.getLocalizedMessage());
    }
  }
}
