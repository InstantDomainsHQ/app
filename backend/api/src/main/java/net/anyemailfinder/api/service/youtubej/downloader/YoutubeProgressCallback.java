package net.anyemailfinder.api.service.youtubej.downloader;

public interface YoutubeProgressCallback<T> extends YoutubeCallback<T> {

    void onDownloading(int progress);

}
