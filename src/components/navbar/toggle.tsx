'use client';

import React from 'react';
import { Toggle } from '../icons';
import { useTheme } from 'next-themes';

const ModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="text-sm pr-1 text-foreground hover:text-foreground/60 transition-colors"
      aria-label="Toggle theme"
    >
      <Toggle
        size={17}
        className={isDark?'stroke-yellow-400':'stroke-indigo-500'}
      />
    </button>
  );
};

export default ModeToggle;
