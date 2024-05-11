import MusicPlayer from "@/components/MusicPlayer";
import "@/styles/reset.css";
import "@/styles/globals.css";

export const metadata = {
  title: "Gwent",
  description: "A Next.js remake of the Gwent mini-game from The Witcher 3: Wild Hunt.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
