package net.anyemailfinder.api.data.postgres.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;
import net.anyemailfinder.api.service.utils.HRUtils;

/**
 * @author Bizuwork Melesse
 * created on Nov 15, 2023
 */
@Getter @Setter
@Entity
@Table(schema = "public", name = "query_leads")
public class QueryLeadsEntity {

    @Id
    @Column(name = "id")
    @JsonIgnore
    private String id = "ql_" + HRUtils.generateUid(HRUtils.SHORT_UID_LENGTH);

    @Basic
    @Column(name = "lead_id")
    private String leadId;

    @Basic
    @Column(name = "task_id")
    private String taskId;

    @Basic
    @Column(name = "created_at")
    @JsonIgnore
    private LocalDateTime createdAt = LocalDateTime.now();
}
