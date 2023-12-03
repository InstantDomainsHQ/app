package com.getinstantdomains.api.service.domain;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.getinstantdomains.api.DomainWhoIs;
import com.getinstantdomains.api.GenerateRequest;
import com.getinstantdomains.api.TaskId;
import com.getinstantdomains.api.WebsocketPayload;
import com.getinstantdomains.api.data.postgres.entity.DomainEntity;
import com.getinstantdomains.api.data.postgres.entity.TldEntity;
import com.getinstantdomains.api.data.postgres.repo.DomainRepo;
import com.getinstantdomains.api.data.postgres.repo.TldRepo;
import com.getinstantdomains.api.props.DomainProps;
import com.getinstantdomains.api.props.OpenAiProps;
import com.getinstantdomains.api.props.WebSocketProps;
import com.getinstantdomains.api.service.gpt.GptService;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.Proxy;
import java.net.Socket;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import sockslib.client.Socks5;
import sockslib.client.SocksSocket;

/**
 * @author Biz Melesse created on 11/28/23
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class DomainServiceImpl implements DomainService {
  private final GptService gptService;
  private final OpenAiProps openAiProps;
  private final DomainProps domainProps;
  private final TldRepo tldRepo;
  private final DomainRepo domainRepo;
  private final WebSocketProps webSocketProps;
  private final SimpMessagingTemplate messagingTemplate;
  private final ObjectMapper objectMapper;
  private final OkHttpClient httpClient = new OkHttpClient();

  @Override
  public TaskId generateDomains(GenerateRequest generateRequest) {
    whoisRequest("domain");
//    if (!ObjectUtils.isEmpty(generateRequest.getQuery()) &&
//        generateRequest.getQuery().split(" ").length > 1) {
//      String taskId = "t_" + IDUtils.generateUid(IDUtils.SHORT_UID_LENGTH);
//      gptService.gptCompletion(
//          generateRequest.getClientId(),
//          openAiProps.getDomainGeneratePrompt(),
//          generateRequest.getQuery(), this);
//      return new TaskId().taskId(taskId);
//    }
    return new TaskId();
  }

  @Override
  public void performWhois(String domain, final String clientId) {
    domain = domain.toLowerCase().strip().replace(" ", "");
//    System.out.printf("WHOIS: %s: %s: %s\n", Instant.now().getEpochSecond(), clientId, domain);
    DomainEntity domainEntity = domainRepo.findByDomainName(domain);
    if (domainEntity == null) {
      domainEntity = new DomainEntity();
      domainEntity.setDomainName(domain);
      domainRepo.save(domainEntity);
    }
    final DomainEntity d = domainEntity;
    Thread.startVirtualThread(() -> sendDomainNameToClient(d, clientId));

    final List<TldEntity> tlds = tldRepo.findAllByTld(domain, domainProps.getTlds().stream().toList());

    Thread.startVirtualThread(() -> sendTldsToClient(d, tlds, clientId));

    domainProps.getTlds().stream().forEach(it -> {
      Thread.startVirtualThread(() -> whois(d, it, clientId));
    });
  }

  private void whois(DomainEntity domain, String tld, String clientId) {
    String fullDomain = domain.getDomainName() + tld;

    // Do whois lookup here
//    String whoisResponse = callWhoisProxy(domain, tld);
    whoisRequest("domain");


    // Update any existing record
    List<TldEntity> tldEntities = tldRepo.findAllByTld(domain.getDomainName(), List.of(tld));
    TldEntity tldEntity = null;
    if (!ObjectUtils.isEmpty(tldEntities)) {
      tldEntity = tldEntities.get(0);
    } else {
      tldEntity = new TldEntity();
      tldEntity.setTld(tld);
      tldEntity.setDomainId(domain.getId());
    }

    // Update with the latest data and save
    tldEntity.setRegisteredAt(LocalDateTime.now());
    tldEntity.setExpiresAt(LocalDateTime.now());
    tldEntity.setRegistrarUrl("hi");
    tldEntity.setRegistrarName("hi");
    tldEntity.setWhoisUrl("hi");
    tldRepo.save(tldEntity);

    // Send to client
    sendTldsToClient(domain, List.of(tldEntity), clientId);
  }

  private String getWhoIsServer(String tld) {
    String[] parts = tld.split("\\.");
    String tldSuffix = parts[parts.length - 1];
    return null;

  }

  private String whoisRequest(String domain) {
    // Set the SOCKS proxy details
    String proxyHost = "p.webshare.io";
    proxyHost = "82.165.209.112";
//    proxyHost = "foodwallah.com";
    int proxyPort = 1080;
    String proxyUsername = "uqkfmujm-US-rotate";
    String proxyPassword = "7o7on85qml8d";

    // Set the WHOIS server details for github.com
    String whoisServer = "whois.verisign-grs.com";
    int whoisPort = 43;

    try {
      // Create a SOCKS proxy with authentication
      Socks5 proxy = new Socks5(new InetSocketAddress(proxyHost, proxyPort));
//      proxy.setCredentials(new UsernamePasswordCredentials(proxyUsername, proxyPassword));

      // Create a SocksSocket using the proxy
      SocksSocket socket = new SocksSocket(proxy, new InetSocketAddress(whoisServer, whoisPort));

      // Send WHOIS query
      String query = "github.com";
      socket.getOutputStream().write(query.getBytes());

      // Read and print the WHOIS response
      BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
      while (socket.isConnected()) {
        String line = reader.readLine();
        if (line != null) {
          log.info("SOCKET DATA: {}", line);
        }
      }

      // Close the socket when done
      socket.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
    return null;
  }

  private String whoisRequest2(String domain) {
    // Set the SOCKS proxy details
    String proxyHost = "p.webshare.io";
    int proxyPort = 80;
    String proxyUsername = "uqkfmujm-US-rotate";
    String proxyPassword = "7o7on85qml8d";

    // Set the WHOIS server details for github.com
    String whoisServer = "whois.verisign-grs.com'";
    int whoisPort = 43;

    try {
      // Create a Proxy with SOCKS5 and authentication
      Proxy proxy = new Proxy(Proxy.Type.SOCKS, new InetSocketAddress(proxyHost, proxyPort));

      // Create a Socket using the proxy
      Socket socket = new Socket(proxy);

      // Send SOCKS5 authentication
      sendSocks5Authentication(socket.getOutputStream(), proxyUsername, proxyPassword);

      // Connect to the SOCKS proxy
      socket.connect(new InetSocketAddress(proxyHost, proxyPort));

      // Connect to the WHOIS server
      socket.connect(new InetSocketAddress(whoisServer, whoisPort));

      // Send WHOIS query
      String query = "github.com\r\n";
      socket.getOutputStream().write(query.getBytes());

      // Read and print the WHOIS response
      BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
      String line;
      while ((line = reader.readLine()) != null) {
        System.out.println(line);
      }

      // Close the socket when done
      socket.close();
    } catch (Exception e) {
      e.printStackTrace();
    }
    return null;
  }

  private static void sendSocks5Authentication(OutputStream outputStream, String username, String password) throws IOException {
    // Version 5, 2 authentication methods (NO AUTHENTICATION and USERNAME/PASSWORD)
    byte[] authMethods = {5, 2, 2};
    outputStream.write(authMethods);

    // Send username and password
    byte[] usernameBytes = username.getBytes();
    byte[] passwordBytes = password.getBytes();

    outputStream.write(usernameBytes.length);
    outputStream.write(usernameBytes);

    outputStream.write(passwordBytes.length);
    outputStream.write(passwordBytes);
  }

  private String callWhoisProxy(DomainEntity domain, String tld) {
    String url = String.format("http://localhost:8181/whois/%s%s", domain.getDomainName(), tld);
    String responseBody = null;
    // Create a Request object with the specified URL
    Request request = new Request.Builder()
        .url(url)
        .get()
        .build();

    try {
      try (Response response = httpClient.newCall(request).execute()) {
        if (response.isSuccessful()) {
          if (response.body() != null) {
            responseBody = response.body().string();
          }
          log.info("Response: " + responseBody);
        } else {
         log.error("WhoIs failed: {}", response.code());
        }
      }
    } catch (Exception e) {
      log.error(e.getLocalizedMessage());
    }
    return responseBody;
  }

  private void sendTldsToClient(DomainEntity domainEntity, List<TldEntity> tlds, String clientId) {
    for (TldEntity tld : tlds) {
      sendToClient(new DomainWhoIs()
              .name(domainEntity.getDomainName())
              .id(domainEntity.getId())
              .tld(tld.getTld())
              .isAvailable(domainIsAvailable(tld))
              .expiresAt(getTimestamp(tld.getExpiresAt()))
              .registeredAt(getTimestamp(tld.getRegisteredAt()))
              .registrarName(tld.getRegistrarName())
              .registrarUrl(tld.getRegistrarUrl()),
          clientId);
    }
  }

  private Long getTimestamp(LocalDateTime time) {
    if (time != null) {
      return time.toEpochSecond(ZoneOffset.UTC);
    }
    return null;
  }

  private Boolean domainIsAvailable(TldEntity tld) {
    return tld.getRegisteredAt() == null || tld.getExpiresAt() != null && tld.getExpiresAt().isAfter(
        LocalDateTime.now());
  }

  private void sendDomainNameToClient(DomainEntity domainEntity, String clientId) {
    sendToClient(new DomainWhoIs()
        .name(domainEntity.getDomainName())
        .id(domainEntity.getId()),
        clientId);
  }

  private void sendToClient(DomainWhoIs whoIs, String clientId) {
    WebsocketPayload payload = new WebsocketPayload()
        .type(DomainWhoIs.class.getSimpleName())
        .data(whoIs);
//    _log(payload);
    messagingTemplate.convertAndSendToUser(
        clientId,
        webSocketProps.getQueue(),
        payload
    );
  }

  private void _log(Object o) {
    try {
      log.info(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(o));
    } catch (JsonProcessingException e) {
      log.error(e.getLocalizedMessage());
    }
  }
}
