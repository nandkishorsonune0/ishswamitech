import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | IshSwamiTech Solutions",
  description: "Terms and conditions for using IshSwamiTech Solutions services.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
