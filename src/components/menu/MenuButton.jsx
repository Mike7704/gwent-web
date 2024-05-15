"use client";
import Link from "next/link";
import sounds from "@/utils/audio/sounds";
import buttonStyle from "@/styles/components/button.module.css";

export default function MenuButton({ handleClick, children }) {
  const handleMouseEnter = () => {
    sounds.mouseHover.play();
  };

  return (
    <button className={buttonStyle.container} onClick={handleClick} onMouseEnter={handleMouseEnter}>
      <span className={buttonStyle.text}>{children}</span>
    </button>
  );
}
