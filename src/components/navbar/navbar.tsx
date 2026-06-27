
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Search from './search';
import ModeToggle from './toggle';
import MoreMenu from './moreMenu';
import ViewerCount from './ViewerCount';
import Image from 'next/image';
import MobileNav from './mobileNav';


const navLinks = [
  { label: 'components', href: '/components' },
  { label: 'projects', href: '/projects' },
  { label: 'work', href: '/work' }
];


const Navbar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'relative flex items-center py-2 px-6 bg-white bg-amber-00 lg:px-2',
        className
      )}
    >
      <div className="flex justify-between bg-amber-00 items-center w-full">
        {/* <div className="overflow-hidden ">
          <Link href="/">
            <div className="text-4xl text-white dark:text-black select-none leading-[0.75] block kj-logo ">
              KJ
            </div>
          </Link>
        </div> */}
        <div className="overflow-hidden">
          <Link href="/">
            <Image
              src="/newnew.png"
              alt="KJ Logo"
              width={40}
              height={40}
              className="invert dark:invert-0 select-none"
            />
          </Link>
        </div>

        <div className="flex items-center gap-3 bg-amber-00">
          <div className="hidden md:flex items-center gap-4 bg-amber-00">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-md font-mono text-neutral-500 bg-amber-00 dark:text-neutral-50/65 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <MoreMenu />
          </div>

          <div className="flex gap-2 bg-amber-0">
            <Search />
            <div className="flex items-center gap-2 bg-blue-00 border rounded-lg">
              <ViewerCount className="h-full" />
              <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-700/70" />
              <ModeToggle />
            </div>
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
