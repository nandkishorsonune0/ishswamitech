"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading font-bold text-8xl md:text-9xl mb-4 glitch-text"
          style={{
            color: "#00D4FF",
            textShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
          }}
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#8B9CB6] text-xl mb-8"
        >
          Looks like this page got lost in the cloud
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <div className="w-24 h-24 rounded-full bg-[#111827] border border-[#8B9CB6]/20 flex items-center justify-center">
            <Rocket className="w-12 h-12 text-[#8B9CB6]/50" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-block px-8 py-4 rounded-lg bg-[#00D4FF] text-[#0A0F1E] font-semibold hover:bg-[#00D4FF]/90 glow-cyan transition-all"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
