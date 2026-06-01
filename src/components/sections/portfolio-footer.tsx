"use client";

// components/sections/portfolio-footer.tsx

import { meta } from "../../data/portfolio.data";

export function PortfolioFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 px-8 py-6 flex items-center justify-between text-[9px] text-neutral-600 tracking-[0.1em] uppercase font-mono">
      <span className="text-amber-900">
        © {year} {meta.initials} — {meta.name}
      </span>
      <span>{meta.location} // All systems nominal</span>
      <span>Build:{meta.buildVersion}</span>
    </footer>
  );
}
