package com.getinstantdomains.api.dto;

import java.util.HashMap;
import java.util.Map;
import lombok.Getter;
import lombok.Setter;

/**
 * @author Biz Melesse created on 9/3/23
 */
@Getter @Setter
public class SessionUser {
  private String email;
  private String name;
  private String userId;
  private String avatar;
  private String apiKey;
  private String username;
  private boolean anonymous;
  private boolean premiumUser;
  private Long maxLeadLimit;
  private Map<String, Boolean> roles = new HashMap<>();
}
