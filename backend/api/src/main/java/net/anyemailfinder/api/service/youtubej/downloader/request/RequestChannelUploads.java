package net.anyemailfinder.api.service.youtubej.downloader.request;

import net.anyemailfinder.api.service.youtubej.model.playlist.PlaylistInfo;

public class RequestChannelUploads extends Request<RequestPlaylistInfo, PlaylistInfo>  {

    private final String channelId;

    public RequestChannelUploads(String channelId) {
        this.channelId = channelId;
    }

    public String getChannelId() {
        return channelId;
    }

}
