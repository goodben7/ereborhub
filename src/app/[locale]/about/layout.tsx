import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about EreborHub — a technology company based in Kinshasa, DRC, building premium digital products for Africa and the world.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
