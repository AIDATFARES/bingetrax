import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPTV Guides, News & Streaming Tips | BingeTrax IPTV Blog",
  description: "Read the latest IPTV tutorials, hardware setup guides, streaming tips, and entertainment updates from the BingeTrax IPTV team.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
