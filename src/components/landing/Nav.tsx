import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-canvas/85 backdrop-blur">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="text-[18px] font-medium text-forest"
        >
          Invoice Intelligence
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
            className="inline-flex items-center rounded-[10px] bg-ink px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-forest"
          >
            Book a demo
          </a>
        </div>
      </nav>
    </header>
  );
}
