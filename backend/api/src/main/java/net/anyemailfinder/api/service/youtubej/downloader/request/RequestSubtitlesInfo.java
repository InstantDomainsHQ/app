package net.anyemailfinder.api.service.youtubej.downloader.request;

import net.anyemailfinder.api.service.youtubej.model.subtitles.SubtitlesInfo;
import java.util.List;

public class RequestSubtitlesInfo extends Request<RequestSubtitlesInfo, List<SubtitlesInfo>> {

    private final String videoId;

    public RequestSubtitlesInfo(String videoId) {
        this.videoId = videoId;
    }

    public String getVideoId() {
        return videoId;
    }
}
