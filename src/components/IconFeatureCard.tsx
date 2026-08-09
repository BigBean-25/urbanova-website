import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type IconFeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  highlighted?: boolean;
};

export default function IconFeatureCard({
  icon: Icon,
  title,
  description,
  href,
  highlighted = false,
}: IconFeatureCardProps) {
  return (
    <div
      className={`group flex h-full flex-col rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
        highlighted
          ? "brand-gradient-bg text-white hover:shadow-brand-blue/30"
          : "border border-black/5 bg-white text-navy"
      }`}
    >
      <span
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
          highlighted ? "bg-white/20" : "bg-brand-blue/10 text-brand-blue"
        }`}
      >
        <Icon size={18} strokeWidth={2} />
      </span>
      <h3 className={`mt-4 font-semibold ${highlighted ? "text-white" : "text-navy"}`}>{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${highlighted ? "text-white/80" : "text-navy/60"}`}>
        {description}
      </p>
      {href && (
        <Link
          href={href}
          className={`mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold ${
            highlighted ? "text-white" : "text-brand-blue"
          } hover:underline`}
        >
          Learn more{" "}
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
