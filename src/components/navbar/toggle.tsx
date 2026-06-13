'use client';

import React from 'react';
import { Toggle, Moon, Sun } from '../icons';
import { useTheme } from 'next-themes';

const ModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md text-foreground hover:bg-neutral-100 transition-all duration-300 ease-in-out"
      aria-label="Toggle theme"
    >
      {/* Toggle 1 */}
      {/* <Toggle
        size={17}
        className={isDark?'stroke-yellow-400':'stroke-indigo-500'}
      /> */}

      {/* Toggle 2 */}
      {isDark ? (
        <Moon
          size={14}
          className="transition-transform duration-300 hover:rotate-12"
        />
      ) : (
        <Sun
          size={14}
          className="transition-transform duration-300 hover:rotate-90"
        />
      )}
    </button>
  );
};

export default ModeToggle;
