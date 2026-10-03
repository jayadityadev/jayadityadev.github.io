"use client";

import React, { useEffect, useState } from "react";

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme from document or localStorage
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    const updateDOM = () => {
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

    // Use View Transitions API if supported for the circular clip wipe
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      const buttonRect = e.currentTarget.getBoundingClientRect();
      const x = buttonRect.left + buttonRect.width / 2;
      const y = buttonRect.top + buttonRect.height / 2;
      document.documentElement.style.setProperty("--theme-x", `${x}px`);
      document.documentElement.style.setProperty("--theme-y", `${y}px`);

      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(updateDOM);
    } else {
      updateDOM();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative p-1.5 rounded-full border border-zinc-800 dark:border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 dark:text-zinc-300 transition-all active:scale-95"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className={`w-4 h-4 transition-transform duration-500 origin-center ${
          isDark ? "rotate-180 text-accent" : "rotate-0 text-amber-500"
        }`}
      >
        <path d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z" />
      </svg>
    </button>
  );
};
