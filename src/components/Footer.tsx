"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, Send, Github, Globe, FileText, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "ECOSYSTEM", href: "#ecosystem" },
    { name: "TOKENOMICS", href: "#tokenomics" },
    { name: "WHITEPAPER", href: "#whitepaper" },
    { name: "ROADMAP", href: "#roadmap" },
    { name: "COMMUNITY", href: "#community" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <footer id="community" className="relative bg-[#030303] text-[#8E8E8E] pt-20 pb-12 border-t border-[#D6A63C]/20 z-10 font-headline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#141414]">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-lg p-0.5 border border-[#D6A63C]/30 bg-[#0A0A0A]">
                <Image
                  src="/images/logo-sgdt.png"
                  alt="SGDT"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center font-bold text-lg text-[#F0C75E]">
                  S
                </div>
              </div>
              <span className="text-2xl font-bold tracking-wider text-white">
                SGDT
              </span>
            </div>

            <p className="text-xs text-[#8E8E8E] leading-relaxed max-w-sm">
              Building The Next-Generation Digital Ecosystem. Integrating computing power, token burn, and global community networks into a sustainable Web3 digital economy.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#0C0C0C] border border-[#D6A63C]/20 flex items-center justify-center text-[#8E8E8E] hover:text-[#F0C75E] hover:border-[#F0C75E] transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#0C0C0C] border border-[#D6A63C]/20 flex items-center justify-center text-[#8E8E8E] hover:text-[#F0C75E] hover:border-[#F0C75E] transition-colors"
                aria-label="Discord"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#0C0C0C] border border-[#D6A63C]/20 flex items-center justify-center text-[#8E8E8E] hover:text-[#F0C75E] hover:border-[#F0C75E] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#0C0C0C] border border-[#D6A63C]/20 flex items-center justify-center text-[#8E8E8E] hover:text-[#F0C75E] hover:border-[#F0C75E] transition-colors"
                aria-label="Whitepaper"
              >
                <FileText className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Ecosystem Navigation Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F5F5F5] mb-4">
              QUICK NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#F0C75E] transition-colors py-1 uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Network Status & Back to top (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <button
              onClick={handleScrollToTop}
              className="p-3 rounded-xl border border-[#D6A63C]/30 bg-[#0A0A0A] text-[#F0C75E] hover:bg-[#D6A63C]/20 hover:border-[#F0C75E] transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-wider group"
            >
              <span>TOP OF PAGE</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className="text-left md:text-right">
              <span className="text-[10px] font-mono text-[#8E8E8E] block">
                MAINNET ENGINE
              </span>
              <span className="text-xs font-bold text-[#F0C75E] uppercase">
                v2.4 INSTITUTIONAL MESH
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Risk Disclosure */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] leading-relaxed">
          <p className="text-[#8E8E8E]">
            © 2026 SGDT. All Rights Reserved.
          </p>

          <p className="text-[#666666] max-w-xl text-center md:text-right text-[10px]">
            <strong className="text-[#8E8E8E]">Risk Disclosure:</strong> Digital assets involve market risks. Information presented on this website is for ecosystem introduction purposes only and does not constitute financial or investment advice.
          </p>
        </div>

      </div>
    </footer>
  );
};
