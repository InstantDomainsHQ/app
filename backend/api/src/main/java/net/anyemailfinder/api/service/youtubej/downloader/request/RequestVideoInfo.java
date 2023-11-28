package net.anyemailfinder.api.service.youtubej.downloader.request;

import net.anyemailfinder.api.service.youtubej.model.videos.VideoInfo;

public class RequestVideoInfo extends Request<RequestVideoInfo, VideoInfo> {

    private final String videoId;

    public RequestVideoInfo(String videoId) {
        this.videoId = videoId;
    }

    public String getVideoId() {
        return videoId;
    }
}
