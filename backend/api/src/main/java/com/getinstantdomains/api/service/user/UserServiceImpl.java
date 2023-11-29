package com.getinstantdomains.api.service.user;

import com.getinstantdomains.api.data.postgres.entity.UserEntity;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.getinstantdomains.api.data.postgres.repo.UserRepo;
import com.getinstantdomains.api.service.utils.IDUtils;
import com.getinstantdomains.api.UserProfile;
import com.getinstantdomains.api.UserProfileResponse;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

/**
 * @author Biz Melesse
 * created on 10/17/22
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
  private final UserRepo userRepo;

  @Override
  public UserProfileResponse getOrCreateUserprofile() {
    UserProfile userProfile = IDUtils.getUserProfile();
    createDbUser(userProfile);
    return new UserProfileResponse().profile(userProfile);
  }

  @Override
  public void createDbUser(UserProfile userProfile) {
    if (userProfile != null && !ObjectUtils.isEmpty(userProfile.getUserId())) {
      Optional<UserEntity> entity = userRepo.findById(userProfile.getUserId());
      if (entity.isEmpty()) {
        UserEntity newUser = new UserEntity();
        newUser.setEmail(userProfile.getEmail());
        newUser.setId(userProfile.getUserId());
        newUser.setFullName(userProfile.getName());
        newUser.setAvatarUrl(userProfile.getPicture());
        userRepo.save(newUser);
        log.info("Created new user with  ID = {}", newUser.getId());
      }
    }
  }

}
