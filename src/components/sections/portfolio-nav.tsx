"use client";

// components/sections/portfolio-nav.tsx

import { BlinkDot } from "../../components/ui/blink-cursor";
import { meta } from "../../data/portfolio.data";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function PortfolioNav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-[#0a0a0a]/90 backdrop-blur-sm flex items-center justify-between px-8 h-12"
      aria-label="Portfolio navigation"
    >
      {/* Brand */}
      <span className="font-['Space_Mono',monospace] text-[13px] tracking-[0.2em] text-amber-400 uppercase">
        {meta.initials}
        <span
          className="animate-[blink_1.2s_step-end_infinite]"
          aria-hidden="true"
        >
          _
        </span>
      </span>

      {/* Links */}
      <ul className="flex gap-8 list-none" role="list">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[10px] tracking-[0.15em] text-neutral-500 no-underline uppercase transition-colors duration-200 hover:text-neutral-100 group"
            >
              <span className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {"> "}
              </span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Status */}
      <div className="text-[9px] tracking-[0.1em] text-amber-900 uppercase">
        SYS.ONLINE <BlinkDot className="text-amber-900" />
      </div>
    </nav>
  );
}
