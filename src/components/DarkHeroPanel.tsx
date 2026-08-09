"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import type { ReactNode, MouseEvent } from "react";
import Magnetic from "@/components/motion/Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

type DarkHeroPanelProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  ghostText?: string;
  size?: "large" | "compact";
  cta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  children?: ReactNode;
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export default function DarkHeroPanel({
  eyebrow,
  title,
  subtitle,
  ghostText,
  size = "compact",
  cta,
  secondaryCta,
  children,
}: DarkHeroPanelProps) {
  const large = size === "large";
  const panelRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = panelRef.current?.getBoundingClientRect();
    if (!rect) return;
    panelRef.current?.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    panelRef.current?.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="relative px-3 pt-8 sm:px-4">
      {ghostText && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="pointer-events-none absolute inset-x-0 -top-2 flex justify-center overflow-hidden select-none"
        >
          <span
            className="ghost-text text-[3.5rem] leading-none font-black tracking-tight uppercase sm:text-[6rem] lg:text-[8rem]"
            aria-hidden
          >
            {ghostText}
          </span>
        </motion.div>
      )}

      <motion.div
        ref={panelRef}
        onMouseMove={handleMouseMove}
        initial="hidden"
        animate="show"
        variants={container}
        className={`dark-panel group relative mx-auto max-w-[1440px] rounded-[2rem] text-center ${
          large ? "px-6 py-20 sm:px-12 sm:py-28" : "px-6 py-14 sm:px-12 sm:py-16"
        }`}
      >
        <div
          className="spotlight-layer pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />

        <motion.span
          variants={item}
          className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-wide text-white/80 uppercase"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          variants={item}
          className={`mx-auto mt-5 font-bold text-white ${
            large ? "max-w-5xl text-4xl sm:text-6xl" : "max-w-4xl text-3xl sm:text-5xl"
          }`}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            variants={item}
            className={`mx-auto mt-5 max-w-xl text-white/60 ${large ? "text-lg" : "text-base"}`}
          >
            {subtitle}
          </motion.p>
        )}

        {(cta || secondaryCta) && (
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {cta && (
              <Magnetic>
                <Link
                  href={cta.href}
                  className="brand-gradient-bg inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-sm transition-[opacity,box-shadow] hover:opacity-90"
                >
                  {cta.label}
                </Link>
              </Magnetic>
            )}
            {secondaryCta && (
              <Magnetic strength={0.25}>
                <Link
                  href={secondaryCta.href}
                  className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/40"
                >
                  {secondaryCta.label}
                </Link>
              </Magnetic>
            )}
          </motion.div>
        )}

        {children && <motion.div variants={item}>{children}</motion.div>}
      </motion.div>
    </section>
  );
}
