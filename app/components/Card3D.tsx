"use client";

import {
  useCallback,
  useRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

type Card3DProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  glowClassName?: string;
  delay?: number;
  as?: "div" | "article" | "section";
  interactive?: boolean;
  intensity?: number;
};

export default function Card3D({
  children,
  className = "",
  innerClassName = "",
  glowClassName = "",
  delay = 0,
  as = "div",
  interactive = false,
  intensity = 8,
}: Card3DProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const setCardVars = useCallback((x: number, y: number, rect: DOMRect) => {
    const card = cardRef.current;
    if (!card) return;
    const rotateX = ((y / rect.height) - 0.5) * -intensity;
    const rotateY = ((x / rect.width) - 0.5) * intensity;
    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
    card.style.setProperty("--glow-x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--glow-y", `${(y / rect.height) * 100}%`);
  }, [intensity]);

  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (!interactive) return;
      if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
        return;
      }
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => setCardVars(x, y, rect));
    },
    [setCardVars]
  );

  const handleMouseLeave = useCallback(() => {
    if (!interactive) return;
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--glow-x", "50%");
    card.style.setProperty("--glow-y", "50%");
  }, [interactive]);

  const Component = as;

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`card-3d ${interactive ? "card-3d--game" : ""} ${glowClassName} ${className}`}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      <div className={`card-3d-inner ${innerClassName}`}>{children}</div>
    </Component>
  );
}
