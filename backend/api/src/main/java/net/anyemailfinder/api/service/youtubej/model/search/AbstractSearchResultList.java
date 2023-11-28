package net.anyemailfinder.api.service.youtubej.model.search;

import net.anyemailfinder.api.service.youtubej.model.Utils;
import com.alibaba.fastjson.JSONObject;
import java.util.List;

public abstract class AbstractSearchResultList implements SearchResultItem {

    private String title;
    protected List<String> thumbnails;
    private String author;

    public AbstractSearchResultList() {}

    public AbstractSearchResultList(JSONObject json) {
        title = json.getJSONObject("title").getString("simpleText");
        author = Utils.parseRuns(json.getJSONObject("shortBylineText"));
    }

    @Override
    public String title() {
        return title;
    }

    public List<String> thumbnails() {
        return thumbnails;
    }

    public String author() {
        return author;
    }
}
