import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPTV Channels List (50,000+ Channels & VOD) | BINGETRAX IPTV",
  description: "Browse the complete BINGETRAX IPTV channel lineup. Stream 50,000+ live TV channels and 120,000+ movies & series in 4K/FHD from 160+ countries.",
  alternates: {
    canonical: "/channels",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
