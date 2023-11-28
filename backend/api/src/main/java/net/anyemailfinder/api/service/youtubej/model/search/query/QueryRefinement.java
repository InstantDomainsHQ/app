package net.anyemailfinder.api.service.youtubej.model.search.query;

import net.anyemailfinder.api.service.youtubej.model.Utils;
import com.alibaba.fastjson.JSONObject;
import java.util.List;

public class QueryRefinement extends Searchable {

    private final List<String> thumbnails;

    public QueryRefinement(JSONObject json) {
        super(json);
        thumbnails = Utils.parseThumbnails(json.getJSONObject("thumbnail"));
    }

    public List<String> thumbnails() {
        return thumbnails;
    }

    @Override
    protected String extractQuery(JSONObject json) {
        return Utils.parseRuns(json.getJSONObject("query"));
    }

    @Override
    protected String extractSearchPath(JSONObject json) {
        return json.getJSONObject("searchEndpoint")
                .getJSONObject("commandMetadata")
                .getJSONObject("webCommandMetadata")
                .getString("url");
    }

}
