package net.anyemailfinder.api.controller;

import net.anyemailfinder.api.ChannelPageableResponse;
import net.anyemailfinder.api.EmailSearchResults;
import net.anyemailfinder.api.LeadApi;
import net.anyemailfinder.api.SubmitQueryRequest;
import net.anyemailfinder.api.TaskId;
import net.anyemailfinder.api.service.lead.LeadService;
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
public class LeadController implements LeadApi {
  private final LeadService leadService;

  @Override
  public ResponseEntity<EmailSearchResults> getAllUserLeads() {
    return ResponseEntity.ok(leadService.getAllUserLeads());
  }

  @Override
  public ResponseEntity<ChannelPageableResponse> getChannelQueryResult(String jobId) {
    return ResponseEntity.ok(leadService.getChannelQueryResult(jobId));
  }

  @Override
  public ResponseEntity<TaskId> submitSearchQuery(SubmitQueryRequest request) {
    return ResponseEntity.ok(leadService.submitSearchQuery(request));
  }
}
