import Link from "next/link";

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="38"
      viewBox="0 0 56 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <defs>
        <mask id="logo-mask">
          <rect width="56" height="76" fill="white" />
          <g transform="translate(28,42)">
            <path
              d="M0 -18 C2 -6 6 -2 18 0 C6 2 2 6 0 18 C-2 6 -6 2 -18 0 C-6 -2 -2 -6 0 -18 Z"
              fill="black"
            />
          </g>
        </mask>
      </defs>
      <g mask="url(#logo-mask)">
        <path
          d="M4 10 C4 6.134 7.134 3 11 3 L32 3 L50 21 L50 62 C50 65.866 46.866 69 43 69 L11 69 C7.134 69 4 65.866 4 62 Z"
          fill="#27653D"
        />
        <path
          d="M32 3 L32 15 C32 18.3137 34.6863 21 38 21 L50 21 Z"
          fill="#1E5030"
        />
      </g>
    </svg>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-canvas/85 backdrop-blur">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          aria-label="Invoice Intelligence — home"
          className="flex items-center gap-2.5 text-forest tracking-tight"
        >
          <LogoMark />
          <span className="text-[16px] sm:text-[18px]">
            <span className="font-bold">Invoice</span>{" "}
            <span className="font-light opacity-65">Intelligence</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="#pricing"
            className="hidden text-[15px] text-ink-secondary transition-colors hover:text-ink sm:inline"
          >
            Pricing
          </a>
          <a
            href="mailto:chris@useoptimalai.com"
            className="hidden text-[15px] text-ink-secondary transition-colors hover:text-ink sm:inline"
          >
            Sign in
          </a>
          <a
            href="mailto:chris@useoptimalai.com?subject=Demo request"
            className="inline-flex items-center rounded-[10px] bg-ink px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-forest-bright"
          >
            Book a demo
          </a>
        </div>
      </nav>
    </header>
  );
}
