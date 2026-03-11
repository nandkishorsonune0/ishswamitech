"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { contactFaq } from "@/data/faq";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Please describe your project"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitted(true);
  };

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
              Get In Touch
            </h1>
            <p className="text-[#8B9CB6] text-lg max-w-2xl">
              Let&apos;s build something great together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="glass rounded-xl p-6 border border-[#8B9CB6]/10">
                <Mail className="w-8 h-8 text-[#00D4FF] mb-4" />
                <h3 className="font-heading font-semibold mb-2">Email</h3>
                <a
                  href="mailto:hello@ishswamitech.com"
                  className="text-[#8B9CB6] hover:text-[#00D4FF] transition-colors"
                >
                  hello@ishswamitech.com
                </a>
              </div>
              <div className="glass rounded-xl p-6 border border-[#8B9CB6]/10">
                <Phone className="w-8 h-8 text-[#00D4FF] mb-4" />
                <h3 className="font-heading font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+911234567890"
                  className="text-[#8B9CB6] hover:text-[#00D4FF] transition-colors"
                >
                  +91-7218378311
                </a>
              </div>
              <div className="glass rounded-xl p-6 border border-[#8B9CB6]/10">
                <MapPin className="w-8 h-8 text-[#00D4FF] mb-4" />
                <h3 className="font-heading font-semibold mb-2">Address</h3>
                <p className="text-[#8B9CB6]">City, State, Country</p>
              </div>
            </motion.div>

            {/* Form & Map */}
            <div className="lg:col-span-2 space-y-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-xl p-12 text-center border border-[#22C55E]/30"
                >
                  <CheckCircle className="w-16 h-16 text-[#22C55E] mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-2xl mb-2">Message Sent!</h3>
                  <p className="text-[#8B9CB6]">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="glass rounded-xl p-8 border border-[#8B9CB6]/10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        {...register("name")}
                        className="w-full px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#8B9CB6]/20 text-[#F0F4FF] focus:border-[#00D4FF] focus:outline-none"
                        placeholder="John Doe"
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
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#8B9CB6]/20 text-[#F0F4FF] focus:border-[#00D4FF] focus:outline-none"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <input
                        {...register("company")}
                        className="w-full px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#8B9CB6]/20 text-[#F0F4FF] focus:border-[#00D4FF] focus:outline-none"
                        placeholder="Acme Inc"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Interested In</label>
                      <select
                        {...register("service")}
                        className="w-full px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#8B9CB6]/20 text-[#F0F4FF] focus:border-[#00D4FF] focus:outline-none"
                      >
                        <option value="">Select...</option>
                        <option value="web">Web</option>
                        <option value="mobile">Mobile</option>
                        <option value="desktop">Desktop</option>
                        <option value="ai">AI/ML</option>
                        <option value="cloud">Cloud</option>
                        <option value="design">Design</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Project Description *</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0F1E] border border-[#8B9CB6]/20 text-[#F0F4FF] focus:border-[#00D4FF] focus:outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 rounded-lg bg-[#00D4FF] text-[#0A0F1E] font-semibold hover:bg-[#00D4FF]/90 disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-[#111827]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading font-bold text-2xl mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {contactFaq.map((faq) => (
                <div
                  key={faq.id}
                  className="glass rounded-xl border border-[#8B9CB6]/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 text-left font-heading font-semibold flex justify-between items-center hover:bg-[#0A0F1E]/50 transition-colors"
                  >
                    {faq.question}
                    <span className="text-[#00D4FF]">{openFaq === faq.id ? "−" : "+"}</span>
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-4 text-[#8B9CB6] text-sm">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
