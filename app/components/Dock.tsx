import Link from "next/link";

export default function Dock() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 flex gap-8 shadow-2xl">
        
        <Link
          href="/"
          className="text-sm text-white/70 hover:text-white transition"
        >
          Accueil
        </Link>

        <Link
          href="/tournois"
          className="text-sm text-white/70 hover:text-white transition"
        >
          Tournois
        </Link>

        <Link
          href="/teams"
          className="text-sm text-white/70 hover:text-white transition"
        >
          Équipes
        </Link>

        <Link
          href="/classement"
          className="text-sm text-white/70 hover:text-white transition"
        >
          Classement
        </Link>
      </div>
    </div>
  );
}