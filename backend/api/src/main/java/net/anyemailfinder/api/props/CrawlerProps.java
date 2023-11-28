package net.anyemailfinder.api.props;

import java.util.HashSet;
import java.util.Set;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

/**
 * @author Bizuwork Melesse
 * created on 05/29/2023
 */
@Primary
@Getter @Setter
@Configuration
@ConfigurationProperties(prefix = "crawler")
public class CrawlerProps {
    private Set<String> blacklist = new HashSet<>();
    private Set<String> assetPaths = new HashSet<>();
    private String userAgent;
    private int maxCrawlingDepth = 2;
    private int numCrawlers = 10;
}
