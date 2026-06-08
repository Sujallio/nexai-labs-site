type LogoProps = {
  className?: string;
  title?: string;
};

// Auxmet brand mark — stylized "A" formed by an upward chevron with
// an offset accent bar, suggesting acceleration and AI augmentation.
export function Logo({ className, title = "Auxmet" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="auxmet-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.18 158)" />
          <stop offset="100%" stopColor="oklch(0.62 0.18 158)" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="url(#auxmet-mark)" />
      {/* Stylized A */}
      <path
        d="M9 23 L16 8 L23 23"
        fill="none"
        stroke="oklch(0.15 0.02 240)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2 18 L19.8 18"
        fill="none"
        stroke="oklch(0.15 0.02 240)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Accent dot — AI spark */}
      <circle cx="23.5" cy="9" r="1.7" fill="oklch(0.98 0.02 158)" />
    </svg>
  );
}
