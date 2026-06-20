'use client';

import React from 'react';
import { Moon, Sun } from '../icons';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const ModeToggle = ({ className }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'p-1.5 text-foreground rounded-md hover:bg-neutral-100 transition-all duration-300 ease-in-out',
        className
      )}
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
          size={16}
          className="transition-transform duration-300 hover:rotate-12"
        />
      ) : (
        <Sun
          size={16}
          className="transition-transform duration-300 hover:rotate-90"
        />
      )}
    </button>
  );
};

export default ModeToggle;
