/**
 * Full-page atmospheric background.
 * Stacks:
 *   1. Base near-black
 *   2. Aurora radial glows (blue)
 *   3. Star field
 *   4. Very faint film grain
 * Positioned fixed so it pans with scroll without jank.
 */
export function AtmosphericBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* base */}
      <div className="absolute inset-0 bg-background" />

      {/* aurora — top */}
      <div className="absolute -top-40 left-1/2 h-[900px] w-[1400px] -translate-x-1/2 bg-aurora opacity-80" />

      {/* aurora — mid, faint */}
      <div className="absolute top-[1400px] left-1/2 h-[800px] w-[1200px] -translate-x-1/2 bg-aurora opacity-40" />

      {/* vertical aurora streaks */}
      <div className="absolute -top-20 left-[8%] h-[600px] w-[200px] rotate-12 rounded-full bg-[radial-gradient(ellipse,rgba(106,164,255,0.12)_0%,transparent_70%)] blur-2xl" />
      <div className="absolute top-[200px] right-[6%] h-[500px] w-[180px] -rotate-12 rounded-full bg-[radial-gradient(ellipse,rgba(106,164,255,0.08)_0%,transparent_70%)] blur-2xl" />

      {/* star field */}
      <div className="absolute inset-0 bg-stars opacity-70" />

      {/* scanline fade at bottom so content always reads */}
      <div className="absolute inset-x-0 bottom-0 h-[400px] bg-[linear-gradient(to_top,var(--background)_0%,transparent_100%)]" />
    </div>
  );
}
