export default function BackgroundVideo({ videoSrc }) {
  return (
    <video className="background" autoPlay loop muted playsInline>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
