import type { Metadata } from "next";
import { Users2, Layers, MapPin } from "lucide-react";
import DarkHeroPanel from "@/components/DarkHeroPanel";
import { BannerImageSection } from "@/components/ImageSection";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers at Urbanova Technologies.",
};

export default function CareersPage() {
  return (
    <>
      <DarkHeroPanel
        eyebrow="Careers"
        title="Help us build Urbanova from day one"
        subtitle="We're a small, newly formed team based in Bangalore, working across software development, design, and marketing. We look for people who'd rather own a real problem end-to-end than sit in one narrow lane."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <BannerImageSection
          src="/images/stock/team-meeting.jpg"
          alt="Team collaborating around a table"
          eyebrow="Small team, big ownership"
          title="You'd be one of the first people building Urbanova"
        />

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-3">
          <StaggerItem>
            <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <Users2 size={18} />
              </span>
              <h2 className="mt-4 font-semibold text-navy">Small team, real ownership</h2>
              <p className="mt-2 text-sm text-navy/60">
                No layers between you and the client or the decision.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <Layers size={18} />
              </span>
              <h2 className="mt-4 font-semibold text-navy">Work across disciplines</h2>
              <p className="mt-2 text-sm text-navy/60">
                Product, design, and marketing sit together — not in separate silos.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <MapPin size={18} />
              </span>
              <h2 className="mt-4 font-semibold text-navy">Bangalore-based</h2>
              <p className="mt-2 text-sm text-navy/60">Based out of Koramangala, Bangalore.</p>
            </div>
          </StaggerItem>
        </StaggerGroup>

        <FadeIn className="dark-panel mt-16 rounded-2xl p-8 text-center">
          <h2 className="text-lg font-semibold text-white">No open roles right now</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
            We&apos;re not actively hiring at the moment, but we&apos;re always happy to hear from
            good people. Send your resume and a note about what you&apos;d want to work on to{" "}
            <a href={`mailto:${company.email}`} className="font-medium text-white hover:underline">
              {company.email}
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </>
  );
}
