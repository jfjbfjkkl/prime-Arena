
import Link from "next/link";

export default function CallToAction() {
	return (
		<section className="section-reveal delay-3 relative mt-16 bg-gradient-to-r from-cyan-900/10 to-transparent rounded-lg p-8 text-center">
			<h2 className="text-3xl font-extrabold text-white">
				Rejoins la compétition
			</h2>
			<p className="text-white/70 mt-3 max-w-2xl mx-auto">
				Participe à nos tournois, gagne des récompenses et fais partie de la
				communauté Prime Arena.
			</p>

			<div className="mt-6 flex items-center justify-center gap-4">
				<Link
					href="/tournois"
					className="inline-block px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-md"
				>
					Voir les tournois
				</Link>

				<Link
					href="/inscription-tournoi"
					className="inline-block px-5 py-3 border border-white/10 text-white rounded-md hover:bg-white/5"
				>
					S'inscrire
				</Link>
			</div>
		</section>
	);
}
