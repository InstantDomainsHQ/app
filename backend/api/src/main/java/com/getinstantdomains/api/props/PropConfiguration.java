package com.getinstantdomains.api.props;


import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * @author Bizuwork Melesse
 * created on 2/13/21
 *
 */
@Configuration
@ComponentScan
@EnableConfigurationProperties(value = {
    FirebaseProps.class,
    FlywayPostgresProps.class,
    PostgresDataSourceProps.class,
    SourceProps.class,
    CorsProps.class,
    OpenAiProps.class,
    MailProps.class,
    LeadsProps.class,
    IpAddressProps.class,
    YouTubeProps.class,
    MailBlusterProps.class,
    StaffProps.class,
    SmartProxyProps.class,
    ScraperProps.class,
    RedisProps.class,
    CrawlerProps.class,
    WebSocketProps.class,
    EntitlementProps.class
})
public class PropConfiguration {
}
