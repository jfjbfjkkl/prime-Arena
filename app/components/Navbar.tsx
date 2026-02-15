"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Bell, User, Gamepad2 } from "lucide-react";

export default function Navbar() {
  const [openTournois, setOpenTournois] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // 🔥 Fermer quand on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenTournois(false);
      }
    }

    if (openTournois) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openTournois]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* LOGO → ACCUEIL */}
        <Link href="/" className="text-xl font-extrabold tracking-[0.25em]">
          <span className="text-white">PRIME</span>{" "}
          <span className="text-gradient-animated">
            ARENA
          </span>
        </Link>

        {/* MENU */}
        <div className="relative hidden md:flex items-center gap-10 text-sm font-semibold">

          {/* TOURNOIS */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpenTournois(!openTournois)}
              className="
                relative text-white/80 transition hover:text-white
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-gradient-to-r after:from-cyan-400 after:via-purple-500 after:to-pink-500
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              Tournois
            </button>

            {/* DROPDOWN */}
            {openTournois && (
              <div
                className="
                  absolute left-0 top-10 w-56
                  rounded-2xl border border-white/10
                  bg-black/80 backdrop-blur-xl
                  shadow-[0_0_40px_rgba(168,85,247,0.4)]
                  animate-fade-in
                "
              >
                <Link
                  href="/tournois/free-fire"
                  onClick={() => setOpenTournois(false)}
                  className="
                    flex items-center gap-3 px-5 py-4
                    text-white/80 transition
                    hover:bg-white/5 hover:text-white
                  "
                >
                  <Gamepad2 size={20} className="text-cyan-400" />
                  <span className="font-medium">Free Fire</span>
                </Link>

                <div className="px-5 pb-3 text-xs text-white/40">
                  D’autres jeux arrivent bientôt…
                </div>
              </div>
            )}
          </div>

          {/* AUTRES LIENS */}
          <Link
            href="/classement"
            className="
              relative text-white/80 transition hover:text-white
              after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
              after:bg-gradient-to-r after:from-cyan-400 after:via-purple-500 after:to-pink-500
              after:transition-all hover:after:w-full
            "
          >

            Classement
          </Link>
          <Link
            href="/equipes"
            className="
              relative text-white/80 transition hover:text-white
              after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
              after:bg-gradient-to-r after:from-cyan-400 after:via-purple-500 after:to-pink-500
              after:transition-all hover:after:w-full
            "
          >
            Equipes
          </Link>
          <Link
            href="#contact"
            className="
              relative text-white/80 transition hover:text-white
              after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
              after:bg-gradient-to-r after:from-cyan-400 after:via-purple-500 after:to-pink-500
              after:transition-all hover:after:w-full
            "
          >
            Contact
          </Link>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-6 text-white">
          <Link href="/notifications" className="hover:scale-110 transition">
            <Bell size={22} />
          </Link>

          <Link
            href="/connexion"
            className="rounded-full border border-white/20 px-4 py-1.5 transition hover:bg-white/5"
          >
            <User size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
