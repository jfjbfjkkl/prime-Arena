"use client";

import { useState } from "react";
import Card3D from "../../components/Card3D";
import { useRouter } from "next/navigation";

export default function CreerEquipePage() {
  const router = useRouter();

  const [teamName, setTeamName] = useState("");
  const [gameId, setGameId] = useState("");
  const [teamId, setTeamId] = useState("");
  const [teamCode, setTeamCode] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔥 Plus tard : backend / API
    // Pour l’instant → redirection vers la page équipe
    router.push(`/equipes/${teamId || "prime-team"}`);
  };

  return (
    <main className="relative min-h-screen px-6 py-24 text-white overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.25),_transparent_60%)]" />

      {/* Title */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Créer ton{" "}
          <span className="text-gradient-animated">
            équipe eSport
          </span>
        </h1>

        <p className="text-white/70 text-lg">
          Fonde ta propre équipe, invite des joueurs
          et entre officiellement dans l’arène compétitive.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto">
        <Card3D
          glowClassName="card-glow-purple"
          className="rounded-3xl border border-white/20 bg-white/5 p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(168,85,247,0.35)]"
        >
          <form onSubmit={handleSubmit} className="grid gap-6">

            {/* Nom équipe */}
            <div>
              <label className="block mb-2 font-semibold">
                Nom de l’équipe
              </label>
              <input
                required
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Ex : Prime Wolves"
                className="w-full rounded-xl bg-black/60 border border-white/20 px-4 py-3 outline-none focus:border-purple-400"
              />
            </div>

            {/* Logo */}
            <div>
              <label className="block mb-2 font-semibold">
                Logo de l’équipe
              </label>
              <input
                type="file"
                className="w-full rounded-xl bg-black/60 border border-white/20 px-4 py-3 text-white/70"
              />
            </div>

            {/* ID joueur */}
            <div>
              <label className="block mb-2 font-semibold">
                Ton ID de jeu
              </label>
              <input
                required
                value={gameId}
                onChange={(e) => setGameId(e.target.value)}
                placeholder="ID Free Fire"
                className="w-full rounded-xl bg-black/60 border border-white/20 px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            {/* ID équipe */}
            <div>
              <label className="block mb-2 font-semibold">
                ID de l’équipe
              </label>
              <input
                required
                value={teamId}
                onChange={(e) => setTeamId(e.target.value)}
                placeholder="Ex : prime-wolves"
                className="w-full rounded-xl bg-black/60 border border-white/20 px-4 py-3 outline-none focus:border-purple-400"
              />
            </div>

            {/* Code équipe */}
            <div>
              <label className="block mb-2 font-semibold">
                Code secret de l’équipe
              </label>
              <input
                required
                value={teamCode}
                onChange={(e) => setTeamCode(e.target.value)}
                placeholder="Code privé"
                className="w-full rounded-xl bg-black/60 border border-white/20 px-4 py-3 outline-none focus:border-pink-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-semibold">
                Email de contact
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@exemple.com"
                className="w-full rounded-xl bg-black/60 border border-white/20 px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                mt-8 w-full rounded-2xl
                bg-gradient-to-r from-cyan-400 to-purple-500
                py-4 text-lg font-bold text-black
                shadow-[0_0_40px_rgba(168,85,247,0.7)]
                transition hover:scale-105
              "
            >
              Créer l’équipe
            </button>

          </form>
        </Card3D>
      </section>

    </main>
  );
}