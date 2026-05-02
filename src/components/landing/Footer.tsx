import NextLink from "next/link";
import { SectionContainer } from "./primitives";

type Link = { label: string; href: string; external?: boolean; internal?: boolean };

const productLinks: Link[] = [
  { label: "Pricing", href: "/pricing", internal: true },
  { label: "Get started", href: "https://invoice-stg.openoaisis.com/sign-up" },
  { label: "Sign in", href: "https://invoice-stg.openoaisis.com/sign-in" },
];

const resourceLinks: Link[] = [
  { label: "Built for restaurants", href: "#" },
  { label: "R365 vs Invoice Intelligence", href: "#" },
  { label: "InfoSync vs Invoice Intelligence", href: "#" },
];

const companyLinks: Link[] = [
  { label: "OAISIS", href: "https://useoptimalai.com", external: true },
  { label: "Contact", href: "mailto:chris@useoptimalai.com" },
];

const legalLinks: Link[] = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

function FooterColumn({ heading, links }: { heading: string; links: Link[] }) {
  return (
    <div>
      <h5 className="mb-4 text-[13px] font-medium text-ink">{heading}</h5>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            {l.internal ? (
              <NextLink
                href={l.href}
                className="text-[14px] text-ink-secondary transition-colors hover:text-ink"
              >
                {l.label}
              </NextLink>
            ) : (
              <a
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-[14px] text-ink-secondary transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t border-border-subtle bg-canvas">
      <SectionContainer width="xl" className="py-16">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-5">
          {/* Brand */}
          <div>
            <span className="text-[16px] text-forest tracking-tight">
              <span className="font-bold">Invoice</span>{" "}
              <span className="font-light opacity-65">Intelligence</span>
            </span>
            <p className="mt-3 text-[14px] text-ink-muted">
              An OAISIS product
            </p>
            <p className="mt-1 text-[13px] text-ink-muted">
              &copy; 2026 OAISIS
            </p>
          </div>

          <FooterColumn heading="Product" links={productLinks} />
          <FooterColumn heading="Resources" links={resourceLinks} />
          <FooterColumn heading="Company" links={companyLinks} />
          <FooterColumn heading="Legal" links={legalLinks} />
        </div>
      </SectionContainer>
    </footer>
  );
}
