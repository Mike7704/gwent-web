"use client";
import GwentLogo from "@/components/menu/GwentLogo";
import MenuButton from "@/components/menu/MenuButton";
import NavButton from "@/components/menu/NavButton";
import menuStyle from "@/styles/menus/main.module.css";

export default function GlobalError({ error, reset }) {
  return (
    <main className={menuStyle.background}>
      {/*<BackgroundVideo videoSrc="/videos/mainMenu.mp4" />*/}
      <GwentLogo />
      <div className="content-container">
        <h2 className="text-3xl">Error! Something went wrong!</h2>
        <p>{error.message}</p>
        <MenuButton handleClick={() => reset()}>Try again</MenuButton>
        <NavButton href="/">Return to main menu</NavButton>
      </div>
    </main>
  );
}
