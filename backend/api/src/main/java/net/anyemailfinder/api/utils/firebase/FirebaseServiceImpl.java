package net.anyemailfinder.api.utils.firebase;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.google.firebase.auth.ExportedUserRecord;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.ListUsersPage;
import com.google.firebase.auth.UserRecord;
import net.anyemailfinder.api.PageableRequest;
import net.anyemailfinder.api.dto.Pair;
import net.anyemailfinder.api.dto.SessionUser;
import net.anyemailfinder.api.props.FirebaseProps;
import net.anyemailfinder.api.props.StaffProps;
import net.anyemailfinder.api.service.utils.HRUtils;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringJoiner;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.text.WordUtils;
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

/**
 * @author Bizuwork Melesse
 * created on 2/13/21
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class FirebaseServiceImpl implements FirebaseService {
    private final TypeReference<HashMap<String, String>> typeRef = new TypeReference<>() {};
    private final ObjectMapper objectMapper;
    private final FirebaseProps firebaseProps;
    private final HttpServletResponse httpServletResponse;
    private final StaffProps staffProps;

    @Override
    public UserRecord createUser(String email, String password, String phoneNumber, String displayName, String photoUrl)
        throws FirebaseAuthException {
        UserRecord.CreateRequest request = new UserRecord.CreateRequest()
                .setEmail(email)
                .setEmailVerified(false)
                .setPassword(password)
                .setPhoneNumber(phoneNumber)
                .setDisplayName(displayName)
                .setPhotoUrl(photoUrl)
                .setDisabled(false);
        return FirebaseAuth.getInstance().createUser(request);
    }

    @Override
    public UserRecord getUserByEmail(String email) {
        try {
            return FirebaseAuth.getInstance().getUserByEmail(email);
        } catch (FirebaseAuthException e) {
            return null;
        }
    }

    @Override
    public String getIdToken(String uid) throws FirebaseAuthException {
        String customToken = FirebaseAuth.getInstance().createCustomToken(uid);
        ObjectNode jsonNode = objectMapper.createObjectNode();
        jsonNode.put("token", customToken);
        jsonNode.put("returnSecureToken", true);
        final CloseableHttpClient httpClient = HttpClients.createDefault();
        final StringEntity params;
        try {
            params = new StringEntity(jsonNode.toString());
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
        HttpPost postRequest = new HttpPost(String.format("%s?key=%s", firebaseProps.getCustomTokenVerificationUrl(),
                firebaseProps.getClientApiKey()));
        postRequest.addHeader("content-type", "application/json");
        postRequest.setEntity(params);
        Map<String, String> response = null;
        try {
            response = objectMapper.readValue(httpClient.execute(postRequest).getEntity().getContent(),
                    typeRef);
            httpClient.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return response.get("idToken");
    }

    @Override
    public void deleteUser(String uid) throws FirebaseAuthException {
        FirebaseAuth.getInstance().deleteUser(uid);
    }

    @Override
    public void createCustomClaims(String uid, List<String> claims) {
        Map<String, Object> customClaims = new HashMap<>();
        try {
            for (String claim : claims) {
                customClaims.put(claim, true);
            }
            FirebaseAuth.getInstance().setCustomUserClaims(uid, customClaims);
        } catch (FirebaseAuthException | NullPointerException e) {
            log.error(e.getLocalizedMessage());
        }
    }

    @Override
    public void updateCustomClaims(String uid, List<String> claims) {
        createCustomClaims(uid, claims);
    }

    @Override
    public String login(String email, String password) throws IOException {
        ObjectNode jsonNode = objectMapper.createObjectNode();
        jsonNode.put("email", email);
        jsonNode.put("password", password);
        jsonNode.put("returnSecureToken", true);
        final CloseableHttpClient httpClient = HttpClients.createDefault();
        final StringEntity params = new StringEntity(jsonNode.toString());
        HttpPost postRequest = new HttpPost(String.format("%s?key=%s", firebaseProps.getPasswordVerificationUrl(),
                firebaseProps.getClientApiKey()));
        postRequest.addHeader("content-type", "application/json");
        postRequest.setEntity(params);
        String token = "";
        try {
            Map<String, String> response = objectMapper.readValue(httpClient.execute(postRequest).getEntity().getContent(),
                    typeRef);
            token = response.get("idToken");
        } catch (Exception e) {
            log.error("Login failure: {}", e.getLocalizedMessage());
            httpClient.close();
        }
        return token;
    }

    @Override
    public UserRecord getUserByPhoneNumber(String phone) {
        try {
            return FirebaseAuth.getInstance().getUserByPhoneNumber(phone);
        } catch (FirebaseAuthException e) {
            return null;
        }
    }

    @Override
    public String getAllUsers(PageableRequest pageableRequest) {
        SessionUser user = HRUtils.getSessionUser();
        if (!staffProps.getEmails().contains(user.getEmail())) {
            HRUtils.raiseHttpError(httpServletResponse, objectMapper, "Unauthorized",
                HttpStatus.SC_UNAUTHORIZED);
            return null;
        }
        try {
            ListUsersPage usersResult = FirebaseAuth.getInstance().listUsers(null,
                pageableRequest.getLimit());
            StringJoiner joiner = new StringJoiner("\n");
            joiner.add("firstName,lastName,email");
            for (ExportedUserRecord record : usersResult.getValues()) {
                Pair<String, String> name = HRUtils.parseFullName(WordUtils.capitalize(record.getDisplayName()));
                String email = !ObjectUtils.isEmpty(record.getEmail()) ? record.getEmail() : "";
                String row = String.format("%s,%s,%s",
                    name.getFirst(),
                    name.getSecond(),
                    email);
                joiner.add(row);
            }
            return joiner.toString();
        } catch (FirebaseAuthException e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
