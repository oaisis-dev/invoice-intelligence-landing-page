import { SectionContainer } from "./primitives";

export function Footer() {
  return (
    <footer className="w-full border-t border-border-subtle bg-surface-warm">
      <SectionContainer width="xl" className="py-16">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="text-[18px] font-medium text-forest">
              Invoice Intelligence
            </span>
            <p className="mt-3 text-[14px] text-ink-muted">
              An OAISIS product.
            </p>
            <p className="mt-1 text-[13px] text-ink-muted">
              &copy; 2026 OAISIS. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div>
            <h5 className="mb-4 text-[14px] font-medium text-ink">Product</h5>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#pricing"
                  className="text-[14px] text-ink-secondary transition-colors hover:text-ink"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="mailto:chris@useoptimalai.com?subject=Demo request"
                  className="text-[14px] text-ink-secondary transition-colors hover:text-ink"
                >
                  Book a demo
                </a>
              </li>
              <li>
                <a
                  href="mailto:chris@useoptimalai.com"
                  className="text-[14px] text-ink-secondary transition-colors hover:text-ink"
                >
                  Sign in
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="mb-4 text-[14px] font-medium text-ink">Company</h5>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://useoptimalai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-ink-secondary transition-colors hover:text-ink"
                >
                  OAISIS
                </a>
              </li>
              <li>
                <a
                  href="mailto:chris@useoptimalai.com"
                  className="text-[14px] text-ink-secondary transition-colors hover:text-ink"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
