package com.bts.arirang.service;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import java.util.Base64;
import java.util.Map;

@Service
public class SpotifyService {
    private final Dotenv dotenv = Dotenv.load();

    private final String CLIENT_ID = dotenv.get("SPOTIFY_CLIENT_ID");
    private final String CLIENT_SECRET = dotenv.get("SPOTIFY_CLIENT_SECRET");
    private final String REDIRECT_URI = dotenv.get("SPOTIFY_REDIRECT_URI");
    private final String AUTH_URL = "https://accounts.spotify.com/authorize";
    private final String TOKEN_URL = "https://accounts.spotify.com/api/token";

    public String buildAuthUrl() {
        return AUTH_URL
                + "?client_id=" + CLIENT_ID
                + "&response_type=" + "code"
                + "&redirect_uri=" + REDIRECT_URI
                + "&scope=streaming user-read-email user-read-private";
    }

    public Map exchangeCodeForToken(String code) {

        String credentials = CLIENT_ID + ":" + CLIENT_SECRET;
        String encoded = Base64.getEncoder()
                .encodeToString(credentials.getBytes());

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.set("Authorization", "Basic " + encoded);

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "authorization_code");
        body.add("code", code);
        body.add("redirect_uri", REDIRECT_URI);

        RestTemplate rest = new RestTemplate();
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(body, headers);

        ResponseEntity<Map> response = rest.postForEntity(
                TOKEN_URL, request, Map.class);

        return response.getBody();
    }
}
