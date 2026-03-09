"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { pricingFaq } from "@/data/faq";

const plans = [
  {
    name: "Starter",
    desc: "For small businesses",
    price: "$500 – $2,000",
    priceMonthly: null,
    features: [
      "Basic web/mobile app",
      "1 platform",
      "30-day support",
      "Source code ownership",
      "Basic documentation",
    ],
    notIncluded: ["Multi-platform", "Ongoing retainer", "Priority support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    desc: "For scaling teams",
    price: "$2,000 – $10,000",
    priceMonthly: null,
    features: [
      "Full-stack custom app",
      "Multi-platform",
      "60-day support",
      "Advanced features",
      "API integration",
      "Performance optimization",
    ],
    notIncluded: ["Ongoing retainer", "Dedicated team"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    desc: "For large organizations",
    price: "Custom Quote",
    priceMonthly: null,
    features: [
      "Complex enterprise systems",
      "All platforms",
      "Ongoing retainer",
      "Dedicated team",
      "24/7 support",
      "Custom SLA",
      "Security audit",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false,
  },
];

const addOns = [
  { name: "UI/UX Design", price: "$500 – $2,000" },
  { name: "SEO Optimization", price: "$300 – $1,000" },
  { name: "Maintenance Plan", price: "$200/month" },
  { name: "AI Integration", price: "$1,000 – $5,000" },
];

export default function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Page Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Transparent Pricing
            </h1>
            <p className="text-[#8B9CB6] text-lg max-w-2xl mx-auto mb-6">
              Plans for every stage of your business
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className={!isMonthly ? "text-[#F0F4FF]" : "text-[#8B9CB6]"}>
                Monthly
              </span>
              <button
                onClick={() => setIsMonthly(!isMonthly)}
                className="relative w-14 h-8 rounded-full bg-[#111827] border border-[#8B9CB6]/20"
              >
                <div
                  className={`absolute top-1 w-6 h-6 rounded-full bg-[#00D4FF] transition-all duration-300 ${
                    isMonthly ? "left-1" : "left-7"
                  }`}
                />
              </button>
              <span className={isMonthly ? "text-[#F0F4FF]" : "text-[#8B9CB6]"}>
                Project-Based
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative glass rounded-2xl p-8 border ${
                  plan.popular
                    ? "border-[#00D4FF]/50 glow-cyan"
                    : "border-[#8B9CB6]/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00D4FF] text-[#0A0F1E] font-semibold text-sm flex items-center gap-1">
                    <Sparkles className="w-4 h-4" /> Most Popular
                  </div>
                )}
                <h3 className="font-heading font-bold text-2xl mb-2">{plan.name}</h3>
                <p className="text-[#8B9CB6] text-sm mb-6">{plan.desc}</p>
                <p className="font-heading font-bold text-3xl text-[#00D4FF] mb-6">
                  {plan.price}
                </p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[#F0F4FF]">
                      <Check className="w-5 h-5 text-[#22C55E] shrink-0" />
                      {f}
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[#8B9CB6]">
                      <X className="w-5 h-5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-3 rounded-lg text-center font-semibold transition-all ${
                    plan.popular
                      ? "bg-[#00D4FF] text-[#0A0F1E] hover:bg-[#00D4FF]/90"
                      : "border border-[#00D4FF]/50 text-[#00D4FF] hover:bg-[#00D4FF]/10"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-[#111827]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl mb-4">Add-on Services</h2>
            <p className="text-[#8B9CB6] max-w-xl mx-auto">
              Enhance your project with these optional services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-6 border border-[#8B9CB6]/10"
              >
                <h3 className="font-heading font-semibold mb-2">{addon.name}</h3>
                <p className="text-[#00D4FF] font-mono">{addon.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading font-bold text-2xl mb-8">Pricing FAQ</h2>
            <div className="space-y-4">
              {pricingFaq.map((faq) => (
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
              Not sure which plan fits?
            </h2>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg bg-[#00D4FF] text-[#0A0F1E] font-semibold hover:bg-[#00D4FF]/90 transition-all"
            >
              Book Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
