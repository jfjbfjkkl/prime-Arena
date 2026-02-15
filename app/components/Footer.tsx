export default function Footer() {
  return (
    <footer className="section-reveal delay-4 relative mt-20 border-t border-white/10 bg-black" id="contact">
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-extrabold">
            PRIMA<span className="text-indigo-500">ARENA</span>
          </h3>
          <p className="text-sm text-white/60 mt-4">
            Plateforme e-sport dédiée aux tournois compétitifs et à la
            communauté gaming africaine.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>Accueil</li>
            <li>Tournois</li>
            <li>Équipes</li>
            <li>Classement</li>
          </ul>
        </div>

        {/* Communauté */}
        <div>
          <h4 className="font-semibold mb-4">Communauté</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>Discord</li>
            <li>Actualités</li>
            <li>Règlement</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Statut */}
        <div>
          <h4 className="font-semibold mb-4">Statut</h4>
          <p className="text-sm text-white/60">
            Serveurs : <span className="text-green-400">Opérationnels</span>
          </p>
          <p className="text-sm text-white/60 mt-2">
            Version : Alpha
          </p>
        </div>

      </div>

      <div className="text-center text-xs text-white/40 py-6 border-t border-white/5">
        © {new Date().getFullYear()} Prime Arena — Tous droits réservés
      </div>
    </footer>
  );
}