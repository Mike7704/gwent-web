import BackgroundVideo from "@/components/BackgroundVideo";
import GwentLogo from "@/components/GwentLogo";
import NavButton from "@/components/NavButton";

export default function Home() {
  return (
    <main className="page-container">
      {/*<BackgroundVideo videoSrc="/videos/mainMenu.mp4" />*/}
      <GwentLogo />
      <div className="main-menu">
        <NavButton href="/singleplayer">Singleplayer</NavButton>
        <NavButton href="/multiplayer">Multiplayer</NavButton>
        <NavButton href="/deck">Deck</NavButton>
        <NavButton href="/challenges">Challenges</NavButton>
        <NavButton href="/store">Store</NavButton>
        <NavButton href="/settings">Settings</NavButton>
      </div>
    </main>
  );
}
