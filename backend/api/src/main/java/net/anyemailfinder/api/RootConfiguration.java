package net.anyemailfinder.api;

import net.anyemailfinder.api.controller.ControllerConfiguration;
import net.anyemailfinder.api.data.DataConfiguration;
import net.anyemailfinder.api.data.postgres.entity.VisitsEntity;
import net.anyemailfinder.api.data.postgres.repo.VisitsRepo;
import net.anyemailfinder.api.props.PropConfiguration;
import net.anyemailfinder.api.service.ServiceConfiguration;
import net.anyemailfinder.api.service.messaging.MessagingService;
import net.anyemailfinder.api.utils.migration.FlywayPostgresMigration;
import jakarta.annotation.PostConstruct;
import java.util.List;
import java.util.concurrent.Executors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.task.TaskExecutionAutoConfiguration;
import org.springframework.boot.web.embedded.tomcat.TomcatProtocolHandlerCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.core.task.AsyncTaskExecutor;
import org.springframework.core.task.support.TaskExecutorAdapter;

/**
 * @author Bizuwork Melesse
 * created on 2/13/21
 */
@Slf4j
@Configuration
@Import({
    ControllerConfiguration.class,
    DataConfiguration.class,
    PropConfiguration.class,
    ServiceConfiguration.class
})
@RequiredArgsConstructor
public class RootConfiguration {
  private final VisitsRepo visitsRepo;
  private final MessagingService messagingService;
  private final FlywayPostgresMigration flywayPostgresMigration;

  @PostConstruct
  public void onStart() {
    flywayPostgresMigration.migrate(false);
    loadVisitedUrls();
  }

  @Bean(TaskExecutionAutoConfiguration.APPLICATION_TASK_EXECUTOR_BEAN_NAME)
  public AsyncTaskExecutor asyncTaskExecutor() {
    return new TaskExecutorAdapter(Executors.newVirtualThreadPerTaskExecutor());
  }

  @Bean
  public TomcatProtocolHandlerCustomizer<?> protocolHandlerVirtualThreadExecutorCustomizer() {
    return protocolHandler -> {
      protocolHandler.setExecutor(Executors.newVirtualThreadPerTaskExecutor());
    };
  }

  private void loadVisitedUrls() {
    List<VisitsEntity> visitedEntities = visitsRepo.findAll();
    for (VisitsEntity visitedEntity : visitedEntities) {
//      messagingService.addVisitedUrl(visitedEntity.getUrl());
    }
  }
}
