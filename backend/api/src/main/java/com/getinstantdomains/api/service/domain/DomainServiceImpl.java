package com.getinstantdomains.api.service.domain;

import com.getinstantdomains.api.DomainName;
import com.getinstantdomains.api.GenerateRequest;
import com.getinstantdomains.api.TaskId;
import com.getinstantdomains.api.WebsocketPayload;
import com.getinstantdomains.api.data.postgres.repo.DomainsRepo;
import com.getinstantdomains.api.props.OpenAiProps;
import com.getinstantdomains.api.props.WebSocketProps;
import com.getinstantdomains.api.service.gpt.GptService;
import com.getinstantdomains.api.service.utils.IDUtils;
import java.time.Instant;
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
  private final DomainsRepo domainsRepo;
  private final WebSocketProps webSocketProps;
  private final SimpMessagingTemplate messagingTemplate;

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
  public void performWhois(String domain, String clientId) {
    System.out.printf("WHOIS: %s: %s: %s\n", Instant.now().getEpochSecond(), clientId, domain);
    WebsocketPayload payload = new WebsocketPayload()
        .type(DomainName.class.getSimpleName())
        .data(new DomainName().name(domain));
//    messagingTemplate.convertAndSendToUser(
//        clientId,
//        webSocketProps.getQueue(),
//        payload
//    );
  }
}
