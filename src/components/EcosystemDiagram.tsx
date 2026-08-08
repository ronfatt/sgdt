"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Coins, Zap, Gift, Flame, TrendingDown, RefreshCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const iconComponents: Record<string, React.ReactNode> = {
  asset: <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-[#F0C75E]" />,
  power: <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#F0C75E]" />,
  reward: <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-[#F0C75E]" />,
  burn: <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-[#F0C75E]" />,
  deflation: <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#F0C75E]" />,
  cycle: <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-[#F0C75E]" />,
};

export const EcosystemDiagram: React.FC = () => {
  const { t } = useLanguage();
  const [activeModuleKey, setActiveModuleKey] = useState<string>("asset");

  const moduleKeys = ["asset", "power", "reward", "burn", "deflation", "cycle"];
  const activeModule = t.ecosystem.modules[activeModuleKey];

  return (
    <section id="ecosystem" className="relative py-16 sm:py-24 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] font-headline font-bold tracking-widest text-[#F0C75E] uppercase px-3 py-1 rounded-full border border-[#D6A63C]/30 bg-[#0A0A0A]">
            {t.ecosystem.label}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-white uppercase mt-3 mb-3">
            {t.ecosystem.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C]">{t.ecosystem.titleHighlight}</span>
          </h2>
          <p className="text-xs sm:text-base text-[#8E8E8E] leading-relaxed px-2">
            {t.ecosystem.description}
          </p>
        </div>

        {/* Orbit Wheel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 flex justify-center items-center py-4 sm:py-8 relative">
            <div className="relative w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] rounded-full border border-[#D6A63C]/25 flex items-center justify-center shadow-[0_0_50px_rgba(214,166,60,0.08)]">
              
              <div className="absolute inset-[-8px] sm:inset-[-12px] rounded-full border border-dashed border-[#D6A63C]/30 animate-spin-slow pointer-events-none" />
              
              <div className="relative z-20 w-20 h-20 sm:w-32 sm:h-32 rounded-full border-2 border-[#D6A63C] bg-[#0A0A0A] p-2.5 sm:p-4 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(214,166,60,0.4)]">
                <div className="relative w-10 h-10 sm:w-16 sm:h-16 mb-0.5">
                  <Image
                    src="/images/logo-sgdt-icon.png"
                    alt="SGDT Emblem"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[9px] sm:text-[10px] font-headline font-bold tracking-widest text-[#F0C75E]">
                  SGDT
                </span>
              </div>

              {/* 6 Orbiting Module Nodes */}
              {moduleKeys.map((key, idx) => {
                const mod = t.ecosystem.modules[key];
                const total = moduleKeys.length;
                const angle = (idx * 360) / total - 90;
                const rad = (angle * Math.PI) / 180;
                const radiusPct = 42;
                const left = 50 + radiusPct * Math.cos(rad);
                const top = 50 + radiusPct * Math.sin(rad);

                const isActive = activeModuleKey === key;

                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => setActiveModuleKey(key)}
                    onMouseEnter={() => setActiveModuleKey(key)}
                    className="absolute z-30 cursor-pointer group flex flex-col items-center"
                  >
                    <div
                      className={`w-11 h-11 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-lg ${
                        isActive
                          ? "border-[#F0C75E] bg-[#181818] shadow-[0_0_25px_rgba(240,199,94,0.5)] scale-110"
                          : "border-[#D6A63C]/30 bg-[#0C0C0C] hover:border-[#F0C75E]/70 hover:scale-105"
                      }`}
                    >
                      {iconComponents[key]}
                    </div>

                    <div className="mt-1 sm:mt-2 text-center pointer-events-none whitespace-nowrap">
                      <span className={`text-[8px] sm:text-[11px] font-headline font-bold tracking-wider block transition-colors ${
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
            
            {/* Mobile Module Selector Bar */}
            <div className="flex lg:hidden items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-4 -mx-4 px-4">
              {moduleKeys.map((key) => {
                const mod = t.ecosystem.modules[key];
                const isActive = activeModuleKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveModuleKey(key)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-headline font-bold uppercase whitespace-nowrap transition-all border shrink-0 ${
                      isActive
                        ? "bg-[#D6A63C]/20 border-[#F0C75E] text-[#FFE09A]"
                        : "bg-[#0A0A0A] border-[#D6A63C]/20 text-[#8E8E8E]"
                    }`}
                  >
                    {mod.title}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeModuleKey}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="p-6 sm:p-8 rounded-2xl border border-[#D6A63C]/30 bg-[#0C0C0C]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#D6A63C]/10 blur-2xl rounded-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#141414] border border-[#D6A63C]/40">
                  {iconComponents[activeModuleKey]}
                </div>
                <div>
                  <span className="text-[9px] font-mono text-[#F0C75E] font-semibold uppercase tracking-widest">
                    {t.ecosystem.moduleDetail}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-headline font-bold text-white uppercase">
                    {activeModule.title}
                  </h3>
                </div>
              </div>

              <div className="inline-block px-2.5 py-1 rounded bg-[#D6A63C]/15 border border-[#D6A63C]/30 text-[10px] sm:text-[11px] font-headline font-semibold text-[#F0C75E] mb-3">
                {activeModule.subTitle}
              </div>

              <p className="text-xs sm:text-sm text-[#8E8E8E] leading-relaxed mb-5">
                {activeModule.desc}
              </p>

              <div className="pt-4 border-t border-[#1F1F1F]">
                <span className="text-[9px] font-headline tracking-widest text-[#8E8E8E] uppercase block mb-2">
                  {t.ecosystem.flowTitle}
                </span>
                <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-mono font-medium text-[#F0C75E]">
                  {t.ecosystem.flowSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span>{step}</span>
                      {idx < t.ecosystem.flowSteps.length - 1 && <span>→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
