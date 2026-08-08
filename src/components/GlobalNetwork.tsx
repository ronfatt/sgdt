"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { REGIONAL_NODES } from "@/data/landingData";
import { Globe, MapPin, Radio } from "lucide-react";

export const GlobalNetwork: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState(REGIONAL_NODES[0]);

  return (
    <section className="relative py-24 border-t border-[#D6A63C]/20 bg-[#050505] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-headline font-bold tracking-widest text-[#F0C75E] uppercase px-3 py-1 rounded-full border border-[#D6A63C]/30 bg-[#0A0A0A]">
            GLOBAL NODE INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-white uppercase mt-4 mb-4">
            FROM COMMUNITY TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C]">GLOBAL ECOSYSTEM</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8E8E8E] leading-relaxed">
            SGDT starts with community, but its vision extends far beyond it. Decentralized nodes form a resilient mesh network spanning strategic continental hubs.
          </p>
        </div>

        {/* World Map Container */}
        <div className="relative w-full h-[380px] sm:h-[500px] rounded-2xl border border-[#D6A63C]/30 bg-[#0A0A0A]/90 p-6 sm:p-10 flex flex-col justify-between overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          
          {/* Subtle World Map Dot Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(214,166,60,0.6) 1px, transparent 1px)`,
              backgroundSize: "24px 24px"
            }}
          />

          {/* Regional Glowing Network Nodes */}
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
                {/* Ping Radar Animation */}
                <div className="relative flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-[#F0C75E]/40 animate-ping absolute" />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "border-[#FFE09A] bg-[#F0C75E] shadow-[0_0_20px_#F0C75E] scale-125"
                      : "border-[#D6A63C] bg-[#0A0A0A] group-hover:border-[#F0C75E] group-hover:scale-110"
                  }`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  </div>
                </div>

                {/* Node Label Tooltip */}
                <div className="mt-2 text-center pointer-events-none whitespace-nowrap">
                  <span className={`text-[10px] font-headline font-bold uppercase px-2 py-0.5 rounded border transition-colors ${
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

          {/* Bottom Control Bar */}
          <div className="relative z-30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#1F1F1F]">
            <div className="flex items-center gap-3">
              <Radio className="w-5 h-5 text-[#F0C75E] animate-pulse" />
              <div>
                <span className="text-[10px] font-mono text-[#8E8E8E] uppercase block">
                  SELECTED REGIONAL HUB
                </span>
                <span className="text-sm font-headline font-bold text-white uppercase">
                  {selectedRegion.name} NODE MESH
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-headline font-semibold text-[#F0C75E] uppercase px-3 py-1 rounded bg-[#D6A63C]/10 border border-[#D6A63C]/30">
                ACTIVE STATUS: ONLINE
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
