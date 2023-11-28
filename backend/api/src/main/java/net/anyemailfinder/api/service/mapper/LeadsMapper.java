package net.anyemailfinder.api.service.mapper;

import java.time.LocalDateTime;
import java.util.List;
import net.anyemailfinder.api.EmailSearchResult;
import net.anyemailfinder.api.data.postgres.entity.LeadsEntity;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;

/**
 * @author Biz Melesse
 * created on 1/19/23
 */
@Mapper(componentModel = "spring",
        unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE,
        injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface LeadsMapper {
  List<EmailSearchResult> mapLeadsToResult(List<LeadsEntity> leadsEntities);

  default EmailSearchResult leadsEntityToEmailSearchResult(LeadsEntity leadsEntity) {
    if ( leadsEntity == null ) {
      return null;
    }

    EmailSearchResult emailSearchResult = new EmailSearchResult();

    emailSearchResult.setId( leadsEntity.getId() );
    emailSearchResult.setFirstName( cleanString(leadsEntity.getFirstName()) );
    emailSearchResult.setLastName( cleanString(leadsEntity.getLastName()) );
    emailSearchResult.setDescription( cleanString(leadsEntity.getDescription()) );
    emailSearchResult.setEmail( cleanString(leadsEntity.getEmail()) );
    emailSearchResult.setKeywords( cleanString(leadsEntity.getKeywordsStr()) );
    emailSearchResult.setPhoneNumber( cleanString(leadsEntity.getPhoneNumber()) );
    emailSearchResult.setJobTitle( cleanString(leadsEntity.getJobTitle()) );
    emailSearchResult.setGender( cleanString(leadsEntity.getGender()) );
    emailSearchResult.setCountry( cleanString(leadsEntity.getCountry()) );
    emailSearchResult.setCity( cleanString(leadsEntity.getCity()) );
    emailSearchResult.setState( cleanString(leadsEntity.getState()) );
    emailSearchResult.setIndustry( cleanString(leadsEntity.getIndustry()) );
    emailSearchResult.setCompanyName( cleanString(leadsEntity.getCompanyName()) );
    emailSearchResult.setWebsite( cleanString(leadsEntity.getWebsite()) );
    emailSearchResult.setLinkedinProfile( cleanString(leadsEntity.getLinkedinProfile()) );
    emailSearchResult.setAge( cleanString(leadsEntity.getAge()) );
    emailSearchResult.setVerified(leadsEntity.isVerified());
    emailSearchResult.setCompanySize( cleanString(leadsEntity.getCompanySize()) );
    emailSearchResult.setThumbnail( cleanString(leadsEntity.getThumbnail()) );
    return emailSearchResult;
  }

  default String cleanString(Object value) {
    if (value instanceof  String) {
      if (value.toString().equals("null")) {
        return null;
      }
      return value.toString();
    } else if (value instanceof Integer || value instanceof Long) {
      if (((long) value) == 0l) {
        return null;
      }
      return String.valueOf(value);
    }
    return null;
  }

  default void enrichLeadsEntity(LeadsEntity prev, LeadsEntity curr) {
    prev.setFirstName(getNonNullValue(curr.getFirstName(), curr.getFirstName()));
    prev.setLastName(getNonNullValue(curr.getLastName(), prev.getLastName()));
    prev.setDescription(getNonNullValue(curr.getDescription(), prev.getDescription()));
    prev.setKeywordsStr(getNonNullValue(curr.getKeywordsStr(), prev.getKeywordsStr()));
    prev.setPhoneNumber(getNonNullValue(curr.getPhoneNumber(), prev.getPhoneNumber()));
    prev.setReasonValid(getNonNullValue(curr.getReasonValid(), prev.getReasonValid()));
    prev.setJobTitle(getNonNullValue(curr.getJobTitle(), prev.getJobTitle()));
    prev.setGender(getNonNullValue(curr.getGender(), prev.getGender()));
    prev.setCountry(getNonNullValue(curr.getCountry(), prev.getCountry()));
    prev.setCity(getNonNullValue(curr.getCity(), prev.getCity()));
    prev.setState(getNonNullValue(curr.getState(), prev.getState()));
    prev.setCompanyName(getNonNullValue(curr.getCompanyName(), prev.getCompanyName()));
    prev.setWebsite(getNonNullValue(curr.getWebsite(), prev.getWebsite()));
    prev.setLinkedinProfile(getNonNullValue(curr.getLinkedinProfile(), prev.getLinkedinProfile()));
    prev.setAge(getNonNullValue(curr.getAge(), prev.getAge()));
    prev.setCompanySize(getNonNullValue(curr.getCompanySize(), prev.getCompanySize()));
    prev.setUpdatedAt(LocalDateTime.now());
    prev.setThumbnail(getNonNullValue(curr.getThumbnail(), prev.getThumbnail()));
  }

  private Long getNonNullValue(Long a, Long b) {
    if (a == null) return b;
    return a;
  }

  private String getNonNullValue(String a, String b) {
    if (a == null) {
      if (b != null && b.equals("null")) {
        return null;
      }
      return b;
    }
    if (a.equals("null")) {
      return null;
    }
    return a;
  }
}
