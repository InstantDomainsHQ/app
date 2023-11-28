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
@Table(schema = "public", name = "email_verification")
public class EmailVerificationEntity {

    @Id
    @Column(name = "id")
    @JsonIgnore
    private String id = "ev_" + HRUtils.generateUid(HRUtils.SHORT_UID_LENGTH);

    @Basic
    @Column(name = "lead_id")
    private String leadId;

    @Basic
    @Column(name = "is_domain_valid")
    private Boolean isDomainValid = false;

    @Basic
    @Column(name = "is_disposable_email")
    private Boolean isDisposableEmail = false;

    @Basic
    @Column(name = "is_mx_valid")
    private Boolean isMxValid = false;

    @Basic
    @Column(name = "is_smtp_valid")
    private Boolean isSmtpValid = false;

    @Basic
    @Column(name = "is_catchall_email")
    private Boolean isCatchallEmail = false;

    @Basic
    @Column(name = "is_role_email")
    private Boolean isRoleEmail = false;

    @Basic
    @Column(name = "is_valid_format")
    private Boolean isValidFormat = false;

    @Basic
    @Column(name = "updated_at")
    @JsonIgnore
    private LocalDateTime updatedAt = LocalDateTime.now();

    @Basic
    @Column(name = "created_at")
    @JsonIgnore
    private LocalDateTime createdAt = LocalDateTime.now();
}
