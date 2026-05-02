"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SIGN_UP_URL = "https://invoice-stg.openoaisis.com/sign-up";
const SIGN_IN_URL = "https://invoice-stg.openoaisis.com/sign-in";

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="38"
      viewBox="0 0 56 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <defs>
        <mask id="logo-mask">
          <rect width="56" height="76" fill="white" />
          <g transform="translate(28,42)">
            <path
              d="M0 -18 C2 -6 6 -2 18 0 C6 2 2 6 0 18 C-2 6 -6 2 -18 0 C-6 -2 -2 -6 0 -18 Z"
              fill="black"
            />
          </g>
        </mask>
      </defs>
      <g mask="url(#logo-mask)">
        <path
          d="M4 10 C4 6.134 7.134 3 11 3 L32 3 L50 21 L50 62 C50 65.866 46.866 69 43 69 L11 69 C7.134 69 4 65.866 4 62 Z"
          fill="#27653D"
        />
        <path
          d="M32 3 L32 15 C32 18.3137 34.6863 21 38 21 L50 21 Z"
          fill="#1E5030"
        />
      </g>
    </svg>
  );
}

function Wordmark() {
  return (
    <span className="text-[16px] text-forest tracking-tight whitespace-nowrap">
      <span className="font-bold">Invoice</span>{" "}
      <span className="font-light opacity-65">Intelligence</span>
    </span>
  );
}

type NavLink =
  | { kind: "internal"; label: string; href: string }
  | { kind: "external"; label: string; href: string };

const navLinks: NavLink[] = [
  { kind: "internal", label: "Product", href: "/#product" },
  { kind: "internal", label: "Pricing", href: "/pricing" },
  { kind: "external", label: "Sign in", href: SIGN_IN_URL },
];

function NavLinkItem({ link, onClick }: { link: NavLink; onClick?: () => void }) {
  const className = "floating-nav-link";
  if (link.kind === "internal") {
    return (
      <Link href={link.href} className={className} onClick={onClick}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} className={className} onClick={onClick}>
      {link.label}
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  // Close mobile menu when crossing back to desktop width.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Desktop floating pill nav */}
      <nav
        aria-label="Primary"
        className={`floating-nav floating-nav-desktop ${scrolled ? "floating-nav-scrolled" : ""}`}
      >
        <Link
          href="/"
          aria-label="Invoice Intelligence — home"
          className="floating-nav-brand"
        >
          <LogoMark />
          <Wordmark />
        </Link>

        <div className="floating-nav-links">
          {navLinks.map((l) => (
            <NavLinkItem key={l.label} link={l} />
          ))}
        </div>

        <a href={SIGN_UP_URL} className="floating-nav-cta">
          Get started
        </a>
      </nav>

      {/* Mobile floating pill — logo + hamburger */}
      <nav
        aria-label="Primary"
        className={`floating-nav floating-nav-mobile ${scrolled ? "floating-nav-scrolled" : ""}`}
      >
        <Link
          href="/"
          aria-label="Invoice Intelligence — home"
          className="floating-nav-brand"
          onClick={closeMenu}
        >
          <LogoMark />
          <Wordmark />
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="floating-nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`hamburger-bar ${menuOpen ? "hamburger-bar-open-1" : ""}`} />
          <span className={`hamburger-bar ${menuOpen ? "hamburger-bar-open-2" : ""}`} />
          <span className={`hamburger-bar ${menuOpen ? "hamburger-bar-open-3" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "mobile-menu-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      >
        <div
          className="mobile-menu-panel"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="mobile-menu-links">
            {navLinks.map((l) => (
              <NavLinkItem key={l.label} link={l} onClick={closeMenu} />
            ))}
            <a
              href={SIGN_UP_URL}
              className="floating-nav-cta mobile-menu-cta"
              onClick={closeMenu}
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
