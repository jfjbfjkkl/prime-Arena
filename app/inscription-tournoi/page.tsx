"use client";

import Card3D from "../components/Card3D";

export default function InscriptionTournoiPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24 text-white bg-black">

      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Inscription au{" "}
          <span className="text-gradient-animated">
            tournoi eSport
          </span>
        </h1>

        <p className="mt-6 text-white/70 text-lg">
          Rejoins la compétition et montre la puissance de ton équipe.
        </p>
      </section>

      <section className="mx-auto max-w-3xl">
        <Card3D
          glowClassName="card-glow-cyan"
          className="rounded-3xl border border-white/20 bg-black/50 p-8 backdrop-blur-xl"
        >
          <form className="grid gap-6">

            <input
              placeholder="Nom du joueur"
              className="w-full rounded-xl bg-black/60 border border-white/20 px-4 py-3"
            />

            <input
              placeholder="ID du joueur (Free Fire)"
              className="w-full rounded-xl bg-black/60 border border-white/20 px-4 py-3"
            />

            <input
              placeholder="Nom de la team"
              className="w-full rounded-xl bg-black/60 border border-white/20 px-4 py-3"
            />

            <input
              placeholder="ID du tournoi"
              className="w-full rounded-xl bg-black/60 border border-white/20 px-4 py-3"
            />

            <button
              type="submit"
              className="mt-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 py-4 text-lg font-bold text-black"
            >
              S’inscrire au tournoi
            </button>

          </form>
        </Card3D>
      </section>

    </main>
  );
}