package net.anyemailfinder.api.service.emailVerification;

import java.util.Set;

/**
 * @author Biz Melesse created on 11/24/23
 */
public interface EmailVerificationService {
  void verifyEmails(Set<String> emails);
}
