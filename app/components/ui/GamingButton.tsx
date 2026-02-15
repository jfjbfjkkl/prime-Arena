"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function GamingButton({ children, variant = "primary" }: Props) {
  return (
    <motion.button
      whileHover={{
        rotateX: -10,
        rotateY: 10,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        px-6 py-3 rounded-lg font-semibold tracking-wide
        ${variant === "primary"
          ? "bg-cyan-500 text-black shadow-[0_0_25px_rgba(34,211,238,0.6)]"
          : "border border-white/30 text-white"}
      `}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.button>
  );
}