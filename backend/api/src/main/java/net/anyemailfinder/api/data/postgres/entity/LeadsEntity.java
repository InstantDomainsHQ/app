package net.anyemailfinder.api.data.postgres.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import net.anyemailfinder.api.service.utils.HRUtils;

/**
 * @author Bizuwork Melesse
 * created on Nov 15, 2023
 */
@Getter @Setter
@Entity
@Table(schema = "public", name = "leads")
public class LeadsEntity {

    @Id
    @Column(name = "id")
    @JsonIgnore
    private String id = "ld_" + HRUtils.generateUid(HRUtils.SHORT_UID_LENGTH);

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
    @Column(name = "email")
    private String email;

    @Basic
    @Column(name = "keywords")
    private String keywordsStr;

    @Basic
    @Column(name = "phone_number")
    private String phoneNumber;

    @Basic
    @Column(name = "reason_valid")
    private String reasonValid;

    @Basic
    @Column(name = "job_title")
    private String jobTitle;

    @Basic
    @Column(name = "gender")
    private String gender;

    @Basic
    @Column(name = "country")
    private String country;

    @Basic
    @Column(name = "city")
    private String city;

    @Basic
    @Column(name = "state")
    private String state;

    @Basic
    @Column(name = "industry")
    private String industry;

    @Basic
    @Column(name = "company_name")
    private String companyName;

    @Basic
    @Column(name = "website")
    private String website;

    @Basic
    @Column(name = "linkedin_profile")
    private String linkedinProfile;

    @Basic
    @Column(name = "age")
    private long age;

    @Basic
    @Column(name = "company_size")
    private long companySize;

    @Basic
    @Column(name = "verified")
    private boolean verified = false;

    @Basic
    @Column(name = "thumbnail")
    private String thumbnail;

    @Basic
    @Column(name = "updated_at")
    @JsonIgnore
    private LocalDateTime updatedAt = LocalDateTime.now();

    @Basic
    @Column(name = "created_at")
    @JsonIgnore
    private LocalDateTime createdAt = LocalDateTime.now();

    @Override
    public String toString() {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.writeValueAsString(this);
        } catch (JsonProcessingException e) {
            return null;
        }
    }

    public void setKeywords(List<String> keywords) {
        keywordsStr = String.join(",", keywords);
    }
}
