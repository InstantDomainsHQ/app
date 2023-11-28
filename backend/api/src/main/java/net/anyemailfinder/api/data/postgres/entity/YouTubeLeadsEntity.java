package net.anyemailfinder.api.data.postgres.entity;

import net.anyemailfinder.api.service.utils.HRUtils;
import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;

/**
 * @author Bizuwork Melesse
 * created on February 11, 2023
 */
@Getter @Setter
@Entity
@Table(schema = "public", name = "youtube_leads")
public class YouTubeLeadsEntity {

    @Id
    @Column(name = "id")
    private String id = "yl_" + HRUtils.generateUid(HRUtils.SHORT_UID_LENGTH);

    @Basic
    @Column(name = "first_name")
    private String firstName;

    @Basic
    @Column(name = "last_name")
    private String lastName;

    @Basic
    @Column(name = "description")
    private String description;

    @Basic
    @Column(name = "keywords")
    private String keywords;

    @Basic
    @Column(name = "channel_url")
    private String channelUrl;

    @Basic
    @Column(name = "channel_name")
    private String channelName;

    @Basic
    @Column(name = "channel_handle")
    private String channelHandle;

    @Basic
    @Column(name = "subscribers")
    private String subscribers;

    @Basic
    @Column(name = "subscribers_value")
    private Long subscribersValue;

    @Basic
    @Column(name = "urls")
    private String urls;

    @Basic
    @Column(name = "emails")
    private String emails;

    @Basic
    @Column(name = "scraping_failed")
    private boolean scrapingFailed = false;

    @Basic
    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();

    @Basic
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}
