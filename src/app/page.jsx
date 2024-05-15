import BackgroundVideo from "@/components/menu/BackgroundVideo";
import GwentLogo from "@/components/menu/GwentLogo";
import NavButton from "@/components/menu/NavButton";
import menuStyle from "@/styles/menus/main.module.css";

export default function Home() {
  return (
    <main className={menuStyle.background}>
      {/*<BackgroundVideo videoSrc="/videos/mainMenu.mp4" />*/}
      <GwentLogo />
      <div className="content-container">
        <NavButton href="/singleplayer">Singleplayer</NavButton>
        <NavButton href="/multiplayer">Multiplayer</NavButton>
        <NavButton href="/deck">Deck</NavButton>
        <NavButton href="/challenges">Challenges</NavButton>
        <NavButton href="/store">Store</NavButton>
        <NavButton href="/leaderboard">Leaderboard</NavButton>
        <NavButton href="/settings">Settings</NavButton>
      </div>
    </main>
  );
}
