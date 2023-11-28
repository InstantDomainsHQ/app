package net.anyemailfinder.api.data.postgres.repo;


import java.util.List;
import net.anyemailfinder.api.data.postgres.entity.LeadsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


/**
 * @author Bizuwork Melesse
 * created on 11/01/23
 */
@Repository
@Transactional
public interface LeadsRepo extends JpaRepository<LeadsEntity, String> {
  @Query(value = "SELECT * "
      + "FROM leads "
      + "WHERE email IN(?1) ",
      nativeQuery = true)
  List<LeadsEntity> findAllByEmails(List<String> emails);

  LeadsEntity findByEmail(String email);

  @Query(value = "SELECT * "
      + "FROM leads "
      + "WHERE id IN(?1) ",
      nativeQuery = true)
  List<LeadsEntity> findAllByLeadIds(List<String> ids);

  @Query(value = "SELECT ld.* "
      + "FROM leads ld "
      + "JOIN user_leads uld ON uld.lead_id = ld.id "
      + "WHERE uld.user_id = ?1 "
      + "ORDER BY uld.created_at DESC ",
      nativeQuery = true)
  List<LeadsEntity> findAllUserLeads(String userId);

  @Query(value = "SELECT id "
      + "FROM leads "
      + "WHERE email = ?1 ",
      nativeQuery = true)
  String findLeadId(String email);
}
