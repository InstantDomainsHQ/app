package net.anyemailfinder.api.service.emailVerification;

import jakarta.mail.internet.AddressException;
import jakarta.mail.internet.InternetAddress;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.InetAddress;
import java.net.Socket;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.anyemailfinder.api.data.postgres.entity.EmailVerificationEntity;
import net.anyemailfinder.api.data.postgres.entity.LeadsEntity;
import net.anyemailfinder.api.data.postgres.repo.EmailVerificationRepo;
import net.anyemailfinder.api.data.postgres.repo.LeadsRepo;
import net.anyemailfinder.api.service.utils.HRUtils;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.stereotype.Service;
import org.xbill.DNS.Lookup;
import org.xbill.DNS.Record;
import org.xbill.DNS.TextParseException;
import org.xbill.DNS.Type;

/**
 * @author Biz Melesse created on 11/24/23
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class EmailVerificationServiceImpl implements EmailVerificationService {
//  private final JobScheduler jobScheduler;
  private final LeadsRepo leadsRepo;
  private final EmailVerificationRepo emailVerificationRepo;
  private Set<String> disposableEmailDomains = new HashSet<>();
  private Set<String> roleEmailUsernames = new HashSet<>();

  @PostConstruct
  public void onStart() {
    disposableEmailDomains = HRUtils.loadLines("email/disposableEmailProviders.txt");
    roleEmailUsernames = HRUtils.loadLines("email/roleEmails.txt");
  }

  @Override
  public void verifyEmails(Set<String> emails) {
    Set<String> verifiedEmails = leadsRepo.findAllByEmails(emails.stream().toList())
        .stream()
        .filter(LeadsEntity::isVerified)
        .map(LeadsEntity::getEmail)
        .collect(Collectors.toSet());

    Set<String> unverifiedEmails = new HashSet<>(emails);

    /// Retain only the emails that are verified
    unverifiedEmails.retainAll(verifiedEmails);

    // Remove the verified emails from all emails
    emails.removeAll(unverifiedEmails);
    
    // Start the verification process
    for (String email : emails) {
      getEmailVerificationEntity(email);
      Thread.startVirtualThread(() -> verifyRoleEmail(email));
      Thread.startVirtualThread(() -> verifySyntax(email));
      Thread.startVirtualThread(() -> verifyDomainName(email));
      Thread.startVirtualThread(() -> verifyMxRecord(email));
      Thread.startVirtualThread(() -> verifyNotDisposable(email));
      Thread.startVirtualThread(() -> verifySmtp(email));
    }
  }

  private void verifyRoleEmail(String email) {
    EmailVerificationEntity verificationEntity = getEmailVerificationEntity(email);
    String username = getEmailUsername(email);
    if (username != null && roleEmailUsernames.contains(username.toLowerCase())) {
      verificationEntity.setIsRoleEmail(true);
      log.info("Email is role-based: {}", email);
    } else {
      verificationEntity.setIsRoleEmail(false);
    }
    Map<String, Boolean> map = new HashMap<>();
    map.put("isRoleEmail", verificationEntity.getIsRoleEmail());
    updateVerificationEntity(map, email);
  }

  private void verifySyntax(String email) {
    EmailVerificationEntity verificationEntity = getEmailVerificationEntity(email);
    try {
      InternetAddress emailAddr = new InternetAddress(email);
      emailAddr.validate();
      verificationEntity.setIsValidFormat(true);
      log.info("Syntax is valid: {}", email);
    } catch (AddressException ex) {
      verificationEntity.setIsValidFormat(false);
    }
    Map<String, Boolean> map = new HashMap<>();
    map.put("isValidFormat", verificationEntity.getIsValidFormat());
    updateVerificationEntity(map, email);
  }

  private void verifyNotDisposable(String email) {
    EmailVerificationEntity verificationEntity = getEmailVerificationEntity(email);
    if (disposableEmailDomains.contains(email.toLowerCase())) {
      verificationEntity.setIsDisposableEmail(true);
      log.info("Email not disposable: {}", email);
    } else {
      verificationEntity.setIsDisposableEmail(false);
    }
    Map<String, Boolean> map = new HashMap<>();
    map.put("isDisposable", verificationEntity.getIsDisposableEmail());
    updateVerificationEntity(map, email);
  }

  private void verifyMxRecord(String email) {
    EmailVerificationEntity verificationEntity = getEmailVerificationEntity(email);
    if (!verificationEntity.getIsMxValid()) {
      if (hasMXRecords(getEmailDomain(email))) {
        verificationEntity.setIsMxValid(true);
        log.info("MX record valid: {}", email);
      } else {
        verificationEntity.setIsMxValid(false);
      }
      Map<String, Boolean> map = new HashMap<>();
      map.put("isMxValid", verificationEntity.getIsMxValid());
      updateVerificationEntity(map, email);
    }
  }

  private void verifyDomainName(String email) {
    EmailVerificationEntity verificationEntity = getEmailVerificationEntity(email);
    if (!verificationEntity.getIsDomainValid()) {
      if (isDomainValid(getEmailDomain(email))) {
        verificationEntity.setIsDomainValid(true);
        log.info("Domain is valid: {}", email);
      } else {
        verificationEntity.setIsDomainValid(false);
      }
      Map<String, Boolean> map = new HashMap<>();
      map.put("isDomainValid", verificationEntity.getIsDomainValid());
      updateVerificationEntity(map, email);
    }
  }

  private void verifySmtp(String email) {
    EmailVerificationEntity verificationEntity = getEmailVerificationEntity(email);
    if (!verificationEntity.getIsSmtpValid()) {
      String url = getSmtpServerUrl(getEmailDomain(email));
      if (!ObjectUtils.isEmpty(url)) {
        try {
          InetAddress inetAddress = InetAddress.getByName(url);
          // Reachability test is not reliable so we'll simply consider any url that resolves to a valid
          // IP address to be valid
          verificationEntity.setIsSmtpValid(true);
          log.info("SMTP is valid: {}", email);
//          boolean isReachable = inetAddress.isReachable(30000); // Timeout in milliseconds (5 seconds in this case)
        } catch (Exception e) {
          verificationEntity.setIsSmtpValid(false);
        }
      }
      Map<String, Boolean> map = new HashMap<>();
      map.put("isSmtpValid", verificationEntity.getIsSmtpValid());
      updateVerificationEntity(map, email);
    }
  }

  private synchronized void updateVerificationEntity(Map<String, Boolean> map, String email) {
    EmailVerificationEntity verificationEntity = getEmailVerificationEntity(email);
    if (map.containsKey("isValidFormat")) {
      verificationEntity.setIsValidFormat(map.get("isValidFormat"));
    } else if (map.containsKey("isRoleEmail")) {
      verificationEntity.setIsRoleEmail(map.get("isRoleEmail"));
    } else if (map.containsKey("isDisposable")) {
      verificationEntity.setIsDisposableEmail(map.get("isDisposable"));
    } else if (map.containsKey("isMxValid")) {
      verificationEntity.setIsMxValid(map.get("isMxValid"));
    } else if (map.containsKey("isDomainValid")) {
      verificationEntity.setIsDomainValid(map.get("isDomainValid"));
    } else if (map.containsKey("isSmtpValid")) {
      verificationEntity.setIsSmtpValid(map.get("isSmtpValid"));
    }
    verificationEntity.setUpdatedAt(LocalDateTime.now());
    emailVerificationRepo.save(verificationEntity);
    monitorEmailVerificationStatus(email);
  }

  private void monitorEmailVerificationStatus(String email) {
    EmailVerificationEntity verificationEntity = getEmailVerificationEntity(email);
    if (verificationEntity.getIsDomainValid() &&
        verificationEntity.getIsMxValid() &&
        verificationEntity.getIsSmtpValid() &&
        verificationEntity.getIsValidFormat()
//        && !verificationEntity.getIsRoleEmail() &&
//        !verificationEntity.getIsDisposableEmail()
    ) {
      LeadsEntity leadsEntity = leadsRepo.findByEmail(email);
      leadsEntity.setVerified(true);
      leadsEntity.setUpdatedAt(LocalDateTime.now());
      leadsRepo.save(leadsEntity);
    }
  }

  private EmailVerificationEntity getEmailVerificationEntity(String email) {
    EmailVerificationEntity verificationEntity = emailVerificationRepo.findByEmail(email);
    if (verificationEntity == null) {
      verificationEntity = new EmailVerificationEntity();
      verificationEntity.setLeadId(leadsRepo.findLeadId(email));
      verificationEntity.setUpdatedAt(LocalDateTime.now());
      emailVerificationRepo.save(verificationEntity);
    }
    return verificationEntity;
  }

  private String getEmailDomain(String email) {
    int atIndex = email.indexOf('@');
    if (atIndex != -1) {
      return email.substring(atIndex + 1);
    }
    return null;
  }

  private String getEmailUsername(String email) {
    int atIndex = email.indexOf('@');
    if (atIndex != -1) {
      return email.substring(0, atIndex);
    }
    return null;
  }

  private boolean isDomainValid(String domain) {
    try {
      InetAddress.getByName(domain);
      return true;
    } catch (Exception e) {
      return false;
    }
  }

  private boolean hasMXRecords(String domain) {
    try {
      Record[] records = new Lookup(domain, Type.MX).run();
      return records != null && records.length > 0;
    } catch (TextParseException e) {
      return false;
    }
  }

  private String getSmtpServerUrl(String domain) {
      try {
        Optional<Record> recordOpt =  Stream.of(new Lookup(domain, Type.MX).run())
            .max(Comparator.comparingInt(Record::getRRsetType));
        if (recordOpt.isPresent()) {
          return recordOpt.get().getAdditionalName().toString();
        }
      } catch (TextParseException e) {
        //;
      }
      return null;
  }

  private void verifySmtpWithCommands(String email) {
    EmailVerificationEntity verificationEntity = getEmailVerificationEntity(email);
    if (!verificationEntity.getIsSmtpValid()) {
      String url = getSmtpServerUrl(getEmailDomain(email));
      int port = 25;

      try {
        // Connect to the SMTP server
        Socket socket = new Socket(url, port);
        BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        BufferedWriter writer = new BufferedWriter(
            new OutputStreamWriter(socket.getOutputStream()));

        // Read the welcome message
        String response = reader.readLine();
        System.out.println("Server: " + response);

        // Send EHLO command to initiate the SMTP handshake
        sendCommand(writer, "EHLO " + url);

        // Read and print the response
        response = reader.readLine();
        System.out.println("Server: " + response);

        sendCommand(writer, String.format("MAIL FROM:<%s>", email));

        // Read and print the response
        response = reader.readLine();
        System.out.println("Server: " + response);

        // Attempt to send an email and check the status code
        sendCommand(writer, String.format("RCPT TO:<%s> NOTIFY=success,failure", email));

        // Read and print the response
        response = reader.readLine();
        System.out.println("Server: " + response);

        // Close the connection
        socket.close();

        // If we got this far then that means email is reachable
        verificationEntity.setIsSmtpValid(true);
        verificationEntity.setUpdatedAt(LocalDateTime.now());
        emailVerificationRepo.save(verificationEntity);
      } catch (IOException e) {
        log.error(e.getLocalizedMessage());
      }
    }
  }

  private static void sendCommand(BufferedWriter writer, String command) {
    try {
      writer.write(command + "\r\n");
      writer.flush();
    } catch (IOException e) {
      log.error(e.getLocalizedMessage());
    }

  }

}
