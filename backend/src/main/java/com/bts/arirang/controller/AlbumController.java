package com.bts.arirang.controller;

import com.bts.arirang.service.SpotifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/album")
public class AlbumController {

    @Autowired
    private SpotifyService spotifyService;

    @GetMapping("/tracks")
    public ResponseEntity<List<Map<String, Object>>> getTracks(
            @RequestParam String albumId) {
        List<Map<String, Object>> tracks = spotifyService.getAlbumTracks(albumId);
        return ResponseEntity.ok(tracks);
    }
}