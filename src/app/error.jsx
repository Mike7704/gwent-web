"use client";
import GwentLogo from "@/components/menu/GwentLogo";

export default function GlobalError({ error, reset }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-evenly">
      <GwentLogo />
      <h2 className="text-3xl">Error! Something went wrong!</h2>
      <p>{error.message}</p>
      <button className="menu-button" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
