"use client";

import { motion, useReducedMotion } from "motion/react";
import { marqueeSkills } from "@/content/skills";

export function Marquee() {
  const reduce = useReducedMotion();
  const row = [...marqueeSkills, ...marqueeSkills];

  if (reduce) {
    return (
      <div className="flex flex-wrap gap-x-8 gap-y-3 opacity-60">
        {marqueeSkills.map((s) => (
          <span key={s} className="font-display text-2xl text-muted">
            {s}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex shrink-0 gap-12 pr-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {row.map((s, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-3xl text-faint"
          >
            {s}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
