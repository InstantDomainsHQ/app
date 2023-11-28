package net.anyemailfinder.api.service.youtubej.downloader.request;

import net.anyemailfinder.api.service.youtubej.model.playlist.PlaylistInfo;

public class RequestPlaylistInfo extends Request<RequestPlaylistInfo, PlaylistInfo> {

    private final String playlistId;

    public RequestPlaylistInfo(String playlistId) {
        this.playlistId = playlistId;
    }

    public String getPlaylistId() {
        return playlistId;
    }
}
