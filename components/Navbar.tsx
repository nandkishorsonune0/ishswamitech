"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-lg py-3 border-b border-gray-200"
          : "bg-transparent py-5"
          }`}
      >
        <nav className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-[#00D4FF]/20 group-hover:bg-[#00D4FF]/30 transition-colors overflow-hidden flex items-center justify-center">
              <Image src="/Assets/main-logo.png" alt="IshSwamiTech Logo" width={32} height={32} className="w-8 h-8 object-cover scale-[1.2]" />
            </div>
            <span className="font-heading font-bold text-xl gradient-text">
              IshSwamiTech
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${pathname === link.href
                  ? "text-[#7B2FFF]"
                  : isScrolled
                    ? "text-gray-700 hover:text-black"
                    : "text-[#8B9CB6] hover:text-[#06B6D4]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#A855F7] to-[#06B6D4] text-white font-semibold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-[#A855F7]/30 transition-all"
            >
              Get a Quote
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-gray-900" : "text-[#F0F4FF]"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[#0B0A1A]/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-[#0B0A1A]/95 backdrop-blur-md border-l border-[#3B82F6]/20 p-6 pt-20">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium ${pathname === link.href
                      ? "text-[#A855F7]"
                      : "text-[#F0F4FF] hover:text-[#06B6D4]"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-5 py-3 rounded-lg bg-gradient-to-r from-[#A855F7] to-[#06B6D4] text-white font-semibold text-center"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
