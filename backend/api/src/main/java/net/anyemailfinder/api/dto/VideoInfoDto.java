package net.anyemailfinder.api.dto;

import lombok.Getter;
import lombok.Setter;
import net.anyemailfinder.api.service.youtubej.model.videos.VideoInfo;
import net.anyemailfinder.api.service.youtubej.model.videos.formats.Format;

/**
 * @author Biz Melesse
 * created on 11/16/22
 */
@Getter
@Setter
public class VideoInfoDto {
  private Format format;
  private VideoInfo videoInfo;
  private String url;
  private String imageUrl;
  private String caption;
  private String permalink;
  private String mediaIdOverride;
}
