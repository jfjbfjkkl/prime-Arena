"use client";

import { useState } from "react";
import Card3D from "../../components/Card3D";
import { useRouter, useParams } from "next/navigation";

export default function TeamPage() {
  const router = useRouter();
  const { teamId } = useParams();

  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const members = ["PlayerOne", "ShadowX", "NovaFire", "Ghost"];

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, message]);
    setMessage("");
  };

  const leaveTeam = () => {
    router.push("/equipes");
  };

  return (
    <main className="relative min-h-screen px-6 py-20 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* HEADER TEAM */}
      <section className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row gap-10 items-center">

        {/* Logo */}
        <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-4xl font-extrabold text-black shadow-[0_0_40px_rgba(168,85,247,0.6)]">
          PA
        </div>

        {/* Infos */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            Prime Arena
          </h1>
          <p className="text-white/60">ID équipe : {teamId}</p>
        </div>

        {/* Quit */}
        <div className="md:ml-auto">
          <button
            onClick={() => setShowLeaveModal(true)}
            className="rounded-xl border border-red-400 px-6 py-3 text-red-400 hover:bg-red-500/10 transition"
          >
            Quitter l’équipe
          </button>
        </div>

      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* MEMBRES */}
        <Card3D
          className="rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h2 className="text-xl font-bold mb-4">Membres</h2>

          <ul className="space-y-3">
            {members.map((member, i) => (
              <li
                key={i}
                className="rounded-xl bg-black/40 px-4 py-3 border border-white/10"
              >
                {member}
              </li>
            ))}
          </ul>
        </Card3D>

        {/* CHAT */}
        <Card3D
          className="md:col-span-2 rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl flex flex-col"
        >
          <h2 className="text-xl font-bold mb-4">Chat d’équipe</h2>

          {/* Messages */}
          <div className="flex-1 mb-4 space-y-2 overflow-y-auto">
            {messages.length === 0 && (
              <p className="text-white/50 text-sm">
                Aucun message pour le moment
              </p>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className="rounded-xl bg-black/40 px-4 py-2 border border-white/10"
              >
                {msg}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Écrire un message..."
              className="flex-1 rounded-xl bg-black/60 border border-white/20 px-4 py-3 outline-none focus:border-cyan-400"
            />
            <button
              onClick={sendMessage}
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-6 font-bold text-black"
            >
              Envoyer
            </button>
          </div>
        </Card3D>
      </section>

      {/* MODAL QUITTER */}
      {showLeaveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <Card3D
            className="rounded-3xl bg-zinc-900 border border-white/20 p-8 max-w-sm w-full text-center"
          >
            <h3 className="text-xl font-bold mb-4">
              Quitter l’équipe ?
            </h3>
            <p className="text-white/60 mb-8">
              Es-tu sûr de vouloir quitter cette équipe ?
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowLeaveModal(false)}
                className="px-6 py-3 rounded-xl border border-white/20"
              >
                Annuler
              </button>

              <button
                onClick={leaveTeam}
                className="px-6 py-3 rounded-xl bg-red-500 text-black font-bold"
              >
                Oui, quitter
              </button>
            </div>
          </Card3D>
        </div>
      )}

    </main>
  );
}