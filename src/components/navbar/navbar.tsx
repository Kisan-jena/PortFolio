import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Search from './search';
import ModeToggle from './toggle';


const navLinks = [
  { label: 'Components', href: '/components' },
  { label: 'Projects', href: '/projects' },
  { label: 'Work', href: '/work' }
];

const moreLinks = [
  { label: 'Blogs', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Gears', href: '/gears' },
  { label: 'Library', href: '/library' }
];


const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className={cn('relative flex items-center py-2', className)}>
      <div className="flex justify-between bg-amber-00 items-center w-full">
        <div className="overflow-hidden bg-amber-00">
          <Link href="/">
            <div className="text-4xl text-white dark:text-black select-none leading-[0.75] block kj-logo ">
              KJ
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-500 dark:text-neutral-50/65  hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          <div className="relative group">
            <button className="text-sm text-neutral-500 dark:text-neutral-50/65 hover:text-neutral-900 transition-colors">
              More
            </button>

            <div className="absolute left-0 top-7 mt-2 w-40 bg-neutral-300 border-neutral-700 rounded-md shadow-md hidden group-hover:flex flex-col z-50">
              {moreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm hover:bg-neutral-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Search />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
