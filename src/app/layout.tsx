import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

/**
 * Outfit — primary typeface per Invoice Intelligence brand guide.
 * Geometric humanist sans, similar weight footprint to Inter but with
 * rounder, more confident letterforms.
 */
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const outfitBody = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invoice Intelligence — AP automation built by people who run restaurants.",
  description:
    "AP automation for multi-unit restaurant groups. Read every invoice. Code every line item. Export clean to your GL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${outfitBody.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
