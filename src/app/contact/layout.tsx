import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Customer Support | BingeTrax IPTV",
  description: "Get 24/7 technical support, billing assistance, and trial setup help from the BingeTrax IPTV support team via WhatsApp and email.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
