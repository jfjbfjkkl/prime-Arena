export default function TournamentsHero() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Compétition. <span className="text-indigo-400">Gloire.</span>{" "}
          Récompenses.
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-white/70">
          Participe à des tournois e-sport organisés, sécurisés et avec cash prize
          garanti sur Prime Arena.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold text-white shadow-lg">
            Voir les tournois
          </button>

          <button className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition font-semibold">
            Créer un tournoi
          </button>
        </div>
      </div>
    </section>
  );
}
