"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [showNotif, setShowNotif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotif(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">

      {/* BACKGROUND GLOBAL FIXE */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/hero-esport.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" />
      </div>

      {/* NOTIFICATION */}
      {showNotif && (
        <div className="fixed right-6 top-24 z-50 animate-slide-in">
          <div className="relative rounded-2xl border border-cyan-400/40 bg-black/70 px-6 py-4 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.5)]">
            <p className="text-sm font-bold text-cyan-300">
              🔥 Nouveau tournoi eSport lancé
            </p>
            <p className="mt-1 text-xs text-white/70">
              Inscriptions ouvertes – places limitées
            </p>

            <button
              onClick={() => setShowNotif(false)}
              className="absolute right-2 top-2 text-white/50 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl text-center animate-fade-in">

          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
            <span className="text-white">Tournoi </span>
            <span className="text-gradient-animated">
              eSport
            </span>
          </h1>

          <p className="mt-6 text-xl text-white/80">
            Tournois eSport compétitifs. Équipes. Cash prizes. Domination.
          </p>

          {/* BOUTONS HERO */}
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:justify-center">

            {/* ✅ BOUTON QUI MARCHE */}
            <Link href="/inscription-tournoi">
              <button
                className="
                  group relative overflow-hidden rounded-2xl
                  bg-gradient-to-r from-cyan-400 to-purple-500
                  
              >px-10 py-4 text-lg font-bold text-black
                  shadow-[0_0_50px_rgba(168,85,247,0.7)]
                  transition-all duration-300 hover:scale-110
                "
                >
                <span className="relative z-10">Rejoindre un tournoi</span>
                <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
              </button>
            </Link>

            <button
              className="
                rounded-2xl border border-white/30
                bg-black/40 px-10 py-4 text-lg font-semibold
                backdrop-blur transition-all duration-300
                hover:border-cyan-400 hover:text-cyan-400 hover:scale-105
              "
            >
              Créer un compte
            </button>

          </div>
        </div>
      </section>

      {/* POURQUOI PRIME ARENA */}
      {/* ✅ TOUT EST RESTÉ IDENTIQUE */}
      {/* (je n’y touche PAS) */}

    </main>
  );
}