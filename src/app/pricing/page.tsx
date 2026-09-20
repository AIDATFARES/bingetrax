import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "Affordable IPTV Subscription Plans & Deals | BINGETRAX",
  description:
    "Discover high-performance IPTV plans starting at $11.99/mo. 50,000+ channels, 4K live sports, and instant activation with a 7-day money-back guarantee.",
  alternates: {
    canonical: "/pricing",
  },
};


export default function PricingPage() {
  return (
    <main className="flex-grow pt-4">
      <PricingPageContent />
    </main>
  );
}
