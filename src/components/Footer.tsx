"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks, serviceCategories } from "@/lib/site";
import FadeIn from "@/components/motion/FadeIn";

export default function Footer() {
  return (
    <footer className="bg-panel text-white/80">
      <FadeIn className="mx-auto grid max-w-6xl gap-x-10 gap-y-12 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5">
            <Image
              src="/images/urbanova-logo.jpeg"
              alt="Urbanova Tech"
              width={180}
              height={57}
              className="h-6 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Software, design, and marketing under one roof — helping businesses build and grow
            their digital presence.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/50 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceCategories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/services#${cat.id}`}
                  className="text-white/50 transition-colors duration-200 hover:text-white"
                >
                  {cat.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="font-medium text-brand-blue-light transition-colors duration-200 hover:text-white"
              >
                View all services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={company.phoneHref} className="group flex items-center gap-2 text-white/60 hover:text-white">
                <Phone size={14} className="text-white/30 group-hover:text-brand-blue-light" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="group flex items-center gap-2 text-white/60 hover:text-white"
              >
                <Mail size={14} className="text-white/30 group-hover:text-brand-blue-light" />
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-white/60">
              <MapPin size={14} className="mt-0.5 shrink-0 text-white/30" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </FadeIn>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-5 text-center text-xs text-white/40 sm:flex-row sm:justify-between sm:px-6 sm:text-left">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved. · CIN: {company.cin}
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-1.5 text-white/50 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
