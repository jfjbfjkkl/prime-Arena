"use client";

import { useMemo } from "react";

type ParticleStyle = {
  width: string;
  height: string;
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
};

function mulberry32(seed: number) {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), t | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function createParticle(seed: number): ParticleStyle {
  const rand = mulberry32(seed);
  return {
    width: `${rand() * 6 + 2}px`,
    height: `${rand() * 6 + 2}px`,
    top: `${rand() * 100}%`,
    left: `${rand() * 100}%`,
    animationDuration: `${rand() * 20 + 15}s`,
    animationDelay: `${rand() * 10}s`,
  };
}

export default function ParticlesBackground() {
  const particles = useMemo(() => {
    const baseSeed = 90210;
    return Array.from({ length: 25 }).map((_, i) =>
      createParticle(baseSeed + i * 1013)
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((style, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cyan-400/40 blur-sm animate-float"
          style={style}
        />
      ))}
    </div>
  );
}