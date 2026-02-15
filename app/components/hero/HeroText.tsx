"use client";

import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="text-center mt-10"
    >
      <p className="text-xl text-white/80 max-w-2xl mx-auto">
        Tournois eSport compétitifs. Équipes. Cash prizes. Domination.
      </p>

      <div className="mt-10 flex flex-col gap-6 sm:flex-row justify-center">
        <button className="rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 px-10 py-4 text-lg font-bold text-black shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-110 transition">
          Rejoindre un tournoi
        </button>

        <button className="rounded-2xl border border-white/30 bg-black/40 px-10 py-4 text-lg font-semibold backdrop-blur hover:bg-white/10 transition">
          Créer un compte
        </button>
      </div>
    </motion.div>
  );
}