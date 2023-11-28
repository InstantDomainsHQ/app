package net.anyemailfinder.api.service.youtubej.downloader.request;

import net.anyemailfinder.api.service.youtubej.model.search.SearchResult;
import net.anyemailfinder.api.service.youtubej.model.search.query.Searchable;

public class RequestSearchable extends Request<RequestSearchable, SearchResult> {

    private final String searchPath;

    public RequestSearchable(Searchable searchable) {
        this.searchPath = searchable.searchPath();
    }

    public String searchPath() {
        return searchPath;
    }

}
