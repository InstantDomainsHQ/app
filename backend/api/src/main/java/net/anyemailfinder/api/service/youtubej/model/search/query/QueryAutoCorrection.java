package net.anyemailfinder.api.service.youtubej.model.search.query;

import net.anyemailfinder.api.service.youtubej.model.Utils;
import com.alibaba.fastjson.JSONObject;

public class QueryAutoCorrection implements QueryElement {

    private final String query;

    public QueryAutoCorrection(JSONObject json) {
        query = Utils.parseRuns(json.getJSONObject("correctedQuery"));
    }

    @Override
    public String title() {
        return null;
    }

    public String query() {
        return query;
    }

    @Override
    public QueryElementType type() {
        return QueryElementType.AUTO_CORRECTION;
    }
}
