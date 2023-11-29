package com.getinstantdomains.api.utils.security;

import com.getinstantdomains.api.utils.security.firebase.FirebaseSecurityConfiguration;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * @author Bizuwork Melesse
 * created on 2/13/21
 *
 */
@Configuration
@Import({
        FirebaseSecurityConfiguration.class
})
@RequiredArgsConstructor
public class SecurityConfiguration {
}
