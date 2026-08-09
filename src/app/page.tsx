import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Layers,
  MapPin,
  Sparkles,
  Users,
  UserCheck,
  Wallet,
  Zap,
} from "lucide-react";
import DarkHeroPanel from "@/components/DarkHeroPanel";
import IconFeatureCard from "@/components/IconFeatureCard";
import ProcessSteps from "@/components/ProcessSteps";
import FaqAccordion from "@/components/FaqAccordion";
import FadeIn from "@/components/motion/FadeIn";
import CountUp from "@/components/motion/CountUp";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { SplitImageSection, BannerImageSection } from "@/components/ImageSection";
import TechMarquee from "@/components/TechMarquee";
import { serviceCategories } from "@/lib/site";

const featuredServices = serviceCategories.flatMap((cat) => cat.services).slice(0, 8);

const differentiators = [
  {
    icon: Users,
    title: "One team, not three vendors",
    description: "Product, brand, and marketing coordinated by people who talk to each other daily.",
  },
  {
    icon: UserCheck,
    title: "Senior people, not account managers",
    description: "You work directly with the person building your software or running your campaign.",
  },
  {
    icon: Wallet,
    title: "Transparent pricing",
    description: "Fixed-price for defined projects, clear retainers for ongoing work. No surprise invoices.",
  },
  {
    icon: Zap,
    title: "Ship fast, iterate faster",
    description: "Small increments you can see early, refined against real feedback and real data.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Figma",
  "Webflow",
  "Google Ads",
  "Meta Ads",
  "GA4",
  "HubSpot",
];

export default function Home() {
  return (
    <>
      <DarkHeroPanel
        eyebrow="Software · Design · Marketing"
        ghostText="URBANOVA"
        size="large"
        title={
          <>
            We build the tech, the brand,
            <br className="hidden sm:block" /> and the growth{" "}
            <span className="brand-gradient-text">— together.</span>
          </>
        }
        subtitle="Urbanova Technologies is a Bangalore-based studio that ships software, designs brands, and runs the marketing that gets both of them noticed."
        cta={{ href: "/contact", label: "Start a project" }}
        secondaryCta={{ href: "/services", label: "Explore services" }}
      >
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <div className="glass-card rounded-2xl p-6 text-left transition-transform duration-300 hover:-translate-y-1">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <Layers size={16} className="text-white" />
            </span>
            <p className="mt-4 text-2xl font-bold text-white">
              <CountUp value={3} /> disciplines
            </p>
            <p className="mt-1 text-sm text-white/60">Product, brand & marketing under one team</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-left transition-transform duration-300 hover:-translate-y-1">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <Sparkles size={16} className="text-white" />
            </span>
            <p className="mt-4 text-2xl font-bold text-white">
              <CountUp value={14} suffix="+" /> services
            </p>
            <p className="mt-1 text-sm text-white/60">From custom software to performance marketing</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-left transition-transform duration-300 hover:-translate-y-1">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <MapPin size={16} className="text-white" />
            </span>
            <p className="mt-4 text-2xl font-bold text-white">Bangalore, IN</p>
            <p className="mt-1 text-sm text-white/60">Incorporated July 2026 · Koramangala</p>
          </div>
        </div>
      </DarkHeroPanel>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <FadeIn className="text-center">
            <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-xs font-semibold tracking-wide text-brand-blue uppercase">
              What we do
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-navy sm:text-4xl">
              One team behind everything you launch
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy/60">
              No hand-offs between three different vendors. One team that builds your product,
              designs your brand, and markets both.
            </p>
          </FadeIn>

          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, i) => (
              <StaggerItem key={service.title} className="h-full">
                <IconFeatureCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={`/services/${service.slug}`}
                  highlighted={i === 0}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>

          <FadeIn delay={0.2} className="mt-10 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
            >
              See all services{" "}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <FadeIn className="text-center">
            <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-xs font-semibold tracking-wide text-brand-blue uppercase">
              How we work
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-navy sm:text-4xl">
              From first call to shipped, in four steps
            </h2>
          </FadeIn>

          <div className="mt-16">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <SplitImageSection
            src="/images/stock/coding.jpg"
            alt="Close-up of code on a screen"
            eyebrow="Build"
            title="Software built around how you work"
            description="We write clean, maintainable code and ship in small increments — so you're looking at a working product early, not a spec document six months from now."
            cta={{ href: "/services#build", label: "See build & consult services" }}
          />
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <SplitImageSection
            src="/images/stock/marketing-dashboard.jpg"
            alt="Marketing analytics dashboard on a screen"
            eyebrow="Grow"
            title="Marketing measured by real outcomes"
            description="SEO, paid, and social campaigns tied to clean tracking and dashboards — so you always know what's working and what to cut."
            reverse
            cta={{ href: "/services#growth", label: "See marketing & growth services" }}
          />
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <FadeIn className="dark-panel rounded-[2rem] px-6 py-14 sm:px-12 sm:py-16">
            <div className="text-center">
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-wide text-white/80 uppercase">
                Why Urbanova
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                Built to be different from a typical agency
              </h2>
            </div>

            <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {differentiators.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="glass-card h-full rounded-2xl p-6 text-left transition-transform duration-300 hover:-translate-y-1.5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <item.icon size={18} className="text-white" />
                    </span>
                    <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <BannerImageSection
            src="/images/stock/team-collab-wide.jpg"
            alt="Team collaborating around a laptop"
            eyebrow="The team behind it"
            title="A small, senior team you talk to directly"
            description="No account managers relaying messages between you and the people doing the work."
          />
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-4 text-center sm:px-6">
          <FadeIn>
            <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-xs font-semibold tracking-wide text-brand-blue uppercase">
              Tools & technologies
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold text-navy sm:text-3xl">
              We work with the tools your team already knows
            </h2>
          </FadeIn>
          <div className="mt-8">
            <TechMarquee items={techStack} />
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <FadeIn direction="left">
              <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-xs font-semibold tracking-wide text-brand-blue uppercase">
                Our work
              </span>
              <h2 className="mt-4 text-3xl font-bold text-navy">Case studies are on their way</h2>
              <p className="mt-4 text-navy/60">
                Urbanova is a newly incorporated studio, so this section is honest about where we
                are: no fabricated client logos, no invented numbers. Visit the portfolio page to
                see the kind of work we&apos;re set up to do, and be one of the first case studies
                we publish.
              </p>
              <Link
                href="/portfolio"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
              >
                Visit the portfolio page{" "}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
            <StaggerGroup className="grid grid-cols-2 gap-5">
              {serviceCategories.map((cat) => (
                <StaggerItem key={cat.id}>
                  <div className="group relative aspect-square overflow-hidden rounded-2xl border border-black/5">
                    <Image
                      src={cat.image}
                      alt={cat.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#060b1f]/80 via-transparent p-4">
                      <p className="text-sm font-semibold text-white">{cat.title}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
              <StaggerItem>
                <div className="relative flex aspect-square items-center justify-center rounded-2xl border border-dashed border-navy/15 bg-navy/[0.03] p-4 text-center">
                  <p className="text-sm font-medium text-navy/50">Your project, next</p>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <FadeIn className="text-center">
            <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-xs font-semibold tracking-wide text-brand-blue uppercase">
              FAQ
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-navy sm:text-4xl">
              Questions we hear early
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-12">
            <FaqAccordion />
          </FadeIn>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <FadeIn className="brand-gradient-bg flex flex-col items-start gap-6 rounded-3xl px-8 py-12 text-white sm:flex-row sm:items-center sm:justify-between sm:px-12">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Have a project in mind?</h2>
              <p className="mt-2 max-w-md text-white/90">
                Tell us what you&apos;re building — we&apos;ll tell you how we&apos;d approach it.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-white px-7 py-3 text-sm font-semibold text-navy shadow-sm transition-transform hover:scale-[1.03]"
            >
              Get in touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
