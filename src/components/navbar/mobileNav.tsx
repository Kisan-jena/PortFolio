'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import ModeToggle from './toggle';

const navLinks = [
  { label: 'components', href: '/components' },
  { label: 'projects', href: '/projects' },
  { label: 'work', href: '/work' },
  { label: 'blogs', href: '/blog' },
  { label: 'resume', href: '/resume' },
  { label: 'gears', href: '/gears' },
  { label: 'library', href: '/library' },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  return (
    <div className="flex md:hidden items-center">
      {/* Hamburger / close trigger */}
      <button
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 flex h-9 w-9 items-center justify-center text-neutral-900 dark:text-neutral-100"
      >
        <Menu
          size={22}
          className={cn(
            'absolute transition-all duration-200',
            open
              ? 'opacity-0 scale-75 rotate-90'
              : 'opacity-100 scale-100 rotate-0'
          )}
        />
        <X
          size={22}
          className={cn(
            'absolute transition-all duration-200',
            open
              ? 'opacity-100 scale-100 rotate-0'
              : 'opacity-0 scale-75 -rotate-90'
          )}
        />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          'fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300',
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Slide-in panel */}
      <div
        className={cn(
          'fixed top-0 right-0 z-40 h-full w-72 bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 shadow-xl transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-mono text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors border-b border-neutral-100 dark:border-neutral-800"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pb-8 flex items-center justify-between">
            <span className="text-sm text-neutral-400">Theme</span>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
