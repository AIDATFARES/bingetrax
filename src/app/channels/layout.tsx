import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "50,000+ Live IPTV Channel List & 4K VOD | BINGETRAX",
  description:
    "Explore the complete 2025 channel lineup: Live sports, PPV events, local news & 120,000+ movies in 4K from 160+ countries. Find your favorite channels now!",
  alternates: {
    canonical: "/channels",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
