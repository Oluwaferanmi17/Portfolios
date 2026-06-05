"use client";

// components/ui/blink-cursor.tsx
// Animated blinking cursor — used in terminal readouts and status indicators.

export function BlinkCursor() {
  return (
    <span
      className="animate-[blink_1.2s_step-end_infinite] text-amber-400"
      style={{ animationName: "blink" }}
      aria-hidden="true"
    >
      █
    </span>
  );
}

export function BlinkDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`animate-[blink_1.2s_step-end_infinite] ${className}`}
      aria-hidden="true"
    >
      ●
    </span>
  );
}
