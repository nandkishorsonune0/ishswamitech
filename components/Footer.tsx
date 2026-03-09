import Link from "next/link";
import { Sparkles, Linkedin, Github, Twitter, Instagram, Youtube } from "lucide-react";
import ScrollToTop from "./ScrollToTop";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "#", label: "Press" },
  ],
  services: [
    { href: "/services#web-development", label: "Web Dev" },
    { href: "/services#mobile-development", label: "Mobile" },
    { href: "/services#ai-ml", label: "AI/ML" },
    { href: "/services#cloud-solutions", label: "Cloud" },
    { href: "/services#ui-ux-design", label: "Design" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms" },
    { href: "#", label: "Cookie Policy" },
  ],
};

const socialLinks = [
  { href: "https://linkedin.com", icon: Linkedin },
  { href: "https://github.com", icon: Github },
  { href: "https://twitter.com", icon: Twitter },
  { href: "https://instagram.com", icon: Instagram },
  { href: "https://youtube.com", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1E] border-t border-[#8B9CB6]/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg bg-[#00D4FF]/20">
                <Sparkles className="w-5 h-5 text-[#00D4FF]" />
              </div>
              <span className="font-heading font-bold text-xl text-[#F0F4FF]">
                NexaSoft
              </span>
            </Link>
            <p className="text-[#8B9CB6] text-sm max-w-xs mb-6">
              Turning Vision Into Digital Reality
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#111827] text-[#8B9CB6] hover:text-[#00D4FF] hover:bg-[#111827]/80 transition-colors"
                  aria-label={Icon.name}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-[#F0F4FF] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8B9CB6] hover:text-[#00D4FF] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-[#F0F4FF] mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8B9CB6] hover:text-[#00D4FF] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-[#F0F4FF] mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8B9CB6] hover:text-[#00D4FF] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#8B9CB6]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8B9CB6] text-sm">
            © 2025 NexaSoft Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@nexasoft.com"
              className="text-[#8B9CB6] hover:text-[#00D4FF] text-sm transition-colors"
            >
              hello@nexasoft.com
            </a>
            <a
              href="tel:+911234567890"
              className="text-[#8B9CB6] hover:text-[#00D4FF] text-sm transition-colors"
            >
              +91-XXXXXXXXXX
            </a>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}
