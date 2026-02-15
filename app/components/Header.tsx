"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-xl font-extrabold tracking-widest text-white">
          PRIME<span className="text-gradient-animated">ARENA</span>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex gap-8 text-sm text-white/70">
          {["Accueil", "Tournois", "Classement", "Récompenses", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="relative hover:text-white transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <Link
          href="/login"
          className="px-4 py-2 text-sm font-semibold rounded-md border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition shadow-[0_0_15px_rgba(99,102,241,0.6)]"
        >
          Connexion / Inscription
        </Link>
      </div>
    </header>
  );
}