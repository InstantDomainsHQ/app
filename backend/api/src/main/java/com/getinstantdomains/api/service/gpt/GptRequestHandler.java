package com.getinstantdomains.api.service.gpt;

import com.theokanning.openai.completion.chat.ChatMessage;
import java.util.List;

/**
 * @author Biz Melesse created on 11/29/23
 */
public interface GptRequestHandler {
  void handler(List<ChatMessage> messages);
}
