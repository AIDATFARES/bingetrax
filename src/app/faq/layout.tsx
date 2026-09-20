import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPTV FAQ – Questions, Setup & Speed Requirements | BINGETRAX",
  description:
    "Got questions about IPTV? Find quick answers on device compatibility, recommended internet speeds, 4K streaming quality, playlists, and instant setup.",
  alternates: {
    canonical: "/faq",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
