"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const categories = ["All", "Web", "Mobile", "Desktop", "AI/ML", "Design", "E-Commerce"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Web" && p.category === "Web") return true;
    if (activeFilter === "Mobile" && p.category === "Mobile") return true;
    if (activeFilter === "Desktop" && p.category === "Desktop") return true;
    if (activeFilter === "AI/ML" && p.category === "AI/ML") return true;
    if (activeFilter === "Design" && p.category === "Design") return true;
    if (activeFilter === "E-Commerce" && (p.tags.includes("Stripe") || p.title.includes("Shop"))) return true;
    return false;
  });

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
              Our Work
            </h1>
            <p className="text-[#8B9CB6] text-lg max-w-2xl">
              Projects that define our expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  activeFilter === cat
                    ? "bg-[#00D4FF] text-[#0A0F1E]"
                    : "bg-[#111827] text-[#8B9CB6] hover:text-[#F0F4FF] border border-[#8B9CB6]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link href={"/portfolio/" + project.slug}>
                      <div className="glass rounded-xl overflow-hidden border border-[#8B9CB6]/10 hover:border-[#00D4FF]/30 group">
                      <div className="aspect-video bg-[#111827] relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                            <span className="px-4 py-2 rounded-lg bg-[#00D4FF] text-[#0A0F1E] font-semibold text-sm">
                              View Case Study
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex gap-2 mb-2">
                            {project.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="font-mono text-xs px-2 py-0.5 rounded bg-[#7B2FFF]/20 text-[#7B2FFF]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="font-heading font-semibold text-lg group-hover:text-[#00D4FF] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-[#8B9CB6] text-sm mt-1">{project.description}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#8B9CB6] text-center py-16"
              >
                No projects found for this category.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Project Stats Bar */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center"
          >
            <div>
              <p className="font-heading font-bold text-2xl text-[#00D4FF]">50+</p>
              <p className="text-[#8B9CB6] text-sm">Projects Delivered</p>
            </div>
            <div>
              <p className="font-heading font-bold text-2xl text-[#00D4FF]">20+</p>
              <p className="text-[#8B9CB6] text-sm">Industries</p>
            </div>
            <div>
              <p className="font-heading font-bold text-2xl text-[#00D4FF]">98%</p>
              <p className="text-[#8B9CB6] text-sm">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 text-center border border-[#00D4FF]/20"
          >
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Have a project in mind?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#00D4FF] text-[#0A0F1E] font-semibold hover:bg-[#00D4FF]/90 transition-all"
            >
              Let&apos;s Discuss It <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
