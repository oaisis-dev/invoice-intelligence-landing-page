"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The customer story H2 carries an in-line "impact number" — when the
 * heading enters the viewport, the $200K animates from a muted, scaled
 * down state into full ink-forest with a subtle scale pulse.
 */
export function CustomerStoryHeadline() {
  const ref = useRef<HTMLHeadingElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h2 ref={ref} className="mt-5 text-ink">
      A 100+ location restaurant chain had a{" "}
      <span
        className={`impact-number ${revealed ? "impact-number-revealed" : ""}`}
      >
        $200K
      </span>{" "}
      monthly variance they couldn&rsquo;t close.
    </h2>
  );
}
