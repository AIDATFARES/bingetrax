import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | BingeTrax IPTV",
  description: "Find answers to all your questions about BingeTrax IPTV subscriptions, device setup, streaming quality, payments, and 24/7 technical support.",
  alternates: {
    canonical: "/faq",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
