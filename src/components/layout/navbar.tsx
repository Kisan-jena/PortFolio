import React from 'react';
import { cn } from '@/lib/utils';

const Navbar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'relative flex justify-between items-center max-w-3xl mx-auto px-2 py-2',
        className
      )}
    >
      Navbar
    </div>
  );
};

export default Navbar;
