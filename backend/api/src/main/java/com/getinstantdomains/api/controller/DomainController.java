package com.getinstantdomains.api.controller;

import com.getinstantdomains.api.DomainApi;
import com.getinstantdomains.api.GenerateRequest;
import com.getinstantdomains.api.service.domain.DomainService;
import com.getinstantdomains.api.TaskId;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Biz Melesse
 * created on 02/05/23
 */
@Slf4j
@RestController
@RequiredArgsConstructor
public class DomainController implements DomainApi {
  private final DomainService domainService;

  @Override
  public ResponseEntity<TaskId> generateDomains(GenerateRequest generateRequest) {
    return ResponseEntity.ok(domainService.generateDomains(generateRequest));
  }
}
