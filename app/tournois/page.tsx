import TournamentCard from "../components/TournamentCard";

export default function TournoisPage() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      
      {/* PARTICULES */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-400/40 blur-sm animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Tournois{" "}
          <span className="text-gradient-animated">
            Prime Arena
          </span>
        </h1>

        <p className="text-white/60 mb-12 max-w-2xl">
          Consulte les tournois en cours et à venir. Entre dans l’arène,
          affronte les meilleurs et impose ton niveau.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TournamentCard
            title="Prime Arena Cup #1"
            game="Free Fire"
            date="15 Février 2026"
            time="18:00"
            type="Squad"
            participants={{ current: 48, max: 64 }}
            status="En cours"
            prize="1 000 000 FCFA"
            image="/tournoi1.jpg"
          />

          <TournamentCard
            title="Solo Challenge"
            game="Free Fire"
            date="20 Février 2026"
            time="20:00"
            type="Solo"
            participants={{ current: 32, max: 64 }}
            status="À venir"
            prize="500 000 FCFA"
            image="/tournoi2.jpg"
          />

          <TournamentCard
            title="Team League"
            game="Free Fire"
            date="1 Mars 2026"
            time="21:00"
            type="Duo"
            participants={{ current: 16, max: 32 }}
            status="À venir"
            prize="300 000 FCFA"
            image="/tournoi3.jpg"
          />
        </div>
      </div>
    </section>
  );
}