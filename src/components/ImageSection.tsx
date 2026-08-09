"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

type SplitImageSectionProps = {
  variant?: "split";
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description: string;
  reverse?: boolean;
  cta?: { href: string; label: string };
};

export function SplitImageSection({
  src,
  alt,
  eyebrow,
  title,
  description,
  reverse = false,
  cta,
}: SplitImageSectionProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 32 : -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className={reverse ? "lg:order-2" : ""}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -32 : 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className={reverse ? "lg:order-1" : ""}
      >
        {eyebrow && (
          <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-xs font-semibold tracking-wide text-brand-blue uppercase">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-4 text-3xl font-bold text-navy">{title}</h2>
        <p className="mt-4 text-navy/60">{description}</p>
        {cta && (
          <Link
            href={cta.href}
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
          >
            {cta.label}{" "}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </motion.div>
    </div>
  );
}

type BannerImageSectionProps = {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function BannerImageSection({ src, alt, eyebrow, title, description }: BannerImageSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease }}
      className="relative isolate overflow-hidden rounded-[2rem]"
    >
      <div className="relative aspect-[16/9] sm:aspect-[21/9]">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#060b1f]/90 via-[#060b1f]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
        {eyebrow && (
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-3 max-w-2xl text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        {description && <p className="mt-2 max-w-2xl text-white/70">{description}</p>}
      </div>
    </motion.div>
  );
}
