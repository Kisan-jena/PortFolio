'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from 'lucide-react';

const moreLinks = [
  { label: 'blogs', href: '/blog' },
  { label: 'resume', href: '/resume' },
  { label: 'gears', href: '/gears' },
  { label: 'library', href: '/library' }
];

const MoreMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  return (
    <div
      className="relative bg-amber-00"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((x) => !x)}
        className="flex items-center gap-0.5 text-md font-mono text-neutral-500 dark:text-neutral-50/65 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
      >
        more
        <span
          className={cn(
            'transition-transform duration-400',
            open && 'rotate-180'
          )}
        >
          <ChevronDownIcon size="14" />
        </span>
      </button>

      {/* covers the mt-6 gap so cursor doesn't leave the parent while crossing it */}
      <div
        className={cn(
          'absolute top-full left-0 h-6 bg-amber-00 transition-all duration-200',
          open ? 'w-36 opacity-100' : 'w-0 opacity-0'
        )}
      />

      <div
        className={cn(
          'absolute left-0 top-full mt-4 z-50 min-w-32 origin-top-left rounded-lg transition-all duration-400 overflow-hidden border border-neutral-300 dark:border-neutral-200 bg-white dark:bg-neutral-950 p-2',
          open
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
        )}
      >
        {/* pattern layer - sits on top of white bg, behind content */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--color-neutral-100)_0,var(--color-neutral-100)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px]" />

        {/* actual content - solid white, sits above the pattern */}
        <div className="relative bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-200 rounded-lg p-0.5">
          {moreLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex px-3 py-1.5 font-mono text-sm text-neutral-500 dark:text-neutral-50/65 hover:bg-neutral-100 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreMenu;
