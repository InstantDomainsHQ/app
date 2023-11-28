package net.anyemailfinder.api.service.mail;

/**
 * @author Biz Melesse created on 9/12/23
 */
public interface MailService {
  void sendEmail(String to, String from, String subject, String body);

  /**
   * Add a new subscriber and send a welcome email
   */
  void addNewSubscriber();
}
