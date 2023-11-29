package com.getinstantdomains.api.service.domain;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.getinstantdomains.api.GenerateRequest;
import com.getinstantdomains.api.TaskId;
import com.getinstantdomains.api.props.OpenAiProps;
import com.getinstantdomains.api.service.gpt.GptService;
import com.getinstantdomains.api.service.utils.IDUtils;
import java.time.Instant;
import java.util.List;
import java.util.StringJoiner;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.ObjectUtils;
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
  private final ObjectMapper objectMapper;

  @Override
  public TaskId generateDomains(GenerateRequest generateRequest) {
    if (!ObjectUtils.isEmpty(generateRequest.getQuery()) && 
        generateRequest.getQuery().split(" ").length > 1) {
      String taskId = "t_" + IDUtils.generateUid(IDUtils.SHORT_UID_LENGTH);
      submitGenerateJob(generateRequest.getQuery());
      return new TaskId().taskId(taskId);
    }
    return new TaskId();
  }

  private void submitGenerateJob(String query) {
    StringJoiner j = new StringJoiner("\n");
    j.add("CONTEXT:");
    j.add(query);
    var then = Instant.now().getEpochSecond();
    String result = gptService.gptCompletion(openAiProps.getDomainGeneratePrompt(), j.toString());
    var now = Instant.now().getEpochSecond();
    log.info("Total generation time: {}s", now - then);
    if (!ObjectUtils.isEmpty(result)) {
      TypeReference<List<String>> typeRef = new TypeReference<>(){};
      try {
        List<String> generatedDomains =  objectMapper.readValue(result, typeRef);
        int x = 1;
      } catch (JsonProcessingException e) {
        log.error("submitGenerateJob: {}", e.getLocalizedMessage());
      }

    }
  }
}
