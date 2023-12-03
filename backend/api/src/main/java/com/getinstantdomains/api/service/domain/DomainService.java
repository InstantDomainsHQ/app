package com.getinstantdomains.api.service.domain;

import com.getinstantdomains.api.GenerateRequest;
import com.getinstantdomains.api.TaskId;
import com.getinstantdomains.api.TldResponse;

/**
 * @author Biz Melesse created on 11/28/23
 */
public interface DomainService {
  TldResponse getTlds();
  TaskId generateDomains(GenerateRequest generateRequest);
  void performWhois(String domain, String clientId);

}
