package com.getinstantdomains.api.props;

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
  private List<String> tlds = new ArrayList<>();
}
