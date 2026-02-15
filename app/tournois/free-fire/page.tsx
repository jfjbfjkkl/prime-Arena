import Link from "next/link";
import Card3D from "../../components/Card3D";
import {
  Trophy,
  Radio,
  Flame,
  CalendarClock,
  Award,
  Star,
  Users,
} from "lucide-react";

const LIVE_TOURNAMENTS = [
  {
    id: 1,
    title: "Prime Arena Nexus",
    game: "Free Fire",
    mode: "Squad",
    prize: "1 500 000 FCFA",
    stage: "Playoffs",
    teams: 16,
    viewers: "12.4k",
    time: "LIVE",
    tiktok: "https://www.tiktok.com",
  },
  {
    id: 2,
    title: "Velocity Clash",
    game: "Free Fire",
    mode: "Duo",
    prize: "800 000 FCFA",
    stage: "Groupes",
    teams: 24,
    viewers: "6.9k",
    time: "LIVE",
    tiktok: "https://www.tiktok.com",
  },
];

const UPCOMING_TOURNAMENTS = [
  {
    id: 1,
    title: "Nova Rumble",
    game: "Free Fire",
    date: "20 Fev 2026",
    time: "20:00",
    prize: "600 000 FCFA",
    rewards: "Skins Elite + Cash",
  },
  {
    id: 2,
    title: "Skyline Cup",
    game: "Free Fire",
    date: "28 Fev 2026",
    time: "19:30",
    prize: "950 000 FCFA",
    rewards: "Cash + Pass Pro",
  },
  {
    id: 3,
    title: "Atlas Elite",
    game: "Free Fire",
    date: "08 Mar 2026",
    time: "21:00",
    prize: "1 200 000 FCFA",
    rewards: "Cash + Merch",
  },
];

const PAST_TOURNAMENTS = [
  {
    id: 1,
    title: "Prime Arena Cup #1",
    winner: "NovaRiders",
    prize: "1 000 000 FCFA",
    ranking: "1) NovaRiders  2) VectorX  3) Helix",
    date: "12 Fev 2026",
  },
  {
    id: 2,
    title: "Nightfall Invitational",
    winner: "Kairo",
    prize: "750 000 FCFA",
    ranking: "1) Kairo  2) Stratos  3) Shift",
    date: "05 Fev 2026",
  },
];

const TEAMS = [
  {
    id: 1,
    name: "NovaRiders",
    seed: "Seed #1",
    status: "Qualifie",
  },
  {
    id: 2,
    name: "VectorX",
    seed: "Seed #2",
    status: "Qualifie",
  },
  {
    id: 3,
    name: "Helix",
    seed: "Seed #3",
    status: "Qualifie",
  },
  {
    id: 4,
    name: "Stratos",
    seed: "Seed #4",
    status: "Reserve",
  },
  {
    id: 5,
    name: "Kairo",
    seed: "Seed #5",
    status: "Qualifie",
  },
  {
    id: 6,
    name: "Shift",
    seed: "Seed #6",
    status: "Reserve",
  },
];

export default function FreeFireTournoisPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="hero-aurora absolute inset-0" />
        <div className="neon-grid absolute inset-0 opacity-50" />
        <div className="scanlines absolute inset-0" />
        <div className="tournois-vignette absolute inset-0" />
        <div className="tournois-orb ambient-float" />
        <div className="tournois-orb tournois-orb--alt ambient-float" />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <div className="tournois-hero animate-fade-up">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
              Free Fire Arena
            </div>
            <h1 className="font-display text-5xl font-semibold text-glow sm:text-6xl">
              FREE FIRE
              <span className="block text-gradient-animated">Tournois</span>
            </h1>
            <p className="max-w-2xl text-base text-white/70 sm:text-lg">
              L'experience officielle Free Fire sur Prime Arena. Suivez les
              matchs live, les equipes inscrites et les tournois a venir.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="tournois-pill is-live">
                <Radio className="h-4 w-4" />
                2 tournois LIVE
              </span>
              <span className="tournois-pill">
                <CalendarClock className="h-4 w-4" />
                3 a venir cette semaine
              </span>
              <span className="tournois-pill">
                <Trophy className="h-4 w-4" />
                12 finales archivees
              </span>
            </div>
          </div>
          <div className="tournois-hero-panel">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                  Indicateurs live
                </p>
                <h2 className="mt-3 text-xl font-semibold">
                  Flux competitif
                </h2>
              </div>
              <div className="tournois-hero-badge">
                <Flame className="h-5 w-5" />
                Hot
              </div>
            </div>
            <div className="mt-6 grid gap-4 text-sm text-white/70">
              <div className="tournois-stat">
                <span>Matchs en direct</span>
                <strong className="text-white">4</strong>
              </div>
              <div className="tournois-stat">
                <span>Equipes actives</span>
                <strong className="text-white">64</strong>
              </div>
              <div className="tournois-stat">
                <span>Cash prizes live</span>
                <strong className="text-white">3.2M FCFA</strong>
              </div>
              <div className="tournois-stat">
                <span>Studio stream</span>
                <strong className="text-white">TikTok + Arena</strong>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                Tournois actifs
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                LIVE maintenant
              </h2>
            </div>
            <Link href="/equipes" className="tournois-link">
              Voir toutes les equipes
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card3D
              as="article"
              interactive
              className="tournois-live-card"
              innerClassName="tournois-live-inner"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="tournois-live-badge">LIVE</span>
                <span className="tournois-chip">{LIVE_TOURNAMENTS[0].game}</span>
                <span className="tournois-chip">{LIVE_TOURNAMENTS[0].mode}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {LIVE_TOURNAMENTS[0].title}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Phase: {LIVE_TOURNAMENTS[0].stage} • {LIVE_TOURNAMENTS[0].teams}
                &nbsp;equipes en course
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="tournois-live-stat">
                  <span>Viewer live</span>
                  <strong>{LIVE_TOURNAMENTS[0].viewers}</strong>
                </div>
                <div className="tournois-live-stat">
                  <span>Cash prize</span>
                  <strong>{LIVE_TOURNAMENTS[0].prize}</strong>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={LIVE_TOURNAMENTS[0].tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="tournois-btn-primary"
                >
                  Acces live TikTok
                </a>
                <Link href="/tournois/live" className="tournois-btn-ghost">
                  Vue detaillee
                </Link>
              </div>
            </Card3D>

            <div className="grid gap-5">
              {LIVE_TOURNAMENTS.slice(1).map((item) => (
                <Card3D
                  key={item.id}
                  as="article"
                  interactive
                  className="tournois-card"
                  innerClassName="tournois-card-inner"
                >
                  <div className="flex items-center justify-between">
                    <span className="tournois-live-badge">LIVE</span>
                    <span className="tournois-chip">{item.mode}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {item.stage} • {item.teams} equipes
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm text-white/70">
                    <span>{item.viewers} viewers</span>
                    <span className="text-cyan-200">{item.prize}</span>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                Equipes inscrites
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Rosters verifies
              </h2>
            </div>
            <Link href="/equipes" className="tournois-link">
              Voir toutes les equipes
            </Link>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAMS.map((team) => (
              <Card3D
                key={team.id}
                as="article"
                interactive
                className="tournois-card tournois-team-card"
                innerClassName="tournois-card-inner"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Users className="h-4 w-4 text-cyan-200" />
                    {team.seed}
                  </div>
                  <span className="tournois-chip is-upcoming">{team.status}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {team.name}
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Equipe validee pour les phases finales.
                </p>
              </Card3D>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div
            className="tournois-highlight animate-fade-up"
            style={{ animationDelay: "0.08s" }}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                Evenement phare
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Arena Major 2026
              </h3>
              <p className="mt-2 text-sm text-white/70">
                8 equipes elite, stage immersif et cash prize record. Lancement
                officiel dans 12 jours.
              </p>
            </div>
            <div className="tournois-highlight-info">
              <div>
                <span>Prize pool</span>
                <strong>5 000 000 FCFA</strong>
              </div>
              <div>
                <span>Diffuseurs</span>
                <strong>TikTok + Arena</strong>
              </div>
              <div>
                <span>Inscrits</span>
                <strong>56 / 64</strong>
              </div>
              <Link href="/inscription-tournoi" className="tournois-btn-primary">
                Rejoindre l'arene
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                A venir
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Prochains tournois
              </h2>
            </div>
            <Link href="/tournois/calendrier" className="tournois-link">
              Voir le calendrier
            </Link>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {UPCOMING_TOURNAMENTS.map((item) => (
              <Card3D
                key={item.id}
                as="article"
                interactive
                className="tournois-card"
                innerClassName="tournois-card-inner"
              >
                <div className="flex items-center justify-between">
                  <span className="tournois-chip">{item.game}</span>
                  <span className="tournois-chip is-upcoming">A venir</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  {item.date} • {item.time}
                </p>
                <div className="mt-4 space-y-2 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-cyan-200" />
                    {item.prize}
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-purple-300" />
                    {item.rewards}
                  </div>
                </div>
                <div className="mt-5 flex gap-3">
                  <Link href="/inscription-tournoi" className="tournois-btn-primary">
                    Inscription
                  </Link>
                  <Link href="/tournois/detail" className="tournois-btn-ghost">
                    Details
                  </Link>
                </div>
              </Card3D>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                Historique
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Tournois termines
              </h2>
            </div>
            <Link href="/classement" className="tournois-link">
              Classement global
            </Link>
          </div>

          <div className="mt-6 grid gap-5">
            {PAST_TOURNAMENTS.map((item) => (
              <Card3D
                key={item.id}
                as="article"
                interactive
                className="tournois-card is-archive"
                innerClassName="tournois-card-inner"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">{item.date}</p>
                  </div>
                  <span className="tournois-chip is-archive">Archive</span>
                </div>
                <div className="mt-4 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-cyan-200" />
                    Vainqueur: <span className="text-white">{item.winner}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-purple-300" />
                    {item.prize}
                  </div>
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50">
                  Classement final
                </p>
                <p className="mt-2 text-sm text-white/70">{item.ranking}</p>
              </Card3D>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
