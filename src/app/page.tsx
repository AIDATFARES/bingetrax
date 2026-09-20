import HeroSection from "@/components/home/HeroSection";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

import TopFeatureBar from "@/components/home/TopFeatureBar";
import BrandMarquee from "@/components/home/BrandMarquee";
import MovieStrips from "@/components/home/MovieStrips";
import ChannelCategories from "@/components/home/ChannelCategories";
import DeviceSupport from "@/components/home/DeviceSupport";
import ComparisonSection from "@/components/home/ComparisonSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import LatestArticlesSection from "@/components/home/LatestArticlesSection";
import SupportCtaSection from "@/components/home/SupportCtaSection";

export default function Home() {
  return (
    <main className="flex-col flex min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition */}
      <TopFeatureBar />
      <MovieStrips />

      {/* Sports Tape */}
      <div className="w-full bg-white pt-12 pb-2 relative z-20">
        <h3 className="text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">All Major Sports & Leagues Live</h3>
      </div>
      <BrandMarquee 
        imagesFolder="sports" 
        images={[
          "sport1.webp",
          "sport2.webp",
          "sport3.webp",
          "sport4.webp",
          "sport5.webp",
          "sport6.webp",
          "sport7.webp",
          "sport8.webp",
          "sport9.webp",
          "sport10.webp",
          "sport11.webp",
          "sport12.webp"
        ]}
        cardClassName="flex-shrink-0 w-[140px] h-[220px] md:w-[180px] md:h-[280px] relative rounded-xl overflow-hidden shadow-2xl border border-black/10 bg-black hover:border-[#7000FF]/60 hover:scale-[1.03] transition-all duration-300 group"
        imageClassName="object-cover rounded-xl"
      />

      {/* Channel & Installation Quick Links */}
      <div className="w-full bg-white py-6 px-4 text-center border-t border-black/5 relative z-20">
        <p className="text-center text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
          Find the comprehensive <Link prefetch={false} className="font-semibold text-[#7000FF] hover:text-[#f44336]" href="/channels">BINGETRAX Channel List</Link> or navigate to our <Link prefetch={false} className="font-semibold text-[#7000FF] hover:text-[#f44336]" href="/installation">BINGETRAX Installation Guide</Link> for a quick start.
        </p>
      </div>

      <PricingSection />
      <ChannelCategories />

      {/* Device Support & How It Works */}
      <ComparisonSection />
      <DeviceSupport />
      
      {/* Device Logos Marquee */}
      <div className="w-full bg-white border-t border-black/[0.05] pt-12 pb-6 relative z-10">
        <h3 className="text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">Supported on all your favorite devices</h3>
        <BrandMarquee 
          imagesFolder="devices" 
          images={[
            "Amazon-Fire-tv-stick-krooz-tv.webp",
            "Apple-TV-krooz-tv.webp",
            "hisense-krooz-tv.webp",
            "iptv-smarter-krooz-tv.webp",
            "LG-smart-krooz-tv.webp",
            "Shield-krooz-tv.webp",
            "Smart-android-tv-krooz-tv.webp",
            "sony-select-krooz-tv.webp",
            "Tv-media-boxs-krooz-tv.webp",
            "Windows-krooz-tv.webp",
            "xbox-live-krooz-tv.webp"
          ]}
          cardClassName="flex-shrink-0 w-[160px] h-[80px] md:w-[220px] md:h-[100px] relative bg-white border border-slate-200 rounded-2xl p-4 md:p-6 hover:border-primary-300 transition-all duration-300 shadow-md flex items-center justify-center"
          imageClassName="object-contain drop-shadow-sm"
        />
      </div>

      <HowItWorksSection />

      {/* Info & Articles */}
      <FAQSection />
      <LatestArticlesSection />

      {/* Social Proof & Conversion */}
      <SupportCtaSection />
    </main>
  );
}
