"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, ShieldAlert, Cpu, Share2, Award, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const featureIcons: Record<string, React.ReactNode> = {
  participation: <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0C75E]" />,
  deflationary: <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0C75E]" />,
  economy: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0C75E]" />,
  network: <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0C75E]" />,
  incentives: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0C75E]" />,
  vision: <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0C75E]" />,
};

export const WhySGDT: React.FC = () => {
  const { t } = useLanguage();
  const featureKeys = ["participation", "deflationary", "economy", "network", "incentives", "vision"];

  return (
    <section className="relative py-16 sm:py-24 border-y border-[#D6A63C]/20 bg-[#0A0A0A]/50 backdrop-blur-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-[10px] sm:text-[11px] font-headline font-bold tracking-widest text-[#F0C75E] uppercase px-3 py-1 rounded-full border border-[#D6A63C]/30 bg-[#0A0A0A]">
              {t.whySgdt.label}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-white uppercase mt-3">
              {t.whySgdt.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C]">{t.whySgdt.titleHighlight}</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8E8E8E] max-w-md leading-relaxed">
            {t.whySgdt.description}
          </p>
        </div>

        {/* 6 Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featureKeys.map((key, idx) => {
            const item = t.whySgdt.features[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-[#D6A63C]/20 bg-[#0C0C0C]/90 hover:border-[#F0C75E]/60 transition-all duration-300 group shadow-[0_5px_20px_rgba(0,0,0,0.4)] flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#141414] border border-[#D6A63C]/30 flex items-center justify-center mb-4 sm:mb-5 group-hover:border-[#F0C75E] group-hover:shadow-[0_0_20px_rgba(240,199,94,0.3)] transition-all duration-300">
                    {featureIcons[key]}
                  </div>

                  <h3 className="text-base sm:text-lg font-headline font-bold text-white uppercase mb-2 group-hover:text-[#FFE09A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#8E8E8E] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="w-full h-[1.5px] bg-[#1F1F1F] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 h-full bg-[#D6A63C] group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
