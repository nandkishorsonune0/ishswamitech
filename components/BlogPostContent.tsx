"use client";

import Link from "next/link";
import Image from "next/image";
import ShareButtons from "./ShareButtons";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  authorAvatar?: string;
  date: string;
  readTime: string;
}

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  return (
    <div>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#8B9CB6] hover:text-[#00D4FF] mb-8 transition-colors"
          >
            ← Back to Blog
          </Link>
          <div>
            <div className="aspect-video rounded-xl overflow-hidden relative mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#7B2FFF]/20 text-[#7B2FFF] mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#8B9CB6] text-sm">
              <span>{post.author}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <article className="prose prose-invert prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-[#8B9CB6] leading-relaxed">
              {post.content.split("\n").map((line, i) => {
                if (line.startsWith("## ")) {
                  return (
                    <h2 key={i} className="font-heading font-bold text-2xl text-[#F0F4FF] mt-8 mb-4">
                      {line.replace("## ", "")}
                    </h2>
                  );
                }
                if (line.startsWith("### ")) {
                  return (
                    <h3 key={i} className="font-heading font-semibold text-xl text-[#F0F4FF] mt-6 mb-3">
                      {line.replace("### ", "")}
                    </h3>
                  );
                }
                if (line.startsWith("- ")) {
                  return (
                    <li key={i} className="ml-4 text-[#8B9CB6]">
                      {line.replace("- ", "")}
                    </li>
                  );
                }
                if (line.trim() === "") return <br key={i} />;
                return (
                  <p key={i} className="mb-4">
                    {line}
                  </p>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div>
            <ShareButtons title={post.title} url={"https://nexasoft.com/blog/" + post.slug} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="glass rounded-xl p-6 border border-[#8B9CB6]/10 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden relative shrink-0 aspect-square">
              <Image
                src={(post as { authorAvatar?: string }).authorAvatar || "/Assets/Programmers_4.jpg"}
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-heading font-semibold">{post.author}</h3>
              <p className="text-[#8B9CB6] text-sm">Author at NexaSoft</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111827]">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="font-heading font-bold text-2xl mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((p) => (
                <Link key={p.id} href={"/blog/" + p.slug}>
                  <div className="glass rounded-xl overflow-hidden border border-[#8B9CB6]/10 hover:border-[#00D4FF]/30 group">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#7B2FFF]/20 text-[#7B2FFF] mb-2 inline-block">
                        {p.category}
                      </span>
                      <h3 className="font-heading font-semibold group-hover:text-[#00D4FF] transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                      <p className="text-[#8B9CB6] text-sm mt-1">{p.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="glass rounded-2xl p-12 text-center border border-[#00D4FF]/20 max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl mb-4">
              Get weekly dev insights
            </h2>
            <p className="text-[#8B9CB6] mb-6">
              Subscribe to our newsletter for the latest in software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#8B9CB6]/20 text-[#F0F4FF] focus:border-[#00D4FF] focus:outline-none"
              />
              <button className="px-6 py-3 rounded-lg bg-[#00D4FF] text-[#0A0F1E] font-semibold hover:bg-[#00D4FF]/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
