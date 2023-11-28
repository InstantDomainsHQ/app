package net.anyemailfinder.api.service.user;


import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.startsWith;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.anyemailfinder.api.UserProfileResponse;
import net.anyemailfinder.api.utils.ServiceTestHelper;
import net.anyemailfinder.api.utils.migration.FlywayPostgresMigration;
import net.anyemailfinder.api.data.postgres.entity.UserEntity;
import net.anyemailfinder.api.data.postgres.repo.UserRepo;
import net.anyemailfinder.api.service.ServiceTestConfiguration;
import java.lang.reflect.Method;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

/**
 * @author Bizuwork Melesse
 * created on 2/13/22
 */
@Slf4j
@SpringBootTest(classes = ServiceTestConfiguration.class)
public class UserServiceIntegrationTest extends AbstractTestNGSpringContextTests {

    @Autowired
    private UserService userService;

    @Autowired
    private FlywayPostgresMigration flywayPostgresMigration;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ServiceTestHelper testHelper;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeClass
    public void setup() {
        testHelper.prepareSecurity(null);
    }

    @AfterClass
    public void tearDown() {
    }

    @BeforeMethod
    public void beforeEachTest(Method method) {
        flywayPostgresMigration.migrate(true);
        log.info("  Testcase: " + method.getName() + " has started");
    }

    @AfterMethod
    public void afterEachTest(Method method) {
        log.info("  Testcase: " + method.getName() + " has ended");
    }

    @Test
    public void createUserTest() throws InterruptedException {
        UserProfileResponse response = userService.getOrCreateUserprofile();
        assertThat(response, is(notNullValue()));
        assertThat(response.getProfile().getName(), is(notNullValue()));
        assertThat(response.getProfile().getEmail(), is(notNullValue()));
        assertThat(response.getProfile().getUserId(), is(notNullValue()));
        Thread.sleep(5000);
        List<UserEntity> allUsers = userRepo.findAll();
        assertThat(allUsers, is(notNullValue()));
        assertThat(allUsers.size(), is(equalTo(1)));
        UserEntity user = allUsers.get(0);
        assertThat(user.getCreatedAt(), is(notNullValue()));
        assertThat(user.getUpdatedAt(), is(notNullValue()));
        assertThat(user.getEmail(), startsWith(response.getProfile().getEmail()));
        assertThat(user.getIsPremiumUser(), is(notNullValue()));

//        EntitlementEntity entitlements = entitlementRepo.findByUserId(user.getId());
//        assertThat(entitlements, is(notNullValue()));
//        assertThat(entitlements.getMaxCpuTime(), is(equalTo(10L)));
//        assertThat(entitlements.getMaxExecutionTime(), is(equalTo(30000L)));
//        assertThat(entitlements.getMaxMemoryUsage(), is(equalTo(134217728L)));
//        assertThat(entitlements.getMaxDataTransfer(), is(equalTo(104857600L)));
//        assertThat(entitlements.getMaxFunctions(), is(equalTo(10L)));
//        assertThat(entitlements.getMaxFunctions(), is(equalTo(10L)));
//        assertThat(entitlements.getMaxHttpCalls(), is(equalTo(10L)));
//        assertThat(entitlements.getMaxProjects(), is(equalTo(1L)));
    }
}
