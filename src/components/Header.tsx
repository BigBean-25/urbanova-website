"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { navLinks, serviceCategories, company } from "@/lib/site";
import Magnetic from "@/components/motion/Magnetic";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 px-3 transition-[padding] duration-300 sm:px-4 ${scrolled ? "pt-2" : "pt-4"}`}>
      <header
        className={`pill-nav mx-auto flex max-w-[1440px] items-center justify-between rounded-full px-4 shadow-lg shadow-navy/10 transition-[padding] duration-300 sm:px-6 ${
          scrolled ? "py-2" : "py-2.5"
        }`}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => {
            setOpen(false);
            setServicesOpen(false);
          }}
        >
          <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5">
            <Image
              src="/images/urbanova-logo.jpeg"
              alt="Urbanova Tech"
              width={180}
              height={57}
              priority
              className="h-6 w-auto sm:h-7"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            const isServices = link.href === "/services";

            const linkEl = (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => isServices && setServicesOpen(true)}
                onMouseLeave={() => isServices && setServicesOpen(false)}
                className="relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium"
              >
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className={`relative z-10 transition-colors ${active ? "text-white" : "text-white/60 hover:text-white"}`}>
                  {link.label}
                </span>
                {isServices && (
                  <ChevronDown
                    size={14}
                    className={`relative z-10 mt-px transition-transform ${servicesOpen ? "rotate-180 text-white" : "text-white/40"}`}
                  />
                )}
              </Link>
            );

            if (!isServices) return linkEl;

            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {linkEl}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="pill-nav absolute top-full left-1/2 mt-3 w-80 -translate-x-1/2 rounded-2xl p-2 shadow-xl shadow-navy/20"
                    >
                      {serviceCategories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/services#${cat.id}`}
                          className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/10"
                        >
                          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                            <cat.icon size={16} />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-white">{cat.title}</span>
                            <span className="mt-0.5 block text-xs text-white/50">{cat.blurb}</span>
                          </span>
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="mt-1 flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        View all services
                        <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <a href={company.phoneHref} className="text-sm font-medium text-white/60 transition-colors hover:text-white">
            {company.phone}
          </a>
          <Magnetic strength={0.3}>
            <Link
              href="/contact"
              className="brand-gradient-bg rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              Contact Us
            </Link>
          </Magnetic>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-9 w-9 items-center justify-center text-white md:hidden"
        >
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </motion.span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -12, scaleY: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="pill-nav mx-auto mt-2 flex max-w-[1440px] flex-col gap-1 rounded-3xl px-4 py-4 shadow-lg shadow-navy/10 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2.5 text-sm font-medium ${
                  pathname === link.href ? "bg-white/10 text-white" : "text-white/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={company.phoneHref}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-white/60"
            >
              {company.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="brand-gradient-bg mt-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Contact Us
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
