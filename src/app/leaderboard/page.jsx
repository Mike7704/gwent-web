import BackgroundVideo from "@/components/menu/BackgroundVideo";
import GwentLogo from "@/components/menu/GwentLogo";
import NavButton from "@/components/menu/NavButton";
import menuStyle from "@/styles/menus/leaderboard.module.css";

export default function Leaderboard() {
  return (
    <main className={menuStyle.background}>
      {/*<BackgroundVideo videoSrc="/videos/mainMenu.mp4" />*/}
      <GwentLogo />
      <div className={`content-container ${menuStyle.container}`}>
        <h1>Leaderboard</h1>
        <NavButton href="/">Back</NavButton>
      </div>
    </main>
  );
}
