import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore EreborHub's portfolio: Identity Platform, Likelemba (tontine fintech), and On-Demand Print & Delivery — built with modern technology stacks.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
