package com.getinstantdomains.api.service.gpt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.getinstantdomains.api.service.domain.DomainService;
import com.theokanning.openai.completion.chat.ChatMessage;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.getinstantdomains.api.props.OpenAiProps;
import org.springframework.stereotype.Service;

/**
 * @author Biz Melesse created on 11/15/23
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class GptServiceImpl implements GptService {
  private final ObjectMapper objectMapper;
  private final OpenAiProps openAiProps;

  private List<ChatMessage> buildChatMessage(String prompt, String context) {
    List<ChatMessage> messages = new ArrayList<>();

    ChatMessage systemMessage = new ChatMessage();
    systemMessage.setRole("system");
    systemMessage.setContent(openAiProps.getSystemMessage());

    ChatMessage userMessage = new ChatMessage();
    StringBuilder b = new StringBuilder();
    b.append(prompt);
    b.append("\n");
    b.append("CONTEXT: ");
    b.append(context);
    userMessage.setRole("user");
    userMessage.setContent(b.toString());

    messages.add(systemMessage);
    messages.add(userMessage);
    return messages;
  }

  @Override
  public String gptCompletion(String clientId, String prompt, String content, List<String> userSelectedTlds,
      DomainService domainService) {
    try {
      List<ChatMessage> messages = buildChatMessage(prompt, content);
      log.info("GPT Request {}", objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(messages));
      new GptRequestHandlerImpl(clientId, objectMapper, openAiProps, userSelectedTlds, domainService).handler(messages);
    } catch (Exception e) {
      log.error(e.getLocalizedMessage());
    }
    return null;
  }
}
