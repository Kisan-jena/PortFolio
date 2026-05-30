import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

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
    <div className={cn('relative flex items-center bg-neutral-200 py-2', className)}>
      <div className="flex justify-between items-center w-full bg-neutral-100">
        <div className="overflow-hidden">
          <Link href={'/'}>
            <Image
              src="/kj.svg"
              alt="kj"
              width={65}
              height={65}
              className="invert -mt-2 bg-amber-00 -mb-4 -ml-0.5"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          <div className="relative group">
            <button className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
              More
            </button>

            <div className="absolute left-0 top-2 mt-2 w-40 bg-neutral-300 border-neutral-700 rounded-md shadow-md hidden group-hover:flex flex-col z-50">
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

          <button className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors">
            ⌘K
          </button>

          {/* <a
            href="https://github.com/Kisan-jena"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-foreground hover:text-foreground/60 transition-colors"
          >
            
            GH
          </a> */}

          {/* Dark/Light toggle — wire up later */}
          <button className="text-sm text-foreground hover:text-foreground/60 transition-colors">
            ◑
          </button>

        </div>

      </div>
    </div>
  );
};

export default Navbar;
