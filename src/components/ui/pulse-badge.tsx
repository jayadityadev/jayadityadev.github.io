import React from "react";

interface PulseBadgeProps {
  label: string;
  className?: string;
}

export const PulseBadge: React.FC<PulseBadgeProps> = ({ label, className = "" }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-md text-xs font-mono uppercase tracking-[0.16em] text-zinc-300 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span>{label}</span>
    </div>
  );
};
