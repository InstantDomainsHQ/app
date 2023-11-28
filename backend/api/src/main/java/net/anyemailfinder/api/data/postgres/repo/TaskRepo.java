package net.anyemailfinder.api.data.postgres.repo;


import net.anyemailfinder.api.data.postgres.entity.TaskEntity;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


/**
 * @author Bizuwork Melesse
 * created on 10/28/2023
 */
@Repository
@Transactional
public interface TaskRepo extends JpaRepository<TaskEntity, String> {
  Optional<TaskEntity> findById(String taskId);
  Optional<TaskEntity> findByQuery(String query);
}
