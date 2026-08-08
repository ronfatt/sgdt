"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { HERO_KEYWORDS } from "@/data/landingData";
import { HeroGlobe } from "./HeroGlobe";

export const Hero: React.FC = () => {
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center text-left"
          >
            {/* Top Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D6A63C]/30 bg-[#0A0A0A]/80 backdrop-blur-sm w-fit mb-5 shadow-[0_0_15px_rgba(214,166,60,0.1)]">
              <Sparkles className="w-3.5 h-3.5 text-[#F0C75E]" />
              <span className="text-[10px] sm:text-[11px] font-headline font-semibold tracking-widest text-[#F0C75E] uppercase">
                WEB3 FINTECH ECOSYSTEM PROTOCOL
              </span>
            </div>

            {/* Main Brand Title & Logo Graphic */}
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-headline font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FFE09A] to-[#D6A63C] leading-none drop-shadow-[0_0_35px_rgba(214,166,60,0.2)]">
                SGDT
              </h1>
            </div>

            {/* Subtitle */}
            <h2 className="text-base sm:text-xl lg:text-2xl font-headline font-bold tracking-wider text-[#F5F5F5] uppercase mb-5 leading-tight">
              BUILDING THE NEXT-GENERATION <br className="hidden sm:inline" />
              <span className="text-[#F0C75E]">DIGITAL ECOSYSTEM</span>
            </h2>

            {/* Mobile Touch-Optimized Scrollable Keyword Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
              {HERO_KEYWORDS.map((kw) => (
                <button
                  key={kw.id}
                  onClick={() => setActiveKeyword(activeKeyword === kw.effect ? null : kw.effect)}
                  onMouseEnter={() => setActiveKeyword(kw.effect)}
                  onMouseLeave={() => setActiveKeyword(null)}
                  className={`text-[10px] sm:text-[11px] font-headline font-semibold tracking-widest uppercase px-3 py-1.5 rounded border whitespace-nowrap transition-all duration-300 shrink-0 ${
                    activeKeyword === kw.effect
                      ? "border-[#F0C75E] bg-[#D6A63C]/25 text-[#FFE09A] shadow-[0_0_15px_rgba(240,199,94,0.35)] scale-105"
                      : "border-[#D6A63C]/25 bg-[#0A0A0A]/80 text-[#8E8E8E] hover:text-[#F5F5F5] hover:border-[#D6A63C]/50"
                  }`}
                >
                  • {kw.label}
                </button>
              ))}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#8E8E8E] leading-relaxed mb-7 max-w-xl">
              SGDT integrates digital assets, computing power, token burn, ecosystem rewards and global community networks to build a sustainable and self-growing Web3 digital economy.
            </p>

            {/* Action Buttons (Stacked full-width on mobile) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary CTA */}
              <button
                onClick={() => handleScrollTo("#ecosystem")}
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-md font-headline text-xs sm:text-sm font-bold tracking-widest uppercase text-black bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C] hover:from-[#FFF0C4] hover:to-[#B88B2A] transition-all duration-300 shadow-[0_0_30px_rgba(214,166,60,0.3)] hover:shadow-[0_0_45px_rgba(240,199,94,0.5)] flex items-center justify-center gap-2.5 group"
              >
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => handleScrollTo("#community")}
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-md font-headline text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F5F5F5] bg-[#0A0A0A]/90 border border-[#D6A63C]/40 hover:border-[#F0C75E] hover:bg-[#D6A63C]/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(214,166,60,0.2)] flex items-center justify-center gap-2.5 group"
              >
                <span>JOIN COMMUNITY</span>
                <ArrowRight className="w-4 h-4 text-[#F0C75E] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: 3D Globe Visual (Optimized Mobile Viewport Height) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-6 xl:col-span-7 flex justify-center items-center"
          >
            <HeroGlobe activeKeyword={activeKeyword} />
          </motion.div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <button
            onClick={() => handleScrollTo("#metrics")}
            className="flex flex-col items-center gap-1.5 text-[#8E8E8E] hover:text-[#F0C75E] transition-colors focus:outline-none group"
            aria-label="Scroll down to metrics"
          >
            <span className="text-[9px] sm:text-[10px] font-headline tracking-widest uppercase">
              SCROLL TO EXPLORE
            </span>
            <div className="w-7 h-7 rounded-full border border-[#D6A63C]/30 flex items-center justify-center bg-[#0A0A0A] group-hover:border-[#F0C75E] transition-all">
              <ChevronDown className="w-4 h-4 text-[#F0C75E] animate-bounce" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
