import type { Metadata } from "next";
import Link from "next/link";
import DarkHeroPanel from "@/components/DarkHeroPanel";
import { SplitImageSection } from "@/components/ImageSection";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { serviceCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Case studies and project work from Urbanova Technologies — coming soon.",
};

export default function PortfolioPage() {
  return (
    <>
      <DarkHeroPanel
        eyebrow="Our work"
        title="Case studies, coming soon"
        subtitle="Urbanova Technologies is a newly incorporated studio and we're just getting started with client work. This page will fill up with real case studies as projects launch — for now, here's the kind of work we're set up to do."
      />

      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24">
        <SplitImageSection
          src="/images/stock/design-workspace.jpg"
          alt="Designer's workspace with sketches and a laptop"
          eyebrow="Ready when you are"
          title="Design and build capacity, ready to point at your project"
          description="No backlog of other clients competing for attention — an early project with us gets a disproportionate amount of focus."
          cta={{ href: "/contact", label: "Start a project" }}
        />

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.flatMap((cat) => cat.services).map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="block h-full rounded-2xl border border-dashed border-navy/15 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-xl"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <s.icon size={18} />
                </span>
                <p className="mt-4 text-xs font-semibold tracking-wide text-navy/40 uppercase">
                  Capability
                </p>
                <h3 className="mt-1 font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.description}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeIn className="brand-gradient-bg mt-20 flex flex-col items-start gap-6 rounded-3xl px-8 py-12 text-white sm:flex-row sm:items-center sm:justify-between sm:px-12">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Want to be our next case study?</h2>
            <p className="mt-2 max-w-md text-white/90">
              Early clients get more hands-on attention. Let&apos;s talk about your project.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-white px-7 py-3 text-sm font-semibold text-navy shadow-sm transition-transform hover:scale-[1.03]"
          >
            Start a project
          </Link>
        </FadeIn>
      </div>
    </>
  );
}
