import BackgroundVideo from "@/components/menu/BackgroundVideo";
import GwentLogo from "@/components/menu/GwentLogo";
import NavButton from "@/components/menu/NavButton";

export default function SettingsMenu() {
  return (
    <main className="page-container">
      <GwentLogo />
      <div className="main-menu">
        <h1>Settings Menu</h1>
        <NavButton href="/">Back</NavButton>
      </div>
    </main>
  );
}
