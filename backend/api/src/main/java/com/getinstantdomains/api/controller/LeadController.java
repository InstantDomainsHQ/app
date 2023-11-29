//package com.getinstantdomains.api.controller;
//
//import com.getinstantdomains.api.service.lead.LeadService;
//import com.getinstantdomains.api.ChannelPageableResponse;
//import com.getinstantdomains.api.EmailSearchResults;
//import com.getinstantdomains.api.LeadApi;
//import com.getinstantdomains.api.SubmitQueryRequest;
//import com.getinstantdomains.api.TaskId;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.RestController;
//
///**
// * @author Biz Melesse
// * created on 02/05/23
// */
//@Slf4j
//@RestController
//@RequiredArgsConstructor
//public class LeadController implements LeadApi {
//  private final LeadService leadService;
//
//  @Override
//  public ResponseEntity<EmailSearchResults> getAllUserLeads() {
//    return ResponseEntity.ok(leadService.getAllUserLeads());
//  }
//
//  @Override
//  public ResponseEntity<ChannelPageableResponse> getChannelQueryResult(String jobId) {
//    return ResponseEntity.ok(leadService.getChannelQueryResult(jobId));
//  }
//
//  @Override
//  public ResponseEntity<TaskId> submitSearchQuery(SubmitQueryRequest request) {
//    return ResponseEntity.ok(leadService.submitSearchQuery(request));
//  }
//}
