package net.anyemailfinder.api.service.youtubej.downloader;

public interface YoutubeCallback<T> {

    void onFinished(T data);

    void onError(Throwable throwable);
}
