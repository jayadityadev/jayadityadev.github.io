import React from "react";

interface IllustratedAvatarProps {
  className?: string;
  sizeClassName?: string;
}

export const IllustratedAvatar: React.FC<IllustratedAvatarProps> = ({
  className = "",
  sizeClassName = "w-24 h-24 sm:w-36 sm:h-36",
}) => {
  return (
    <div
      className={`relative rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shrink-0 ${sizeClassName} ${className}`}
    >
      {/* Light Mode: Pencil/Ink Hand-drawn Sketch */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/avatar-sketch.jpg"
        alt="Jayaditya Dev avatar in light mode"
        className="w-full h-full object-cover select-none transition-opacity duration-300 dark:opacity-0 opacity-100"
      />

      {/* Dark Mode: Stylized Radiant Linework (Pixel-Perfect Overlap) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/avatar-dark.jpg"
        alt="Jayaditya Dev avatar in dark mode"
        className="absolute inset-0 w-full h-full object-cover select-none transition-opacity duration-300 dark:opacity-100 opacity-0"
      />

      {/* Inset subtle hairline ring */}
      <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-black/5 dark:ring-white/10" />
    </div>
  );
};
