"use client";
import Link from "next/link";
import sounds from "@/utils/audio/sounds";

export default function MenuButton({ href, children }) {
  const handleMouseEnter = () => {
    sounds.mouseHover.play();
  };

  return (
    <Link className="menu-button" href={href} onMouseEnter={handleMouseEnter}>
      {children}
    </Link>
  );
}
