package com.getinstantdomains.api.props;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

/**
 * @author Bizuwork Melesse
 * created on 9/12/23
 */
@Primary
@Getter @Setter
@Configuration
@ConfigurationProperties(prefix = "mail")
public class MailProps {
    private String email;
    private String password;
}
