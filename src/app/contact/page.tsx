import type { Metadata } from "next";
import { Phone, Mail, MapPin, FileText } from "lucide-react";
import DarkHeroPanel from "@/components/DarkHeroPanel";
import { BannerImageSection } from "@/components/ImageSection";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { company } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Urbanova Technologies.",
};

export default function ContactPage() {
  return (
    <>
      <DarkHeroPanel
        eyebrow="Contact"
        title="Let's talk about your project"
        subtitle="Reach out directly or send us a message and we'll get back to you."
      />

      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn direction="left" className="lg:col-span-2">
            <StaggerGroup className="space-y-6">
              <StaggerItem>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-navy/40 uppercase">Phone</p>
                    <a href={company.phoneHref} className="mt-1 block font-medium text-navy hover:text-brand-blue">
                      {company.phone}
                    </a>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-navy/40 uppercase">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="mt-1 block font-medium text-navy hover:text-brand-blue"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-navy/40 uppercase">
                      Registered office
                    </p>
                    <p className="mt-1 font-medium text-navy">{company.address}</p>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <FileText size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-navy/40 uppercase">CIN</p>
                    <p className="mt-1 font-medium text-navy">{company.cin}</p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </FadeIn>

          <FadeIn
            direction="right"
            delay={0.1}
            className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm lg:col-span-3"
          >
            <ContactForm />
          </FadeIn>
        </div>

        <div className="mt-16">
          <BannerImageSection
            src="/images/stock/bangalore-skyline.jpg"
            alt="Bangalore city skyline"
            eyebrow="Find us"
            title="Koramangala, Bangalore"
            description={company.address}
          />
        </div>
      </div>
    </>
  );
}
