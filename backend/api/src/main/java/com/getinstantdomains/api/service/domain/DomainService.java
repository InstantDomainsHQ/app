package com.getinstantdomains.api.service.domain;

import com.getinstantdomains.api.GenerateRequest;
import com.getinstantdomains.api.TaskId;

/**
 * @author Biz Melesse created on 11/28/23
 */
public interface DomainService {
  TaskId generateDomains(GenerateRequest generateRequest);
  void performWhois(String domain, String clientId);

}
