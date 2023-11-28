package net.anyemailfinder.api.data.postgres.repo;


import java.util.List;
import net.anyemailfinder.api.data.postgres.entity.UserLeadsEntity;
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
public interface UserLeadsRepo extends JpaRepository<UserLeadsEntity, String> {
  @Query(value = "SELECT count(*) "
      + "FROM user_leads "
      + "WHERE user_id = ?1 ",
      nativeQuery = true)
  Long leadCountByUserId(String userId);

  @Query(value = "SELECT lead_id "
      + "FROM user_leads "
      + "WHERE user_id = ?1 ",
      nativeQuery = true)
  List<String> findAllLeadsByUserId(String userId);
}
