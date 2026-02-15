import TournamentCard from "./TournamentCard";

type TournamentStatus = "En cours" | "À venir" | "Terminé";
type TournamentType = "Solo" | "Duo" | "Squad";

type Tournament = {
  id: string;
  title: string;
  game: string;
  date: string;
  time: string;
  type: TournamentType;
  participants: {
    current: number;
    max: number;
  };
  status: TournamentStatus;
  prize: string;
  image: string;
};

type TournamentListProps = {
  tournaments: Tournament[];
};

export default function TournamentList({ tournaments }: TournamentListProps) {
  return (
    <section
      id="tournois"
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      {/* TITRE SECTION */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Tournois Prime Arena
        </h2>
        <p className="mt-4 text-lg text-white/60">
          Compétition, récompenses et adrénaline eSport
        </p>
      </div>

      {/* GRILLE TOURNOIS */}
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {tournaments.map((tournament, index) => (
          <div
            key={tournament.id}
            className="fade-up"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <TournamentCard
              title={tournament.title}
              game={tournament.game}
              date={tournament.date}
              time={tournament.time}
              type={tournament.type}
              participants={tournament.participants}
              status={tournament.status}
              prize={tournament.prize}
              image={tournament.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}