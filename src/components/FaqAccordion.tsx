"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What does a typical engagement look like?",
    answer:
      "We start with a short discovery call to understand the problem, scope the work, and agree on what \"done\" looks like. From there we work in small, visible increments rather than disappearing for months.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes. We're a new studio ourselves, so we're set up to move at startup speed — and early clients get more hands-on attention while we build out our portfolio.",
  },
  {
    question: "Can we hire you for just one service, like design or SEO?",
    answer:
      "Absolutely. You can bring us the whole problem or just one piece of it — a website, a brand refresh, a marketing campaign. Working across disciplines is an option, not a requirement.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "It depends on scope — fixed-price for well-defined projects, or a monthly retainer for ongoing design, development, or marketing work. We'll always agree on pricing before work starts.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A marketing website or brand identity project usually takes a few weeks. Custom software and ongoing marketing engagements vary with scope — we'll give you a realistic timeline during discovery.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy/10 rounded-2xl border border-black/5 bg-white">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-medium text-navy">{faq.question}</span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="shrink-0 text-navy/40"
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm leading-relaxed text-navy/60">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
