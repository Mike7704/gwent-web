"use client";
import { useState, useEffect, useRef } from "react";
import { Howl } from "howler";
import songs from "@/utils/audio/songs";
import musicStyle from "@/styles/musicPlayer.module.css";

export default function MusicPlayer() {
  const [howl, setHowl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [songName, setSongName] = useState("");
  const [volume, setVolume] = useState(0.2);
  const [shuffleMode, setShuffleMode] = useState(true);

  const howlRef = useRef(null);

  useEffect(() => {
    setCurrentSongIndex(getRandomIndex());
  }, []);

  useEffect(() => {
    // Avoid multiple instance
    if (howlRef.current) {
      howlRef.current.unload();
    }

    setSongName(getSongName(songs[currentSongIndex]));

    const newHowl = new Howl({
      src: [songs[currentSongIndex]],
      autoplay: true,
      volume: volume,
      onend: () => {
        playNextSong();
      },
    });
    setHowl(newHowl);
    howlRef.current = newHowl;

    // Clean up for when component unmounts
    return () => {
      if (howlRef.current) {
        howlRef.current.unload();
      }
    };
  }, [currentSongIndex]);

  const playSong = () => {
    if (howl) {
      howl.play();
      setIsPlaying(true);
    }
  };

  const pauseSong = () => {
    if (howl) {
      howl.pause();
      setIsPlaying(false);
    }
  };

  const playNextSong = () => {
    if (howl) {
      howl.stop();
      const nextIndex = shuffleMode ? getRandomIndex() : (currentSongIndex + 1) % songs.length;
      setCurrentSongIndex(nextIndex);
      playSong();
    }
  };

  const playPreviousSong = () => {
    if (howl) {
      howl.stop();
      const prevIndex = shuffleMode ? getRandomIndex() : currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
      setCurrentSongIndex(prevIndex);
      playSong();
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (howl) {
      howl.volume(newVolume);
    }
    setVolume(newVolume);
  };

  // Extract song name from URL
  const getSongName = (url) => {
    return url.split("/").pop().split(".")[0];
  };

  const toggleShuffleMode = () => {
    setShuffleMode(!shuffleMode);
  };

  const getRandomIndex = () => {
    return Math.floor(Math.random() * songs.length);
  };

  return (
    <div className={musicStyle.container}>
      <div className={musicStyle.controls}>
        <button onClick={playPreviousSong}>Previous</button>
        <button onClick={isPlaying ? pauseSong : playSong}>{isPlaying ? "Pause" : "Play"}</button>
        <button onClick={playNextSong}>Next</button>
        <button onClick={toggleShuffleMode}>{shuffleMode ? "Disable Shuffle" : "Enable Shuffle"}</button>
      </div>
      <div className={musicStyle.volume_slider}>
        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
      </div>
      {songName && <div className={musicStyle.song_name}>Now playing: {songName}</div>}
    </div>
  );
}
