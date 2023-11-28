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
@Table(schema = "public", name = "task")
public class TaskEntity {
    @Id
    @JsonProperty("id")
    @Column(name = "id")
    private String id = newTaskId();

    @JsonProperty("parent_task_id")
    @Column(name = "parent_task_id")
    private String parentTaskId;

    @JsonProperty("user_id")
    @Column(name = "user_id")
    private String userId;

    @Basic
    @JsonProperty("query")
    @Column(name = "query")
    private String query;

    @Basic
    @JsonProperty("status")
    @Column(name = "status")
    private String status;

    @Basic
    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();

    @Basic
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    public static String newTaskId() {
        return "t_" + HRUtils.generateUid(HRUtils.SHORT_UID_LENGTH);
    }
}
