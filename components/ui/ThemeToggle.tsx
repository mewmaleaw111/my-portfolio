"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative
        flex
        h-8
        w-16
        items-center
        rounded-full
        bg-gray-200
        transition-colors
        duration-300
        dark:bg-gray-700
      "
      aria-label="Toggle theme"
    >
      <span
        className={`
          absolute
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          bg-white
          shadow
          transition-transform
          duration-300
          ${isDark ? "translate-x-8" : "translate-x-1"}
        `}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}