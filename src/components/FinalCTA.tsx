"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const FinalCTA: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden z-10 bg-[#050505] border-t border-[#D6A63C]/30">
      
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(240,199,94,0.35) 0%, rgba(214,166,60,0.15) 50%, transparent 75%)"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Center Emblem Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-28 h-28 sm:w-44 sm:h-44 mx-auto mb-8 sm:mb-10 flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#F0C75E]/40 animate-spin-slow" />
          <div className="absolute inset-2 sm:inset-3 rounded-full border border-[#D6A63C]/30 animate-pulse-slow" />
          
          <div className="relative z-10 w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-[#D6A63C] bg-[#0A0A0A] p-3 sm:p-4 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(240,199,94,0.5)]">
            <div className="relative w-10 h-10 sm:w-14 sm:h-14">
              <Image
                src="/images/logo-sgdt-icon.png"
                alt="SGDT Emblem"
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-5xl lg:text-6xl font-headline font-black tracking-tight text-white uppercase leading-snug sm:leading-tight mb-6"
        >
          {t.finalCta.titleLine1} <br />
          <span className="text-[#8E8E8E]">{t.finalCta.titleLine2}</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FFE09A] to-[#F0C75E]">
            {t.finalCta.titleLine3}
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xs sm:text-base text-[#8E8E8E] max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2"
        >
          {t.finalCta.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <button
            onClick={() => handleScrollTo("#ecosystem")}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-md font-headline text-xs sm:text-sm font-bold tracking-widest uppercase text-black bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C] hover:from-[#FFF0C4] hover:to-[#B88B2A] transition-all duration-300 shadow-[0_0_35px_rgba(214,166,60,0.4)] flex items-center justify-center gap-2.5 group"
          >
            <span>{t.finalCta.enterEcosystem}</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleScrollTo("#community")}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-md font-headline text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-[#0A0A0A] border border-[#D6A63C]/40 hover:border-[#F0C75E] hover:bg-[#D6A63C]/10 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.6)] flex items-center justify-center gap-2.5 group"
          >
            <span>{t.finalCta.joinCommunity}</span>
            <ArrowRight className="w-4 h-4 text-[#F0C75E] group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
