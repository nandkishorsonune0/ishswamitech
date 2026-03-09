"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Eye,
  Linkedin,
  Award,
  Users,
  Building2,
  Lightbulb,
  CheckCircle,
  Heart,
} from "lucide-react";
import { team } from "@/data/team";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We embrace new technologies and creative solutions." },
  { icon: Eye, title: "Transparency", desc: "Clear communication and honest timelines." },
  { icon: CheckCircle, title: "Quality", desc: "We never compromise on code quality or delivery." },
  { icon: Heart, title: "Client-First", desc: "Your success is our success." },
];

const milestones = [
  { year: "2019", title: "Founded" },
  { year: "2020", title: "First 10 clients" },
  { year: "2021", title: "Launched AI division" },
  { year: "2022", title: "50+ projects" },
  { year: "2023", title: "International clients" },
  { year: "2024", title: "100+ projects" },
];

export default function AboutPage() {
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
              About NexaSoft
            </h1>
            <p className="text-[#8B9CB6] text-lg max-w-2xl">
              We&apos;re builders, thinkers, and problem solvers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl aspect-video overflow-hidden border border-[#8B9CB6]/20 relative"
            >
              <Image
                src="/Assets/Programmers_4.jpg"
                alt="NexaSoft team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-2xl mb-6">Our Story</h2>
              <p className="text-[#8B9CB6] mb-6 leading-relaxed">
                NexaSoft was founded with a simple mission: to build powerful digital solutions
                that empower businesses of every size. From our first project to today, we&apos;ve
                stayed true to our core belief that great software is built through collaboration,
                transparency, and a relentless focus on quality.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Mission</h3>
                    <p className="text-[#8B9CB6] text-sm">
                      To build powerful digital solutions that empower businesses of every size.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#7B2FFF]/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#7B2FFF]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Vision</h3>
                    <p className="text-[#8B9CB6] text-sm">
                      A world where every great idea has the software to back it.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#111827]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Core Values
            </h2>
            <p className="text-[#8B9CB6] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const ValueIcon = value.icon;
              return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="glass rounded-xl p-6 h-full border border-[#8B9CB6]/10 hover:border-[#00D4FF]/20 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center mb-4">
                    <ValueIcon className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-[#8B9CB6] text-sm">{value.desc}</p>
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Meet Our Team
            </h2>
            <p className="text-[#8B9CB6] max-w-2xl mx-auto">
              The people behind NexaSoft
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="glass rounded-xl p-6 h-full border border-[#8B9CB6]/10 hover:border-[#00D4FF]/20 transition-all text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden relative mx-auto mb-4 aspect-square">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-sm">{member.name}</h3>
                  <p className="text-[#8B9CB6] text-xs mb-3">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center text-[#8B9CB6] hover:text-[#00D4FF] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-[#111827]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Journey
            </h2>
            <p className="text-[#8B9CB6] max-w-2xl mx-auto">
              Key milestones in our growth
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative"
              >
                <div className="glass rounded-xl p-6 border border-[#8B9CB6]/10 text-center">
                  <p className="font-heading font-bold text-2xl text-[#00D4FF] mb-2">
                    {m.year}
                  </p>
                  <p className="text-[#8B9CB6] text-sm">{m.title}</p>
                </div>
                {i < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#8B9CB6]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Partners */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Awards & Partners
            </h2>
            <p className="text-[#8B9CB6] max-w-2xl mx-auto">
              Recognized by industry leaders
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {["Google Partner", "AWS Partner", "Microsoft Partner", "Meta Developer"].map(
              (partner, i) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl px-8 py-6 border border-[#8B9CB6]/10 flex items-center gap-3"
                >
                  <Building2 className="w-8 h-8 text-[#00D4FF]" />
                  <span className="font-heading font-semibold">{partner}</span>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
