import React from "react";

interface BrandLogoProps {
  compact?: boolean;
  className?: string;
  theme?: "light" | "dark" | "auto";
}

export default function BrandLogo({
  compact = false,
  className = "",
  theme = "auto",
}: BrandLogoProps) {
  return (
    <div
      className={`flex items-center gap-2.5 sm:gap-3 select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="BingeTrax IPTV Home"
    >
      {/* Dynamic Streaming Trax Icon */}
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-xl bg-gradient-to-br from-[#7000FF] via-[#9900FF] to-[#FF00BD] shadow-[0_4px_20px_rgba(112,0,255,0.45)] transition-all duration-300 group-hover:shadow-[0_6px_26px_rgba(255,0,189,0.55)] ${
          compact ? "w-8 h-8 rounded-lg" : "w-10 h-10 sm:w-11 sm:h-11"
        }`}
      >
        {/* Subtle inner gloss shine */}
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-transparent via-white/10 to-white/30 pointer-events-none" />
        
        {/* Stylized Fast-Forward / Play Track Chevron SVG */}
        <svg
          className={`${compact ? "w-4 h-4" : "w-5 h-5 sm:w-6 sm:h-6"} text-white drop-shadow-md`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 4.5V19.5L14 12L5 4.5Z"
            fill="currentColor"
          />
          <path
            d="M13 4.5V19.5L20 12L13 4.5Z"
            fill="currentColor"
            fillOpacity="0.75"
          />
        </svg>

        {/* Live Pulse Dot */}
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F0FF] ring-2 ring-white"></span>
        </span>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1">
          <span
            className={`font-black uppercase tracking-tight ${
              theme === "dark" ? "text-white" : "text-black"
            } ${compact ? "text-lg" : "text-xl sm:text-2xl"}`}
          >
            BINGE
          </span>
          <span
            className={`font-black uppercase tracking-tight bg-gradient-to-r from-[#7000FF] via-[#A82BFF] to-[#FF00BD] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(112,0,255,0.25)] ${
              compact ? "text-lg" : "text-xl sm:text-2xl"
            }`}
          >
            TRAX
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="inline-flex items-center rounded-sm bg-black px-1.5 py-[1.5px] text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-[#00F0FF]">
            IPTV
          </span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 hidden sm:inline-block">
            4K ULTRA
          </span>
        </div>
      </div>
    </div>
  );
}
