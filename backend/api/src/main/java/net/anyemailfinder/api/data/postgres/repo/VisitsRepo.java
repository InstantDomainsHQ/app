package net.anyemailfinder.api.data.postgres.repo;


import net.anyemailfinder.api.data.postgres.entity.VisitsEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


/**
 * @author Bizuwork Melesse
 * created on 11/01/23
 */
@Repository
@Transactional
public interface VisitsRepo extends JpaRepository<VisitsEntity, String> {
  List<VisitsEntity> findByUrl(String url);
}
