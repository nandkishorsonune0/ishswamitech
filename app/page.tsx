"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Monitor,
  Brain,
  Cloud,
  Palette,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { blogPosts } from "@/data/blog";
import { marqueeTech } from "@/data/techStack";
import AnimatedCounter from "@/components/AnimatedCounter";

const serviceIcons: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Monitor,
  Brain,
  Cloud,
  Palette,
};

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredBlog = blogPosts.slice(0, 3);

  return (
    <div>
      {/* Hero Section - Image as background with overlay content */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/Assets/hero_img.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#0A0F1E]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/60 to-transparent" />

        <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              We Build Software That{" "}
              <span className="gradient-text">Moves the World</span>
            </h1>
            <p className="text-[#8B9CB6] text-lg md:text-xl mb-10">
              Web Apps · Mobile Apps · Desktop · AI/ML · Cloud · UI/UX
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-lg bg-[#00D4FF] text-[#0A0F1E] font-semibold hover:bg-[#00D4FF]/90 glow-cyan transition-all text-center"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-lg border border-[#00D4FF]/50 text-[#00D4FF] font-semibold hover:bg-[#00D4FF]/10 transition-all text-center"
              >
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <a
            href="#marquee"
            className="flex flex-col items-center gap-2 text-[#8B9CB6] hover:text-[#00D4FF] transition-colors"
          >
            <span className="text-sm">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </section>

      {/* Marquee */}
      <section id="marquee" className="py-12 border-y border-[#8B9CB6]/20 overflow-hidden">
        <p className="text-center text-[#8B9CB6] text-sm mb-6">Technologies We Master</p>
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...marqueeTech, ...marqueeTech].map((tech, i) => (
            <span
              key={i}
              className="font-mono text-[#8B9CB6] hover:text-[#00D4FF] transition-colors flex items-center gap-2"
            >
              <tech.icon className="w-5 h-5" />
              {tech.name}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-[#8B9CB6] max-w-2xl mx-auto">
              End-to-end software solutions for every platform and need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => {
              const Icon = serviceIcons[service.icon] || Globe;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/services#${service.slug}`}>
                    <div className="glass rounded-xl p-6 h-full border border-[#8B9CB6]/10 hover:border-[#00D4FF]/30 hover:glow-cyan transition-all group">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: service.color }} />
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-[#00D4FF] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#8B9CB6] text-sm mb-4">{service.shortDesc}</p>
                      <span className="text-[#00D4FF] text-sm font-medium flex items-center gap-1">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 bg-[#111827] border-y border-[#8B9CB6]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="font-heading font-bold text-3xl md:text-4xl text-[#00D4FF] mb-1">
                <AnimatedCounter end={200} suffix="+" />
              </p>
              <p className="text-[#8B9CB6] text-sm">Projects</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="font-heading font-bold text-3xl md:text-4xl text-[#00D4FF] mb-1">
                <AnimatedCounter end={50} suffix="+" />
              </p>
              <p className="text-[#8B9CB6] text-sm">Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="font-heading font-bold text-3xl md:text-4xl text-[#00D4FF] mb-1">
                <AnimatedCounter end={5} suffix="+" />
              </p>
              <p className="text-[#8B9CB6] text-sm">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="font-heading font-bold text-3xl md:text-4xl text-[#00D4FF] mb-1">
                <AnimatedCounter end={15} suffix="+" />
              </p>
              <p className="text-[#8B9CB6] text-sm">Team Members</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16"
          >
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Featured Projects
              </h2>
              <p className="text-[#8B9CB6] max-w-xl">
                Projects that define our expertise and drive results
              </p>
            </div>
            <Link
              href="/portfolio"
              className="px-6 py-3 rounded-lg border border-[#00D4FF]/50 text-[#00D4FF] font-semibold hover:bg-[#00D4FF]/10 transition-all"
            >
              View All Projects
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/portfolio/${project.slug}`}>
                  <div className="glass rounded-xl overflow-hidden border border-[#8B9CB6]/10 hover:border-[#00D4FF]/30 group">
                    <div className="aspect-video bg-[#111827] relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex gap-2 mb-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs px-2 py-0.5 rounded bg-[#7B2FFF]/20 text-[#7B2FFF]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-[#00D4FF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#8B9CB6] text-sm">{project.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#111827]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[#8B9CB6] max-w-2xl mx-auto">
              Trusted by businesses worldwide
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 md:p-12 border border-[#8B9CB6]/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0 aspect-square">
                  <Image
                    src={testimonials[0].avatar}
                    alt={testimonials[0].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold">{testimonials[0].name}</p>
                  <p className="text-[#8B9CB6] text-sm">
                    {testimonials[0].role}, {testimonials[0].company}
                  </p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B]">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[#F0F4FF] text-lg italic">&ldquo;{testimonials[0].quote}&rdquo;</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Technologies We Use
            </h2>
            <p className="text-[#8B9CB6] max-w-2xl mx-auto">
              Modern tools and frameworks for building exceptional software
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: "Frontend", techs: ["React", "Next.js", "Vue", "TypeScript"] },
              { label: "Backend", techs: ["Node.js", "Python", "Laravel", "FastAPI"] },
              { label: "Mobile", techs: ["Flutter", "React Native", "Swift", "Kotlin"] },
              { label: "Database", techs: ["PostgreSQL", "MongoDB", "Firebase", "Redis"] },
              { label: "Cloud", techs: ["AWS", "Azure", "GCP", "Docker"] },
              { label: "AI/ML", techs: ["TensorFlow", "PyTorch", "OpenAI"] },
            ].map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-4 border border-[#8B9CB6]/10 hover:border-[#00D4FF]/20 transition-colors"
              >
                <p className="font-mono text-xs text-[#00D4FF] mb-3">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-[#8B9CB6] hover:text-[#F0F4FF] transition-colors cursor-default"
                      title={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 md:p-16 text-center border border-[#00D4FF]/20"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-[#8B9CB6] mb-8 max-w-xl mx-auto">
              Let&apos;s turn your vision into digital reality. Get started with a free consultation.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg bg-[#00D4FF] text-[#0A0F1E] font-semibold hover:bg-[#00D4FF]/90 glow-cyan transition-all"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-[#111827]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16"
          >
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Insights & Resources
              </h2>
              <p className="text-[#8B9CB6] max-w-xl">
                Latest thoughts on software development and technology
              </p>
            </div>
            <Link
              href="/blog"
              className="text-[#00D4FF] font-semibold hover:underline flex items-center gap-2"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlog.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="glass rounded-xl overflow-hidden border border-[#8B9CB6]/10 hover:border-[#00D4FF]/30 group">
                    <div className="aspect-video bg-[#0A0F1E] relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#7B2FFF]/20 text-[#7B2FFF] mb-2 inline-block">
                        {post.category}
                      </span>
                      <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-[#00D4FF] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[#8B9CB6] text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <p className="text-[#8B9CB6] text-xs">{post.date}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
