"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RefreshCw, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const DoubleCycle: React.FC = () => {
  const { t } = useLanguage();
  const [hoveredNode, setHoveredNode] = useState<{ title: string; desc: string } | null>(null);

  const valueKeys = ["v1", "v2", "v3", "v4", "v5", "v6"];
  const communityKeys = ["c1", "c2", "c3", "c4", "c5", "c6"];

  return (
    <section className="relative py-16 sm:py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] font-headline font-bold tracking-widest text-[#F0C75E] uppercase px-3 py-1 rounded-full border border-[#D6A63C]/30 bg-[#0A0A0A]">
            {t.doubleCycle.label}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-white uppercase mt-3 mb-2">
            {t.doubleCycle.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C]">{t.doubleCycle.titleHighlight}</span>
          </h2>
          <h3 className="text-xs sm:text-sm font-headline font-bold tracking-widest text-[#D6A63C] uppercase">
            {t.doubleCycle.subtitle}
          </h3>
        </div>

        {/* Double Cycle Visual Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 py-4 sm:py-8">
          
          {/* LEFT: VALUE CYCLE */}
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-[#D6A63C]/30 flex items-center justify-center p-4 bg-[#0A0A0A]/60 shadow-[0_0_40px_rgba(214,166,60,0.1)]">
            <div className="absolute inset-[-6px] sm:inset-[-8px] rounded-full border border-dashed border-[#D6A63C]/40 animate-spin-slow pointer-events-none" />
            
            <div className="text-center pointer-events-none z-10">
              <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0C75E] mx-auto mb-1 animate-spin-slow" />
              <span className="text-[10px] sm:text-xs font-headline font-bold text-[#FFE09A] uppercase tracking-wider block">
                {t.doubleCycle.valueCycle}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono text-[#8E8E8E]">{t.doubleCycle.economicEffect}</span>
            </div>

            {valueKeys.map((key, i) => {
              const node = t.doubleCycle.valueNodes[key];
              const angle = (i * 360) / valueKeys.length - 90;
              const rad = (angle * Math.PI) / 180;
              const r = 42;
              const left = 50 + r * Math.cos(rad);
              const top = 50 + r * Math.sin(rad);

              return (
                <div
                  key={key}
                  onClick={() => setHoveredNode(node)}
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute z-20 cursor-pointer group"
                >
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-[#D6A63C]/50 bg-[#121212] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-[#F0C75E] group-hover:border-[#F0C75E] group-hover:bg-[#F0C75E]/20 group-hover:scale-110 transition-all shadow-md">
                    0{i + 1}
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-headline font-semibold text-[#8E8E8E] group-hover:text-white block text-center mt-1 whitespace-nowrap">
                    {node.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CENTER INTERACTION HUB */}
          <div className="relative z-30 flex flex-col items-center justify-center p-5 rounded-2xl border border-[#D6A63C]/40 bg-[#0C0C0C]/90 backdrop-blur-xl shadow-[0_0_35px_rgba(214,166,60,0.3)] text-center w-60 sm:w-64">
            <div className="relative w-12 h-12 rounded-full border border-[#D6A63C] bg-[#050505] p-2 flex items-center justify-center mb-2 shadow-lg">
              <Image
                src="/images/logo-sgdt-icon.png"
                alt="SGDT Icon"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="text-[10px] sm:text-xs font-headline font-bold text-white uppercase tracking-widest mb-0.5">
              {t.doubleCycle.networkEffect}
            </div>
            <div className="text-base sm:text-lg font-headline font-extrabold text-[#F0C75E]">
              ×
            </div>
            <div className="text-[10px] sm:text-xs font-headline font-bold text-white uppercase tracking-widest mb-2.5">
              {t.doubleCycle.economicEffect}
            </div>

            <div className="w-full pt-2.5 border-t border-[#1F1F1F] min-h-[48px] flex flex-col justify-center">
              {hoveredNode ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <span className="text-[9px] sm:text-[10px] font-headline font-bold text-[#FFE09A] uppercase block">
                    {hoveredNode.title}
                  </span>
                  <span className="text-[8px] sm:text-[9px] text-[#8E8E8E]">
                    {hoveredNode.desc}
                  </span>
                </motion.div>
              ) : (
                <span className="text-[8px] sm:text-[9px] text-[#8E8E8E] font-mono italic">
                  {t.doubleCycle.hoverHint}
                </span>
              )}
            </div>
          </div>

          {/* RIGHT: COMMUNITY CYCLE */}
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-[#D6A63C]/30 flex items-center justify-center p-4 bg-[#0A0A0A]/60 shadow-[0_0_40px_rgba(214,166,60,0.1)]">
            <div className="absolute inset-[-6px] sm:inset-[-8px] rounded-full border border-dashed border-[#D6A63C]/40 animate-spin-reverse-slow pointer-events-none" />

            <div className="text-center pointer-events-none z-10">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#F0C75E] mx-auto mb-1 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-headline font-bold text-[#FFE09A] uppercase tracking-wider block">
                {t.doubleCycle.communityCycle}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono text-[#8E8E8E]">{t.doubleCycle.networkEffect}</span>
            </div>

            {communityKeys.map((key, i) => {
              const node = t.doubleCycle.communityNodes[key];
              const angle = (i * 360) / communityKeys.length - 90;
              const rad = (angle * Math.PI) / 180;
              const r = 42;
              const left = 50 + r * Math.cos(rad);
              const top = 50 + r * Math.sin(rad);

              return (
                <div
                  key={key}
                  onClick={() => setHoveredNode(node)}
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute z-20 cursor-pointer group"
                >
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-[#D6A63C]/50 bg-[#121212] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-[#F0C75E] group-hover:border-[#F0C75E] group-hover:bg-[#F0C75E]/20 group-hover:scale-110 transition-all shadow-md">
                    C{i + 1}
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-headline font-semibold text-[#8E8E8E] group-hover:text-white block text-center mt-1 whitespace-nowrap">
                    {node.title}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
