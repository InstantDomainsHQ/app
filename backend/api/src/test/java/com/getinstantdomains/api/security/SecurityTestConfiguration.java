package com.getinstantdomains.api.security;

import com.getinstantdomains.api.data.DataConfiguration;
import com.getinstantdomains.api.props.PropConfiguration;
import com.getinstantdomains.api.utils.firebase.FirebaseSDKConfig;
import com.getinstantdomains.api.utils.migration.FlywayMigrationConfiguration;
import com.getinstantdomains.api.UserProfile;
import com.getinstantdomains.api.utils.TestUtilConfiguration;
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
    FirebaseSDKConfig.class,
    PropConfiguration.class,
    TestUtilConfiguration.class,
    DataConfiguration.class,
    FlywayMigrationConfiguration.class,
})
public class SecurityTestConfiguration {

    @Bean
    public UserProfile getUserPrincipal() {
      UserProfile userProfile = new UserProfile();
      userProfile.setName("Sideshow Bob");
      userProfile.setEmail("bobby@gmail.com");
      userProfile.setPicture("http://lorem.picsum/200");
        return userProfile;
    }
}
