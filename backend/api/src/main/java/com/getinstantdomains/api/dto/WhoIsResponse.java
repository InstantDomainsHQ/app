package com.getinstantdomains.api.dto;

import java.util.List;
import lombok.Getter;
import lombok.Setter;

/**
 * @author Biz Melesse created on 12/2/23
 */
@Getter @Setter
public class WhoIsResponse {
  private String domainName;
  private Long createdAt;
  private Long expiresAt;
  private Long updatedAt;
  private List<String> domainStatus;
}
