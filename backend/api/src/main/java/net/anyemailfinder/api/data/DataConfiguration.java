package net.anyemailfinder.api.data;


import net.anyemailfinder.api.data.postgres.PostgresDBDataConfiguration;
import net.anyemailfinder.api.data.redis.RedisConfiguration;
import net.anyemailfinder.api.props.PropConfiguration;
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
    RedisConfiguration.class,
    PropConfiguration.class
})
public class DataConfiguration {
}
