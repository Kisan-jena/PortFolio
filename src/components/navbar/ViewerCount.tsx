'use client';

import { cn } from '@/lib/utils';

interface ViewerCountProps {
  totalViews?: string;
  className?: string;
}

export default function ViewerCount({
  totalViews = '2k',
  className,
}: ViewerCountProps) {
  return (
    <button
      aria-label="View count"
      className={cn(
        'flex items-center rounded-md hover:bg-neutral-100 pr-1.5 pl-[0.8] bg-amber-00 dark:hover:bg-neutral-100/80 transition-colors duration-200',
        className
      )}
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
      <span className="flex text-xs mt-0.5 bg-amber-00 text-neutral-500 dark:text-neutral-600">
        {totalViews}
      </span>
    </button>
  );
}
