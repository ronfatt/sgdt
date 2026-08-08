"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ECOSYSTEM_MODULES } from "@/data/landingData";
import { Coins, Zap, Gift, Flame, TrendingDown, RefreshCw, Info } from "lucide-react";

const iconComponents: Record<string, React.ReactNode> = {
  Coins: <Coins className="w-5 h-5 text-[#F0C75E]" />,
  Zap: <Zap className="w-5 h-5 text-[#F0C75E]" />,
  Gift: <Gift className="w-5 h-5 text-[#F0C75E]" />,
  Flame: <Flame className="w-5 h-5 text-[#F0C75E]" />,
  TrendingDown: <TrendingDown className="w-5 h-5 text-[#F0C75E]" />,
  RefreshCw: <RefreshCw className="w-5 h-5 text-[#F0C75E]" />,
};

export const EcosystemDiagram: React.FC = () => {
  const [activeModule, setActiveModule] = useState(ECOSYSTEM_MODULES[0]);

  return (
    <section id="ecosystem" className="relative py-24 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-headline font-bold tracking-widest text-[#F0C75E] uppercase px-3 py-1 rounded-full border border-[#D6A63C]/30 bg-[#0A0A0A]">
            THE SGDT ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-white uppercase mt-4 mb-4">
            A MULTI-VALUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C]">ECOSYSTEM</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8E8E8E] leading-relaxed">
            SGDT connects users, digital assets, computing power, burn mechanisms, community growth and ecosystem applications into a self-sustaining economic system.
          </p>
        </div>

        {/* Circular Ecosystem Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left/Center: Interactive Orbit Wheel */}
          <div className="lg:col-span-7 flex justify-center items-center py-8 relative">
            
            {/* Outer Orbit Path Ring */}
            <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full border border-[#D6A63C]/25 flex items-center justify-center shadow-[0_0_50px_rgba(214,166,60,0.08)]">
              
              {/* Outer Dashed Rotating Ring */}
              <div className="absolute inset-[-12px] rounded-full border border-dashed border-[#D6A63C]/30 animate-spin-slow pointer-events-none" />
              
              {/* Center SGDT Logo Node */}
              <div className="relative z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-[#D6A63C] bg-[#0A0A0A] p-4 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(214,166,60,0.4)] group">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-1">
                  <Image
                    src="/images/logo-sgdt.png"
                    alt="SGDT"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center font-headline font-bold text-2xl text-[#F0C75E]">
                    S
                  </div>
                </div>
                <span className="text-[10px] font-headline font-bold tracking-widest text-[#F0C75E]">
                  SGDT
                </span>
                <span className="text-[8px] font-mono text-[#8E8E8E]">CORE</span>
              </div>

              {/* 6 Orbiting Module Nodes */}
              {ECOSYSTEM_MODULES.map((mod, idx) => {
                const total = ECOSYSTEM_MODULES.length;
                const angle = (idx * 360) / total - 90; // start at top
                const rad = (angle * Math.PI) / 180;
                
                // Position calculations (radius based on screen)
                // We use percentage positioning inside container
                const radiusPct = 42; // % radius
                const left = 50 + radiusPct * Math.cos(rad);
                const top = 50 + radiusPct * Math.sin(rad);

                const isActive = activeModule.id === mod.id;

                return (
                  <motion.div
                    key={mod.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => setActiveModule(mod)}
                    onMouseEnter={() => setActiveModule(mod)}
                    className={`absolute z-30 cursor-pointer group flex flex-col items-center`}
                  >
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-lg ${
                        isActive
                          ? "border-[#F0C75E] bg-[#181818] shadow-[0_0_25px_rgba(240,199,94,0.5)] scale-110"
                          : "border-[#D6A63C]/30 bg-[#0C0C0C] hover:border-[#F0C75E]/70 hover:scale-105"
                      }`}
                    >
                      {iconComponents[mod.icon] || <Coins className="w-5 h-5 text-[#F0C75E]" />}
                    </div>

                    <div className="mt-2 text-center pointer-events-none whitespace-nowrap">
                      <span className={`text-[10px] sm:text-[11px] font-headline font-bold tracking-wider block transition-colors ${
                        isActive ? "text-[#FFE09A]" : "text-[#8E8E8E] group-hover:text-white"
                      }`}>
                        {mod.title}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

            </div>
          </div>

          {/* Right: Module Detail Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              key={activeModule.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-2xl border border-[#D6A63C]/30 bg-[#0C0C0C]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6A63C]/10 blur-2xl rounded-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-[#141414] border border-[#D6A63C]/40">
                  {iconComponents[activeModule.icon]}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#F0C75E] font-semibold uppercase tracking-widest">
                    MODULE DETAIL
                  </span>
                  <h3 className="text-xl sm:text-2xl font-headline font-bold text-white uppercase">
                    {activeModule.title}
                  </h3>
                </div>
              </div>

              <div className="inline-block px-3 py-1 rounded bg-[#D6A63C]/15 border border-[#D6A63C]/30 text-[11px] font-headline font-semibold text-[#F0C75E] mb-4">
                {activeModule.subTitle}
              </div>

              <p className="text-sm text-[#8E8E8E] leading-relaxed mb-6">
                {activeModule.description}
              </p>

              {/* Economic Flow Sequence */}
              <div className="pt-4 border-t border-[#1F1F1F]">
                <span className="text-[10px] font-headline tracking-widest text-[#8E8E8E] uppercase block mb-3">
                  ECONOMIC VALUE FLOW
                </span>
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono font-medium text-[#F0C75E]">
                  <span>Digital Asset</span>
                  <span>→</span>
                  <span>Computing Power</span>
                  <span>→</span>
                  <span>Reward</span>
                  <span>→</span>
                  <span>Burn</span>
                  <span>→</span>
                  <span>Deflation</span>
                  <span>→</span>
                  <span>Value Cycle</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
