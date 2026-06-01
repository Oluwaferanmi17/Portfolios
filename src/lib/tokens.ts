// Portfolio design tokens
// Import these wherever you need consistent values

export const tokens = {
  fonts: {
    mono: "'IBM Plex Mono', monospace",
    display: "'Space Mono', monospace",
  },
  colors: {
    black: "#0a0a0a",
    white: "#f0ede6",
    amber: "#e8a825",
    amberDim: "#7a5510",
    gray: "#2a2a2a",
    grayMid: "#444",
    grayLight: "#888",
  },
} as const;

// Tailwind CSS class helpers (used in components)
export const tw = {
  sectionLabel:
    "text-[9px] tracking-[0.25em] text-amber-400 uppercase flex items-center gap-3 mb-2 after:content-[''] after:flex-1 after:max-w-[60px] after:h-px after:bg-amber-900",
  btnPrimary:
    "font-mono text-[10px] tracking-[0.15em] uppercase px-6 py-3 bg-amber-400 text-black border-none cursor-pointer transition-colors duration-150 hover:bg-neutral-100",
  btnGhost:
    "font-mono text-[10px] tracking-[0.15em] uppercase px-6 py-3 bg-transparent text-neutral-100 border border-neutral-600 cursor-pointer transition-colors duration-150 hover:border-neutral-100",
} as const;
