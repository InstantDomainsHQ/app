package net.anyemailfinder.api.data.postgres.repo;


import net.anyemailfinder.api.data.postgres.entity.YouTubeLeadsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


/**
 * @author Bizuwork Melesse
 * created on February 11, 2023
 */
@Repository
@Transactional
public interface YouTubeLeadsRepo extends JpaRepository<YouTubeLeadsEntity, String> {
    @Query(value = "SELECT * " +
        "FROM youtube_leads "
        + "WHERE channel_name = ?1 "
        + "LIMIT 1 ",
        nativeQuery = true)
    YouTubeLeadsEntity findByChannelName(String channelName);
    YouTubeLeadsEntity findByEmails(String email);
}
