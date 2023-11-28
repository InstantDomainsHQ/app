package net.anyemailfinder.api.data.postgres.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
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
 * created on 10/28/2023
 *
 */
@Getter @Setter
@Entity
@Table(schema = "public", name = "channel")
public class ChannelEntity {
    @Id
    @JsonProperty("id")
    @Column(name = "id")
    private String id = "c_" + HRUtils.generateUid(HRUtils.SHORT_UID_LENGTH);

    @JsonProperty("task_id")
    @Column(name = "task_id")
    private String taskId;

    @Basic
    @JsonProperty("channel")
    @Column(name = "channel")
    private String channel;

    @Basic
    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();

    @Basic
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}
