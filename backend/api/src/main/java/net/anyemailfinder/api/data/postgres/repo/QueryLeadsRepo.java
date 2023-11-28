package net.anyemailfinder.api.data.postgres.repo;


import java.util.List;
import net.anyemailfinder.api.data.postgres.entity.QueryLeadsEntity;
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
public interface QueryLeadsRepo extends JpaRepository<QueryLeadsEntity, String> {

  @Query(value = "SELECT ql.lead_id "
      + "FROM query_leads ql "
      + "JOIN task t ON ql.task_id = t.id "
      + "WHERE t.query = ?1 "
      + "ORDER BY ql.created_at DESC "
      + "LIMIT ?2",
      nativeQuery = true)
  List<String> findExistingLeadsForQuery(String query, long limit);
}
