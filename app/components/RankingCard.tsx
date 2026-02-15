import Card3D from "./Card3D";

type RankingCardProps = {
  rank: number;
  team: string;
  points: number;
};

export default function RankingCard({
  rank,
  team,
  points,
}: RankingCardProps) {
  const rankColors = [
    "bg-yellow-500 text-black", // Or
    "bg-gray-300 text-black",   // Argent
    "bg-orange-600 text-white", // Bronze
  ];

  return (
    <Card3D
      className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900 p-6"
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
            rankColors[rank - 1] || "bg-zinc-700 text-white"
          }`}
        >
          #{rank}
        </div>

        <div>
          <p className="font-semibold">{team}</p>
          <p className="text-sm text-white/60">{points} points</p>
        </div>
      </div>

      <span className="text-xs text-white/40">Classement</span>
    </Card3D>
  );
}