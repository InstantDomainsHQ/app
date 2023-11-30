package com.getinstantdomains.api.props;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

/**
 * @author Bizuwork Melesse
 * created on 1/31/23
 */
@Primary
@Getter @Setter
@Configuration
@ConfigurationProperties(prefix = "openai")
public class OpenAiProps {
    private int numRetries = 3;
    private int numCompletions = 1;
    private String apiKey;
    private String embeddingModel = "text-embedding-ada-002";
    private String completionModel = "gpt-3.5-turbo";
    private String systemMessage;
    private String domainGeneratePrompt = "You are tasked with generating domain names for a given business area provided as a context below. The context can be a few keywords or a brief description of the business. Please generate 100 domain names. They should be short, preferably two or three words long. Two would be best. All domain names must start with https:// and end with .com. Return the result as a JSON array.";
    private long requestTimeoutSeconds = 120;
    private double temp = 0.7;
    private int maxTokens = 4000;
    private String completionEndpoint = "https://api.openai.com/v1/chat/completions";
}
