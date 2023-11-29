package com.getinstantdomains.api;

import com.getinstantdomains.api.data.DataConfiguration;
import com.getinstantdomains.api.props.PropConfiguration;
import com.getinstantdomains.api.service.ServiceConfiguration;
import com.getinstantdomains.api.utils.migration.FlywayPostgresMigration;
import com.getinstantdomains.api.controller.ControllerConfiguration;
import jakarta.annotation.PostConstruct;
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
  private final FlywayPostgresMigration flywayPostgresMigration;

  @PostConstruct
  public void onStart() {
    flywayPostgresMigration.migrate(false);
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
}
