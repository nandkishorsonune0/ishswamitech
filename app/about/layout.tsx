import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | IshSwamiTech Solutions",
  description:
    "We're builders, thinkers, and problem solvers. Learn about our mission, team, and values.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
