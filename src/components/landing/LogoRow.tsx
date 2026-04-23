import { SectionContainer } from "./primitives";

/**
 * Generic, non-copyrighted "logo" placeholders rendered as word-marks with
 * simple abstract glyphs. They emulate the visual rhythm of a trusted-by row.
 */
const logos = [
  { name: "Relay", glyph: <GlyphRelay /> },
  { name: "Ledgerline", glyph: <GlyphDiamond /> },
  { name: "NorthPoint", glyph: <GlyphCompass /> },
  { name: "Fieldstone", glyph: <GlyphHexagon /> },
  { name: "Arclight", glyph: <GlyphArc /> },
];

export function LogoRow() {
  return (
    <SectionContainer width="wide" className="pb-28">
      <p className="mx-auto max-w-[560px] text-center text-[15px] leading-[1.55] text-muted">
        Built for modern finance teams, operators, and AI-native companies —
        across{" "}
        <span className="text-foreground/90">
          startups, enterprises, and funds.
        </span>
      </p>

      <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:flex md:items-center md:justify-between md:gap-8">
        {logos.map((logo) => (
          <li
            key={logo.name}
            className="flex items-center justify-center gap-3 text-muted/85 transition-colors hover:text-foreground"
          >
            <span className="grid size-6 place-items-center">{logo.glyph}</span>
            <span className="font-display text-[22px] leading-none tracking-[-0.01em]">
              {logo.name}
            </span>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}

/* ───── abstract glyphs (no real brands) ───── */

function GlyphRelay() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none">
      <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 12h7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function GlyphDiamond() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none">
      <path
        d="M12 3l8 9-8 9-8-9 8-9z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function GlyphCompass() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 15l3-6 3 6-3-2-3 2z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
function GlyphHexagon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none">
      <path
        d="M12 3l7 4v10l-7 4-7-4V7l7-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function GlyphArc() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none">
      <path d="M4 17a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="17" r="1.2" fill="currentColor" />
    </svg>
  );
}
