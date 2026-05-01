import type { ReactNode } from "react";
import { SectionContainer } from "./primitives";

function BentoCell({
  eyebrow,
  heading,
  body,
  illustration,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  illustration: ReactNode;
}) {
  return (
    <div className="bento-cell relative overflow-hidden rounded-[16px] border border-border-subtle bg-white p-10 md:aspect-[4/3]">
      {/* Text block, top-left */}
      <div className="relative z-10 max-w-[380px]">
        <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-ink-muted">
          {eyebrow}
        </span>
        <h3 className="mt-3 text-ink">{heading}</h3>
        <p className="mt-3 text-[15px] leading-[1.55] text-ink-secondary">
          {body}
        </p>
      </div>

      {/* Illustration, anchored bottom-right */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        {illustration}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   INTAKE — stylized inbox with invoices gliding in
   ───────────────────────────────────────────── */

function InvoiceDoc({
  className,
  delayClass,
  fromX,
  fromY,
  fromR,
}: {
  className: string;
  delayClass: string;
  fromX: number;
  fromY: number;
  fromR: number;
}) {
  return (
    <div
      className={`intake-doc absolute h-14 w-11 rounded-[3px] border border-border-medium bg-white ${delayClass} ${className}`}
      style={
        {
          boxShadow: "var(--shadow-chip)",
          ["--from-x" as string]: `${fromX}px`,
          ["--from-y" as string]: `${fromY}px`,
          ["--from-r" as string]: `${fromR}deg`,
        } as React.CSSProperties
      }
    >
      <div className="mt-2 ml-2 h-[2px] w-5 rounded-full bg-border-medium" />
      <div className="mt-1.5 ml-2 h-[2px] w-6 rounded-full bg-border-subtle" />
      <div className="mt-1.5 ml-2 h-[2px] w-4 rounded-full bg-border-subtle" />
      <div className="mt-1.5 ml-2 h-[2px] w-5 rounded-full bg-border-subtle" />
    </div>
  );
}

function IntakeIllustration() {
  return (
    <div className="absolute right-6 bottom-6 h-[180px] w-[200px] md:right-10 md:bottom-10 md:h-[220px] md:w-[240px]">
      {/* Inbox */}
      <div className="absolute right-2 bottom-2 h-[80px] w-[160px] rounded-[6px] border-2 border-forest bg-white">
        <div className="absolute -top-1 left-4 right-4 h-[3px] rounded-full bg-forest" />
        <div className="absolute top-3 left-4 right-4 h-[2px] rounded-full bg-border-medium" />
        <div className="absolute top-7 left-4 right-12 h-[2px] rounded-full bg-border-subtle" />
      </div>

      {/* Invoices flying in */}
      <InvoiceDoc
        className="right-[18px] bottom-[60px]"
        delayClass=""
        fromX={-50}
        fromY={-40}
        fromR={-12}
      />
      <InvoiceDoc
        className="right-[58px] bottom-[60px] intake-doc-2"
        delayClass=""
        fromX={20}
        fromY={-50}
        fromR={6}
      />
      <InvoiceDoc
        className="right-[100px] bottom-[60px] intake-doc-3"
        delayClass=""
        fromX={-30}
        fromY={-60}
        fromR={-4}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROCESSING — sequential field:value rows with checks
   ───────────────────────────────────────────── */

function CheckIcon({ delayClass }: { delayClass: string }) {
  return (
    <span
      className={`proc-check inline-flex size-4 items-center justify-center rounded-full bg-forest text-white ${delayClass}`}
    >
      <svg viewBox="0 0 16 16" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 8 7 12 13 4" />
      </svg>
    </span>
  );
}

function ProcessingIllustration() {
  const rows = [
    { field: "vendor", value: "Sysco Foods" },
    { field: "date", value: "04-12-2026" },
    { field: "subtotal", value: "$2,847.50" },
    { field: "gl_code", value: "5010-PROTEIN" },
  ];

  return (
    <div className="absolute right-6 bottom-6 w-[260px] rounded-[8px] border border-border-subtle bg-white p-4 md:right-10 md:bottom-10 md:w-[300px]">
      <div className="space-y-2.5 font-mono text-[12px]">
        {rows.map((r, i) => (
          <div
            key={r.field}
            className={`proc-row flex items-center justify-between gap-3 proc-row-${i + 1}`}
          >
            <div className="flex items-center gap-2 truncate">
              <span className="text-ink-muted">{r.field}:</span>
              <span className="truncate text-ink">{r.value}</span>
            </div>
            <CheckIcon delayClass={`proc-check-${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   OUTPUT — spreadsheet grid + format chips
   ───────────────────────────────────────────── */

function OutputIllustration() {
  const formats = ["R365", "InfoSync", "NetSuite", "QuickBooks", "CSV"];
  return (
    <div className="absolute right-6 bottom-6 w-[280px] md:right-10 md:bottom-10 md:w-[320px]">
      {/* Mini spreadsheet */}
      <div className="rounded-[8px] border border-border-subtle bg-white">
        <div className="grid grid-cols-5 border-b border-border-subtle text-[10px] font-medium text-ink-muted">
          {["Vendor", "Date", "Amt", "GL", "Loc"].map((h) => (
            <div key={h} className="px-2 py-1.5 text-left">
              {h}
            </div>
          ))}
        </div>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`output-row grid grid-cols-5 border-b border-border-subtle/50 text-[10px] text-ink-secondary last:border-b-0 output-row-${i}`}
          >
            <div className="px-2 py-1.5 truncate">Sysco</div>
            <div className="px-2 py-1.5 truncate">04-12</div>
            <div className="px-2 py-1.5 truncate">$2,847</div>
            <div className="px-2 py-1.5 truncate">5010</div>
            <div className="px-2 py-1.5 truncate">SF-03</div>
          </div>
        ))}
      </div>

      {/* Format chips */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {formats.map((f, i) => (
          <span
            key={f}
            className={`output-chip inline-flex items-center rounded-full border border-border-subtle bg-white px-2.5 py-1 text-[10px] font-medium text-ink-secondary output-chip-${i + 1}`}
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   RECONCILIATION — two columns aligning
   ───────────────────────────────────────────── */

function ReconciliationIllustration() {
  return (
    <div className="absolute right-6 bottom-6 w-[280px] md:right-10 md:bottom-10 md:w-[320px]">
      <div className="flex items-center justify-between gap-4">
        {/* Books column */}
        <div className="flex-1 rounded-[8px] border border-border-subtle bg-white p-3">
          <div className="text-[10px] font-medium uppercase tracking-[0.06em] text-ink-muted">
            Books
          </div>
          <div className="mt-2 font-mono text-[14px] font-medium recon-glow">
            $128,470.50
          </div>
          <div className="mt-2 space-y-1">
            <div className="h-[2px] rounded-full bg-border-subtle" />
            <div className="h-[2px] w-3/4 rounded-full bg-border-subtle" />
            <div className="h-[2px] w-2/3 rounded-full bg-border-subtle" />
          </div>
        </div>

        {/* Connecting line */}
        <svg
          width="32"
          height="40"
          viewBox="0 0 32 40"
          fill="none"
          className="shrink-0"
        >
          <path
            d="M2 20 L30 20"
            className="recon-line"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="16" cy="20" r="3" className="fill-forest" />
        </svg>

        {/* Bank column */}
        <div className="flex-1 rounded-[8px] border border-border-subtle bg-white p-3">
          <div className="text-[10px] font-medium uppercase tracking-[0.06em] text-ink-muted">
            Bank
          </div>
          <div className="mt-2 font-mono text-[14px] font-medium recon-glow">
            $128,470.50
          </div>
          <div className="mt-2 space-y-1">
            <div className="h-[2px] rounded-full bg-border-subtle" />
            <div className="h-[2px] w-3/4 rounded-full bg-border-subtle" />
            <div className="h-[2px] w-2/3 rounded-full bg-border-subtle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Product() {
  return (
    <section className="w-full bg-canvas">
      <SectionContainer width="xl" className="py-32">
        <h2 className="accent-underline mx-auto max-w-[900px] text-center text-ink">
          Everything your AP team has been waiting for.
        </h2>

        <div className="mx-auto mt-20 grid max-w-[1200px] gap-6 md:grid-cols-2">
          <BentoCell
            eyebrow="INTAKE"
            heading="One inbox. Every invoice."
            body="Connect Gmail or Outlook once. Every invoice that arrives — PDF, scan, email body, EDI — gets pulled in, parsed, and queued. No forwarding. No uploads."
            illustration={<IntakeIllustration />}
          />
          <BentoCell
            eyebrow="PROCESSING"
            heading="Verified, not just extracted."
            body="OCR plus a classification model that learns your chart of accounts. Anomalies flag against vendor history. Your AP clerk reviews exceptions, not every invoice."
            illustration={<ProcessingIllustration />}
          />
          <BentoCell
            eyebrow="OUTPUT"
            heading="Clean export. Every system."
            body="R365, InfoSync, NetSuite, QuickBooks, custom CSV. Upload your chart of accounts once. Every processed invoice exports in your exact format."
            illustration={<OutputIllustration />}
          />
          <BentoCell
            eyebrow="RECONCILIATION"
            heading="Variance, closed."
            body="Line items match against POs and vendor history. Mismatches surface in a review queue your team clears in seconds. The variance you couldn't explain becomes the variance you can."
            illustration={<ReconciliationIllustration />}
          />
        </div>
      </SectionContainer>
    </section>
  );
}
