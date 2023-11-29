package com.getinstantdomains.api.utils;

import com.getinstantdomains.api.dto.SessionUser;
import com.getinstantdomains.api.service.utils.IDUtils;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.mockito.Mockito;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.nio.file.Files;

/**
 * @author Bizuwork Melesse
 * created on 2/17/22
 */
@Service
@RequiredArgsConstructor
public class ServiceTestHelper {

    public void prepareSecurity(String userId) {
        Authentication authentication = Mockito.mock(Authentication.class);
        SessionUser user = new SessionUser();
        user.setName("TestNG User");
        user.setEmail("testuser@exampe.com");
        user.setApiKey("fh-" + IDUtils.generateUid(IDUtils.API_KEY_LENGTH));
        user.setUserId(userId == null ? UUID.randomUUID().toString() : userId);
        user.setMaxLeadLimit(10L);
        Mockito.when(authentication.getPrincipal()).thenReturn(user);

        SecurityContext securityContext = Mockito.mock(SecurityContext.class);
        Mockito.when(securityContext.getAuthentication()).thenReturn(authentication);
        SecurityContextHolder.setContext(securityContext);
    }

    public void setSessionUser(SessionUser sessionUser) {
        Authentication authentication = Mockito.mock(Authentication.class);
        Mockito.when(authentication.getPrincipal()).thenReturn(sessionUser);
        SecurityContext securityContext = Mockito.mock(SecurityContext.class);
        Mockito.when(securityContext.getAuthentication()).thenReturn(authentication);
        SecurityContextHolder.setContext(securityContext);
    }

    public String loadFile(String path) {
        File file = null;
        try {
            file = ResourceUtils.getFile(path);
            try {
                return new String(Files.readAllBytes(file.toPath()));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    public String loadFromFile(String path) {
        InputStream resource = null;
        try {
            resource = new ClassPathResource(path).getInputStream();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(resource)) ) {
            return FileCopyUtils.copyToString(reader);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
