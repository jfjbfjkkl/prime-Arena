"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Bell,
  Gift,
  ShieldAlert,
  Trophy,
  Users,
} from "lucide-react";
import Card3D from "../components/Card3D";

const FILTERS = [
  { id: "all", label: "Tout" },
  { id: "tournois", label: "Tournois" },
  { id: "recompenses", label: "Recompenses" },
  { id: "teams", label: "Teams" },
  { id: "systeme", label: "Systeme" },
];

const CATEGORY_LABELS: Record<string, string> = {
  tournois: "Tournois",
  recompenses: "Recompenses",
  teams: "Teams",
  systeme: "Systeme",
};

const NOTIFICATIONS = [
  {
    id: 1,
    category: "tournois",
    title: "Tournoi Nexus Cup confirme",
    description:
      "Votre equipe est validee. Check-in ouvre 30 minutes avant le debut.",
    time: "Auj. 18:20",
    unread: true,
    priority: "high",
    icon: Trophy,
  },
  {
    id: 2,
    category: "recompenses",
    title: "Recompense debloquee",
    description: "Pack Neon Rare ajoute a votre inventaire.",
    time: "Auj. 16:05",
    unread: true,
    priority: "standard",
    icon: Gift,
  },
  {
    id: 3,
    category: "teams",
    title: "Action d'equipe",
    description: "NovaRiders a accepte votre invitation.",
    time: "Auj. 12:47",
    unread: false,
    priority: "standard",
    icon: Users,
  },
  {
    id: 4,
    category: "systeme",
    title: "Alerte securite",
    description: "Tentative de connexion detectee depuis un nouvel appareil.",
    time: "Hier 22:11",
    unread: true,
    priority: "critical",
    icon: ShieldAlert,
  },
  {
    id: 5,
    category: "tournois",
    title: "Calendrier mis a jour",
    description: "Le bracket a ete recalibre. Nouveau round a 20:30.",
    time: "Hier 20:02",
    unread: false,
    priority: "standard",
    icon: Bell,
  },
  {
    id: 6,
    category: "systeme",
    title: "Maintenance reseau",
    description: "Fenetre de maintenance prevue demain 02:00 - 02:30.",
    time: "12 fev. 09:10",
    unread: false,
    priority: "standard",
    icon: AlertTriangle,
  },
];

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const unreadCount = useMemo(
    () => NOTIFICATIONS.filter((item) => item.unread).length,
    []
  );

  const visibleNotifications = useMemo(() => {
    if (activeFilter === "all") return NOTIFICATIONS;
    return NOTIFICATIONS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="hero-aurora absolute inset-0" />
        <div className="neon-grid absolute inset-0 opacity-50" />
        <div className="scanlines absolute inset-0" />
        <div className="notif-vignette absolute inset-0" />
        <div className="notif-orb ambient-float" />
        <div className="notif-orb notif-orb--alt ambient-float" />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <header className="notif-header animate-fade-up">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">
              Centre de controle
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-glow sm:text-5xl">
              Notifications
            </h1>
            <p className="mt-3 max-w-xl text-sm text-white/70 sm:text-base">
              Suivez les alertes critiques, les mises a jour de tournois et les
              activites de votre equipe en temps reel.
            </p>
          </div>
          <div className="notif-counter">
            <span className="text-xs uppercase tracking-[0.3em]">Non lues</span>
            <span className="text-3xl font-semibold text-white">
              {unreadCount}
            </span>
          </div>
        </header>

        <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.08s" }}>
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`notif-filter ${
                activeFilter === filter.id ? "is-active" : ""
              }`}
              aria-pressed={activeFilter === filter.id}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5">
          {visibleNotifications.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card3D
                key={item.id}
                as="article"
                interactive
                className={`notif-card ${item.unread ? "is-unread" : ""} ${
                  item.priority === "critical" ? "is-critical" : ""
                }`}
                innerClassName="notif-card-inner"
                delay={index * 70}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="notif-icon">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-base font-semibold text-white">
                          {item.title}
                        </h3>
                        {item.priority !== "standard" ? (
                          <span
                            className={`notif-badge ${
                              item.priority === "critical"
                                ? "is-critical"
                                : "is-important"
                            }`}
                          >
                            {item.priority === "critical"
                              ? "Priorite"
                              : "Important"}
                          </span>
                        ) : null}
                        {item.unread ? <span className="notif-unread" /> : null}
                      </div>
                      <p className="text-sm text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-xs text-white/50">
                    <span className="notif-tag">
                      {CATEGORY_LABELS[item.category] ?? item.category}
                    </span>
                    <div className="notif-time mt-2">{item.time}</div>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>
      </section>
    </main>
  );
}
