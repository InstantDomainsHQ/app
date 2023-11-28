package net.anyemailfinder.api.service.user;

import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.anyemailfinder.api.UserProfile;
import net.anyemailfinder.api.UserProfileResponse;
import net.anyemailfinder.api.data.postgres.entity.EntitlementEntity;
import net.anyemailfinder.api.data.postgres.entity.UserEntity;
import net.anyemailfinder.api.data.postgres.repo.EntitlementRepo;
import net.anyemailfinder.api.data.postgres.repo.UserRepo;
import net.anyemailfinder.api.props.EntitlementProps;
import net.anyemailfinder.api.service.utils.HRUtils;
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
  private final EntitlementProps entitlementProps;
  private final EntitlementRepo entitlementRepo;

  @Override
  public UserProfileResponse getOrCreateUserprofile() {
    UserProfile userProfile = HRUtils.getUserProfile();
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
//        mailService.addNewSubscriber();
//
        EntitlementEntity entitlement = new EntitlementEntity();
        entitlement.setUserId(userProfile.getUserId());
        entitlement.setMaxLeadCount(entitlementProps.getMaxLeadCountFree());
        entitlementRepo.save(entitlement);
      }
    }
  }

}
