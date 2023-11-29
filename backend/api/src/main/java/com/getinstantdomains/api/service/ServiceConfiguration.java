package com.getinstantdomains.api.service;


import com.getinstantdomains.api.service.mapper.MapperConfiguration;
import com.getinstantdomains.api.data.DataConfiguration;
import com.getinstantdomains.api.service.websockets.WebSocketConfiguration;
import com.getinstantdomains.api.utils.migration.FlywayMigrationConfiguration;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
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
}
