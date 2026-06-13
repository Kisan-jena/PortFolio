export function Search2({
  size = 80,
  color = '#343C54',
  className = '',
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 11.998C2 6.89029 6.14154 2.75 11.25 2.75C16.3585 2.75 20.5 6.89029 20.5 11.998C20.5 14.2826 19.6714 16.3737 18.2983 17.9873L21.7791 21.4685C22.072 21.7614 22.072 22.2363 21.7791 22.5292C21.4862 22.822 21.0113 22.822 20.7184 22.5291L17.2372 19.0476C15.6237 20.4187 13.5334 21.2459 11.25 21.2459C6.14154 21.2459 2 17.1056 2 11.998ZM11.25 4.25C6.96962 4.25 3.5 7.71905 3.5 11.998C3.5 16.2769 6.96962 19.7459 11.25 19.7459C15.5304 19.7459 19 16.2769 19 11.998C19 7.71905 15.5304 4.25 11.25 4.25Z"
        fill={color}
      />
      <path
        opacity="0.4"
        d="M11.25 5.74902C10.8358 5.74902 10.5 6.08481 10.5 6.49902C10.5 6.91324 10.8358 7.24902 11.25 7.24902C13.8742 7.24902 16.0013 9.37584 16.0013 11.999C16.0013 12.4132 16.3371 12.749 16.7513 12.749C17.1655 12.749 17.5013 12.4132 17.5013 11.999C17.5013 8.54707 14.7023 5.74902 11.25 5.74902Z"
        fill={color}
      />
    </svg>
  );
}

export function Moon({
  size = 24,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function Sun({
  size = 24,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

export function Toggle({
  size = 24,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      suppressHydrationWarning
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3L12 21" />
      <path d="M12 9L16.65 4.35" />
      <path d="M12 14.37L19.37 7" />
      <path d="M12 19.6L20.85 10.75" />
    </svg>
  );
}