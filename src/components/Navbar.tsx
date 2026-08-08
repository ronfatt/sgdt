"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.ecosystem, href: "#ecosystem" },
    { name: t.nav.tokenomics, href: "#tokenomics" },
    { name: t.nav.roadmap, href: "#roadmap" },
    { name: t.nav.community, href: "#community" },
    { name: t.nav.whitepaper, href: "#whitepaper" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleLanguage = () => {
    setLang(lang === "en" ? "zh" : "en");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-[#D6A63C]/25 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.85)]"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: SGDT Logo */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="relative h-8 sm:h-10 w-auto flex items-center">
              <Image
                src="/images/logo-sgdt-full.png"
                alt="SGDT Protocol"
                width={140}
                height={40}
                className="h-7 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="relative text-xs font-medium tracking-widest text-[#8E8E8E] hover:text-[#F5F5F5] transition-colors py-1 group uppercase font-headline"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D6A63C] group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Right Actions: Language Switcher & Join SGDT */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#D6A63C]/30 bg-[#0A0A0A] text-[11px] font-headline font-semibold text-[#FFE09A] hover:border-[#F0C75E] hover:bg-[#D6A63C]/10 transition-all duration-300 shadow-[0_0_10px_rgba(214,166,60,0.1)]"
              title="Switch Language / 切换语言"
            >
              <Globe className="w-3.5 h-3.5 text-[#F0C75E]" />
              <span>{lang === "en" ? "中文" : "ENGLISH"}</span>
            </button>

            {/* Join CTA */}
            <a
              href="#community"
              onClick={(e) => handleScrollTo(e, "#community")}
              className="relative group overflow-hidden rounded-md px-5 py-2.5 text-xs font-semibold tracking-wider uppercase font-headline border border-[#D6A63C]/50 hover:border-[#F0C75E] transition-all duration-300 shadow-[0_0_15px_rgba(214,166,60,0.15)] hover:shadow-[0_0_25px_rgba(240,199,94,0.35)] text-[#F5F5F5]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#D6A63C]/20 via-[#F0C75E]/30 to-[#D6A63C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-1.5 text-white group-hover:text-[#FFE09A]">
                {t.nav.joinSgdt}
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F0C75E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Right Controls: Language Button + Hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-headline font-bold text-[#F0C75E] bg-[#0A0A0A] border border-[#D6A63C]/30"
            >
              <Globe className="w-3.5 h-3.5 text-[#F0C75E]" />
              <span>{lang === "en" ? "中" : "EN"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F5F5F5] hover:text-[#F0C75E] bg-[#0A0A0A] border border-[#D6A63C]/20 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#F0C75E]" />
              ) : (
                <Menu className="w-5 h-5 text-[#F5F5F5]" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#050505]/95 backdrop-blur-2xl border-b border-[#D6A63C]/30 shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-sm font-headline tracking-widest text-[#F5F5F5] hover:text-[#F0C75E] py-2.5 border-b border-[#141414] transition-colors uppercase flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#D6A63C]">→</span>
                </motion.a>
              ))}

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  onClick={toggleLanguage}
                  className="w-1/3 py-3 text-xs font-bold font-headline rounded-md border border-[#D6A63C]/40 bg-[#0A0A0A] text-[#FFE09A] flex items-center justify-center gap-1.5"
                >
                  <Globe className="w-4 h-4 text-[#F0C75E]" />
                  <span>{lang === "en" ? "中文" : "ENGLISH"}</span>
                </button>

                <a
                  href="#community"
                  onClick={(e) => handleScrollTo(e, "#community")}
                  className="w-2/3 text-center py-3 text-xs font-bold tracking-widest uppercase font-headline bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C] text-black rounded-md shadow-[0_0_20px_rgba(214,166,60,0.3)] block"
                >
                  {t.nav.joinSgdt}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
