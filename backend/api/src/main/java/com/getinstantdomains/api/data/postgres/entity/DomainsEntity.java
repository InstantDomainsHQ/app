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
public class DomainsEntity {

    @Id
    @Column(name = "id")
    @JsonIgnore
    private String id = "dm_" + IDUtils.generateUid(IDUtils.SHORT_UID_LENGTH);

    @Basic
    @Column(name = "domain_name")
    private String domainName;

    @Basic
    @Column(name = "extension")
    private String extension;

    @Basic
    @Column(name = "registrar_name")
    private String registrarName;

    @Basic
    @Column(name = "registrar_url")
    private String registrarUrl;

    @Basic
    @Column(name = "whois_url")
    private String whoisUrl;

    @Basic
    @Column(name = "registered_at")
    private LocalDateTime registeredAt = LocalDateTime.now();

    @Basic
    @Column(name = "expires_at")
    private LocalDateTime expiresAt = LocalDateTime.now();

    @Basic
    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();

    @Basic
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}
