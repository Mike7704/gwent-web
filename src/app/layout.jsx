import { Inter } from "next/font/google";
import MusicPlayer from "@/components/MusicPlayer";
import "@/styles/reset.css";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gwent",
  description: "A Next.js remake of the Gwent mini-game from The Witcher 3: Wild Hunt.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
