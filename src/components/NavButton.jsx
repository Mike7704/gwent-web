"use client";
import Link from "next/link";
import { Howl } from "howler";

const hoverSound = new Howl({
  src: ["/sounds/mouseHover.mp3"],
});

export default function NavButton({ href, children }) {
  const playHoverSound = () => {
    hoverSound.play();
  };

  return (
    <Link className="menu-button" href={href} onMouseEnter={playHoverSound}>
      {children}
    </Link>
  );
}
