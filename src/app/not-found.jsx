"use client";
import GwentLogo from "@/components/menu/GwentLogo";
import NavButton from "@/components/menu/NavButton";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-evenly">
      <GwentLogo />
      <h2 className="text-3xl">404 - Page Not Found</h2>
      <NavButton href="/">Return to main menu</NavButton>
    </main>
  );
}
