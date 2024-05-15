"use client";
import Link from "next/link";
import sounds from "@/utils/audio/sounds";
import buttonStyle from "@/styles/components/button.module.css";

export default function NavButton({ href, children }) {
  const handleMouseEnter = () => {
    sounds.mouseHover.play();
  };

  return (
    <Link className={buttonStyle.container} href={href} onMouseEnter={handleMouseEnter}>
      <span className={buttonStyle.text}>{children}</span>
    </Link>
  );
}
