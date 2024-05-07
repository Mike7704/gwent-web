import BackgroundVideo from "@/components/BackgroundVideo";
import GwentLogo from "@/components/GwentLogo";
import NavButton from "@/components/NavButton";

export default function ChallengeMenu() {
  return (
    <main className="page-container">
      <GwentLogo />
      <div className="main-menu">
        <h1>Challenge Menu</h1>
        <NavButton href="/">Back</NavButton>
      </div>
    </main>
  );
}
