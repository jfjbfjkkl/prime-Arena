"use client";

import Link from "next/link";
import Card3D from "../components/Card3D";

export default function EquipesPage() {
  const cards = [
    {
      title: "Creer une equipe",
      copy: "Fonde ta propre team eSport, invite des joueurs et impose ton style dans l'arene.",
      cta: "Creer maintenant →",
      href: "/equipes/creer",
      accentClass: "text-purple-300",
      glowClass: "card-glow-purple",
      delay: 0,
    },
    {
      title: "Rejoindre une equipe",
      copy: "Entre l'ID et le code d'une equipe existante pour rejoindre la competition immediatement.",
      cta: "Rejoindre une equipe →",
      href: "/equipes/rejoindre",
      accentClass: "text-cyan-300",
      glowClass: "card-glow-cyan",
      delay: 120,
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-24 text-white">
      {/* Full-screen esports background */}
      <div className="absolute inset-0 -z-20 bg-[url('/hero-esport.jpg')] bg-cover bg-center" />
      {/* Futuristic dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/85 backdrop-blur-[2px]" />
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.25),_transparent_60%)]" />

      {/* Title */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          <span className="text-gradient-animated">
            Équipes eSport
          </span>
        </h1>

        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Crée ta propre équipe ou rejoins une team existante pour participer
          aux tournois eSport et gravir les classements.
        </p>
      </section>

      {/* Choices */}
      <section className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className="block">
            <Card3D
              interactive
              intensity={16}
              className="group cursor-pointer rounded-3xl border border-white/20 bg-white/5 p-10 backdrop-blur-xl"
            >
              <h2 className={`mb-4 text-2xl font-bold ${card.accentClass}`}>
                {card.title}
              </h2>

              <p className="mb-6 text-white/70">{card.copy}</p>

              <span className={`inline-block font-semibold ${card.accentClass} group-hover:underline`}>
                {card.cta}
              </span>
            </Card3D>
          </Link>
        ))}
      </section>

    </main>
  );
}