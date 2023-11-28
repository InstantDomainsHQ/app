package net.anyemailfinder.api.service.mail;

import net.anyemailfinder.api.dto.Pair;
import net.anyemailfinder.api.dto.SessionUser;
import net.anyemailfinder.api.service.utils.HRUtils;
import java.util.HashMap;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.anyemailfinder.api.props.MailBlusterProps;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

/**
 * @author Biz Melesse created on 9/12/23
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class MailServiceImpl implements MailService {
  private final JavaMailSender javaMailSender;
  private final MailBlusterProps mailBlusterProps;

  @Override
  public void sendEmail(final String to, final String from, final String subject, final String body) {
    Thread.startVirtualThread(() -> {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);
        javaMailSender.send(message);
    });
  }

  @Override
  public void addNewSubscriber() {
    SessionUser user = HRUtils.getSessionUser();
    String url = mailBlusterProps.getBaseUrl() + mailBlusterProps.getLeadsPath();
    Map<String, Object> body = new HashMap<>();
    Pair<String, String> name = HRUtils.parseFullName(user.getName());
    body.put("firstName", name.getFirst());
    body.put("lastName", name.getSecond());
    body.put("email", user.getEmail());
    body.put("subscribed", true);
    HRUtils.httpRequest(body, url, getClass().getSimpleName() + ".submitExecutionTask",
        mailBlusterProps.getApiKey());
  }
}
