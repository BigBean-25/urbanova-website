import type { Metadata } from "next";
import Link from "next/link";
import DarkHeroPanel from "@/components/DarkHeroPanel";
import IconFeatureCard from "@/components/IconFeatureCard";
import { SplitImageSection } from "@/components/ImageSection";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { serviceCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software development, brand design, and performance marketing services from Urbanova Technologies.",
};

export default function ServicesPage() {
  return (
    <>
      <DarkHeroPanel
        eyebrow="What we do"
        title="Product, brand, and growth — handled by one team"
        subtitle="Pick one service or bring us the whole problem. Here's everything we do, grouped by what it helps you achieve."
      />

      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24">
        <div className="space-y-16">
          {serviceCategories.map((cat, ci) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-24">
              <SplitImageSection
                src={cat.image}
                alt={cat.imageAlt}
                eyebrow={cat.title}
                title={cat.blurb}
                description={`${cat.services.length} services in this category — browse them below.`}
                reverse={ci % 2 === 1}
              />

              <FadeIn className="mt-10 flex flex-col gap-2 border-b border-black/5 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-2xl font-bold text-navy">{cat.title}</h2>
                <p className="text-sm text-navy/60">{cat.blurb}</p>
              </FadeIn>
              <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.services.map((s, i) => (
                  <StaggerItem key={s.slug} className="h-full">
                    <IconFeatureCard
                      icon={s.icon}
                      title={s.title}
                      description={s.description}
                      href={`/services/${s.slug}`}
                      highlighted={i === 0}
                    />
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </section>
          ))}
        </div>

        <FadeIn className="brand-gradient-bg mt-20 flex flex-col items-start gap-6 rounded-3xl px-8 py-12 text-white sm:flex-row sm:items-center sm:justify-between sm:px-12">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Not sure what you need?</h2>
            <p className="mt-2 max-w-md text-white/90">
              Tell us the problem, not the service — we&apos;ll figure out the right combination.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-white px-7 py-3 text-sm font-semibold text-navy shadow-sm transition-transform hover:scale-[1.03]"
          >
            Talk to us
          </Link>
        </FadeIn>
      </div>
    </>
  );
}
