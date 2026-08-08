"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Flame, Cpu, Globe2, ShieldCheck, ArrowUpRight } from "lucide-react";

export const ThreeCorePillars: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tokenomics" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-headline font-bold tracking-widest text-[#F0C75E] uppercase px-3 py-1 rounded-full border border-[#D6A63C]/30 bg-[#0A0A0A]">
            THREE CORE PILLARS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-white uppercase mt-4 mb-4">
            ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C]">SCARCITY & UTILITY</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8E8E8E] leading-relaxed">
            SGDT operates on three core technical mechanisms designed to compound network value, incentivize computing participation, and build a resilient Web3 global ecosystem.
          </p>
        </div>

        {/* 3 Large Premium Cards Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CARD 01: BURN & DEFLATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl border border-[#D6A63C]/30 bg-[#0C0C0C]/80 backdrop-blur-xl hover:border-[#F0C75E]/60 transition-all duration-500 group shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 text-[#D6A63C]/20 font-mono text-3xl font-extrabold">
              01
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D6A63C]/10 border border-[#D6A63C]/30 text-[10px] font-headline font-semibold text-[#F0C75E] uppercase mb-4">
                <Flame className="w-3.5 h-3.5" />
                <span>BURN & DEFLATION</span>
              </div>

              <h3 className="text-2xl font-headline font-bold text-white uppercase mb-3 group-hover:text-[#FFE09A] transition-colors">
                BURN TO CREATE <br />
                <span className="text-[#F0C75E]">SCARCITY</span>
              </h3>

              <p className="text-xs sm:text-sm text-[#8E8E8E] leading-relaxed mb-6">
                Systematic token burn mechanisms reduce circulating supply and strengthen the long-term economic cycle.
              </p>

              {/* Glowing Circular Burn Visual */}
              <div className="relative w-full h-44 flex items-center justify-center my-4">
                {/* Rotating Outer Particles */}
                <div className="absolute w-36 h-36 rounded-full border border-dashed border-[#F0C75E]/40 animate-spin-slow" />
                <div className="absolute w-28 h-28 rounded-full border border-[#D6A63C]/30 animate-pulse-slow" />
                
                {/* Inner Glowing Core */}
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#D6A63C] to-[#FFE09A] flex items-center justify-center shadow-[0_0_35px_rgba(240,199,94,0.6)]">
                  <Flame className="w-10 h-10 text-black animate-pulse" />
                </div>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="pt-6 border-t border-[#1F1F1F] space-y-3 font-headline">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#8E8E8E]">TOTAL SUPPLY</span>
                <span className="text-white font-bold">100%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#8E8E8E]">BURNED TOKENS</span>
                <span className="text-[#F0C75E] font-bold">26,781,309 SGDT</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#8E8E8E]">CIRCULATING SUPPLY</span>
                <span className="text-[#FFE09A] font-bold">73.21%</span>
              </div>
            </div>
          </motion.div>

          {/* CARD 02: COMPUTING POWER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl border border-[#D6A63C]/30 bg-[#0C0C0C]/80 backdrop-blur-xl hover:border-[#F0C75E]/60 transition-all duration-500 group shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 text-[#D6A63C]/20 font-mono text-3xl font-extrabold">
              02
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D6A63C]/10 border border-[#D6A63C]/30 text-[10px] font-headline font-semibold text-[#F0C75E] uppercase mb-4">
                <Cpu className="w-3.5 h-3.5" />
                <span>COMPUTING POWER</span>
              </div>

              <h3 className="text-2xl font-headline font-bold text-white uppercase mb-3 group-hover:text-[#FFE09A] transition-colors">
                POWERING THE <br />
                <span className="text-[#F0C75E]">ECOSYSTEM</span>
              </h3>

              <p className="text-xs sm:text-sm text-[#8E8E8E] leading-relaxed mb-6">
                User participation converts into computing power, driving the growth of the entire SGDT network.
              </p>

              {/* Futuristic Animated SVG Line Chart */}
              <div className="relative w-full h-44 my-4 flex flex-col justify-end">
                <svg className="w-full h-32 overflow-visible" viewBox="0 0 300 120">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F0C75E" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#D6A63C" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  <line x1="0" y1="30" x2="300" y2="30" stroke="rgba(214,166,60,0.15)" strokeDasharray="3 3" />
                  <line x1="0" y1="70" x2="300" y2="70" stroke="rgba(214,166,60,0.15)" strokeDasharray="3 3" />

                  {/* Gradient Area under line */}
                  <path
                    d="M 0,100 L 50,85 L 100,75 L 150,55 L 200,40 L 250,20 L 300,10 L 300,120 L 0,120 Z"
                    fill="url(#chartGrad)"
                  />

                  {/* Chart Line */}
                  <motion.path
                    d="M 0,100 L 50,85 L 100,75 L 150,55 L 200,40 L 250,20 L 300,10"
                    fill="none"
                    stroke="#F0C75E"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />

                  {/* Current Peak Point */}
                  <circle cx="300" cy="10" r="5" fill="#FFE09A" className="animate-ping" />
                  <circle cx="300" cy="10" r="4" fill="#F0C75E" />
                </svg>

                <div className="flex justify-between items-center text-[10px] font-mono text-[#8E8E8E] mt-2">
                  <span>JAN</span>
                  <span>FEB</span>
                  <span>MAR</span>
                  <span>APR</span>
                  <span>MAY</span>
                  <span>JUN</span>
                </div>
              </div>
            </div>

            {/* Current Value Highlight */}
            <div className="pt-6 border-t border-[#1F1F1F] flex justify-between items-center">
              <span className="text-xs text-[#8E8E8E] font-headline">TOTAL HASH POWER</span>
              <span className="text-lg font-headline font-bold text-[#F0C75E]">58.72 PH/s</span>
            </div>
          </motion.div>

          {/* CARD 03: COMMUNITY GROWTH */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl border border-[#D6A63C]/30 bg-[#0C0C0C]/80 backdrop-blur-xl hover:border-[#F0C75E]/60 transition-all duration-500 group shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 text-[#D6A63C]/20 font-mono text-3xl font-extrabold">
              03
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D6A63C]/10 border border-[#D6A63C]/30 text-[10px] font-headline font-semibold text-[#F0C75E] uppercase mb-4">
                <Globe2 className="w-3.5 h-3.5" />
                <span>COMMUNITY GROWTH</span>
              </div>

              <h3 className="text-2xl font-headline font-bold text-white uppercase mb-3 group-hover:text-[#FFE09A] transition-colors">
                COMMUNITY IS <br />
                <span className="text-[#F0C75E]">THE NETWORK</span>
              </h3>

              <p className="text-xs sm:text-sm text-[#8E8E8E] leading-relaxed mb-6">
                From one user to a global network. Together, we build the future of digital economy.
              </p>

              {/* Network Node Grid Visual */}
              <div className="relative w-full h-44 my-4 border border-[#D6A63C]/20 rounded-xl bg-[#080808] p-4 flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D6A63C_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 text-center">
                  <div className="text-4xl font-headline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FFE09A] to-[#F0C75E]">
                    248+
                  </div>
                  <div className="text-[11px] font-headline font-bold tracking-widest text-[#F0C75E] uppercase mt-1">
                    COUNTRIES & REGIONS
                  </div>
                </div>

                {/* Animated Pulsing Radar rings */}
                <div className="absolute w-32 h-32 rounded-full border border-[#F0C75E]/20 animate-ping pointer-events-none" />
              </div>
            </div>

            {/* Bottom Stat */}
            <div className="pt-6 border-t border-[#1F1F1F] flex justify-between items-center">
              <span className="text-xs text-[#8E8E8E] font-headline">NETWORK SECURITY</span>
              <span className="text-xs font-headline font-bold text-[#FFE09A] flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#F0C75E]" />
                INSTITUTIONAL GRADE
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
