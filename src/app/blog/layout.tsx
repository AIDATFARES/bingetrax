import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPTV Tips, Streaming Guides & Tech Insights | BINGETRAX Blog",
  description:
    "Stay ahead with the latest IPTV guides, streaming device comparisons, speed optimization tips, and sports schedules from the BINGETRAX entertainment team.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
