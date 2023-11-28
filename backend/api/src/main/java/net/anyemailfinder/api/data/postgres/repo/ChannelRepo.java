package net.anyemailfinder.api.data.postgres.repo;


import net.anyemailfinder.api.data.postgres.entity.ChannelEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


/**
 * @author Bizuwork Melesse
 * created on 10/28/2023
 */
@Repository
@Transactional
public interface ChannelRepo extends JpaRepository<ChannelEntity, String> {
  List<ChannelEntity> findAllByChannel(String channel);
}
