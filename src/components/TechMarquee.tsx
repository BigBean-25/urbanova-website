"use client";

import { motion } from "motion/react";

export default function TechMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="shrink-0 rounded-full border border-navy/10 bg-white px-5 py-2 text-sm font-medium text-navy/70 shadow-sm"
          >
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
