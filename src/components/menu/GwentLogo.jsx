"use client";
import { useState } from "react";
import Image from "next/image";
import { Howl } from "howler";
import sounds from "@/utils/audio/sounds";
import geraltVoiceLines from "@/utils/audio/geralt";

export default function GwentLogo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    // Prevent voice lines playing over each other
    if (isPlaying || geraltVoiceLines.length === 0) return;

    // Select a random voice line to play
    const randomIndex = Math.floor(Math.random() * geraltVoiceLines.length);
    const randomSound = geraltVoiceLines[randomIndex];

    const sound = new Howl({
      src: [randomSound],
      onplay: () => setIsPlaying(true),
      onend: () => {
        setIsPlaying(false);
        sound.unload();
      },
    });
    sound.play();
  };

  const handleMouseEnter = () => {
    sounds.mouseHover.play();
  };

  return (
    <Image
      className="gwent-logo"
      src="/images/menus/logo.webp"
      alt="Logo"
      width={434}
      height={276}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    />
  );
}
