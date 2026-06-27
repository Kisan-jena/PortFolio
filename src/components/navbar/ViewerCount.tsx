'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ViewerCountProps {
  totalViews?: string;
  fullCount?: string;
  className?: string;
}

export default function ViewerCount({
  totalViews = '2k',
  fullCount = '2,000 views',
  className,
}: ViewerCountProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn('relative inline-flex items-center', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        aria-label="View count"
        className="flex items-center rounded-md py-1 hover:bg-neutral-100 pr-2 pl-0.5 dark:hover:bg-neutral-100/80 transition-colors duration-200"
      >
        <svg
          width="26"
          height="24"
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
          className="text-neutral-900 dark:text-neutral-400"
        >
          <path
            d="M12 16 Q18 11 24 16"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M36 16 Q42 11 48 16"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="20" cy="33" rx="7" ry="11" fill="currentColor" />
          <ellipse cx="18" cy="28" rx="2.5" ry="4" fill="white" />
          <ellipse cx="42" cy="33" rx="7" ry="11" fill="currentColor" />
          <ellipse cx="40" cy="28" rx="2.5" ry="4" fill="white" />
        </svg>
        <span className="flex text-xs font-mono mt-0.5 text-shadow-neutral-200 text-shadow-xs text-neutral-500 dark:text-neutral-600">
          {totalViews}
        </span>
      </button>

      {/* tooltip - below button */}
      <div
        className={cn(
          'absolute top-full left-1/2 font-mono -translate-x-1/2 mt-2 whitespace-nowrap rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs text-white shadow-md transition-all duration-200 z-20',
          hovered
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-1 pointer-events-none'
        )}
      >
        {fullCount}
        {/* arrow pointing up toward the button */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[-4px] h-2 w-2 rotate-45 bg-neutral-900" />
      </div>
    </div>
  );
}
