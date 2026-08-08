"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, CircleDot } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Roadmap: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="roadmap" className="relative py-16 sm:py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[10px] sm:text-[11px] font-headline font-bold tracking-widest text-[#F0C75E] uppercase px-3 py-1 rounded-full border border-[#D6A63C]/30 bg-[#0A0A0A]">
            {t.roadmap.label}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-white uppercase mt-3 mb-3">
            {t.roadmap.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C]">{t.roadmap.titleHighlight}</span>
          </h2>
          <p className="text-xs sm:text-base text-[#8E8E8E] leading-relaxed px-2">
            {t.roadmap.description}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-[2px] bg-gradient-to-r from-[#D6A63C]/20 via-[#F0C75E] to-[#D6A63C]/20 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            {t.roadmap.phases.map((phase, idx) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col"
              >
                <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#F0C75E] bg-[#0A0A0A] flex items-center justify-center shadow-[0_0_20px_rgba(240,199,94,0.3)] shrink-0">
                    <CircleDot className="w-4 h-4 sm:w-5 sm:h-5 text-[#F0C75E]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-headline font-extrabold tracking-widest text-[#F0C75E] uppercase block">
                      {phase.phase}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#8E8E8E]">
                      {phase.period}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-5 sm:p-6 rounded-2xl border border-[#D6A63C]/25 bg-[#0C0C0C]/90 hover:border-[#F0C75E]/60 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group">
                  <h3 className="text-base sm:text-lg font-headline font-bold text-white uppercase mb-4 group-hover:text-[#FFE09A] transition-colors">
                    {phase.title}
                  </h3>

                  <ul className="space-y-2.5 sm:space-y-3">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#8E8E8E] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F0C75E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
