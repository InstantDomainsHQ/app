package net.anyemailfinder.api.service;


import net.anyemailfinder.api.UserProfile;
import net.anyemailfinder.api.data.DataConfiguration;
import net.anyemailfinder.api.props.PropConfiguration;
import net.anyemailfinder.api.utils.TestUtilConfiguration;
import net.anyemailfinder.api.utils.mapper.ObjectMapperConfiguration;
import net.anyemailfinder.api.utils.migration.FlywayMigrationConfiguration;
import org.jobrunr.dashboard.JobRunrDashboardWebServer;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

/**
 * @author Bizuwork Melesse
 * created on 1/29/22
 */
@SpringBootConfiguration
@EnableAutoConfiguration(exclude = {
        UserDetailsServiceAutoConfiguration.class
})
@Import({
        ServiceConfiguration.class,
        ObjectMapperConfiguration.class,
        PropConfiguration.class,
        DataConfiguration.class,
        FlywayMigrationConfiguration.class,
        TestUtilConfiguration.class
})
public class ServiceTestConfiguration {

    @Bean
    public UserProfile getUserPrincipal() {
        UserProfile userProfile = new UserProfile();
        userProfile.setName("Sideshow Bob");
        userProfile.setEmail("bobby@gmail.com");
        userProfile.setPicture("http://lorem.picsum/200");
        return userProfile;
    }

    @Bean
    public JobRunrDashboardWebServer dashboardWebServer() {
        return null;
    }
}
