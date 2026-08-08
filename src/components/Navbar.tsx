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
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
          ? "bg-[#050505]/85 backdrop-blur-md border-b border-[#D6A63C]/25 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: SGDT Logo */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg p-0.5 border border-[#D6A63C]/30 bg-[#0A0A0A] group-hover:border-[#F0C75E] transition-colors duration-300">
              <Image
                src="/images/logo-sgdt.png"
                alt="SGDT Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback handling if image is loading
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-headline font-bold text-lg text-[#F0C75E] group-hover:scale-105 transition-transform duration-300">
                S
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-bold text-xl sm:text-2xl tracking-wider text-white group-hover:text-[#F0C75E] transition-colors">
                SGDT
              </span>
              <span className="text-[9px] tracking-widest text-[#8E8E8E] -mt-1 font-mono uppercase">
                Protocol
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
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

          {/* Right: Join SGDT CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#community"
              onClick={(e) => handleScrollTo(e, "#community")}
              className="relative group overflow-hidden rounded-md px-5 py-2.5 text-xs font-semibold tracking-wider uppercase font-headline border border-[#D6A63C]/50 hover:border-[#F0C75E] transition-all duration-300 shadow-[0_0_15px_rgba(214,166,60,0.15)] hover:shadow-[0_0_25px_rgba(240,199,94,0.3)] text-[#F5F5F5]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#D6A63C]/20 via-[#F0C75E]/30 to-[#D6A63C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-1.5 text-white group-hover:text-[#FFE09A]">
                JOIN SGDT
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F0C75E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F5F5F5] hover:text-[#F0C75E] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#F0C75E]" />
              ) : (
                <Menu className="w-6 h-6 text-[#F5F5F5]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-x-0 top-[60px] bg-[#050505]/95 backdrop-blur-xl border-b border-[#D6A63C]/30 py-6 px-6 shadow-2xl z-50 flex flex-col space-y-5"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-headline tracking-widest text-[#F5F5F5] hover:text-[#F0C75E] py-2 border-b border-[#141414] transition-colors uppercase flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#D6A63C]/50">→</span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#community"
                onClick={(e) => handleScrollTo(e, "#community")}
                className="w-full block text-center py-3 px-4 text-xs font-bold tracking-widest uppercase font-headline bg-gradient-to-r from-[#D6A63C] via-[#F0C75E] to-[#D6A63C] text-black rounded-md shadow-[0_0_20px_rgba(214,166,60,0.3)]"
              >
                JOIN SGDT ECOSYSTEM
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
