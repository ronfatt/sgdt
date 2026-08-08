"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FLYWHEEL_STEPS } from "@/data/landingData";
import { RefreshCw, ArrowDown, ChevronRight } from "lucide-react";

export const Flywheel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth gradual wheel rotation based on scroll progress
  const rotateWheel = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section ref={containerRef} className="relative py-28 z-10 overflow-hidden bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-headline font-bold tracking-widest text-[#F0C75E] uppercase px-3 py-1 rounded-full border border-[#D6A63C]/30 bg-[#0A0A0A]">
            SELF-REINFORCING FLYWHEEL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-white uppercase mt-4 mb-4">
            THE ECOSYSTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C]">FLYWHEEL</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8E8E8E] leading-relaxed">
            As adoption grows, each phase automatically triggers the next, compounding network velocity and creating non-linear token deflation.
          </p>
        </div>

        {/* Flywheel Layout: Wheel + Step List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT 6 COLS: Scroll-Driven Interactive 3D/CSS Rotating Wheel */}
          <div className="lg:col-span-6 flex justify-center items-center py-6">
            <div className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] flex items-center justify-center">
              
              {/* Scroll-Rotated Wheel Disk */}
              <motion.div
                style={{ rotate: rotateWheel }}
                className="w-full h-full rounded-full border-2 border-[#D6A63C]/40 bg-[#0C0C0C]/80 backdrop-blur-xl p-8 relative flex items-center justify-center shadow-[0_0_50px_rgba(214,166,60,0.15)]"
              >
                {/* Decorative Inner Ring Lines */}
                <div className="absolute inset-4 rounded-full border border-dashed border-[#D6A63C]/30" />
                <div className="absolute inset-16 rounded-full border border-[#F0C75E]/20" />

                {/* 8 Flywheel Spokes & Nodes */}
                {FLYWHEEL_STEPS.map((step, idx) => {
                  const angle = (idx * 360) / 8 - 90;
                  const rad = (angle * Math.PI) / 180;
                  const radius = 42; // %
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
                      className="absolute w-10 h-10 rounded-full border border-[#D6A63C] bg-[#050505] flex items-center justify-center font-headline font-bold text-xs text-[#F0C75E] shadow-md"
                    >
                      {step.step}
                    </div>
                  );
                })}
              </motion.div>

              {/* Fixed Center Engine Hub */}
              <div className="absolute w-28 h-28 rounded-full border-2 border-[#F0C75E] bg-[#0A0A0A] p-4 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(240,199,94,0.4)] pointer-events-none z-20">
                <RefreshCw className="w-6 h-6 text-[#F0C75E] animate-spin-slow mb-1" />
                <span className="text-[9px] font-headline font-extrabold text-[#FFE09A] uppercase tracking-wider">
                  FLYWHEEL
                </span>
                <span className="text-[7px] font-mono text-[#8E8E8E]">SGDT ENGINE</span>
              </div>

            </div>
          </div>

          {/* RIGHT 6 COLS: Sequential Step Process List */}
          <div className="lg:col-span-6 space-y-3">
            {FLYWHEEL_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl border border-[#D6A63C]/20 bg-[#0C0C0C]/90 hover:border-[#F0C75E]/60 hover:bg-[#121212] transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#141414] border border-[#D6A63C]/30 flex items-center justify-center font-headline font-bold text-xs text-[#F0C75E] group-hover:border-[#F0C75E]">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-headline font-bold text-white uppercase group-hover:text-[#FFE09A] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#8E8E8E]">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="p-1.5 rounded-full bg-[#181818] border border-[#D6A63C]/20 text-[#8E8E8E] group-hover:text-[#F0C75E] group-hover:border-[#F0C75E] transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
