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
    CorsProps.class,
    OpenAiProps.class,
    WebSocketProps.class,
    RedisProps.class,
    SourceProps.class,
    StaffProps.class,
    DomainProps.class
})
public class PropConfiguration {
}
