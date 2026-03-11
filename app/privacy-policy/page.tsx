"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading font-bold text-4xl mb-4">Privacy Policy</h1>
            <p className="text-[#8B9CB6]">Last updated: March 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-12 text-[#8B9CB6] leading-relaxed"
          >
            <div>
              <h2 className="font-heading font-semibold text-xl text-[#F0F4FF] mb-4">
                1. What Data We Collect
              </h2>
              <p>
                We collect information you provide directly, such as name, email address, phone
                number, company name, and project details when you contact us or use our services.
                We also automatically collect certain information when you visit our website,
                including IP address, browser type, and usage data.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-[#F0F4FF] mb-4">
                2. How We Use Your Data
              </h2>
              <p>
                We use your data to provide and improve our services, communicate with you about
                your projects, send marketing communications (with your consent), and comply with
                legal obligations. We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-[#F0F4FF] mb-4">
                3. Third-Party Sharing
              </h2>
              <p>
                We may share your data with trusted service providers who assist us in operating
                our business (e.g., hosting, analytics, email services). These providers are
                contractually obligated to protect your data. We may also disclose information when
                required by law.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-[#F0F4FF] mb-4">
                4. Cookies
              </h2>
              <p>
                We use cookies and similar technologies to enhance your experience, analyze site
                traffic, and personalize content. You can control cookie preferences through your
                browser settings. Essential cookies are necessary for the website to function
                properly.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-[#F0F4FF] mb-4">
                5. Your Rights
              </h2>
              <p>
                Depending on your location, you may have the right to access, correct, delete, or
                port your personal data. You may also have the right to object to or restrict
                certain processing. To exercise these rights, contact us at hello@ishswamitech.com.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-[#F0F4FF] mb-4">
                6. Contact
              </h2>
              <p>
                For questions about this Privacy Policy or our data practices, contact us at{" "}
                <a
                  href="mailto:hello@ishswamitech.com"
                  className="text-[#00D4FF] hover:underline"
                >
                  hello@ishswamitech.com
                </a>
                .
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/"
            className="text-[#00D4FF] hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
