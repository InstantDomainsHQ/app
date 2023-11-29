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
    private String apiKey;
    private String embeddingModel = "text-embedding-ada-002";
    private String completionModel = "gpt-3.5-turbo";
    private String systemMessage;
    private String extractionPrompt = "You are tasked with a sophisticated lead information extraction task from a webpage text given below as a context. Your goal is to populate the fields firstName, lastName, email, phoneNumber, jobTitle, companyName, city, state, country, industry, website, description, keywords, linkedinProfile, age, gender, and companySize. Use null as the value for fields that are not present in the extracted information. For the description field, generate a short paragraph that describes the business from the context. Use a neutral tone for it. For the industry field, make your best judgement based on the full context and generate one. For the keyword field, generate a few SEO-friendly keywords that are relevant to this lead. Each entry in the resulting array should include a reasonValid field, justifying why the information is considered valid and relevant to the business. Ensure that the extraction criteria are met, considering the relevance of information to the business and excluding unrelated individuals such as unattended email addresses. Provide a comprehensive and accurate JSON array output. DO NOT HALLUCINATE. DO NOT provide extraneous information. For every piece of information you extract, I should be able to go back to the original html and locate it. If not, then your extraction is invalid. Please use this approach to validate your extraction method. I have already extracted the emails. Your response must include all these emails enriched with the corresponding fields. Please return the JSON array in markdown.";
    private String openGraphPrompt = "You are tasked with a sophisticated lead information extraction task from a webpage text given below as a context. Your goal is to populate the fields firstName, lastName, email, phoneNumber, jobTitle, companyName, city, state, country, industry, website, description, keywords, linkedinProfile, age, gender, and companySize. Use null as the value for fields that are not present in the extracted information. For the description field, generate a short paragraph that describes the business from the context. Use a neutral tone for it. For the industry field, make your best judgement based on the full context and generate one. For the keyword field, generate a few SEO-friendly keywords that are relevant to this lead. Provide a comprehensive and accurate JSON output. DO NOT HALLUCINATE. DO NOT provide extraneous information. For every piece of information you extract, I should be able to go back to the original meta tags and locate it. If not, then your extraction is invalid. Please use this approach to validate your extraction method. Please return the JSON in markdown.";
    private String aboutUsUrlPrompt = "I am trying to gather information about a website such as owners, emails, company info, about us, contact us, etc. I have a list of urls i can try but I would like to filter out urls that are least likely to contain the kind of information I am looking for. Based on your understanding of SEO and web design, please take a look at the following list of URLs and give a list of urls from the list that will satisfy my requirements. The URLs must be in the list that I provide you. If not, then your response is wrong. So please use this approach to validate your response. Return a JSON array in markdown.";
    private String aboutUsExtractionPrompt = "You are tasked with a sophisticated lead information extraction task from a webpage text given below as a context. Your goal is to populate the fields firstName, lastName, email, phoneNumber, jobTitle, companyName, city, state, country, industry, website, description, keywords, linkedinProfile, age, gender, and companySize. Use null as the value for fields that are not present in the extracted information. For the description field, generate a short paragraph that describes the business from the context. Use a neutral tone for it. For the industry field, make your best judgement based on the full context and generate one. For the keyword field, generate a few SEO-friendly keywords that are relevant to this lead. You should also include a reasonValid field, justifying why the information is considered valid and relevant to the business. Ensure that the extraction criteria are met, considering the relevance of information to the business and excluding unrelated individuals such as unattended email addresses. Provide a comprehensive and accurate JSON output. DO NOT HALLUCINATE. DO NOT provide extraneous information. For every piece of information you extract, I should be able to go back to the original html and locate it. If not, then your extraction is invalid. Please use this approach to validate your extraction method. Please return the JSON in markdown.";
    private long requestTimeoutSeconds = 120;
    private double temp = 0.7;
    private int maxTokens = 4000;
    private String completionEndpoint = "https://api.openai.com/v1/chat/completions";
}
