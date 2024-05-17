"use client";
import backgroundStyle from "@/styles/components/backgroundVideo.module.css";

export default function BackgroundVideo({ videoSrc }) {
  return (
    <video className={backgroundStyle.video} autoPlay loop muted playsInline>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
