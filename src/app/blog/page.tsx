import type { Metadata } from "next";
import DarkHeroPanel from "@/components/DarkHeroPanel";
import BlogCard from "@/components/BlogCard";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on software, brand, and marketing from the Urbanova Technologies team.",
};

export default function BlogPage() {
  return (
    <>
      <DarkHeroPanel
        eyebrow="Blog & news"
        title="Notes on software, brand, and growth"
        subtitle="Thinking from the Urbanova team on building products, designing brands, and running marketing that actually works."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeIn delay={0.1} className="mt-16 text-center">
          <p className="text-sm text-navy/50">
            More posts on the way. Want us to cover something specific? Let us know at{" "}
            <a
              href="mailto:info@urbanovatech.com"
              className="font-medium text-brand-blue hover:underline"
            >
              info@urbanovatech.com
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </>
  );
}
