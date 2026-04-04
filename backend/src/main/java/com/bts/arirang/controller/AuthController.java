package com.bts.arirang.controller;

import com.bts.arirang.service.SpotifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private SpotifyService spotifyService;

    // ── TEST ─────────────────────────────────────────
    @GetMapping("/test")
    public String test() {
        return "Spotify auth is ready!";
    }

    // ── LOGIN URL ─────────────────────────────────────
    @GetMapping("/login")
    public ResponseEntity<Map<String, String>> login() {
        String url = spotifyService.buildAuthUrl();
        return ResponseEntity.ok(Map.of("url", url));
    }

    // ── CALLBACK ──────────────────────────────────────
    @GetMapping("/callback")
    public ResponseEntity<Map> callback(@RequestParam String code) {
        Map tokenData = spotifyService.exchangeCodeForToken(code);
        return ResponseEntity.ok(tokenData);
    }
}