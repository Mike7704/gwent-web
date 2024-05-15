import BackgroundVideo from "@/components/menu/BackgroundVideo";
import GwentLogo from "@/components/menu/GwentLogo";
import NavButton from "@/components/menu/NavButton";
import menuStyle from "@/styles/menus/store.module.css";

export default function StoreMenu() {
  return (
    <main className={menuStyle.background}>
      {/*<BackgroundVideo videoSrc="/videos/mainMenu.mp4" />*/}
      <GwentLogo />
      <div className={`content-container ${menuStyle.container}`}>
        <h1>Store Menu</h1>
        <NavButton href="/">Back</NavButton>
      </div>
    </main>
  );
}
