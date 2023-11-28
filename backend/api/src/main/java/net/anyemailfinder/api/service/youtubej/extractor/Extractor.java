package net.anyemailfinder.api.service.youtubej.extractor;


import net.anyemailfinder.api.service.youtubej.YoutubeException;
import com.alibaba.fastjson.JSONObject;
import java.util.List;

public interface Extractor {

    JSONObject extractInitialDataFromHtml(String html) throws YoutubeException;

    JSONObject extractPlayerConfigFromHtml(String html) throws YoutubeException;

    List<String> extractSubtitlesLanguagesFromXml(String xml) throws YoutubeException;

    String extractJsUrlFromConfig(JSONObject config, String videoId) throws YoutubeException;

    String extractClientVersionFromContext(JSONObject context);

    long extractIntegerFromText(String text);

}
