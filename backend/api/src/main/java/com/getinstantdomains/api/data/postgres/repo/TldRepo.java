package com.getinstantdomains.api.data.postgres.repo;


import com.getinstantdomains.api.data.postgres.entity.TldEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


/**
 * @author Bizuwork Melesse
 * created on 12/1/23
 */
@Repository
@Transactional
public interface TldRepo extends JpaRepository<TldEntity, String> {
  @Query(value = "SELECT t.* "
      + "FROM tlds t "
      + "JOIN domains d on d.id = t.domain_id "
      + "WHERE d.domain_name = ?1 AND t.tld IN(?2)",
      nativeQuery = true)
  List<TldEntity> findAllByTld(String name, List<String> tlds);
}
