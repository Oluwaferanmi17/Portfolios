"use client";

// components/sections/about-section.tsx

import { SectionLabel } from "../../components/ui/section-label";
import {
  aboutText,
  techStack,
  processSteps,
  meta,
} from "../../data/portfolio.data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen border-b border-neutral-800 px-8 py-24"
      aria-label="About"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 max-w-5xl mx-auto">
        {/* Sidebar */}
        <aside>
          <SectionLabel>About</SectionLabel>

          {/* Photo */}
          <div
            className="w-full border border-neutral-800 bg-neutral-900 relative overflow-hidden mb-3"
            style={{ aspectRatio: "3/4" }}
            aria-hidden="true"
          >
            <img
              src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&q=80&fit=crop"
              alt={`${meta.name} — developer portrait`}
              className="w-full h-full object-cover grayscale contrast-110 opacity-80"
              style={{ mixBlendMode: "luminosity" }}
            />
            {/* scanline */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(232,168,37,0.04) 3px, rgba(232,168,37,0.04) 4px)",
              }}
            />
          </div>
          <p className="text-[8px] tracking-[0.2em] text-amber-900 text-center uppercase mb-6">
            {meta.initials} // {meta.location}
          </p>

          {/* Process */}
          <ul className="list-none" aria-label="Development process">
            {processSteps.map((step) => (
              <li
                key={step.n}
                className="flex items-center gap-4 text-[10px] tracking-[0.1em] text-neutral-500 py-3 border-b border-neutral-800 uppercase"
              >
                <span className="font-['Space_Mono',monospace] text-[9px] text-amber-400 min-w-[20px]">
                  {step.n}
                </span>
                {step.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main */}
        <div>
          <SectionLabel className="mb-6">README.md</SectionLabel>

          <h2 className="font-['Space_Mono',monospace] text-[clamp(1.8rem,3vw,3rem)] font-bold leading-[1.1] text-neutral-100 mb-6">
            I build systems
            <br />
            <em className="not-italic text-amber-400 font-normal">
              that scale
            </em>
          </h2>

          {aboutText.map((para, i) => (
            <p
              key={i}
              className="text-[13px] leading-[2] text-neutral-500 mb-4 max-w-[600px]"
            >
              {para}
            </p>
          ))}

          {/* Stack grid */}
          <SectionLabel className="mt-8">Stack</SectionLabel>
          <div
            className="grid gap-px bg-neutral-800 border border-neutral-800 mt-2"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
            }}
            role="list"
            aria-label="Technology stack"
          >
            {techStack.map((tech) => (
              <div
                key={tech}
                role="listitem"
                className="bg-[#0a0a0a] px-3 py-[0.6rem] text-[9px] tracking-[0.12em] text-neutral-500 uppercase transition-all duration-150 cursor-default hover:bg-neutral-900 hover:text-amber-400"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
