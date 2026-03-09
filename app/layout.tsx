import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "NexaSoft Solutions | Turning Vision Into Digital Reality",
  description:
    "Professional IT company delivering web apps, mobile apps, desktop software, cloud solutions, AI/ML, and UI/UX design. Build software that moves the world.",
  openGraph: {
    title: "NexaSoft Solutions | Turning Vision Into Digital Reality",
    description:
      "Professional IT company delivering web apps, mobile apps, desktop software, cloud solutions, AI/ML, and UI/UX design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0A0F1E] text-[#F0F4FF]">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
