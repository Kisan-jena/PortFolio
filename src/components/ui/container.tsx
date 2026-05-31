import { cn } from '../../lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        'max-w-3xl mx-auto w-full relative z-10 px-6 lg:px-2',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
