"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Globe, Cpu, Flame, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CounterProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}

const CountUpNumber: React.FC<CounterProps> = ({ target, decimals = 0, prefix = "", suffix = "", inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, inView]);

  const formatted = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString();

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export const MetricBar: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { t } = useLanguage();

  const metrics = [
    { id: "community", label: t.metrics.community, value: 1246892, suffix: "", icon: <Users className="w-5 h-5 text-[#F0C75E]" /> },
    { id: "users", label: t.metrics.users, value: 3782159, suffix: "", icon: <Globe className="w-5 h-5 text-[#F0C75E]" /> },
    { id: "power", label: t.metrics.power, value: 58.72, suffix: " PH/s", decimals: 2, icon: <Cpu className="w-5 h-5 text-[#F0C75E]" /> },
    { id: "burned", label: t.metrics.burned, value: 26781309, suffix: " SGDT", icon: <Flame className="w-5 h-5 text-[#F0C75E]" /> },
    { id: "growth", label: t.metrics.growth, value: 187.63, suffix: "%", decimals: 2, icon: <TrendingUp className="w-5 h-5 text-[#F0C75E]" /> },
  ];

  return (
    <section id="metrics" className="relative py-10 sm:py-12 border-y border-[#D6A63C]/20 bg-[#0A0A0A]/70 backdrop-blur-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-4 sm:p-5 rounded-xl border border-[#D6A63C]/20 bg-[#0C0C0C]/80 hover:border-[#D6A63C]/50 hover:bg-[#121212] transition-all duration-300 group shadow-[0_5px_20px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-[#D6A63C]/50 to-transparent group-hover:w-full transition-all duration-500" />

              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#141414] border border-[#D6A63C]/20 group-hover:border-[#F0C75E] transition-colors">
                  {metric.icon}
                </div>
                <span className="text-[10px] font-mono text-[#D6A63C]/50 font-bold">
                  0{index + 1}
                </span>
              </div>

              <div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FFE09A] to-[#F0C75E] tracking-tight mb-1">
                  <CountUpNumber
                    target={metric.value}
                    decimals={metric.decimals}
                    suffix={metric.suffix}
                    inView={isInView}
                  />
                </div>
                <div className="text-[10px] sm:text-[11px] font-headline font-semibold tracking-wider text-[#8E8E8E] uppercase">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
