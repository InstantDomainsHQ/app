package net.anyemailfinder.api.props;

import java.util.HashSet;
import java.util.Set;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

/**
 * @author Bizuwork Melesse
 * created on 5/11/22
 */
@Data
@Configuration
@Primary
@ConfigurationProperties("staff")
public class StaffProps {
    private Set<String> emails = new HashSet<>();
}
