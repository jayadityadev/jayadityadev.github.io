"use client";

import React, { useState } from "react";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  size?: "large" | "medium" | "small";
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = "",
  size = "medium",
}) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  const sizeClasses = {
    large: "col-span-1 lg:col-span-12",
    medium: "col-span-1 lg:col-span-6",
    small: "col-span-1 lg:col-span-6",
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/70 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-accent/50 shadow-sm dark:shadow-none ${sizeClasses[size]} ${className}`}
    >
      {/* Dynamic Cursor Spotlight Gradient */}
      {mousePos && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, var(--accent-glow, rgba(139, 92, 246, 0.15)), transparent 80%)`,
          }}
        />
      )}

      {/* Decorative corner reticle */}
      <span className="pointer-events-none absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-zinc-700/60" />
      <span className="pointer-events-none absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-zinc-700/60" />

      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </div>
  );
};
