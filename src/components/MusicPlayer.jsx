"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "rc-slider";
import { Howl } from "howler";
import sounds from "@/utils/audio/sounds";
import songs from "@/utils/audio/songs";
import "@/styles/volumeSlider.css";
import musicStyle from "@/styles/musicPlayer.module.css";

export default function MusicPlayer() {
  const [showControls, setShowControls] = useState(false);
  const [fadeoutControls, setFadeoutControls] = useState(false);
  const [howl, setHowl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [songName, setSongName] = useState("");
  const [volume, setVolume] = useState(0.2);
  const [shuffleMode, setShuffleMode] = useState(true);

  const howlRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    setCurrentSongIndex(getRandomIndex());
  }, []);

  useEffect(() => {
    // Reset timer if exists
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (!fadeoutControls) {
      return;
    }

    // Hide controls after 3 seconds of inactivity
    timerRef.current = setTimeout(() => {
      setShowControls(false);
      setFadeoutControls(false);
      setSongName("");
    }, 3000);
    // Clear the timeout when the component unmounts or when controls are interacted with
    return () => clearTimeout(timerRef.current);
  }, [fadeoutControls]);

  useEffect(() => {
    // Show song name if controls are visible
    if (showControls) {
      setSongName(getSongName(songs[currentSongIndex]));
      return;
    }

    // Hide the song name after 3 seconds
    const timeout = setTimeout(() => {
      setSongName("");
    }, 3000);
    // Clear the timeout when the component unmounts or when the song name changes
    return () => clearTimeout(timeout);
  }, [songName, showControls]);

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
      const prevIndex = shuffleMode
        ? getRandomIndex()
        : currentSongIndex === 0
        ? songs.length - 1
        : currentSongIndex - 1;
      setCurrentSongIndex(prevIndex);
      playSong();
    }
  };

  const handleVolumeChange = (value) => {
    const newVolume = parseFloat(value);
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

  const handleMouseEnter = () => {
    sounds.mouseHover.play();
  };

  const handleShowControls = () => {
    sounds.mouseHover.play();
    setShowControls(true);
    setFadeoutControls(false);
  };

  return (
    <div className={musicStyle.container}>
      {showControls ? (
        <div onMouseEnter={handleShowControls} onMouseLeave={() => setFadeoutControls(true)}>
          <div className={musicStyle.controls}>
            <Image
              className={musicStyle.icon}
              src="/images/buttons/MusicPrevButton.png"
              alt="Previous"
              width={42}
              height={42}
              onClick={playPreviousSong}
              onMouseEnter={handleMouseEnter}
            />
            <Image
              className={musicStyle.icon}
              src={isPlaying ? "/images/buttons/MusicPauseButton.png" : "/images/buttons/MusicPlayButton.png"}
              alt="Play/Pause"
              width={42}
              height={42}
              onClick={isPlaying ? pauseSong : playSong}
              onMouseEnter={handleMouseEnter}
            />
            <Image
              className={musicStyle.icon}
              src="/images/buttons/MusicNextButton.png"
              alt="Next"
              width={42}
              height={42}
              onClick={playNextSong}
              onMouseEnter={handleMouseEnter}
            />
            <Image
              className={musicStyle.icon}
              src={shuffleMode ? "/images/buttons/MusicShuffleButton.png" : "/images/buttons/MusicNoShuffleButton.png"}
              alt="Shuffle"
              width={42}
              height={42}
              onClick={toggleShuffleMode}
              onMouseEnter={handleMouseEnter}
            />
            {songName && <div className={musicStyle.song_name}>{songName}</div>}
          </div>
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            onMouseEnter={handleMouseEnter}
            className={musicStyle.volume_slider}
          />
        </div>
      ) : (
        <div onMouseEnter={handleShowControls} className={musicStyle.controls}>
          <Image
            className={musicStyle.icon}
            src="/images/buttons/MusicButton.png"
            alt="Previous"
            width={42}
            height={42}
            onMouseEnter={handleShowControls}
          />
          {songName && <div className={musicStyle.song_name}>{songName}</div>}
        </div>
      )}
    </div>
  );
}
