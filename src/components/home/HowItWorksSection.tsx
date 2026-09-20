import Image from "next/image";
import Link from "next/link";

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white text-black relative z-10 border-b border-black/10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* ========================================================================= */}
        {/* PART 1: How does it work? BINGETRAX IPTV Timeline */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#7000FF]/10 text-[#7000FF] font-bold text-xs tracking-widest uppercase mb-6 border border-[#7000FF]/20">
            EASY BINGETRAX SETUP
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.1]">
            How to Start Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7000FF] to-[#FF00BD]">
              BINGETRAX IPTV Subscription
            </span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Setting up your BINGETRAX IPTV account is quick and simple. Follow our 3-step process to get instant access to <Link href="/channels" className="font-semibold text-[#7000FF] hover:text-[#FF00BD] transition-colors">live TV, movies, and series</Link>.
          </p>
        </div>

        {/* Timeline Steps Container */}
        <div className="relative max-w-[960px] mx-auto mb-28">
          {/* Vertical Dashed Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-black/20 hidden md:block" />

          {/* STEP 1 */}
          <div className="relative mb-16 md:mb-20">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-[#7000FF] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(112,0,255,0.4)]">
                Step One
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Card */}
              <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-xl relative border border-stone-200">
                <h3 className="text-xl font-extrabold text-[#7000FF] mb-3">
                  <a
                    href="#pricing"
                    className="hover:text-purple-900 transition-colors"
                  >
                    1. Choose Your BINGETRAX Plan
                  </a>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Select the best BINGETRAX IPTV subscription package for your needs from our{" "}
                  <a
                    href="#pricing"
                    className="text-[#7000FF] font-semibold hover:text-purple-900 transition-colors"
                  >
                    pricing plans
                  </a>
                  . Once you complete the payment, we will email or{" "}
                  <Link
                    href="/contact"
                    className="text-[#7000FF] font-semibold hover:text-purple-900 transition-colors"
                  >
                    WhatsApp
                  </Link>{" "}
                  your login details instantly.
                </p>
              </div>

              {/* Right Image */}
              <div className="overflow-hidden rounded-2xl bg-black/5 border border-black/10 shadow-xl"
              >
                <Image
                  src="/step-1-neon.webp"
                  alt="Step 1: Choose and order your BINGETRAX IPTV subscription plan online"
                  title="Select your BINGETRAX 4K IPTV subscription package"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative mb-16 md:mb-20">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-[#7000FF] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(112,0,255,0.4)]">
                Step Two
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Image */}
              <div className="overflow-hidden rounded-2xl bg-black/5 border border-black/10 shadow-xl order-2 md:order-1"
              >
                <Image
                  src="/step-2-neon.webp"
                  alt="Step 2: Quick installation of BINGETRAX IPTV on your Smart TV, Firestick or Apple TV"
                  title="Install BINGETRAX on your favorite streaming device"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Card */}
              <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-xl relative border border-stone-200 order-1 md:order-2">
                <h3 className="text-xl font-extrabold text-[#7000FF] mb-3">
                  <Link
                    href="/installation"
                    className="hover:text-purple-900 transition-colors"
                  >
                    2. Install Your BINGETRAX App
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Use our step-by-step{" "}
                  <Link
                    href="/installation"
                    className="text-[#7000FF] font-semibold hover:text-purple-900 transition-colors"
                  >
                    BINGETRAX IPTV installation guides
                  </Link>{" "}
                  to set up the service on your Smart TV, Firestick, Android Box, or Apple device using top apps like IPTV Smarters or Tivimate.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-[#7000FF] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(112,0,255,0.4)]">
                Step Three
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Card */}
              <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-xl relative border border-stone-200">
                <h3 className="text-xl font-extrabold text-[#7000FF] mb-3">
                  <Link
                    href="/channels"
                    className="hover:text-purple-900 transition-colors"
                  >
                    3. Stream BINGETRAX Live TV & VOD
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Start streaming! Enjoy <strong className="text-slate-900 font-bold">+50,000 Channels</strong>, plus a massive Video on Demand (VOD) library of movies and series from our{" "}
                  <Link
                    href="/channels"
                    className="text-[#7000FF] font-semibold hover:text-purple-900 transition-colors"
                  >
                    channels catalog
                  </Link>
                  {" "}without any buffering.
                </p>
              </div>

              {/* Right Image */}
              <div className="overflow-hidden rounded-2xl bg-black/5 border border-black/10 shadow-xl"
              >
                <Image
                  src="/step-3-neon.webp"
                  alt="Step 3: Watch and enjoy 50,000+ live channels and 4K VOD with BINGETRAX"
                  title="Stream 4K live television and sports with BINGETRAX"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
