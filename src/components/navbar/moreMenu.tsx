'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const moreLinks = [
  { label: 'Blogs', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Gears', href: '/gears' },
  { label: 'Library', href: '/library' }
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
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        className="text-sm text-neutral-500 dark:text-neutral-50/65 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
      >
        More
      </button>

      {/* covers the mt-3 gap so cursor doesn't leave the parent while crossing it */}
      <div className="absolute top-full left-0 w-full h-5" />

      <div
        className={cn(
          'absolute left-0 top-full mt-5 z-50 origin-top-left rounded-md border border-blue-100 bg-neutral-700 dark:bg-neutral-100 shadow-lg transition-all duration-200',
          open
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
        )}
      >
        {moreLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 rounded-md hover:text-white "
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoreMenu;
