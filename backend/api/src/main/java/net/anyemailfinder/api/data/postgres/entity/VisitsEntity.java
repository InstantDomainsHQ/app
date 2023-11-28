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
 * created on 11/01/2023
 *
 */
@Getter @Setter
@Entity
@Table(schema = "public", name = "visits")
public class VisitsEntity {
    @Id
    @Column(name = "id")
    private String id = "v_" + HRUtils.generateUid(HRUtils.SHORT_UID_LENGTH);

    @JsonProperty("url")
    @Column(name = "url")
    private String url;

    @Basic
    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();

    @Basic
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}
