import { cn } from '@/lib/utils';

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

// HorizontalScale
export const HorizontalScaleSeparator = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'h-10 w-full bg-[repeating-linear-gradient(315deg,var(--color-neutral-100)_0,var(--color-neutral-100)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] border-y border-neutral-200 dark:border-neutral-800',
        className
      )}
    />
  );
};

// Separator (horizontal line)
export const HorizontalLineSeparator = ({
  className,
  ...props
}: SeparatorProps) => {
  return (
    <div
      className={cn(
        'h-px w-full bg-neutral-200 dark:bg-neutral-800 pointer-events-none z-20',
        className
      )}
      {...props}
    />
  );
};

// ─── VerticalLine

interface VerticalLineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which edge to pin to. Defaults to "right". */
  side?: 'left' | 'right';
  className?: string;
}

export const VerticalLineSeparator = ({
  side = 'right',
  className,
  ...props
}: VerticalLineProps) => {
  return (
    <div
      className={cn(
        'absolute inset-y-0 h-full w-px bg-neutral-200 dark:bg-neutral-800 z-0 pointer-events-none',
        side === 'right' ? 'right-0' : 'left-0',
        className
      )}
      {...props}
    />
  );
};
// ─── HorizontalBorderSeparator
export const HorizontalBorderSeparator = ({
  className,
  h = 10,
}: {
  className?: string;
  h?: number;
}) => {
  return (
    <div
      className={cn(
        'w-full border-y border-neutral-200 dark:border-neutral-800',
        className
      )}
      style={{ height: `${h * 4}px` }}
    />
  );
};
