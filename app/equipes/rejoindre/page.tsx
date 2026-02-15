"use client";

import { useState } from "react";
import Card3D from "../../components/Card3D";
import { useRouter } from "next/navigation";

export default function RejoindreEquipePage() {
  const router = useRouter();

  const [teamId, setTeamId] = useState("");
  const [teamCode, setTeamCode] = useState("");
  const [error, setError] = useState("");

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔒 Simulation de vérification
    if (!teamId || !teamCode) {
      setError("ID ou code invalide");
      return;
    }

    // Plus tard : backend
    router.push(`/equipes/${teamId}`);
  };

  return (
    <main className="relative min-h-screen px-6 py-24 text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.25),_transparent_60%)]" />

      {/* Title */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Rejoindre une{" "}
          <span className="text-gradient-animated">
            équipe eSport
          </span>
        </h1>

        <p className="text-white/70 text-lg">
          Entre l’ID et le code de l’équipe pour rejoindre l’arène.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto">
        <Card3D
          glowClassName="card-glow-cyan"
          className="rounded-3xl border border-white/20 bg-white/5 p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.35)]"
        >
          <form onSubmit={handleJoin} className="grid gap-6">

            {/* ID équipe */}
            <div>
              <label className="block mb-2 font-semibold">
                ID de l’équipe
              </label>
              <input
                value={teamId}
                onChange={(e) => setTeamId(e.target.value)}
                placeholder="Ex : prime-wolves"
                className="w-full rounded-xl bg-black/60 border border-white/20 px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            {/* Code équipe */}
            <div>
              <label className="block mb-2 font-semibold">
                Code secret
              </label>
              <input
                value={teamCode}
                onChange={(e) => setTeamCode(e.target.value)}
                placeholder="Code privé"
                className="w-full rounded-xl bg-black/60 border border-white/20 px-4 py-3 outline-none focus:border-purple-400"
              />
            </div>

            {/* Erreur */}
            {error && (
              <p className="text-red-400 text-sm font-semibold">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="
                mt-8 w-full rounded-2xl
                bg-gradient-to-r from-cyan-400 to-purple-500
                py-4 text-lg font-bold text-black
                shadow-[0_0_40px_rgba(34,211,238,0.7)]
                transition hover:scale-105
              "
            >
              Rejoindre l’équipe
            </button>

          </form>
        </Card3D>
      </section>

    </main>
  );
}