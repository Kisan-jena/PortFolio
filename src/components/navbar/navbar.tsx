import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Search from './search';
import ModeToggle from './toggle';
import MoreMenu from './moreMenu';


const navLinks = [
  { label: 'Components', href: '/components' },
  { label: 'Projects', href: '/projects' },
  { label: 'Work', href: '/work' }
];


const Navbar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn('relative flex items-center py-2 px-6 lg:px-2', className)}
    >
      <div className="flex justify-between items-center w-full">
        <div className="overflow-hidden ">
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

          <MoreMenu />
          <Search />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
