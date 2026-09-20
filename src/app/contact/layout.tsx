import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "24/7 Customer Support & Help Center | BINGETRAX",
  description:
    "Need fast assistance? Contact BINGETRAX support 24/7 via live WhatsApp or email. Instant troubleshooting, account activation, and subscription help.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
