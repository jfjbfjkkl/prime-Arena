import RankingCard from "./RankingCard";

export default function Rankings() {
  return (
    <section className="section-reveal delay-2 bg-zinc-950 px-6 py-20" id="classement">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-10">
          Classement des équipes
        </h2>

        <div className="space-y-6">
          <RankingCard rank={1} team="Prime Wolves" points={1250} />
          <RankingCard rank={2} team="Night Ravens" points={1100} />
          <RankingCard rank={3} team="Shadow Esports" points={980} />
          <RankingCard rank={4} team="Nova Legends" points={870} />
        </div>
      </div>
    </section>
  );
}