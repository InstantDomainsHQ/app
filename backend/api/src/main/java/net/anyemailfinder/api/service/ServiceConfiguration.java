package net.anyemailfinder.api.service;


import net.anyemailfinder.api.data.DataConfiguration;
import net.anyemailfinder.api.props.MailProps;
import net.anyemailfinder.api.service.mapper.MapperConfiguration;
import net.anyemailfinder.api.service.websockets.WebSocketConfiguration;
import net.anyemailfinder.api.utils.migration.FlywayMigrationConfiguration;
import java.util.Properties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.scheduling.annotation.EnableAsync;

/**
 * @author Bizuwork Melesse
 * created on 2/13/21
 *
 */
@Slf4j
@Configuration
@ComponentScan
@RequiredArgsConstructor
@EnableAsync
@Import({
    DataConfiguration.class,
    MapperConfiguration.class,
    OpenAIConfiguration.class,
    WebSocketConfiguration.class,
    FlywayMigrationConfiguration.class})
public class ServiceConfiguration {
  private final MailProps mailProps;

  @Bean
  public JavaMailSender javaMailSender() {
    JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
    mailSender.setHost("smtp.gmail.com");
    mailSender.setPort(587);

    mailSender.setUsername(mailProps.getEmail());
    mailSender.setPassword(mailProps.getPassword());

    Properties props = mailSender.getJavaMailProperties();
    props.put("mail.transport.protocol", "smtp");
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.starttls.enable", "true");
    props.put("mail.debug", "false");

    return mailSender;
  }
}
