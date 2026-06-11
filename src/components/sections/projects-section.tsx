"use client";

// components/sections/projects-section.tsx

import { SectionLabel } from "../../components/ui/section-label";
import { ProjectCard } from "../../components/ui/project-card";
import { projects } from "../../data/portfolio.data";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen border-b border-neutral-800 px-8 py-24"
      aria-label="Projects"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto flex items-end justify-between gap-8 mb-12">
        <h2 className="font-['Space_Mono',monospace] text-[clamp(2rem,4vw,3.5rem)] font-bold text-neutral-100 leading-none">
          Selected
          <br />
          <em className="not-italic text-amber-400 font-normal">Work</em>
        </h2>
        <SectionLabel className="pb-1">
          [ {String(projects.length).padStart(2, "0")} projects ]
        </SectionLabel>
        <a
          href="https://github.com/Oluwaferanmi17"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] tracking-[0.15em] uppercase text-amber-400 border border-neutral-700 px-4 py-2 hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300"
        >
          View GitHub →
        </a>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-2 gap-px bg-neutral-800 border border-neutral-800 max-w-5xl mx-auto"
        role="list"
        aria-label="Project list"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
