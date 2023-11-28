package net.anyemailfinder.api.service.youtubej;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.testng.AssertJUnit.assertEquals;

import net.anyemailfinder.api.service.ServiceTestConfiguration;
import net.anyemailfinder.api.service.youtubej.downloader.request.RequestSubtitlesDownload;
import net.anyemailfinder.api.service.youtubej.downloader.request.RequestSubtitlesInfo;
import net.anyemailfinder.api.service.youtubej.downloader.request.RequestVideoInfo;
import net.anyemailfinder.api.service.youtubej.downloader.response.Response;
import net.anyemailfinder.api.service.youtubej.model.Extension;
import net.anyemailfinder.api.service.youtubej.model.subtitles.SubtitlesInfo;
import net.anyemailfinder.api.service.youtubej.model.videos.VideoInfo;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.annotations.Test;

@Slf4j
@SpringBootTest(classes = ServiceTestConfiguration.class)
public class YoutubeSubtitlesExtractorTest extends AbstractTestNGSpringContextTests {

    @Test(enabled = false)
    void getSubtitlesInfo_ExtractFromCaptions_Success() {
        YoutubeDownloader downloader = new YoutubeDownloader();

        assertDoesNotThrow(() -> {
            Response<VideoInfo> response = downloader.getVideoInfo(new RequestVideoInfo(
                TestUtils.PHYSIOTHERAPY_ID));
            assertTrue(response.ok());
            VideoInfo video = response.data();

            List<SubtitlesInfo> subtitlesInfos = video.subtitlesInfo();
            assertFalse(subtitlesInfos.isEmpty(), "subtitles info should not be empty");
        });
    }

    @Test(enabled = false)
    void getSubtitlesInfo_ExtractSubtitles_Success() {
        YoutubeDownloader downloader = new YoutubeDownloader();

        assertDoesNotThrow(() -> {
            Response<List<SubtitlesInfo>> response = downloader.getSubtitlesInfo(new RequestSubtitlesInfo(
                TestUtils.PHYSIOTHERAPY_ID));
            assertTrue(response.ok());
            List<SubtitlesInfo> subtitlesInfos = response.data();
            assertFalse(subtitlesInfos.isEmpty(), "subtitles info should not be empty");
        });
    }

    @Test(enabled = false)
    void getDownloadUrl_Success() {
        YoutubeDownloader downloader = new YoutubeDownloader();
        assertDoesNotThrow(() -> {
            Response<List<SubtitlesInfo>> response = downloader.getSubtitlesInfo(new RequestSubtitlesInfo(
                TestUtils.N3WPORT_ID));
            assertTrue(response.ok());
            List<SubtitlesInfo> subtitlesInfos = response.data();
            for (SubtitlesInfo info : subtitlesInfos) {
                String downloadUrl = new RequestSubtitlesDownload(info).getDownloadUrl();
                assertEquals(info.getUrl(), downloadUrl, "download url should be equals to info url");

                downloadUrl = new RequestSubtitlesDownload(info)
                        .formatTo(Extension.JSON3)
                        .getDownloadUrl();
                assertTrue(downloadUrl.contains("&fmt=" + Extension.JSON3.value()), "download url should contains format query param");
            }
        });
    }
}
