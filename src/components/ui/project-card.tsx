"use client";

// components/ui/project-card.tsx

import type { Project } from "../../data/portfolio.data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    num,
    title,
    type,
    description,
    stack,
    year,
    featured,
    featuredCode,
    href,
  } = project;

  const handleClick = () => {
    if (href) window.open(href, "_blank", "noopener noreferrer");
  };

  return (
    <article
      onClick={handleClick}
      className={[
        "bg-[#0a0a0a] p-8 relative overflow-hidden transition-colors duration-200 group",
        href ? "cursor-pointer hover:bg-[#111]" : "cursor-default",
        featured ? "col-span-2 grid grid-cols-2 gap-8 items-end" : "",
      ].join(" ")}
      aria-label={title}
    >
      {/* Main content column */}
      <div>
        <div className="text-[9px] text-amber-900 tracking-[0.2em] mb-4">
          {num}
        </div>

        <h3
          className={[
            "font-['Space_Mono',monospace] font-bold text-neutral-100 mb-2 leading-[1.2]",
            featured ? "text-3xl" : "text-xl",
          ].join(" ")}
        >
          {title}
        </h3>

        <span className="inline-block text-[9px] tracking-[0.15em] text-amber-400 uppercase border border-amber-900 px-2 py-0.5 mb-4">
          {type}
        </span>

        <p className="text-[11px] leading-[1.8] text-neutral-500 mb-6">
          {description}
        </p>

        {/* Stack tags */}
        <div
          className="flex flex-wrap gap-2 mb-6"
          role="list"
          aria-label="Technologies"
        >
          {stack.map((item) => (
            <span
              key={item}
              role="listitem"
              className="text-[8px] tracking-[0.1em] text-neutral-600 uppercase border border-neutral-800 px-2 py-0.5"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-neutral-800 pt-4 text-[9px] text-neutral-500 tracking-[0.1em] uppercase">
          <span>{year}</span>
          {href && (
            <span
              className="text-amber-400 text-base leading-none transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            >
              ↗
            </span>
          )}
        </div>
      </div>

      {/* Featured code preview */}
      {featured && featuredCode && (
        <div className="h-[200px] border border-neutral-800 bg-neutral-900 relative overflow-hidden flex items-center justify-center">
          <pre className="text-[8px] text-amber-900 font-mono leading-[1.6] tracking-[0.05em] text-left p-4">
            {featuredCode}
          </pre>
        </div>
      )}
    </article>
  );
}
