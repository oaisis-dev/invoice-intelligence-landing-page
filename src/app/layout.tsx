import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

/**
 * Display serif — stand-in for "perfectlyNineties":
 * Instrument Serif is a high-contrast Didone-style serif from Google Fonts.
 * Free, self-hosted by next/font. Matches the dramatic editorial tone.
 */
const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Body sans — stand-in for "Haffer":
 * Inter is the closest free geometric humanist sans. Self-hosted.
 */
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invoice Intelligence — The operating system for invoice operations",
  description:
    "Invoice Intelligence centralizes AP workflows, approvals, document extraction, vendor context, and AI-driven follow-through in one operating system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
