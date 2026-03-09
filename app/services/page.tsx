"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Monitor,
  Brain,
  Cloud,
  Palette,
  Plug,
  Shield,
  ShoppingCart,
  Building2,
  ArrowRight,
  Search,
  Layout,
  Code,
  TestTube,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Monitor,
  Brain,
  Cloud,
  Palette,
  Plug,
  Shield,
  ShoppingCart,
  Building2,
};

const processSteps = [
  { icon: Search, title: "Discovery", desc: "Understand your goals and requirements" },
  { icon: Layout, title: "Planning", desc: "Create roadmap and architecture" },
  { icon: Palette, title: "Design", desc: "Wireframes, prototypes, and UI" },
  { icon: Code, title: "Development", desc: "Build with agile sprints" },
  { icon: TestTube, title: "Testing", desc: "QA and security validation" },
  { icon: Rocket, title: "Launch", desc: "Deploy and go live" },
  { icon: HeadphonesIcon, title: "Support", desc: "Ongoing maintenance and updates" },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <nav className="text-sm text-[#8B9CB6]">
              <Link href="/" className="hover:text-[#00D4FF]">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#F0F4FF]">Services</span>
            </nav>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Our Services
            </h1>
            <p className="text-[#8B9CB6] text-lg max-w-2xl">
              End-to-end software solutions for every platform and need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Globe;
              return (
                <motion.div
                  key={service.id}
                  id={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-24"
                >
                  <div className="glass rounded-2xl p-8 md:p-12 border border-[#8B9CB6]/10 hover:border-[#00D4FF]/20 transition-all">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: service.color }} />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-heading font-bold text-2xl mb-4">{service.title}</h2>
                        <p className="text-[#8B9CB6] mb-6">{service.description}</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-[#F0F4FF]"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ backgroundColor: service.color }}
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-xs px-3 py-1 rounded-lg bg-[#111827] text-[#8B9CB6] hover:text-[#00D4FF] transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00D4FF] text-[#0A0F1E] font-semibold text-sm hover:bg-[#00D4FF]/90 transition-colors"
                        >
                          Get a Quote <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#111827]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Process
            </h2>
            <p className="text-[#8B9CB6] max-w-2xl mx-auto">
              A proven methodology for delivering successful projects
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max px-4">
              {processSteps.map((step, i) => {
                const StepIcon = step.icon;
                return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center w-40 shrink-0"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#0A0F1E] border border-[#8B9CB6]/20 flex items-center justify-center mb-4">
                    <StepIcon className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-[#8B9CB6] text-xs text-center">{step.desc}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute left-full top-1/2 w-8 h-0.5 bg-[#8B9CB6]/30" />
                  )}
                </motion.div>
              );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 md:p-16 text-center border border-[#00D4FF]/20"
          >
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Not sure which service you need? Let&apos;s talk.
            </h2>
            <p className="text-[#8B9CB6] mb-8 max-w-xl mx-auto">
              Book a free consultation and we&apos;ll help you find the right solution.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg bg-[#00D4FF] text-[#0A0F1E] font-semibold hover:bg-[#00D4FF]/90 glow-cyan transition-all"
            >
              Book Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
