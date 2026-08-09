import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn your business, your users, and what actually needs to be true for this to work.",
  },
  {
    number: "02",
    title: "Design & build",
    description: "Product, brand, or campaign — built in small increments you can see and react to early.",
  },
  {
    number: "03",
    title: "Launch",
    description: "Shipped, tracked, and handed over with everything you need to run it day to day.",
  },
  {
    number: "04",
    title: "Grow",
    description: "Ongoing iteration — marketing, features, and design refined against real usage data.",
  },
];

export default function ProcessSteps() {
  return (
    <StaggerGroup className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="absolute top-6 right-0 left-0 hidden h-px bg-navy/10 lg:block" aria-hidden />
      {steps.map((step) => (
        <StaggerItem key={step.number} className="relative">
          <span className="brand-gradient-bg relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white">
            {step.number}
          </span>
          <h3 className="mt-5 font-semibold text-navy">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/60">{step.description}</p>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
