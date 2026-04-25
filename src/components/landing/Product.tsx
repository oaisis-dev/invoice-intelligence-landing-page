import { SectionContainer, Eyebrow } from "./primitives";

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-[12px] bg-[#E8E5DD] text-[15px] text-ink-muted"
      style={{ aspectRatio: "16 / 10" }}
    >
      {label} screenshot
    </div>
  );
}

type FeatureBlockProps = {
  eyebrow: string;
  heading: string;
  body: string;
  imageLabel: string;
  reverse?: boolean;
};

function FeatureBlock({
  eyebrow,
  heading,
  body,
  imageLabel,
  reverse,
}: FeatureBlockProps) {
  return (
    <div
      className={`grid items-center gap-10 lg:gap-16 ${
        reverse
          ? "lg:grid-cols-[1fr_1.1fr]"
          : "lg:grid-cols-[1.1fr_1fr]"
      }`}
    >
      {/* Text */}
      <div className={reverse ? "lg:order-2" : ""}>
        <Eyebrow className="mb-4 text-ink-muted">{eyebrow}</Eyebrow>
        <h3 className="text-[28px] font-medium leading-[1.2] tracking-[-0.01em] text-ink">
          {heading}
        </h3>
        <p className="mt-4 max-w-[480px] text-[17px] leading-[1.6] text-ink-secondary">
          {body}
        </p>
      </div>

      {/* Image */}
      <div
        className={`overflow-hidden rounded-[12px] ${reverse ? "lg:order-1" : ""}`}
        style={{ boxShadow: "var(--shadow-soft)" }}
      >
        <ScreenshotPlaceholder label={imageLabel} />
      </div>
    </div>
  );
}

export function Product() {
  return (
    <SectionContainer width="xl" className="py-28 md:py-36">
      <h2 className="mx-auto max-w-[800px] text-center font-display text-ink">
        Built like the tool you wished you had.
      </h2>

      <div className="mt-20 flex flex-col gap-[120px]">
        <FeatureBlock
          eyebrow="INTAKE"
          heading="Email a vendor invoice. Done."
          body="Connect a Gmail or Outlook inbox once. Every invoice that arrives — PDF, scanned image, embedded in the email body — is pulled in, parsed, and queued. No forwarding. No uploads. No clerk in the middle."
          imageLabel="Inbox"
        />

        <FeatureBlock
          eyebrow="PROCESSING"
          heading="Verified, not just extracted."
          body="Other tools extract fields and call it done. Invoice Intelligence reconciles line items against your chart of accounts, flags anomalies against vendor history, and surfaces only what needs your eyes. Your AP clerk reviews exceptions, not every invoice."
          imageLabel="Invoices"
          reverse
        />

        <FeatureBlock
          eyebrow="OUTPUT"
          heading="Exports clean to R365, InfoSync, or your GL."
          body="Upload your chart of accounts once. Every processed invoice exports in your exact format, ready for import. No manual coding. No reformatting. No copy-paste between systems."
          imageLabel="Export"
        />
      </div>
    </SectionContainer>
  );
}
