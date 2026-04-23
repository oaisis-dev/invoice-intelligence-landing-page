import { SectionContainer } from "./primitives";

/**
 * Placeholder footer — reserves vertical runway + column stubs for
 * when the real footer (links, newsletter, etc.) is wired in.
 */
export function FooterPlaceholder() {
  return (
    <footer className="relative mt-28 border-t border-hairline bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.5)_100%)]">
      <SectionContainer width="xl" className="py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <FooterCol title="Product" items={["Features", "Integrations", "Pricing", "Changelog", "Roadmap"]} />
          <FooterCol title="Resources" items={["Docs", "Guides", "Webinars", "Case studies", "Brand"]} />
          <FooterCol title="Company" items={["About", "Customers", "Careers", "Security", "Contact"]} />
          <FooterCol title="Legal" items={["Terms", "Privacy", "SOC 2", "DPA"]} />
          <FooterCol title="Social" items={["LinkedIn", "X", "GitHub", "YouTube"]} />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-[12.5px] text-muted md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Invoice Intelligence, Inc.</span>
          <span className="text-muted/70">
            The operating system for invoice operations.
          </span>
        </div>
      </SectionContainer>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h5 className="mb-4 text-[11.5px] uppercase tracking-[0.14em] text-muted/80">
        {title}
      </h5>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-[13.5px] text-muted-strong transition-colors hover:text-foreground"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
