import type { Metadata } from "next";
import { Target, Users2 } from "lucide-react";
import DarkHeroPanel from "@/components/DarkHeroPanel";
import { SplitImageSection, BannerImageSection } from "@/components/ImageSection";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Urbanova Technologies Private Limited — our story, mission, and team.",
};

export default function AboutPage() {
  return (
    <>
      <DarkHeroPanel
        eyebrow="About us"
        title="Built to be your one technology partner"
        subtitle="Urbanova Technologies Private Limited brings software development, brand design, and performance marketing together under one team."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-lg leading-relaxed text-navy/70">
            We started Urbanova because businesses were tired of stitching their product, their
            brand, and their growth together across three separate vendors who never talked to
            each other.
          </p>
        </FadeIn>

        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          <StaggerItem>
            <div className="h-full rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <Target size={18} />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-navy">Our mission</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                Give growing businesses access to product, design, and marketing expertise that
                usually only comes from three separate specialist agencies — coordinated as one
                team, working toward the same outcome.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="h-full rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <Users2 size={18} />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-navy">How we work</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                Small, senior team. Direct communication. We&apos;d rather ship a working version
                and iterate with you than disappear for months behind a spec document.
              </p>
            </div>
          </StaggerItem>
        </StaggerGroup>

        <div className="mt-16">
          <BannerImageSection
            src="/images/stock/bangalore-skyline.jpg"
            alt="Bangalore city skyline"
            eyebrow="Based in Bangalore"
            title="Built and run from Koramangala, Bangalore"
            description={company.address}
          />
        </div>

        <div className="mt-16">
          <SplitImageSection
            src="/images/stock/team-meeting.jpg"
            alt="Team collaborating around a table"
            eyebrow="How we collaborate"
            title="Direct access to the people doing the work"
            description="You talk to the person building your software or running your campaign — not a rotating cast of account managers relaying messages back and forth."
            reverse
          />
        </div>

        <FadeIn className="dark-panel mt-16 rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-white">Company information</h2>
          <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-white/40">Legal name</dt>
              <dd className="mt-1 font-medium text-white">{company.name}</dd>
            </div>
            <div>
              <dt className="text-white/40">CIN</dt>
              <dd className="mt-1 font-medium text-white">{company.cin}</dd>
            </div>
            <div>
              <dt className="text-white/40">Incorporated</dt>
              <dd className="mt-1 font-medium text-white">{company.registrationDate}</dd>
            </div>
            <div>
              <dt className="text-white/40">Registered office</dt>
              <dd className="mt-1 font-medium text-white">{company.address}</dd>
            </div>
          </dl>
        </FadeIn>
      </div>
    </>
  );
}
