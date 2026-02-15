import Card3D from "./Card3D";

const stats = [
  {
    label: "Tournois en cours",
    value: "3",
    icon: "🔥",
    color: "from-emerald-400 to-cyan-400",
  },
  {
    label: "Tournois à venir",
    value: "12",
    icon: "⏳",
    color: "from-cyan-400 to-blue-500",
  },
  {
    label: "Joueurs inscrits",
    value: "10 248",
    icon: "👥",
    color: "from-indigo-400 to-purple-500",
  },
  {
    label: "Récompenses totales",
    value: "125 000 FCFA",
    icon: "💰",
    color: "from-yellow-400 to-orange-500",
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="mb-12 text-center text-3xl md:text-4xl font-extrabold text-white">
          Dashboard des tournois
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Card3D
              key={stat.label}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-lg"
            >
              <div className="relative z-10">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-extrabold text-white">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm uppercase tracking-wider text-white/70">
                  {stat.label}
                </p>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}