package net.anyemailfinder.api.data.postgres.repo;


import net.anyemailfinder.api.data.postgres.entity.EntitlementEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


/**
 * @author Bizuwork Melesse
 * created on 11/01/23
 */
@Repository
@Transactional
public interface EntitlementRepo extends JpaRepository<EntitlementEntity, String> {
}
