"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  DollarSign,
  BookOpen,
  Rocket,
  ChevronDown,
  MapPin,
  Briefcase,
  ArrowRight,
  Upload,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const perks = [
  { icon: Home, title: "Remote-First", desc: "Work from anywhere" },
  { icon: DollarSign, title: "Competitive Pay", desc: "Industry-leading compensation" },
  { icon: BookOpen, title: "Learning Budget", desc: "$1,000/year for courses" },
  { icon: Rocket, title: "Exciting Projects", desc: "Work on cutting-edge tech" },
];

const positions = [
  { title: "Full Stack Developer", type: "Full-time", location: "Remote", tech: "React + Node.js" },
  { title: "Flutter Mobile Developer", type: "Full-time", location: "Remote", tech: "Flutter" },
  { title: "AI/ML Engineer", type: "Full-time", location: "Remote", tech: "Python" },
  { title: "UI/UX Designer", type: "Full-time", location: "Remote", tech: "Figma" },
  { title: "DevOps Engineer", type: "Full-time", location: "Remote", tech: "AWS/Docker" },
  { title: "QA Engineer", type: "Full-time", location: "Remote", tech: "Testing" },
];

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  position: z.string().min(1, "Select a position"),
  linkedin: z.string().optional(),
  coverLetter: z.string().min(50, "Please write a brief cover letter"),
});

type FormData = z.infer<typeof formSchema>;

export default function CareersPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const openForm = (position: string) => {
    setSelectedPosition(position);
    setValue("position", position);
    setShowForm(true);
  };

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitted(true);
    setShowForm(false);
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Join the NexaSoft Team
            </h1>
            <p className="text-[#8B9CB6] text-lg max-w-2xl mx-auto">
              Build the future of software with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="glass rounded-xl p-6 border border-[#8B9CB6]/10 hover:border-[#00D4FF]/20 transition-all"
                >
                  <Icon className="w-10 h-10 text-[#00D4FF] mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-2">{perk.title}</h3>
                  <p className="text-[#8B9CB6] text-sm">{perk.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-[#111827]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-heading font-bold text-3xl mb-4">Open Positions</h2>
            <p className="text-[#8B9CB6]">Find your next opportunity</p>
          </motion.div>

          <div className="space-y-4">
            {positions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-6 border border-[#8B9CB6]/10 hover:border-[#00D4FF]/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{pos.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-[#8B9CB6]">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" /> {pos.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {pos.location}
                    </span>
                    <span className="font-mono text-[#00D4FF]">{pos.tech}</span>
                  </div>
                </div>
                <button
                  onClick={() => openForm(pos.title)}
                  className="px-6 py-3 rounded-lg bg-[#00D4FF] text-[#0A0F1E] font-semibold hover:bg-[#00D4FF]/90 flex items-center gap-2 shrink-0"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0F1E]/90 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto border border-[#8B9CB6]/20"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-heading font-bold text-2xl">Apply for {selectedPosition}</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-[#8B9CB6] hover:text-[#F0F4FF] text-2xl"
              >
                ×
              </button>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <p className="text-[#22C55E] font-semibold mb-2">Application submitted!</p>
                <p className="text-[#8B9CB6] text-sm">We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#8B9CB6]/20 text-[#F0F4FF] focus:border-[#00D4FF] focus:outline-none"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#8B9CB6]/20 text-[#F0F4FF] focus:border-[#00D4FF] focus:outline-none"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#8B9CB6]/20 text-[#F0F4FF] focus:border-[#00D4FF] focus:outline-none"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Position *</label>
                  <input
                    {...register("position")}
                    value={selectedPosition}
                    readOnly
                    className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-[#8B9CB6]/20 text-[#F0F4FF]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">LinkedIn URL</label>
                  <input
                    {...register("linkedin")}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#8B9CB6]/20 text-[#F0F4FF] focus:border-[#00D4FF] focus:outline-none"
                    placeholder="https://linkedin.com/in/..."
                  />
                  {errors.linkedin && (
                    <p className="text-red-400 text-sm mt-1">{errors.linkedin.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Resume (placeholder)</label>
                  <div className="w-full px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#8B9CB6]/20 border-dashed flex items-center gap-2 text-[#8B9CB6]">
                    <Upload className="w-5 h-5" />
                    <span>Upload resume (UI only)</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Cover Letter *</label>
                  <textarea
                    {...register("coverLetter")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#8B9CB6]/20 text-[#F0F4FF] focus:border-[#00D4FF] focus:outline-none resize-none"
                    placeholder="Tell us why you'd be a great fit..."
                  />
                  {errors.coverLetter && (
                    <p className="text-red-400 text-sm mt-1">{errors.coverLetter.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-[#00D4FF] text-[#0A0F1E] font-semibold hover:bg-[#00D4FF]/90 disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}

      {/* Culture Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl mb-4">Our Culture</h2>
            <p className="text-[#8B9CB6] max-w-2xl mx-auto">
              We believe in work-life balance, continuous learning, and building things that matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {["/Assets/Programmers_4.jpg", "/Assets/hero_img.jpg", "/Assets/computer-screen-with-blue-background-with-keyboard-mouse.jpg"].map((src, i) => (
              <div
                key={i}
                className="aspect-video glass rounded-xl border border-[#8B9CB6]/10 overflow-hidden relative"
              >
                <Image
                  src={src}
                  alt={`Team culture ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>

          <div className="glass rounded-xl p-8 border border-[#8B9CB6]/10 max-w-3xl mx-auto">
            <p className="text-[#F0F4FF] italic text-center mb-4">
              &ldquo;Working at NexaSoft has been the best career decision I&apos;ve made. The projects are challenging, the team is supportive, and I&apos;ve grown more in a year than in five years elsewhere.&rdquo;
            </p>
            <p className="text-[#8B9CB6] text-center text-sm">— Team Member</p>
          </div>
        </div>
      </section>
    </div>
  );
}
