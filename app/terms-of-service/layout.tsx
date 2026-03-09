import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | NexaSoft Solutions",
  description: "Terms and conditions for using NexaSoft Solutions services.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
