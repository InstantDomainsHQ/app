package net.anyemailfinder.api.props;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

/**
 * @author Bizuwork Melesse
 * created on 11/24/23
 */
@Primary
@Getter @Setter
@Configuration
@ConfigurationProperties(prefix = "entitlements")
public class EntitlementProps {
    private Long maxLeadCountFree = 10L;
    private Long maxLeadCountPaid = Long.MAX_VALUE;
}
