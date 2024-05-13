import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PlayerLayout from "./ui/playerLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lofi Music",
  description: "Play your favourite collection of lofi beats as you work without distraction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <body className={inter.className}>
        <PlayerLayout>
          {children}
        </PlayerLayout>
      </body>
    </html>
  );
}
