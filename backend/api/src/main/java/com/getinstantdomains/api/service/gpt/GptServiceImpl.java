package com.getinstantdomains.api.service.gpt;

import static com.theokanning.openai.service.OpenAiService.defaultClient;
import static com.theokanning.openai.service.OpenAiService.defaultRetrofit;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.getinstantdomains.api.data.postgres.repo.DomainsRepo;
import com.google.gson.Gson;
import com.theokanning.openai.client.OpenAiApi;
import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.service.OpenAiService;
import java.io.IOException;
import java.net.SocketTimeoutException;
import java.time.Duration;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringJoiner;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.getinstantdomains.api.props.OpenAiProps;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.messaging.simp.SimpMessagingTemplate;
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
  private final OpenAiService openAiService;
  private final DomainsRepo domainsRepo;
  private final SimpMessagingTemplate messagingTemplate;

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
  public String gptCompletion(String clientId, String prompt, String content) {
    try {
      List<ChatMessage> messages = buildChatMessage(prompt, content);
      log.info("GPT Request {}", objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(messages));
      new GptRequestHandlerImpl(clientId, objectMapper, openAiProps, domainsRepo, messagingTemplate)
          .handler(messages);
    } catch (Exception e) {
      log.error(e.getLocalizedMessage());
    }
    return null;
  }
}
