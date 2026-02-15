import Card3D from "./Card3D";

type FilterPillProps = {
  label: string;
  isActive?: boolean;
};

function FilterPill({ label, isActive }: FilterPillProps) {
  return (
    <button
      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
        isActive
          ? "border-cyan-400/80 bg-cyan-400/10 text-cyan-200"
          : "border-white/10 bg-white/5 text-white/70 hover:border-cyan-400/50 hover:text-white"
      }`}
      type="button"
    >
      {label}
    </button>
  );
}

export default function TournamentFilters() {
  return (
    <Card3D
      as="section"
      className="rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8"
    >
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
            Recherche
          </p>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/60 px-4 py-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/30">
              Recherche
            </span>
            <input
              className="w-full bg-transparent text-sm text-white/80 placeholder:text-white/40 focus:outline-none"
              placeholder="Nom du tournoi"
              type="text"
            />
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
            Statut
          </p>
          <div className="flex flex-wrap gap-3">
            <FilterPill label="En cours" isActive />
            <FilterPill label="À venir" />
            <FilterPill label="Terminé" />
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
            Type
          </p>
          <div className="flex flex-wrap gap-3">
            <FilterPill label="Solo" />
            <FilterPill label="Duo" />
            <FilterPill label="Squad" />
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
        <p className="text-sm text-white/50">
          12 tournois trouvés - ajustez vos filtres pour affiner.
        </p>
        <div className="flex items-center gap-3">
          <span className="text-sm text-white/50">Trier par</span>
          <select className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-white/80">
            <option>Date (proche)</option>
            <option>Popularité</option>
            <option>Récompense</option>
          </select>
        </div>
      </div>
    </Card3D>
  );
}
