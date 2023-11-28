package net.anyemailfinder.api.service.youtubej.parser;

import net.anyemailfinder.api.service.youtubej.downloader.request.RequestChannelUploads;
import net.anyemailfinder.api.service.youtubej.downloader.request.RequestPlaylistInfo;
import net.anyemailfinder.api.service.youtubej.downloader.request.RequestSearchContinuation;
import net.anyemailfinder.api.service.youtubej.downloader.request.RequestSearchResult;
import net.anyemailfinder.api.service.youtubej.downloader.request.RequestSearchable;
import net.anyemailfinder.api.service.youtubej.downloader.request.RequestSubtitlesInfo;
import net.anyemailfinder.api.service.youtubej.downloader.request.RequestVideoInfo;
import net.anyemailfinder.api.service.youtubej.downloader.response.Response;
import net.anyemailfinder.api.service.youtubej.model.playlist.PlaylistInfo;
import net.anyemailfinder.api.service.youtubej.model.search.SearchResult;
import net.anyemailfinder.api.service.youtubej.model.subtitles.SubtitlesInfo;
import net.anyemailfinder.api.service.youtubej.model.videos.VideoInfo;
import java.util.List;

public interface Parser {

    /* Video */

    Response<VideoInfo> parseVideo(RequestVideoInfo request);

    /* Playlist */

    Response<PlaylistInfo> parsePlaylist(RequestPlaylistInfo request);

    /* Channel uploads */

    Response<PlaylistInfo> parseChannelsUploads(RequestChannelUploads request);

    /* Subtitles */

    Response<List<SubtitlesInfo>> parseSubtitlesInfo(RequestSubtitlesInfo request);

    /* Search */

    Response<SearchResult> parseSearchResult(RequestSearchResult request);

    Response<SearchResult> parseSearchContinuation(RequestSearchContinuation request);

    Response<SearchResult> parseSearcheable(RequestSearchable request);

}
