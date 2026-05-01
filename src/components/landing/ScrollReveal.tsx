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
 * class names — the bento-cell rule overrides scroll-reveal's
 * transform/opacity values, but the visible-toggle still drives
 * the trigger.
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

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          window.setTimeout(() => setVisible(true), delay);
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
