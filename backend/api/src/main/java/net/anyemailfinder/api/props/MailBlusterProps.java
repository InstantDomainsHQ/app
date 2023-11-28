package net.anyemailfinder.api.props;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

/**
 * @author Bizuwork Melesse
 * created on 2/18/23
 */
@Primary
@Getter @Setter
@Configuration
@ConfigurationProperties(prefix = "mail-bluster")
public class MailBlusterProps {
    private String apiKey;
    private String baseUrl;
    private String leadsPath;
}
