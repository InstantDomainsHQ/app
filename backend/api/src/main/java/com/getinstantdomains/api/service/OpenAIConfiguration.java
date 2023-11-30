package com.getinstantdomains.api.service;

import static com.theokanning.openai.service.OpenAiService.defaultClient;
import static com.theokanning.openai.service.OpenAiService.defaultRetrofit;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.getinstantdomains.api.props.OpenAiProps;
import com.theokanning.openai.client.OpenAiApi;
import com.theokanning.openai.service.OpenAiService;
import java.time.Duration;
import lombok.RequiredArgsConstructor;
import okhttp3.OkHttpClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.annotation.RequestScope;
import retrofit2.Retrofit;

/**
 * @author Biz Melesse created on 11/29/23
 */
@Configuration
@RequiredArgsConstructor
public class OpenAIConfiguration {
  private final ObjectMapper objectMapper;
  private final OpenAiProps openAiProps;

  @Bean
  @RequestScope
  public OpenAiService openAiService() {
    OkHttpClient client = defaultClient(openAiProps.getApiKey(),
        Duration.ofSeconds(openAiProps.getRequestTimeoutSeconds()))
        .newBuilder()
        .build();
    Retrofit retrofit = defaultRetrofit(client, objectMapper);
    OpenAiApi api = retrofit.create(OpenAiApi.class);
    return new OpenAiService(api, client.dispatcher().executorService());
  }
}
