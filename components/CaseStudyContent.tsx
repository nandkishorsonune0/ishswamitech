"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Lightbulb,
  CheckCircle,
  BarChart3,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  client: string;
  industry: string;
  timeline: string;
  teamSize: number;
  challenge: string;
  solution: string;
  features: string[];
  results: string[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
}

interface CaseStudyContentProps {
  project: Project;
  relatedProjects: Project[];
}

export default function CaseStudyContent({ project, relatedProjects }: CaseStudyContentProps) {
  return (
    <div>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[#8B9CB6] hover:text-[#00D4FF] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1 rounded-lg bg-[#7B2FFF]/20 text-[#7B2FFF]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-[#8B9CB6] text-sm">
              <span>Client: {project.client}</span>
              <span>Industry: {project.industry}</span>
              <span>Timeline: {project.timeline}</span>
              <span>Team: {project.teamSize} members</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl overflow-hidden border border-[#8B9CB6]/20"
          >
            <div className="aspect-video relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 max-w-4xl"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center shrink-0">
              <Target className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-2xl mb-4">The Challenge</h2>
              <p className="text-[#8B9CB6] leading-relaxed">{project.challenge}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 max-w-4xl"
          >
            <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center shrink-0">
              <Lightbulb className="w-6 h-6 text-[#00D4FF]" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-2xl mb-4">Our Solution</h2>
              <p className="text-[#8B9CB6] leading-relaxed">{project.solution}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-2xl mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-sm px-4 py-2 rounded-lg bg-[#0A0F1E] border border-[#8B9CB6]/20 text-[#F0F4FF]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-2xl mb-6">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0" />
                  <span className="text-[#F0F4FF]">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 max-w-4xl"
          >
            <div className="w-12 h-12 rounded-xl bg-[#22C55E]/20 flex items-center justify-center shrink-0">
              <BarChart3 className="w-6 h-6 text-[#22C55E]" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-2xl mb-4">Results & Impact</h2>
              <ul className="space-y-2">
                {project.results.map((result) => (
                  <li key={result} className="text-[#F0F4FF] flex items-center gap-2">
                    <span className="text-[#22C55E]">✓</span> {result}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12 border border-[#8B9CB6]/20 max-w-4xl"
          >
            <p className="text-xl text-[#F0F4FF] italic mb-6">
              &ldquo;{project.testimonial}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#7B2FFF] flex items-center justify-center text-[#0A0F1E] font-bold">
                {project.testimonialAuthor.charAt(0)}
              </div>
              <div>
                <p className="font-heading font-semibold">{project.testimonialAuthor}</p>
                <p className="text-[#8B9CB6] text-sm">{project.testimonialRole}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#111827]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-2xl mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((p) => (
                <Link key={p.id} href={"/portfolio/" + p.slug}>
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
                      <h3 className="font-heading font-semibold group-hover:text-[#00D4FF] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-[#8B9CB6] text-sm mt-1">{p.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 text-center border border-[#00D4FF]/20"
          >
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Want similar results?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#00D4FF] text-[#0A0F1E] font-semibold hover:bg-[#00D4FF]/90 transition-all"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
