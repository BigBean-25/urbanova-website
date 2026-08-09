import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import DarkHeroPanel from "@/components/DarkHeroPanel";
import BlogCard from "@/components/BlogCard";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { blogPosts } from "@/lib/blog";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <>
      <DarkHeroPanel
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        secondaryCta={{ href: "/blog", label: "Back to blog" }}
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
            <Image src={post.image} alt={post.imageAlt} fill sizes="768px" className="object-cover" priority />
          </div>
          <p className="mt-4 text-sm text-navy/40">
            {formatDate(post.date)} · {post.readTime}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-8">
          {post.content.map((block, i) =>
            block.type === "h2" ? (
              <h2 key={i} className="mt-8 text-xl font-bold text-navy first:mt-0">
                {block.text}
              </h2>
            ) : (
              <p key={i} className="mt-4 leading-relaxed text-navy/70">
                {block.text}
              </p>
            )
          )}
        </FadeIn>

        <FadeIn delay={0.15} className="mt-12">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Back to all posts
          </Link>
        </FadeIn>
      </div>

      {related.length > 0 && (
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
          <FadeIn>
            <h2 className="text-2xl font-bold text-navy">More on {post.category}</h2>
          </FadeIn>
          <StaggerGroup className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <BlogCard post={p} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      )}

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <FadeIn className="brand-gradient-bg flex flex-col items-start gap-6 rounded-3xl px-8 py-12 text-white sm:flex-row sm:items-center sm:justify-between sm:px-12">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Have a project in mind?</h2>
            <p className="mt-2 max-w-md text-white/90">
              Tell us what you&apos;re building — we&apos;ll tell you how we&apos;d approach it.
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
