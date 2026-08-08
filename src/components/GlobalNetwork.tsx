"use client";

import React, { useState } from "react";
import { REGIONAL_NODES } from "@/data/landingData";
import { Radio } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const GlobalNetwork: React.FC = () => {
  const { t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState(REGIONAL_NODES[0]);

  return (
    <section className="relative py-16 sm:py-24 border-t border-[#D6A63C]/20 bg-[#050505] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] font-headline font-bold tracking-widest text-[#F0C75E] uppercase px-3 py-1 rounded-full border border-[#D6A63C]/30 bg-[#0A0A0A]">
            {t.globalNetwork.label}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-white uppercase mt-3 mb-3">
            {t.globalNetwork.title} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C]">{t.globalNetwork.titleHighlight}</span>
          </h2>
          <p className="text-xs sm:text-base text-[#8E8E8E] leading-relaxed px-2">
            {t.globalNetwork.description}
          </p>
        </div>

        {/* World Map Container */}
        <div className="relative w-full h-[360px] sm:h-[500px] rounded-2xl border border-[#D6A63C]/30 bg-[#0A0A0A]/90 p-4 sm:p-10 flex flex-col justify-between overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(214,166,60,0.6) 1px, transparent 1px)`,
              backgroundSize: "24px 24px"
            }}
          />

          {REGIONAL_NODES.map((node) => {
            const isSelected = selectedRegion.name === node.name;
            return (
              <div
                key={node.name}
                onClick={() => setSelectedRegion(node)}
                onMouseEnter={() => setSelectedRegion(node)}
                style={{ left: node.x, top: node.y }}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#F0C75E]/40 animate-ping absolute" />
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "border-[#FFE09A] bg-[#F0C75E] shadow-[0_0_20px_#F0C75E] scale-125"
                      : "border-[#D6A63C] bg-[#0A0A0A] group-hover:border-[#F0C75E] group-hover:scale-110"
                  }`}>
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-black" />
                  </div>
                </div>

                <div className="mt-1.5 text-center pointer-events-none whitespace-nowrap">
                  <span className={`text-[9px] sm:text-[10px] font-headline font-bold uppercase px-2 py-0.5 rounded border transition-colors ${
                    isSelected
                      ? "bg-[#D6A63C] text-black border-[#F0C75E]"
                      : "bg-[#0C0C0C]/80 text-[#8E8E8E] border-[#D6A63C]/20 group-hover:text-white"
                  }`}>
                    {node.name}
                  </span>
                </div>
              </div>
            );
          })}

          <div className="relative z-30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-[#1F1F1F]">
            <div className="flex items-center gap-3">
              <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-[#F0C75E] animate-pulse" />
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono text-[#8E8E8E] uppercase block">
                  {t.globalNetwork.selectedHub}
                </span>
                <span className="text-xs sm:text-sm font-headline font-bold text-white uppercase">
                  {selectedRegion.name} {t.globalNetwork.mesh}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[9px] sm:text-[10px] font-headline font-semibold text-[#F0C75E] uppercase px-3 py-1 rounded bg-[#D6A63C]/10 border border-[#D6A63C]/30">
                {t.globalNetwork.activeStatus}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
