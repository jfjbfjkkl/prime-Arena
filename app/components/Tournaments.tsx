import TournamentCard from "./TournamentCard";

const tournaments = [
  {
    id: "prime-arena-cup-1",
    title: "Prime Arena Cup #1",
    game: "Free Fire",
    date: "15 Février 2026",
    time: "19:00 GMT+1",
    type: "Squad" as const,
    participants: { current: 32, max: 64 },
    status: "En cours" as const,
    prize: "5,000 $",
    image: "/hero-esport.jpg",
  },
  {
    id: "solo-challenge",
    title: "Prime Arena Solo Challenge",
    game: "Free Fire",
    date: "20 Février 2026",
    time: "21:00 GMT+1",
    type: "Solo" as const,
    participants: { current: 18, max: 32 },
    status: "À venir" as const,
    prize: "2,000 $",
    image: "/hero-esport.jpg",
  },
  {
    id: "team-league",
    title: "Prime Arena Team League",
    game: "Free Fire",
    date: "1 Mars 2026",
    time: "20:30 GMT+1",
    type: "Squad" as const,
    participants: { current: 64, max: 64 },
    status: "À venir" as const,
    prize: "7,500 $",
    image: "/hero-esport.jpg",
  },
];

export default function Tournaments() {
  return (
    <section className="section-reveal delay-1 bg-black px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12 fade-up">
          Tournois en cours & à venir
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tournaments.map((tournament) => (
            <TournamentCard
              key={tournament.id}
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
          ))}
        </div>
      </div>
    </section>
  );
}