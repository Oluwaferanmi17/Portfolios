"use client";

// components/sections/hero-section.tsx
// Drop-in replacement / upgrade of hero-ascii.tsx.
// The UnicornStudio embed is preserved in the background layer (desktop only).
// All content data comes from portfolio.data.ts — no hardcoded strings here.

import { useEffect } from "react";
import { meta, stats, terminalLines } from "../../data/portfolio.data";
import { BlinkCursor } from "../../components/ui/blink-cursor";

export function HeroSection() {
  // UnicornStudio embed (from original hero-ascii.tsx)
  useEffect(() => {
    const embedScript = document.createElement("script");
    embedScript.type = "text/javascript";
    embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(embedScript);

    const style = document.createElement("style");
    style.textContent = `
      [data-us-project] { position: relative !important; overflow: hidden !important; }
      [data-us-project] canvas { clip-path: inset(0 0 10% 0) !important; }
      [data-us-project] * { pointer-events: none !important; }
      [data-us-project] a[href*="unicorn"],
      [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"],
      [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
    `;
    document.head.appendChild(style);

    const hideBranding = () => {
      const projectDiv = document.querySelector("[data-us-project]");
      if (projectDiv) {
        projectDiv.querySelectorAll("*").forEach((el) => {
          const text = (el.textContent || "").toLowerCase();
          if (text.includes("made with") || text.includes("unicorn"))
            el.remove();
        });
      }
    };

    hideBranding();
    const interval = setInterval(hideBranding, 100);
    [1000, 3000, 5000].forEach((d) => setTimeout(hideBranding, d));

    return () => {
      clearInterval(interval);
      if (document.head.contains(embedScript))
        document.head.removeChild(embedScript);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen border-b border-neutral-800 overflow-hidden"
      aria-label="Hero"
    >
      {/* UnicornStudio background — desktop only */}
      {/* <div
        className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none"
        aria-hidden="true"
      >
        <div
          data-us-project="whwOGlfJ5Rz2rHaEUgHl"
          style={{ width: "100%", height: "100%", minHeight: "100vh" }}
        />
      </div> */}

      {/* Mobile stars fallback */}
      <div
        className="absolute inset-0 lg:hidden opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: [
            "radial-gradient(1px 1px at 20% 30%, white, transparent)",
            "radial-gradient(1px 1px at 60% 70%, white, transparent)",
            "radial-gradient(1px 1px at 80% 10%, white, transparent)",
            "radial-gradient(1px 1px at 33% 80%, white, transparent)",
          ].join(", "),
        }}
      />

      {/* Grid layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen pt-12">
        {/* Left — main content */}
        <div
          className="border-r border-neutral-800 flex flex-col justify-end p-8 lg:p-12 relative"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,168,37,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(232,168,37,0.015) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 text-[9px] tracking-[0.3em] text-amber-400 uppercase mb-6 animate-fadeUp">
            PROCESS:INIT
            <span className="text-neutral-700">──</span>
            PORTFOLIO.EXE
          </div>

          {/* Name */}
          <h1 className="font-['Space_Mono',monospace] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-neutral-100 mb-2 animate-fadeUp">
            {meta.name.split(" ").map((part, i) =>
              i === meta.name.split(" ").length - 1 ? (
                <em
                  key={i}
                  className="not-italic text-amber-400 font-normal block"
                >
                  {part}
                </em>
              ) : (
                <span key={i} className="block">
                  {part.toUpperCase()}
                </span>
              ),
            )}
          </h1>

          {/* Role */}
          <p className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase mb-8 border-l-2 border-amber-400 pl-4 animate-fadeUp">
            {meta.role}
          </p>

          {/* Description */}
          <p className="text-[12px] leading-[1.9] text-neutral-500 max-w-[420px] mb-10 animate-fadeUp">
            {meta.tagline}
          </p>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap animate-fadeUp">
            <button
              onClick={() => scrollTo("projects")}
              className="font-mono text-[10px] tracking-[0.15em] uppercase px-6 py-3 bg-amber-400 text-black transition-colors duration-150 hover:bg-neutral-100 cursor-pointer border-none"
            >
              View Work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="font-mono text-[10px] tracking-[0.15em] uppercase px-6 py-3 bg-transparent text-neutral-100 border border-neutral-600 transition-colors duration-150 hover:border-neutral-100 cursor-pointer"
            >
              Get in Touch →
            </button>
          </div>
        </div>

        {/* Right — stats + terminal */}
        <div className="flex flex-col justify-between p-8 animate-fadeUp">
          {/* ASCII logo */}
          <pre
            className="text-[7px] leading-[1.3] tracking-[0.05em] text-neutral-500 select-none pt-6"
            aria-hidden="true"
          >
            {`  ██████╗  █████╗
  ██╔═══██╗██╔══██╗
  ██║   ██║███████║
  ██║   ██║██╔══██║
  ╚██████╔╝██║  ██║
   ╚═════╝ ╚═╝  ╚═╝`}
          </pre>

          {/* Stats grid */}
          <div
            className="grid grid-cols-2 gap-px bg-neutral-800 border border-neutral-800 my-8"
            role="list"
            aria-label="Quick stats"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-[#0a0a0a] p-5" role="listitem">
                <div className="font-['Space_Mono',monospace] text-3xl font-bold text-neutral-100 leading-none mb-1">
                  {s.value.replace(/[+∞]/, "")}
                  {s.value.includes("+") && (
                    <span className="text-amber-400">+</span>
                  )}
                  {s.value === "∞" && <span>∞</span>}
                </div>
                <div className="text-[9px] tracking-[0.15em] text-neutral-500 uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal readout */}
          <div
            className="text-[9px] text-amber-900 border-t border-neutral-800 pt-4 leading-[2] font-mono"
            aria-label="System status"
          >
            {terminalLines.map((line, i) => (
              <span
                key={i}
                className={`block ${
                  line.status === "ok"
                    ? "text-green-600"
                    : line.status === "warn"
                      ? "text-amber-400"
                      : "text-amber-900"
                }`}
              >
                {line.text}
                {i === terminalLines.length - 1 && <BlinkCursor />}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
