"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

const tags = ["All", "Web Dev", "Mobile", "AI/ML", "Design", "Cloud", "Business"];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchTag = activeTag === "All" || post.category === activeTag;
    const matchSearch =
      !search ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div>
      {/* Page Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Insights & Resources
            </h1>
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B9CB6]" />
              <input
                type="search"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#111827] border border-[#8B9CB6]/20 text-[#F0F4FF] placeholder-[#8B9CB6] focus:border-[#00D4FF] focus:outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="glass rounded-2xl overflow-hidden border border-[#8B9CB6]/10 hover:border-[#00D4FF]/30 group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto lg:min-h-[300px] relative">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#7B2FFF]/20 text-[#7B2FFF] mb-4 inline-block w-fit">
                      {featuredPost.category}
                    </span>
                    <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4 group-hover:text-[#00D4FF] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-[#8B9CB6] mb-6 line-clamp-2">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-[#8B9CB6]">
                      <span>{featuredPost.author}</span>
                      <span>{featuredPost.date}</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  activeTag === tag
                    ? "bg-[#00D4FF] text-[#0A0F1E]"
                    : "bg-[#111827] text-[#8B9CB6] hover:text-[#F0F4FF] border border-[#8B9CB6]/20"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid + Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.slice(1).map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="glass rounded-xl overflow-hidden border border-[#8B9CB6]/10 hover:border-[#00D4FF]/30 group">
                        <div className="aspect-video relative overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div className="p-6">
                          <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#7B2FFF]/20 text-[#7B2FFF] mb-2 inline-block">
                            {post.category}
                          </span>
                          <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-[#00D4FF] transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-[#8B9CB6] text-sm line-clamp-2 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-[#8B9CB6] text-xs">{post.date}</span>
                            <span className="text-[#00D4FF] text-sm font-medium flex items-center gap-1">
                              Read <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-xl p-6 border border-[#8B9CB6]/10"
              >
                <h3 className="font-heading font-semibold mb-4">Popular Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <li key={post.id}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[#8B9CB6] hover:text-[#00D4FF] text-sm transition-colors line-clamp-2"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass rounded-xl p-6 border border-[#00D4FF]/20"
              >
                <h3 className="font-heading font-semibold mb-2">
                  Get weekly dev insights
                </h3>
                <p className="text-[#8B9CB6] text-sm mb-4">
                  Subscribe to our newsletter for the latest in software development.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-[#0A0F1E] border border-[#8B9CB6]/20 text-[#F0F4FF] text-sm focus:border-[#00D4FF] focus:outline-none"
                  />
                  <button className="px-4 py-2 rounded-lg bg-[#00D4FF] text-[#0A0F1E] font-semibold text-sm hover:bg-[#00D4FF]/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
