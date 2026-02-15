import Card3D from "./Card3D";

type TournamentStatus = "En cours" | "À venir" | "Terminé";
type TournamentType = "Solo" | "Duo" | "Squad";

type TournamentCardProps = {
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

function getStatusStyles(status: TournamentStatus) {
  if (status === "En cours") {
    return "bg-emerald-500/20 text-emerald-300 border-emerald-400/40";
  }

  if (status === "À venir") {
    return "bg-cyan-500/20 text-cyan-200 border-cyan-400/40";
  }

  return "bg-rose-500/20 text-rose-200 border-rose-400/40";
}

export default function TournamentCard({
  title,
  game,
  date,
  time,
  type,
  participants,
  status,
  prize,
  image,
}: TournamentCardProps) {
  return (
    <Card3D
      as="article"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80"
    >
      <div className="relative h-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div
          className={`absolute left-5 top-5 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm ${getStatusStyles(
            status
          )}`}
        >
          {status}
        </div>
        <div className="absolute bottom-4 left-5">
          <p className="text-xs text-white/60">{game}</p>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div className="grid gap-2 text-sm text-white/70">
          <div className="flex items-center justify-between">
            <span>Date</span>
            <span className="text-white/90">{date}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Heure</span>
            <span className="text-white/90">{time}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Type</span>
            <span className="text-white/90">{type}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Participants</span>
            <span className="text-white/90">
              {participants.current} / {participants.max}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <span className="text-xs uppercase tracking-[0.2em] text-white/40">
            Récompense
          </span>
          <span className="text-sm font-semibold text-white">{prize}</span>
        </div>

        <div className="flex gap-3">
          <a
            className="flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white/80 transition hover:border-cyan-400/60 hover:text-white"
            href="#tournament-details"
          >
            Voir détails
          </a>
          <button className="flex-1 rounded-xl bg-cyan-500/90 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-400">
            S'inscrire
          </button>
        </div>
      </div>
    </Card3D>
  );
}