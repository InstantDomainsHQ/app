package com.getinstantdomains.api.data.postgres.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.getinstantdomains.api.service.utils.IDUtils;
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
 * created on Nov 15, 2023
 */
@Getter @Setter
@Entity
@Table(schema = "public", name = "domains")
public class DomainEntity {

    @Id
    @Column(name = "id")
    @JsonIgnore
    private String id = "dm_" + IDUtils.generateUid(IDUtils.SHORT_UID_LENGTH);

    @Basic
    @Column(name = "domain_name")
    private String domainName;

    @Basic
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}
