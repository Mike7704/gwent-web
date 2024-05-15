"use client";
import GwentLogo from "@/components/menu/GwentLogo";
import NavButton from "@/components/menu/NavButton";
import menuStyle from "@/styles/menus/main.module.css";

export default function NotFound() {
  return (
    <main className={menuStyle.background}>
      {/*<BackgroundVideo videoSrc="/videos/mainMenu.mp4" />*/}
      <GwentLogo />
      <div className="content-container">
        <h2 className="text-3xl">404 - Page Not Found</h2>
        <NavButton href="/">Return to main menu</NavButton>
      </div>
    </main>
  );
}
