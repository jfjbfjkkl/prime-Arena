"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";

export default function ConnexionPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    identifier: false,
    password: false,
  });

  const statusLines = useMemo(
    () => [
      "Session securisee active",
      "Noyau anti-triche operationnel",
      "Ping matchmaking: 18ms",
    ],
    []
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setPressed(true);
    window.setTimeout(() => setPressed(false), 420);

    const nextErrors = {
      identifier: identifier.trim().length === 0,
      password: password.trim().length === 0,
    };

    setFieldErrors(nextErrors);

    if (nextErrors.identifier || nextErrors.password) {
      setErrorMessage("Veuillez renseigner tous les champs pour continuer.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);
    window.setTimeout(() => setIsSubmitting(false), 900);
  };

  const handleIdentifierChange = (value: string) => {
    setIdentifier(value);
    if (errorMessage) {
      setErrorMessage("");
    }
    if (fieldErrors.identifier) {
      setFieldErrors((prev) => ({ ...prev, identifier: false }));
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (errorMessage) {
      setErrorMessage("");
    }
    if (fieldErrors.password) {
      setFieldErrors((prev) => ({ ...prev, password: false }));
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="hero-aurora absolute inset-0" />
        <div className="neon-grid absolute inset-0 opacity-50" />
        <div className="scanlines absolute inset-0" />
        <div className="login-vignette absolute inset-0" />
        <div className="login-orb ambient-float" />
        <div className="login-orb login-orb--alt ambient-float" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
              Acces operateur
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold text-glow sm:text-5xl">
                Console de connexion
                <span className="block text-gradient-animated">Prime Arena</span>
              </h1>
              <p className="max-w-xl text-base text-white/70 sm:text-lg">
                Connectez-vous pour reprendre le controle de votre equipe,
                surveiller les tournois en temps reel et debloquer les
                recompenses premium.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-white/70">
              {statusLines.map((line) => (
                <div
                  key={line}
                  className="login-chip flex items-center justify-between"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-200/80">
                    STATUS
                  </span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.12s" }}>
            <div className="login-panel p-8 sm:p-10">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                    Authentification
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    Entrez vos identifiants
                  </h2>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 p-3">
                  <ShieldCheck className="h-6 w-6 text-cyan-300" />
                </div>
              </div>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <label className="login-field">
                  <span className="text-xs uppercase tracking-[0.35em] text-white/50">
                    Email ou identifiant
                  </span>
                  <div
                    className={`login-input ${
                      fieldErrors.identifier ? "is-error" : ""
                    }`}
                  >
                    <Mail className="h-5 w-5 text-cyan-300" />
                    <input
                      type="text"
                      name="identifier"
                      value={identifier}
                      onChange={(event) =>
                        handleIdentifierChange(event.target.value)
                      }
                      placeholder="operator_neo"
                      autoComplete="username"
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
                    />
                  </div>
                </label>

                <label className="login-field">
                  <span className="text-xs uppercase tracking-[0.35em] text-white/50">
                    Mot de passe
                  </span>
                  <div
                    className={`login-input ${
                      fieldErrors.password ? "is-error" : ""
                    }`}
                  >
                    <Lock className="h-5 w-5 text-cyan-300" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={(event) =>
                        handlePasswordChange(event.target.value)
                      }
                      placeholder="********"
                      autoComplete="current-password"
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="text-white/50 transition hover:text-white"
                      aria-label={
                        showPassword
                          ? "Masquer le mot de passe"
                          : "Afficher le mot de passe"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </label>

                {errorMessage ? (
                  <div
                    className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                    role="alert"
                    aria-live="polite"
                  >
                    {errorMessage}
                  </div>
                ) : null}

                <div className="flex items-center justify-between text-xs text-white/60">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-white/20 bg-black/40 text-cyan-400 focus:ring-cyan-400"
                    />
                    Rester connecte
                  </label>
                  <Link
                    href="/mot-de-passe-oublie"
                    className="text-cyan-300 transition hover:text-white"
                  >
                    Mot de passe oublie
                  </Link>
                </div>

                <button
                  type="submit"
                  className={`login-button w-full ${
                    pressed ? "is-pressed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Connexion..." : "Connexion"}
                  </span>
                </button>

                <div className="text-center text-sm text-white/60">
                  Pas encore de compte ?{" "}
                  <Link
                    href="/inscription"
                    className="text-cyan-300 transition hover:text-white"
                  >
                    Creer un compte
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
