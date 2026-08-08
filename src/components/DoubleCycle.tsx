"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RefreshCw, Users, Sparkles } from "lucide-react";

const valueNodes = [
  { id: "v1", title: "Digital Asset", desc: "Base liquidity & reserve asset" },
  { id: "v2", title: "Computing Power", desc: "Hardware infrastructure engagement" },
  { id: "v3", title: "Reward", desc: "Algorithmic incentive distribution" },
  { id: "v4", title: "Burn", desc: "Contract supply destruction" },
  { id: "v5", title: "Scarcity", desc: "Reduced circulating tokens" },
  { id: "v6", title: "Value Cycle", desc: "Self-sustaining price feedback" },
];

const communityNodes = [
  { id: "c1", title: "User", desc: "Individual participant onboarding" },
  { id: "c2", title: "Community", desc: "Global decentralized node clusters" },
  { id: "c3", title: "Network", desc: "Compounding connectivity effects" },
  { id: "c4", title: "Application", desc: "Decentralized ecosystem services" },
  { id: "c5", title: "Traffic", desc: "High-volume protocol usage" },
  { id: "c6", title: "New User", desc: "Continuous organic growth" },
];

export const DoubleCycle: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<{ title: string; desc: string } | null>(null);

  return (
    <section className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-headline font-bold tracking-widest text-[#F0C75E] uppercase px-3 py-1 rounded-full border border-[#D6A63C]/30 bg-[#0A0A0A]">
            ECONOMIC ENGINE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-white uppercase mt-4 mb-2">
            THE DOUBLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C]">CYCLE</span>
          </h2>
          <h3 className="text-sm font-headline font-bold tracking-widest text-[#D6A63C] uppercase">
            ECONOMIC EFFECT × NETWORK EFFECT
          </h3>
        </div>

        {/* Double Cycle Visual Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 py-8">
          
          {/* LEFT: VALUE CYCLE */}
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-[#D6A63C]/30 flex items-center justify-center p-4 bg-[#0A0A0A]/60 shadow-[0_0_40px_rgba(214,166,60,0.1)]">
            <div className="absolute inset-[-8px] rounded-full border border-dashed border-[#D6A63C]/40 animate-spin-slow pointer-events-none" />
            
            <div className="text-center pointer-events-none z-10">
              <RefreshCw className="w-6 h-6 text-[#F0C75E] mx-auto mb-1 animate-spin-slow" />
              <span className="text-xs font-headline font-bold text-[#FFE09A] uppercase tracking-wider block">
                VALUE CYCLE
              </span>
              <span className="text-[9px] font-mono text-[#8E8E8E]">ECONOMIC EFFECT</span>
            </div>

            {/* Orbiting Value Nodes */}
            {valueNodes.map((node, i) => {
              const angle = (i * 360) / valueNodes.length - 90;
              const rad = (angle * Math.PI) / 180;
              const r = 42; // % radius
              const left = 50 + r * Math.cos(rad);
              const top = 50 + r * Math.sin(rad);

              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute z-20 cursor-pointer group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D6A63C]/50 bg-[#121212] flex items-center justify-center text-[10px] font-bold text-[#F0C75E] group-hover:border-[#F0C75E] group-hover:bg-[#F0C75E]/20 group-hover:scale-110 transition-all shadow-md">
                    0{i + 1}
                  </div>
                  <span className="text-[9px] font-headline font-semibold text-[#8E8E8E] group-hover:text-white block text-center mt-1 whitespace-nowrap">
                    {node.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CENTER INTERACTION HUB */}
          <div className="relative z-30 flex flex-col items-center justify-center p-6 rounded-2xl border border-[#D6A63C]/40 bg-[#0C0C0C]/90 backdrop-blur-xl shadow-[0_0_35px_rgba(214,166,60,0.3)] text-center w-64">
            <div className="w-14 h-14 rounded-full border border-[#D6A63C] bg-[#050505] p-2 flex items-center justify-center mb-3">
              <div className="font-headline font-bold text-xl text-[#F0C75E]">SGDT</div>
            </div>
            
            <div className="text-xs font-headline font-bold text-white uppercase tracking-widest mb-1">
              NETWORK EFFECT
            </div>
            <div className="text-lg font-headline font-extrabold text-[#F0C75E] my-0.5">
              ×
            </div>
            <div className="text-xs font-headline font-bold text-white uppercase tracking-widest mb-3">
              ECONOMIC EFFECT
            </div>

            {/* Hover Node Description Box */}
            <div className="w-full pt-3 border-t border-[#1F1F1F] min-h-[50px] flex flex-col justify-center">
              {hoveredNode ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <span className="text-[10px] font-headline font-bold text-[#FFE09A] uppercase block">
                    {hoveredNode.title}
                  </span>
                  <span className="text-[9px] text-[#8E8E8E]">
                    {hoveredNode.desc}
                  </span>
                </motion.div>
              ) : (
                <span className="text-[9px] text-[#8E8E8E] font-mono italic">
                  Hover any node to inspect cycle details
                </span>
              )}
            </div>
          </div>

          {/* RIGHT: COMMUNITY CYCLE */}
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-[#D6A63C]/30 flex items-center justify-center p-4 bg-[#0A0A0A]/60 shadow-[0_0_40px_rgba(214,166,60,0.1)]">
            <div className="absolute inset-[-8px] rounded-full border border-dashed border-[#D6A63C]/40 animate-spin-reverse-slow pointer-events-none" />

            <div className="text-center pointer-events-none z-10">
              <Users className="w-6 h-6 text-[#F0C75E] mx-auto mb-1 animate-pulse" />
              <span className="text-xs font-headline font-bold text-[#FFE09A] uppercase tracking-wider block">
                COMMUNITY CYCLE
              </span>
              <span className="text-[9px] font-mono text-[#8E8E8E]">NETWORK EFFECT</span>
            </div>

            {/* Orbiting Community Nodes */}
            {communityNodes.map((node, i) => {
              const angle = (i * 360) / communityNodes.length - 90;
              const rad = (angle * Math.PI) / 180;
              const r = 42; // % radius
              const left = 50 + r * Math.cos(rad);
              const top = 50 + r * Math.sin(rad);

              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute z-20 cursor-pointer group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D6A63C]/50 bg-[#121212] flex items-center justify-center text-[10px] font-bold text-[#F0C75E] group-hover:border-[#F0C75E] group-hover:bg-[#F0C75E]/20 group-hover:scale-110 transition-all shadow-md">
                    C{i + 1}
                  </div>
                  <span className="text-[9px] font-headline font-semibold text-[#8E8E8E] group-hover:text-white block text-center mt-1 whitespace-nowrap">
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
