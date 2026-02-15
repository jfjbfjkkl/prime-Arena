import Link from "next/link";
import Card3D from "../components/Card3D";
import { Gamepad2, ShieldCheck, Zap } from "lucide-react";

const GAMES = [
  {
    id: "free-fire",
    title: "Free Fire",
    subtitle: "Battle Royale",
    description:
      "Tournois officiels, classement live et experience complete Free Fire.",
    status: "Disponible",
    route: "/tournois/free-fire",
    accent: "is-active",
  },
  {
    id: "pubg-mobile",
    title: "PUBG Mobile",
    subtitle: "Tactique",
    description: "Lancement prochainement. Inscris-toi pour etre alerte.",
    status: "Bientot",
    route: "#",
    accent: "is-locked",
  },
  {
    id: "valorant",
    title: "Valorant",
    subtitle: "FPS tactique",
    description: "Modes competitifs en preparation. Acces prioritaire equipe.",
    status: "Bientot",
    route: "#",
    accent: "is-locked",
  },
  {
    id: "cod-mobile",
    title: "COD Mobile",
    subtitle: "Action rapide",
    description: "Tournois multi-modes avec cash prize exclusif.",
    status: "Bientot",
    route: "#",
    accent: "is-locked",
  },
];

export default function TournoisPage() {
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
        <div className="tournois-hub-hero animate-fade-up">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">
              Hub de selection
            </p>
            <h1 className="mt-3 font-display text-5xl font-semibold text-glow sm:text-6xl">
              TOURNOIS
              <span className="block text-gradient-animated">Choisis ton jeu</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
              Accede a chaque univers competitif. Chaque jeu propose son propre
              hub, ses tournois live et ses recompenses exclusives.
            </p>
          </div>
          <div className="tournois-hub-panel">
            <div className="tournois-hub-stat">
              <Gamepad2 className="h-4 w-4 text-cyan-200" />
              <div>
                <p>Jeux disponibles</p>
                <strong>4 hubs</strong>
              </div>
            </div>
            <div className="tournois-hub-stat">
              <Zap className="h-4 w-4 text-purple-200" />
              <div>
                <p>Tournois live</p>
                <strong>2 en direct</strong>
              </div>
            </div>
            <div className="tournois-hub-stat">
              <ShieldCheck className="h-4 w-4 text-emerald-200" />
              <div>
                <p>Systeme valide</p>
                <strong>Anti-triche actif</strong>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                Univers competitifs
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Selection des jeux
              </h2>
            </div>
            <Link href="/tournois/free-fire" className="tournois-link">
              Entrer dans Free Fire
            </Link>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {GAMES.map((game, index) => (
              <Card3D
                key={game.id}
                as="article"
                interactive
                className={`tournois-game-card ${game.accent}`}
                innerClassName="tournois-card-inner"
                delay={index * 80}
              >
                <div className="flex items-center justify-between">
                  <span className="tournois-game-badge">{game.subtitle}</span>
                  <span className={`tournois-game-status ${game.accent}`}>
                    {game.status}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {game.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  {game.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {game.route === "#" ? (
                    <button
                      type="button"
                      className="tournois-btn-ghost"
                      disabled
                    >
                      Bientot disponible
                    </button>
                  ) : (
                    <Link href={game.route} className="tournois-btn-primary">
                      Entrer dans l'arene
                    </Link>
                  )}
                  <span className="tournois-game-tag">
                    Hub {game.status.toLowerCase()}
                  </span>
                </div>
              </Card3D>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}