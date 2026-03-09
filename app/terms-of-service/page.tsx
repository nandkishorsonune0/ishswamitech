"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading font-bold text-4xl mb-4">Terms of Service</h1>
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
                1. Service Agreement
              </h2>
              <p>
                By engaging NexaSoft Solutions for software development or related services, you
                agree to these Terms of Service. A separate project agreement or statement of work
                may specify additional terms for individual projects.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-[#F0F4FF] mb-4">
                2. Payment Terms
              </h2>
              <p>
                Payment terms are specified in each project agreement. Typically, we require a
                deposit to begin work and milestone-based or final payment upon completion.
                Invoices are due within 30 days unless otherwise agreed. Late payments may incur
                interest charges.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-[#F0F4FF] mb-4">
                3. Intellectual Property
              </h2>
              <p>
                Upon full payment, you receive ownership of the custom deliverables created for your
                project. Pre-existing materials, tools, and frameworks remain our property or
                their respective licensors. We retain the right to use anonymized work for
                portfolio and marketing purposes unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-[#F0F4FF] mb-4">
                4. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, NexaSoft Solutions shall not be liable for
                any indirect, incidental, special, or consequential damages arising from the use of
                our services. Our total liability shall not exceed the amount paid by you for the
                specific project giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-[#F0F4FF] mb-4">
                5. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                jurisdiction in which NexaSoft Solutions is registered, without regard to its
                conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-[#F0F4FF] mb-4">
                6. Contact
              </h2>
              <p>
                For questions about these Terms, contact us at{" "}
                <a
                  href="mailto:hello@nexasoft.com"
                  className="text-[#00D4FF] hover:underline"
                >
                  hello@nexasoft.com
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
