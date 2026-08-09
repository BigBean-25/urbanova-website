import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import DarkHeroPanel from "@/components/DarkHeroPanel";
import IconFeatureCard from "@/components/IconFeatureCard";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { serviceCategories } from "@/lib/site";

function findService(slug: string) {
  for (const category of serviceCategories) {
    const service = category.services.find((s) => s.slug === slug);
    if (service) return { service, category };
  }
  return null;
}

export function generateStaticParams() {
  return serviceCategories.flatMap((cat) => cat.services.map((s) => ({ slug: s.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = findService(slug);
  if (!found) return {};
  return {
    title: found.service.title,
    description: found.service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = findService(slug);
  if (!found) notFound();
  const { service, category } = found;

  const relatedServices = category.services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <DarkHeroPanel
        eyebrow={category.title}
        title={service.title}
        subtitle={service.description}
        cta={{ href: "/contact", label: "Start a project" }}
        secondaryCta={{ href: "/services", label: "Back to all services" }}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-navy">What&apos;s included</h2>
            <ul className="mt-6 space-y-4">
              {service.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Check size={14} />
                  </span>
                  <span className="text-navy/70">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="lg:col-span-2">
            <div className="dark-panel h-full rounded-2xl p-7">
              <h2 className="text-lg font-semibold text-white">Our approach</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{service.approach}</p>
            </div>
          </FadeIn>
        </div>

        {relatedServices.length > 0 && (
          <div className="mt-20">
            <FadeIn>
              <h2 className="text-2xl font-bold text-navy">
                More in <span className="text-brand-blue">{category.title}</span>
              </h2>
            </FadeIn>
            <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((s) => (
                <StaggerItem key={s.slug} className="h-full">
                  <IconFeatureCard
                    icon={s.icon}
                    title={s.title}
                    description={s.description}
                    href={`/services/${s.slug}`}
                  />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        )}

        <FadeIn className="brand-gradient-bg mt-20 flex flex-col items-start gap-6 rounded-3xl px-8 py-12 text-white sm:flex-row sm:items-center sm:justify-between sm:px-12">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to talk about {service.title.toLowerCase()}?</h2>
            <p className="mt-2 max-w-md text-white/90">
              Tell us about your project and we&apos;ll get back to you with next steps.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-7 py-3 text-sm font-semibold text-navy shadow-sm transition-transform hover:scale-[1.03]"
          >
            Get in touch <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </>
  );
}
