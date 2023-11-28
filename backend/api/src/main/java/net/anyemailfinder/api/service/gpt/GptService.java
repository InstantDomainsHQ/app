package net.anyemailfinder.api.service.gpt;

import net.anyemailfinder.api.service.openai.completion.CompletionRequest;

/**
 * @author Biz Melesse created on 11/15/23
 */
public interface GptService {

  CompletionRequest buildCompletionRequest(String prompt, String context);
  String gptCompletion(String prompt, String content);
}
