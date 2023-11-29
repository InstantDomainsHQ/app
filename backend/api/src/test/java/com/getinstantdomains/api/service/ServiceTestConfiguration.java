package com.getinstantdomains.api.service;


import com.getinstantdomains.api.data.DataConfiguration;
import com.getinstantdomains.api.props.PropConfiguration;
import com.getinstantdomains.api.utils.mapper.ObjectMapperConfiguration;
import com.getinstantdomains.api.utils.migration.FlywayMigrationConfiguration;
import com.getinstantdomains.api.utils.TestUtilConfiguration;
import com.getinstantdomains.api.UserProfile;
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
