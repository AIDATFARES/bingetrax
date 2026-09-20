import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata = {
  title: "IPTV Reseller Program – Start Your IPTV Business | BINGETRAX",
  description:
    "Launch your own profitable IPTV business. Super fast reseller panel, low credit pricing, 100% white-label system, and 24/7 dedicated partner assistance.",
  alternates: {
    canonical: "/reseller",
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow pt-4">
      <ResellerPageContent />
    </main>
  );
}
