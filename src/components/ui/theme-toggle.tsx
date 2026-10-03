"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme from document or localStorage
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem("theme", "dark");
      }
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem("theme", "light");
      }
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative p-1.5 rounded-full border border-border bg-surface/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors active:scale-95 flex items-center justify-center w-8 h-8"
    >
      <div className="relative w-4 h-4">
        {/* Sun Icon (Visible in light mode) */}
        <Sun
          className={`w-4 h-4 text-amber-500 absolute inset-0 transition-all duration-300 transform ${
            isDark
              ? "rotate-90 scale-0 opacity-0 pointer-events-none"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />

        {/* Moon Icon (Visible in dark mode) */}
        <Moon
          className={`w-4 h-4 text-zinc-200 absolute inset-0 transition-all duration-300 transform ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0 pointer-events-none"
          }`}
        />
      </div>
    </button>
  );
};
