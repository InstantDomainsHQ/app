package com.getinstantdomains.api.props;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.getinstantdomains.api.dto.TldDto;
import java.util.ArrayList;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

/**
 * @author Biz Melesse created on 11/30/23
 */
@Primary
@Getter @Setter
@Configuration
@ConfigurationProperties(prefix = "domains")
public class DomainProps {
  private List<TldDto> tlds = new ArrayList<>();
  private String whoisBaseUrl;
  private String affiliateBaseUrl;
  private String whoisNodeUrl;

  @JsonIgnore
  public List<String> getTldExtensions() {
    return tlds
        .stream()
        .map(TldDto::getTld)
        .toList();
  }
}
