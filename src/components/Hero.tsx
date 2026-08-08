"use client";

import React, { useState } from "react";
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
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: 45% (5 cols out of 12 or 6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center"
          >
            {/* Top Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D6A63C]/30 bg-[#0A0A0A]/80 backdrop-blur-sm w-fit mb-6 shadow-[0_0_15px_rgba(214,166,60,0.1)]">
              <Sparkles className="w-3.5 h-3.5 text-[#F0C75E]" />
              <span className="text-[11px] font-headline font-semibold tracking-widest text-[#F0C75E] uppercase">
                WEB3 FINTECH ECOSYSTEM PROTOCOL
              </span>
            </div>

            {/* Main Brand Title */}
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-headline font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FFE09A] to-[#D6A63C] leading-none mb-3 drop-shadow-[0_0_35px_rgba(214,166,60,0.2)]">
              SGDT
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-headline font-bold tracking-wider text-[#F5F5F5] uppercase mb-6 leading-tight">
              BUILDING THE NEXT-GENERATION <br className="hidden sm:inline" />
              <span className="text-[#F0C75E]">DIGITAL ECOSYSTEM</span>
            </h2>

            {/* Keyword Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8">
              {HERO_KEYWORDS.map((kw) => (
                <button
                  key={kw.id}
                  onMouseEnter={() => setActiveKeyword(kw.effect)}
                  onMouseLeave={() => setActiveKeyword(null)}
                  className={`text-[10px] sm:text-[11px] font-headline font-semibold tracking-widest uppercase px-3 py-1.5 rounded border transition-all duration-300 ${
                    activeKeyword === kw.effect
                      ? "border-[#F0C75E] bg-[#D6A63C]/20 text-[#FFE09A] shadow-[0_0_15px_rgba(240,199,94,0.3)] scale-105"
                      : "border-[#D6A63C]/25 bg-[#0A0A0A]/60 text-[#8E8E8E] hover:text-[#F5F5F5] hover:border-[#D6A63C]/50"
                  }`}
                >
                  • {kw.label}
                </button>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#8E8E8E] leading-relaxed mb-8 max-w-xl">
              SGDT integrates digital assets, computing power, token burn, ecosystem rewards and global community networks to build a sustainable and self-growing Web3 digital economy.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA */}
              <button
                onClick={() => handleScrollTo("#ecosystem")}
                className="relative group overflow-hidden px-8 py-4 rounded-md font-headline text-xs sm:text-sm font-bold tracking-widest uppercase text-black bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C] hover:from-[#FFF0C4] hover:to-[#B88B2A] transition-all duration-300 shadow-[0_0_30px_rgba(214,166,60,0.3)] hover:shadow-[0_0_45px_rgba(240,199,94,0.5)] flex items-center justify-center gap-3"
              >
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => handleScrollTo("#community")}
                className="relative px-8 py-4 rounded-md font-headline text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F5F5F5] bg-[#0A0A0A]/80 border border-[#D6A63C]/40 hover:border-[#F0C75E] hover:bg-[#D6A63C]/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(214,166,60,0.2)] flex items-center justify-center gap-3"
              >
                <span>JOIN COMMUNITY</span>
                <ArrowRight className="w-4 h-4 text-[#F0C75E] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: 55% 3D Globe Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 xl:col-span-7 flex justify-center items-center"
          >
            <HeroGlobe activeKeyword={activeKeyword} />
          </motion.div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 lg:mt-8 flex justify-center">
          <button
            onClick={() => handleScrollTo("#metrics")}
            className="flex flex-col items-center gap-1.5 text-[#8E8E8E] hover:text-[#F0C75E] transition-colors focus:outline-none group"
            aria-label="Scroll down to metrics"
          >
            <span className="text-[10px] font-headline tracking-widest uppercase group-hover:tracking-widest transition-all">
              SCROLL TO EXPLORE
            </span>
            <div className="w-7 h-7 rounded-full border border-[#D6A63C]/30 flex items-center justify-center bg-[#0A0A0A] group-hover:border-[#F0C75E] group-hover:shadow-[0_0_15px_rgba(240,199,94,0.3)] transition-all">
              <ChevronDown className="w-4 h-4 text-[#F0C75E] animate-bounce" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
