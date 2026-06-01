"use client";

// app/page.tsx  (or pages/index.tsx for Pages Router)
// Root page — assembles all portfolio sections.
// To add/remove sections, edit here and in portfolio.data.ts.

import { PortfolioNav } from "../src/components/sections/portfolio-nav";
import { HeroSection } from "../src/components/sections/hero-section";
import { AboutSection } from "../src/components/sections/about-section";
import { ProjectsSection } from "../src/components/sections/projects-section";
import { ContactSection } from "../src/components/sections/contact-section";
import { PortfolioFooter } from "../src/components/sections/portfolio-footer";

export default function PortfolioPage() {
  return (
    <main
      className="bg-[#0a0a0a] text-[#f0ede6] font-mono cursor-crosshair overflow-x-hidden relative"
      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
    >
      {/* Scanline overlay — full page */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999]"
        aria-hidden="true"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)",
        }}
      />

      <PortfolioNav />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <PortfolioFooter />
    </main>
  );
}
