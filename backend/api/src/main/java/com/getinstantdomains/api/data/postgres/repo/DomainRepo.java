package com.getinstantdomains.api.data.postgres.repo;


import com.getinstantdomains.api.data.postgres.entity.DomainEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


/**
 * @author Bizuwork Melesse
 * created on 12/1/23
 */
@Repository
@Transactional
public interface DomainRepo extends JpaRepository<DomainEntity, String> {
  DomainEntity findByDomainName(String name);
}
