import "./globals.css";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} bg-black text-white`}
      >
        <Navbar />
        <main className="pt-16 page-enter">{children}</main>
      </body>
    </html>
  );
}