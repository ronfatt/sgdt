"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RefreshCw, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Flywheel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateWheel = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section ref={containerRef} className="relative py-20 sm:py-28 z-10 overflow-hidden bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] font-headline font-bold tracking-widest text-[#F0C75E] uppercase px-3 py-1 rounded-full border border-[#D6A63C]/30 bg-[#0A0A0A]">
            {t.flywheel.label}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-white uppercase mt-3 mb-3">
            {t.flywheel.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C]">{t.flywheel.titleHighlight}</span>
          </h2>
          <p className="text-xs sm:text-base text-[#8E8E8E] leading-relaxed px-2">
            {t.flywheel.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Wheel Visual */}
          <div className="lg:col-span-6 flex justify-center items-center py-4 sm:py-6">
            <div className="relative w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] flex items-center justify-center">
              
              <motion.div
                style={{ rotate: rotateWheel }}
                className="w-full h-full rounded-full border-2 border-[#D6A63C]/40 bg-[#0C0C0C]/80 backdrop-blur-xl p-8 relative flex items-center justify-center shadow-[0_0_50px_rgba(214,166,60,0.15)]"
              >
                <div className="absolute inset-4 rounded-full border border-dashed border-[#D6A63C]/30" />
                <div className="absolute inset-16 rounded-full border border-[#F0C75E]/20" />

                {t.flywheel.steps.map((step, idx) => {
                  const angle = (idx * 360) / 8 - 90;
                  const rad = (angle * Math.PI) / 180;
                  const radius = 42;
                  const left = 50 + radius * Math.cos(rad);
                  const top = 50 + radius * Math.sin(rad);

                  return (
                    <div
                      key={step.step}
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      className="absolute w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D6A63C] bg-[#050505] flex items-center justify-center font-headline font-bold text-xs text-[#F0C75E] shadow-md"
                    >
                      {step.step}
                    </div>
                  );
                })}
              </motion.div>

              <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#F0C75E] bg-[#0A0A0A] p-3 sm:p-4 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(240,199,94,0.4)] pointer-events-none z-20">
                <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0C75E] animate-spin-slow mb-1" />
                <span className="text-[8px] sm:text-[9px] font-headline font-extrabold text-[#FFE09A] uppercase tracking-wider text-center">
                  {t.flywheel.hubTitle}
                </span>
                <span className="text-[6px] sm:text-[7px] font-mono text-[#8E8E8E]">{t.flywheel.hubSub}</span>
              </div>

            </div>
          </div>

          {/* Process Step Cards */}
          <div className="lg:col-span-6 space-y-2.5 sm:space-y-3">
            {t.flywheel.steps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-3.5 sm:p-4 rounded-xl border border-[#D6A63C]/20 bg-[#0C0C0C]/90 hover:border-[#F0C75E]/60 hover:bg-[#121212] transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#141414] border border-[#D6A63C]/30 flex items-center justify-center font-headline font-bold text-xs text-[#F0C75E] group-hover:border-[#F0C75E] shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-headline font-bold text-white uppercase group-hover:text-[#FFE09A] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#8E8E8E]">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="p-1.5 rounded-full bg-[#181818] border border-[#D6A63C]/20 text-[#8E8E8E] group-hover:text-[#F0C75E] group-hover:border-[#F0C75E] transition-all shrink-0">
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
