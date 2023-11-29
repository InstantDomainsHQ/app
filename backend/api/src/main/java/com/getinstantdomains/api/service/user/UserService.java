package com.getinstantdomains.api.service.user;

import net.InstantDomains.api.UserProfile;
import net.InstantDomains.api.UserProfileResponse;

/**
 * @author Biz Melesse
 * created on 10/17/22
 */
public interface UserService {

  String apiKeyPrefix = "aef-";

  /**
   * Get session user profile. If the user does not exist, create a new record.
   * @return
   */
  UserProfileResponse getOrCreateUserprofile();

  /**
   * Create a db user with default entitlements
   */
  void createDbUser(UserProfile userProfile);
}
