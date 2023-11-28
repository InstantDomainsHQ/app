package net.anyemailfinder.api.data.postgres.repo;


import net.anyemailfinder.api.data.postgres.entity.EmailVerificationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


/**
 * @author Bizuwork Melesse
 * created on 11/24/23
 */
@Repository
@Transactional
public interface EmailVerificationRepo extends JpaRepository<EmailVerificationEntity, String> {

  @Query(value = "SELECT ev.* "
      + "FROM email_verification ev "
      + "JOIN leads l on ev.lead_id = l.id "
      + "WHERE l.email = ?1 ",
      nativeQuery = true)
  EmailVerificationEntity findByEmail(String email);
}
