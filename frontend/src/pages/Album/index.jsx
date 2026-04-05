import { useState, useEffect } from 'react'
import './Album.css'

const RELEASE_DATE = new Date('2026-03-20T00:00:00')

export default function Album() {
  const [timeLeft, setTimeLeft] = useState(null)
const [tracks, setTracks] = useState([])
const isReleased = new Date() >= RELEASE_DATE
const ALBUM_ID = '3ukkRHDHbN8tNRPKsGZR1h'
  useEffect(() => {
  fetch(`http://127.0.0.1:8080/api/album/tracks?albumId=${ALBUM_ID}`)
    .then(res => res.json())
    .then(data => setTracks(data))
}, [])
  return (
    <main className="album-page">
      {!isReleased && timeLeft && (
        <section className="countdown-section">
          <p className="countdown-label">Album drops in</p>
          <div className="countdown-grid">
            <div className="countdown-unit"><span>{timeLeft.days}</span><p>Days</p></div>
            <div className="countdown-unit"><span>{timeLeft.hours}</span><p>Hours</p></div>
            <div className="countdown-unit"><span>{timeLeft.minutes}</span><p>Minutes</p></div>
            <div className="countdown-unit"><span>{timeLeft.seconds}</span><p>Seconds</p></div>
          </div>
        </section>
      )}

      <section className="tracklist-section">
        <h2 className="section-title">ARIRANG — Track List</h2>
        <ul className="tracklist">
          {tracks.map(track => (
            <li key={track.id} className="track-item">
              <span className="track-number">{track.id}</span>
              <span className="track-title">{track.title}</span>
              <span className="track-duration">{track.duration}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}