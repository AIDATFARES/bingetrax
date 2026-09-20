import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "IPTV Subscription Plans & Pricing | BingeTrax IPTV",
  description: "Explore flexible, buffer-free BingeTrax IPTV subscription plans. Stream 50,000+ live channels, sports, and VOD in crystal-clear 4K.",
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
