package net.anyemailfinder.api.props;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Data
@Configuration
@Primary
@ConfigurationProperties("websocket")
public class WebSocketProps {
    private String broker = "/broker";
    private String appDestination = "/app";
    private String userDestination =  "/user";
    private String queue = "/queue";
    private String stompEndpoint = "/ws";
}
