import React from "react";
import { BackgroundEffect } from "@/components/BackgroundEffect";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MetricBar } from "@/components/MetricBar";
import { EcosystemDiagram } from "@/components/EcosystemDiagram";
import { ThreeCorePillars } from "@/components/ThreeCorePillars";
import { WhySGDT } from "@/components/WhySGDT";
import { DoubleCycle } from "@/components/DoubleCycle";
import { Flywheel } from "@/components/Flywheel";
import { GlobalNetwork } from "@/components/GlobalNetwork";
import { Roadmap } from "@/components/Roadmap";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#F5F5F5] overflow-hidden font-body">
      {/* Dynamic Background Effects */}
      <BackgroundEffect />

      {/* Desktop Custom Halo Cursor */}
      <CustomCursor />

      {/* Header Sticky Glass Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Live Data Metrics Bar */}
      <MetricBar />

      {/* SGDT Ecosystem Section */}
      <EcosystemDiagram />

      {/* Three Core Pillars Section */}
      <ThreeCorePillars />

      {/* Why SGDT Features Section */}
      <WhySGDT />

      {/* Double Cycle Economy Section */}
      <DoubleCycle />

      {/* Ecosystem Flywheel Section */}
      <Flywheel />

      {/* Global Network Section */}
      <GlobalNetwork />

      {/* Milestone Roadmap Section */}
      <Roadmap />

      {/* Final Portal CTA Section */}
      <FinalCTA />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
