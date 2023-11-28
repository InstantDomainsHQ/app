package net.anyemailfinder.api.service.openai.completion;

import lombok.Data;

/**
 * @author Biz Melesse created on 6/13/23
 */
@Data
public class CompletionResponseMessage {
  private String role;
  private String content;
}
