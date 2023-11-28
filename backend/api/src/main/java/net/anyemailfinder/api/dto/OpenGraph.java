package net.anyemailfinder.api.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * @author Biz Melesse created on 11/19/23
 */
@Getter @Setter
public class OpenGraph {
  private String url;
  private String image;
  private String title;
  private String siteName;
  private String description;
}
