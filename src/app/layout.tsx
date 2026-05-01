import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * Display sans — Inter at heavier weights stands in for Inter Display.
 * Inter Display is the same family with optical sizing optimized for
 * large display sizes; Google Fonts ships it as Inter, and at the weights
 * we use (600–800) the visual difference is negligible.
 */
const interDisplay = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const interBody = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
      className={`${interDisplay.variable} ${interBody.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
