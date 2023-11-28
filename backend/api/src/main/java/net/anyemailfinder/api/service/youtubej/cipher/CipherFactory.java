package net.anyemailfinder.api.service.youtubej.cipher;


import net.anyemailfinder.api.service.youtubej.YoutubeException;

public interface CipherFactory {

    Cipher createCipher(String jsUrl) throws YoutubeException;

    void addInitialFunctionPattern(int priority, String regex);

    void addFunctionEquivalent(String regex, CipherFunction function);
}
