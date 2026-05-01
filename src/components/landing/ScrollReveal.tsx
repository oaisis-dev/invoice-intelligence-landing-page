"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  /** Delay (ms) added after the element enters the viewport before
   * it fades in. Used to stagger groups of reveals into a wave. */
  delay?: number;
  className?: string;
};

/**
 * Wraps content in a div that fades + slides up the first time it
 * enters the viewport. Cooperates with `.bento-cell` by composing
 * class names — the `.bento-cell.scroll-reveal-visible` rule
 * overrides the standalone `.scroll-reveal-visible` transform, but
 * the visible-toggle still drives the trigger.
 *
 * The `requestAnimationFrame` wrap before flipping `visible` matters:
 * without it, hydration that's faster than the first paint can change
 * the className from `scroll-reveal` to `scroll-reveal-visible` before
 * the browser has settled on the opacity-0 starting state, and the
 * browser then skips the CSS transition (the symptom: content appears
 * "statically" in its final position).
 */
export function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      window.requestAnimationFrame(() => {
        window.setTimeout(() => setVisible(true), delay);
      });
    };

    // If the element is already in the viewport on mount, reveal now —
    // don't wait for IO. Forces a layout read so the initial paint of
    // opacity-0 settles before the class change.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const classes = `scroll-reveal ${visible ? "scroll-reveal-visible" : ""} ${className}`.trim();

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
