"use client";

import Card3D from "../components/Card3D";

export default function ClassementPage() {
  const topTeams = [
    {
      rank: 1,
      name: "Team Phoenix",
      points: 12450,
      wins: 18,
      matches: 22,
      game: "Free Fire",
      tag: "TP",
    },
    {
      rank: 2,
      name: "Shadow Wolves",
      points: 11980,
      wins: 16,
      matches: 21,
      game: "Free Fire",
      tag: "SW",
    },
    {
      rank: 3,
      name: "Prime Legion",
      points: 11200,
      wins: 15,
      matches: 20,
      game: "Free Fire",
      tag: "PL",
    },
  ];

  const ranking = [
    { rank: 1, name: "Team Phoenix", tag: "TP", points: 12450, wins: 18, matches: 22 },
    { rank: 2, name: "Shadow Wolves", tag: "SW", points: 11980, wins: 16, matches: 21 },
    { rank: 3, name: "Prime Legion", tag: "PL", points: 11200, wins: 15, matches: 20 },
    { rank: 4, name: "Nova Squad", tag: "NS", points: 10850, wins: 14, matches: 20 },
    { rank: 5, name: "Dark Ravens", tag: "DR", points: 10300, wins: 13, matches: 19 },
    { rank: 6, name: "Ion Strike", tag: "IS", points: 10120, wins: 12, matches: 19 },
    { rank: 7, name: "Crimson Edge", tag: "CE", points: 9870, wins: 12, matches: 18 },
    { rank: 8, name: "Neon Pulse", tag: "NP", points: 9560, wins: 11, matches: 18 },
    { rank: 9, name: "Zero Rift", tag: "ZR", points: 9280, wins: 11, matches: 17 },
    { rank: 10, name: "Void Reign", tag: "VR", points: 9010, wins: 10, matches: 17 },
  ];

  const inspected = {
    name: "Team Phoenix",
    tag: "TP",
    rank: 1,
    members: ["PlayerOne", "ShadowX", "NovaFire", "Ghost"],
    captain: "PlayerOne",
    vice: "ShadowX",
    winRate: "82%",
    kd: "1.84",
    streak: "6 victoires",
  };

  const getPodiumCardClass = (rank: number) => {
    if (rank === 1) {
      return "md:order-2 md:scale-110";
    }
    if (rank === 2) {
      return "md:order-1";
    }
    return "md:order-3";
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-6 pt-32 pb-24 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.2),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(139,92,246,0.18),_transparent_55%)]" />

      {/* TITRE */}
      <section className="mx-auto mb-16 max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">Classement eSport</p>
        <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">
          Classement des <span className="text-gradient-animated">meilleures équipes</span> du mois
        </h1>
        <p className="mt-6 text-lg text-white/70">
          Prestige, discipline et domination tactique sur l'arène Prime Arena.
        </p>
        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-2 text-sm text-white/60">
          <span className="text-white/70">📅</span>
          Mois en cours : <span className="text-white font-semibold">Février</span>
        </div>
      </section>

      {/* TOP 3 */}
      <section className="mx-auto mb-24 max-w-6xl">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Top 3 du mois</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Podium elite</span>
        </div>

        <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:justify-center">
          {topTeams.map((team) => (
            <Card3D
              key={team.rank}
              interactive
              intensity={18}
              className={`relative w-full rounded-3xl border border-white/20 bg-gradient-to-b from-white/10 to-black/50 p-8 text-center backdrop-blur-xl md:w-[30%] ${getPodiumCardClass(
                team.rank
              )}`}
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-black/60 text-xl font-bold text-white">
                {team.tag}
              </div>
              <div className="text-5xl font-extrabold text-cyan-300">#{team.rank}</div>
              <h3 className="mt-3 text-2xl font-bold">{team.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/50">
                {team.game}
              </p>
              <div className="mt-4 text-2xl font-semibold text-white">
                {team.points.toLocaleString("fr-FR")} pts
              </div>
              <div className="mt-4 flex items-center justify-center gap-6 text-xs text-white/60">
                <span>{team.wins} victoires</span>
                <span>{team.matches} matchs</span>
              </div>
              <button className="mt-6 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:border-cyan-400/60 hover:text-white">
                Inspecter la team
              </button>
            </Card3D>
          ))}
        </div>
      </section>

      {/* CLASSEMENT COMPLET */}
      <section className="mx-auto mb-24 max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Classement général</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Top 10</span>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl">
          <div className="grid grid-cols-[0.5fr_1.8fr_1fr_1fr_1fr_1fr] gap-4 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.3em] text-white/50">
            <span>Rang</span>
            <span>Equipe</span>
            <span>Points</span>
            <span>Matchs</span>
            <span>Victoires</span>
            <span>Action</span>
          </div>

          {ranking.map((team) => (
            <div
              key={team.rank}
              className="grid grid-cols-[0.5fr_1.8fr_1fr_1fr_1fr_1fr] items-center gap-4 border-b border-white/10 px-6 py-4 text-sm text-white/80 transition hover:bg-white/5"
            >
              <span className="text-lg font-semibold text-white">#{team.rank}</span>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-black/60 text-sm font-semibold text-white">
                  {team.tag}
                </div>
                <div>
                  <p className="font-semibold text-white">{team.name}</p>
                  <p className="text-xs text-white/50">Division Elite</p>
                </div>
              </div>
              <span>{team.points.toLocaleString("fr-FR")}</span>
              <span>{team.matches}</span>
              <span>{team.wins}</span>
              <button className="rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-xs font-semibold text-white/70 transition hover:border-cyan-400/60 hover:text-white">
                Voir la team
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* INSPECTION TEAM */}
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Inspection d'équipe</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Profil elite</span>
        </div>

        <div className="grid gap-8 rounded-3xl border border-white/15 bg-gradient-to-br from-white/5 via-black/60 to-black/80 p-8 backdrop-blur-xl lg:grid-cols-[1.1fr_1.4fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-purple-500 text-2xl font-extrabold text-black">
                {inspected.tag}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Equipe</p>
                <h3 className="text-3xl font-bold text-white">{inspected.name}</h3>
                <p className="text-white/60">Rang #{inspected.rank} • Division Elite</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Win rate", value: inspected.winRate },
                { label: "K/D moyen", value: inspected.kd },
                { label: "Streak", value: inspected.streak },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-center"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              Badge Elite: Top 3 du mois
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-black/40 px-6 py-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Roster</p>
              <div className="mt-4 grid gap-3">
                {inspected.members.map((member) => (
                  <div
                    key={member}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm"
                  >
                    <span className="text-white">{member}</span>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                      {member === inspected.captain
                        ? "Capitaine"
                        : member === inspected.vice
                        ? "Sous-chef"
                        : "Membre"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                Voir le profil complet
              </button>
              <button className="rounded-xl border border-white/15 bg-black/40 px-5 py-3 text-sm font-semibold text-white/70 transition hover:border-cyan-400/60 hover:text-white">
                Comparer la team
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}