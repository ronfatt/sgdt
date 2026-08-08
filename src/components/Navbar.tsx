"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ECOSYSTEM", href: "#ecosystem" },
    { name: "TOKENOMICS", href: "#tokenomics" },
    { name: "ROADMAP", href: "#roadmap" },
    { name: "COMMUNITY", href: "#community" },
    { name: "WHITEPAPER", href: "#whitepaper" },
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
          
          {/* Left: SGDT Logo (3D Metallic Logo) */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="relative h-8 sm:h-10 w-auto flex items-center">
              {/* Full Horizontal Logo (Icon + SGDT Text) */}
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

          {/* Right: Join SGDT CTA (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href="#community"
              onClick={(e) => handleScrollTo(e, "#community")}
              className="relative group overflow-hidden rounded-md px-5 py-2.5 text-xs font-semibold tracking-wider uppercase font-headline border border-[#D6A63C]/50 hover:border-[#F0C75E] transition-all duration-300 shadow-[0_0_15px_rgba(214,166,60,0.15)] hover:shadow-[0_0_25px_rgba(240,199,94,0.35)] text-[#F5F5F5]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#D6A63C]/20 via-[#F0C75E]/30 to-[#D6A63C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-1.5 text-white group-hover:text-[#FFE09A]">
                JOIN SGDT
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F0C75E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="md:hidden flex items-center">
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

      {/* Mobile Glassmorphism Full Overlay Drawer */}
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

              <div className="pt-3">
                <a
                  href="#community"
                  onClick={(e) => handleScrollTo(e, "#community")}
                  className="w-full text-center py-3.5 px-4 text-xs font-bold tracking-widest uppercase font-headline bg-gradient-to-r from-[#FFE09A] via-[#F0C75E] to-[#D6A63C] text-black rounded-md shadow-[0_0_20px_rgba(214,166,60,0.3)] block"
                >
                  JOIN SGDT ECOSYSTEM
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
