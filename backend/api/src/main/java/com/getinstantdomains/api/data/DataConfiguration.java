package com.getinstantdomains.api.data;


import com.getinstantdomains.api.data.postgres.PostgresDBDataConfiguration;
import com.getinstantdomains.api.props.PropConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.flyway.FlywayAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * @author Bizuwork Melesse
 * created on 2/13/21
 *
 */
@Configuration
@ComponentScan
@EnableAutoConfiguration(exclude = {
    FlywayAutoConfiguration.class
})
@Import({
    PostgresDBDataConfiguration.class,
    PropConfiguration.class
})
public class DataConfiguration {
}
