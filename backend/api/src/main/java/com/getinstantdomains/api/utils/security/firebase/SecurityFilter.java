package com.getinstantdomains.api.utils.security.firebase;

import static java.nio.charset.StandardCharsets.UTF_8;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.getinstantdomains.api.data.postgres.repo.UserRepo;
import com.getinstantdomains.api.dto.SessionUser;
import com.getinstantdomains.api.props.EntitlementProps;
import com.getinstantdomains.api.utils.firebase.FirebaseService;
import com.getinstantdomains.api.utils.security.Credentials;
import com.getinstantdomains.api.utils.security.UnsecurePaths;
import org.apache.http.HttpStatus;
import org.jetbrains.annotations.NotNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

/**
 * @author Bizuwork Melesse
 * created on 02/13/22
 *
 * Implements a custom user authentication filter using Firebase.
 * If Firebase fails to decode the Bearer token for any reason, the request
 * will fail and a 401 will be returned to the user.
 *
 * In addition to authentication, we also populate the user principal. The user
 * principal is a custom User object that stores all the attributes of the user
 * from Firebase. The most important of these attributes is the user claims.
 * User claims are stored as ROLES and are used to authorize the user to specific
 * services throughout the application.
 *
 * Authorization is a post-filter actions. Overall, there are three levels of security.
 * The first is url pattern- and http method-based authorization of the request. And then
 * the request is filtered down for authentication against Firebase. Finally,
 * authenticated users are authorized to access specific services based on the assigned
 * roles.
 *
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class SecurityFilter extends OncePerRequestFilter {
    private final FirebaseService firebaseService;
    private final UnsecurePaths unsecurePaths;
    private final UserRepo userRepo;
    private final EntitlementProps entitlementProps;

  @Override
  protected void doFilterInternal(HttpServletRequest httpServletRequest,
      @NotNull HttpServletResponse httpServletResponse,
      @NotNull FilterChain filterChain) throws IOException, ServletException {
    // All non-preflight requests must have a valid authorization token
    boolean methodExcluded = Stream.of("options")
      .anyMatch(method -> httpServletRequest.getMethod().toLowerCase().contains(method));
    if (httpServletRequest.getRequestURI().toLowerCase().contains("/favicon.ico")) {
      return;
    }
    boolean uriExcluded = unsecurePaths.allow(httpServletRequest.getRequestURI());
    if (!(methodExcluded || uriExcluded ||
        unsecurePaths.allowedOrigin(httpServletRequest.getRemoteHost(),
            httpServletRequest.getRequestURI()))) {
      verifyToken(httpServletRequest, httpServletResponse);
    }
    filterChain.doFilter(httpServletRequest, httpServletResponse);
  }

  private void verifyToken(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws IOException {
      String bearerToken = getBearerToken(httpServletRequest);
      SessionUser user = null;
      Credentials credentials = new Credentials();

      FirebaseToken decodedToken = null;
      try {
        decodedToken = FirebaseAuth.getInstance().verifyIdToken(bearerToken);
      } catch (Exception ex) {
        httpServletResponse.setStatus(HttpStatus.SC_UNAUTHORIZED);
        return;
      }
      user = firebaseTokenToUser(decodedToken);
      user.setAnonymous(false);
      credentials.setAuthToken(bearerToken);
      credentials.setDecodedFirebaseToken(decodedToken);
      UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(user, credentials,
          getAuthorities(user.getRoles()));
      authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
      SecurityContextHolder.getContext().setAuthentication(authentication);
  }

  private SessionUser firebaseTokenToUser(FirebaseToken decodedToken) {
    SessionUser user = new SessionUser();
      if (decodedToken != null) {
          user.setUserId(decodedToken.getUid());
          user.setName(decodedToken.getName());
          user.setEmail(decodedToken.getEmail());
          user.setAvatar(decodedToken.getPicture());
          Map<String, Boolean> parsedClaims = new HashMap<>();
          final Map<String, Object> claimsToParse = decodedToken.getClaims();
          for (Map.Entry<String, Object> entry : claimsToParse.entrySet()) {
              if (entry.getKey().startsWith("ROLE_")) {
                  parsedClaims.put(entry.getKey(), (Boolean) entry.getValue());
              }
          }
          user.setRoles(parsedClaims);
      }
      return user;
  }

  private String getBearerToken(@NotNull HttpServletRequest httpServletRequest) throws IOException {
      String bearerToken = "";
      String authorization = httpServletRequest.getHeader("Authorization");
      if (StringUtils.hasText(authorization)) {
          if (authorization.startsWith("Bearer ")) {
              bearerToken = authorization.substring(7);
          } else if (authorization.startsWith("Token ")) {
              bearerToken = authorization.substring(6);
          } else if (authorization.startsWith("Basic ")) {
              String credentials = new String(Base64.getDecoder().decode(authorization.substring(6)), UTF_8);
              String email = credentials.split(":")[0];
              String password = credentials.split(":")[1];
              bearerToken = firebaseService.login(email, password);
          } else {
              bearerToken = authorization;
          }
      } else {
        Optional<Cookie> cookie = Arrays.stream(httpServletRequest.getCookies())
            .filter(it -> it.getName().equals("Authorization"))
            .findFirst();
        if (cookie.isPresent()) {
          bearerToken = cookie.get().getValue();
        }
      }
      return bearerToken;
  }

  private Collection<GrantedAuthority> getAuthorities(Map<String, Boolean> claims) {
      Collection<GrantedAuthority> authorities = new ArrayList<>();
      for (Map.Entry<String, Boolean> claim: claims.entrySet()) {
          if (claim.getKey().startsWith("ROLE_") && claim.getValue()) {
              authorities.add(new SimpleGrantedAuthority(claim.getKey()));
          }
      }
      return authorities;
  }
}
