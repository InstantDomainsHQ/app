package com.getinstantdomains.api.dto;

import java.util.List;
import javax.annotation.Nullable;
import lombok.Getter;
import lombok.Setter;

/**
 * @author Biz Melesse created on 12/2/23
 */
@Getter @Setter
public class WhoIsResponse {
  @Nullable
  private String domainName;

  @Nullable
  private Long createdAt;

  @Nullable
  private Long expiresAt;

  @Nullable
  private Long updatedAt;

  @Nullable
  private List<String> domainStatus;
}
