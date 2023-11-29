package com.getinstantdomains.api.service.gpt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.getinstantdomains.api.service.openai.completion.CompletionRequest;
import com.getinstantdomains.api.service.openai.completion.CompletionResult;
import com.getinstantdomains.api.service.utils.IDUtils;
import com.google.gson.Gson;
import java.io.IOException;
import java.net.SocketTimeoutException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.getinstantdomains.api.props.OpenAiProps;
import okhttp3.Call;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

/**
 * @author Biz Melesse created on 11/15/23
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class GptServiceImpl implements GptService {
  private final ObjectMapper objectMapper;
  private final OpenAiProps openAiProps;

  @Override
  public CompletionRequest buildCompletionRequest(String prompt, String context) {
    List<Map<String, Object>> messages = new ArrayList<>();

    Map<String, Object> systemMessage = new HashMap<>();
    systemMessage.put("role", "system");
    systemMessage.put("content", openAiProps.getSystemMessage());
    messages.add(systemMessage);

    Map<String, Object> userMessage = new HashMap<>();
    StringBuilder b = new StringBuilder();
    b.append(prompt);
    b.append("\n");
    b.append("CONTEXT: ");
    b.append(context);
    userMessage.put("role", "user");
    userMessage.put("content", b.toString());
    messages.add(userMessage);

    return CompletionRequest
        .builder()
        .user(IDUtils.getSessionUser().getUserId())
        .model(openAiProps.getCompletionModel())
        .maxTokens(openAiProps.getMaxTokens())
        .temperature(openAiProps.getTemp())
        .messages(messages)
        .build();
  }

  @Override
  public String gptCompletion(String prompt, String content) {
    CompletionRequest request = buildCompletionRequest(prompt, content);
    try {
      String json = objectMapper.writeValueAsString(request);
      String resultStr = gptHttpRequest(json);
      CompletionResult result = objectMapper.readValue(resultStr, CompletionResult.class);
      if (!ObjectUtils.isEmpty(result.getChoices())) {
        log.info("GPT Response {}",
            objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(result));
        return result
            .getChoices()
            .get(0)
            .getMessage()
            .getContent().
            replace("```json", "")
            .replace("```", "");
      }
    } catch (Exception e) {
      log.error(e.getLocalizedMessage());
    }
    return null;
  }

  private String gptHttpRequest(String prompt) throws IOException {
    OkHttpClient httpClient = new OkHttpClient.Builder()
        .connectTimeout(180, TimeUnit.SECONDS) // 10 seconds for connection timeout
        .readTimeout(120, TimeUnit.SECONDS)    // 30 seconds for read timeout
        .writeTimeout(30, TimeUnit.SECONDS)
        .build();
    RequestBody body = RequestBody.create(
        MediaType.parse("application/json"), prompt);
    Request request = new Request.Builder()
        .url(openAiProps.getCompletionEndpoint())
        .addHeader("Authorization", "Bearer " + openAiProps.getApiKey())
        .post(body)
        .build();
    Call call = httpClient.newCall(request);
    try {
      Response response = call.execute();
      String r = response.body().string();
      response.close();
      return r;
    } catch (SocketTimeoutException e) {
      Map<String, Object> err = new HashMap<>();
      err.put("message", e.getLocalizedMessage());
      return new Gson().toJson(err);
    }
  }
}
