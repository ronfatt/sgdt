"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-32 overflow-hidden z-10 bg-[#050505] border-t border-[#D6A63C]/30">
      
      {/* Background Radial Light Rays & Portal Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(240,199,94,0.35) 0%, rgba(214,166,60,0.15) 50%, transparent 75%)"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Center Portal Ring with Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-10 flex items-center justify-center"
        >
          {/* Outer Rotating Portal Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#F0C75E]/40 animate-spin-slow" />
          <div className="absolute inset-3 rounded-full border border-[#D6A63C]/30 animate-pulse-slow" />
          
          {/* Core Portal Hub */}
          <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#D6A63C] bg-[#0A0A0A] p-4 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(240,199,94,0.5)]">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo-sgdt.png"
                alt="SGDT Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-headline font-bold text-2xl text-[#F0C75E]">
                S
              </div>
            </div>
          </div>
        </motion.div>

        {/* Large Statement Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl lg:text-6xl font-headline font-black tracking-tight text-white uppercase leading-tight mb-6"
        >
          THE FUTURE IS NOT <br />
          <span className="text-[#8E8E8E]">BUILT BY SPECTATORS.</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FFE09A] to-[#F0C75E]">
            IT IS BUILT BY PARTICIPANTS.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-[#8E8E8E] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Join SGDT ecosystem, contribute, participate and grow together in the next-generation digital economy.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleScrollTo("#ecosystem")}
            className="w-full sm:w-auto px-9 py-4 rounded-md font-headline text-xs sm:text-sm font-bold tracking-widest uppercase text-black bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C] hover:from-[#FFF0C4] hover:to-[#B88B2A] transition-all duration-300 shadow-[0_0_35px_rgba(214,166,60,0.4)] flex items-center justify-center gap-3 group"
          >
            <span>ENTER THE ECOSYSTEM</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleScrollTo("#community")}
            className="w-full sm:w-auto px-9 py-4 rounded-md font-headline text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-[#0A0A0A] border border-[#D6A63C]/40 hover:border-[#F0C75E] hover:bg-[#D6A63C]/10 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.6)] flex items-center justify-center gap-3 group"
          >
            <span>JOIN THE COMMUNITY</span>
            <ArrowRight className="w-4 h-4 text-[#F0C75E] group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
