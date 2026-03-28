import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "EreborHub services: custom software development, digital identity (KYC/KYB/AML), cloud solutions, and business software for modern enterprises.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
