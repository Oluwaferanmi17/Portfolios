"use client";

// components/ui/section-label.tsx
// Decorative section label with amber accent line.

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 text-[9px] tracking-[0.25em] text-amber-400 uppercase mb-2 ${className}`}
    >
      {children}
      <span
        className="flex-1 max-w-[60px] h-px bg-amber-900"
        aria-hidden="true"
      />
    </div>
  );
}
