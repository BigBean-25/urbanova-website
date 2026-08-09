import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 rounded-full border border-white/20 bg-white/90 px-3 py-1 text-xs font-semibold text-navy backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-semibold text-navy transition-colors group-hover:text-brand-blue">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{post.excerpt}</p>
        <p className="mt-4 text-xs text-navy/40">
          {formatDate(post.date)} · {post.readTime}
        </p>
      </div>
    </Link>
  );
}
