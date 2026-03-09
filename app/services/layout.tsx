import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | NexaSoft Solutions",
  description:
    "End-to-end software solutions: Web, Mobile, Desktop, AI/ML, Cloud, UI/UX, and more.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
