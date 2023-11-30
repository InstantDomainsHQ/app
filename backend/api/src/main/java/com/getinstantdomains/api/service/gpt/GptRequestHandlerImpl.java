package com.getinstantdomains.api.service.gpt;

import static com.theokanning.openai.service.OpenAiService.defaultClient;
import static com.theokanning.openai.service.OpenAiService.defaultRetrofit;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.getinstantdomains.api.props.OpenAiProps;
import com.getinstantdomains.api.service.domain.DomainService;
import com.theokanning.openai.client.OpenAiApi;
import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.service.OpenAiService;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import okhttp3.OkHttpClient;
import org.apache.commons.lang3.ObjectUtils;
import retrofit2.Retrofit;

/**
 * @author Biz Melesse created on 11/29/23
 */
public class GptRequestHandlerImpl implements GptRequestHandler {
  private final String clientId;
  private final ObjectMapper objectMapper;
  private final OpenAiProps openAiProps;
  private final OpenAiService openAiService;
  private final DomainService domainService;

  public GptRequestHandlerImpl(String clientId, ObjectMapper objectMapper,
      OpenAiProps openAiProps, DomainService domainService) {
    this.clientId = clientId;
    this.objectMapper = objectMapper;
    this.openAiProps = openAiProps;
    this.domainService = domainService;
    this.openAiService = buildClient();
  }

  private OpenAiService buildClient() {
    OkHttpClient client = defaultClient(openAiProps.getApiKey(),
        Duration.ofSeconds(openAiProps.getRequestTimeoutSeconds()))
        .newBuilder()
        .build();
    Retrofit retrofit = defaultRetrofit(client, objectMapper);
    OpenAiApi api = retrofit.create(OpenAiApi.class);
    return new OpenAiService(api, client.dispatcher().executorService());
  }

  @Override
  public void handler(List<ChatMessage> messages) {
    final long start = Instant.now().getEpochSecond();
    System.out.println("Start: " + start);
    final List<String> chunks = new ArrayList<>();
    ChatCompletionRequest request = ChatCompletionRequest.builder()
        .messages(messages)
        .stream(true)
        .n(openAiProps.getNumCompletions())
        .model(openAiProps.getCompletionModel())
        .logitBias(new HashMap<>())
        .temperature(openAiProps.getTemp())
        .build();
    openAiService.streamChatCompletion(request).subscribe(chunk -> {
      String text = chunk.getChoices().get(0).getMessage().getContent();
      if (text == null) {
        return;
      }
      chunks.add(text);
      List<String> urls = extractUrls(chunks);
      if (!ObjectUtils.isEmpty(urls)) {
        for (String url : urls) {
          String domain = url
              .replace("https://", "")
              .replace(".com", "");
          chunks.clear();
          domainService.performWhois(domain, clientId);
        }
      }
    }, Throwable::printStackTrace, openAiService::shutdownExecutor);
  }

  private List<String> extractUrls(List<String> chunks) {
    String text = String.join("", chunks);
    List<String> values = new ArrayList<>();
    String regex = "\\bhttps?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)";
    Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
    if (!ObjectUtils.isEmpty(text)) {
      Matcher matcher = pattern.matcher(text);
      while (matcher.find()) {
        values.add(text.substring(matcher.start(0), matcher.end(0)));
      }
    }
    return values;
  }
}
