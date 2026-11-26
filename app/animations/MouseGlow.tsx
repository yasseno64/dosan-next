"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = ref.current;
    const section = glow?.parentElement;
    if (!glow || !section) return;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      glow.style.setProperty("--x", `${e.clientX - rect.left}px`);
      glow.style.setProperty("--y", `${e.clientY - rect.top}px`);
      glow.style.opacity = "1";
    };
    const onLeave = () => {
      glow.style.opacity = "0";
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(circle 260px at var(--x, 50%) var(--y, 50%), rgba(29, 204, 160, 0.13), transparent 100%)",
      }}
    />
  );
}