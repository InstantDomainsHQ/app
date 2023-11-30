package com.getinstantdomains.api.service.gpt;

/**
 * @author Biz Melesse created on 11/15/23
 */
public interface GptService {

  String gptCompletion(String clientId, String prompt, String content);
}
