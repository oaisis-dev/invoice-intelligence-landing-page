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
  title: "Invoice Intelligence — invoices, decided.",
  description:
    "Invoice processing for multi-unit restaurant operators. Reads, codes, and routes every invoice — so your controller closes the books faster, with fewer people.",
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
      <body className="min-h-full bg-canvas text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
