import BackgroundVideo from "@/components/menu/BackgroundVideo";
import GwentLogo from "@/components/menu/GwentLogo";
import NavButton from "@/components/menu/NavButton";
import menuStyle from "@/styles/menus/settings.module.css";

export default function SettingsMenu() {
  return (
    <main className={menuStyle.background}>
      {/*<BackgroundVideo videoSrc="/videos/mainMenu.mp4" />*/}
      <GwentLogo />
      <div className={`content-container ${menuStyle.container}`}>
        <h1>Settings Menu</h1>
        <NavButton href="/">Back</NavButton>
      </div>
    </main>
  );
}
