import Link from "next/link";
import Card3D from "./components/Card3D";

const upcomingTournaments = [
  {
    title: "Neon Showdown",
    game: "Free Fire",
    date: "22 Feb 2026",
  },
  {
    title: "Vortex Clash",
    game: "Mobile Legends",
    date: "01 Mar 2026",
  },
  {
    title: "Prime Arena Cup",
    game: "Valorant",
    date: "10 Mar 2026",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 hero-aurora" />
      <div className="pointer-events-none absolute inset-0 neon-grid" />
      <div className="pointer-events-none absolute inset-0 scanlines" />
      <div className="pointer-events-none absolute inset-0 home-vignette" />

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-28 text-center">
        <div className="max-w-4xl space-y-10">
          <h1 className="font-display text-5xl font-semibold tracking-[0.08em] md:text-7xl">
            Tournoi <span className="text-gradient-animated">eSport</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/equipes" className="btn btn-neon px-8 py-4 text-base md:text-lg">
              Rejoindre une equipe
            </Link>
            <Link href="/tournois" className="btn btn-ghost px-8 py-4 text-base md:text-lg">
              Tournois a venir
            </Link>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-200 animate-fade-up">
              Prochains tournois
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {upcomingTournaments.map((tournament, index) => (
                <Card3D
                  key={tournament.title}
                  interactive
                  intensity={14}
                  className="neon-border rounded-2xl bg-white/5 px-5 py-4 text-left"
                >
                  <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                    {tournament.game}
                  </div>
                  <div className="mt-2 font-display text-lg text-white">
                    {tournament.title}
                  </div>
                  <div className="mt-2 text-sm text-cyan-300">
                    {tournament.date}
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
