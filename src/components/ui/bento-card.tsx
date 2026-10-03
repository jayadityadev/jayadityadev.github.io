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
    large: "col-span-1 lg:col-span-12 p-4 sm:p-5",
    medium: "col-span-1 lg:col-span-6 p-4 sm:p-5",
    small: "col-span-1 lg:col-span-6 p-3 sm:p-4",
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-xl border border-border bg-surface/50 transition-colors duration-200 hover:border-zinc-400 dark:hover:border-zinc-700 shadow-sm dark:shadow-none ${sizeClasses[size]} ${className}`}
    >
      {/* Subtle Dynamic Cursor Spotlight Gradient */}
      {mousePos && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, var(--accent-glow, rgba(255, 255, 255, 0.06)), transparent 80%)`,
          }}
        />
      )}

      {/* Decorative technical corner reticles */}
      <span className="pointer-events-none absolute top-0 right-0 w-2 h-2 border-t border-r border-border" />
      <span className="pointer-events-none absolute bottom-0 left-0 w-2 h-2 border-b border-l border-border" />

      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </div>
  );
};
