package com.getinstantdomains.api.service.gpt;

import com.getinstantdomains.api.service.domain.DomainService;
import java.util.List;

/**
 * @author Biz Melesse created on 11/15/23
 */
public interface GptService {

  String gptCompletion(String clientId, String prompt, String content, List<String> userSelectedTlds,
      DomainService domainService);
}
