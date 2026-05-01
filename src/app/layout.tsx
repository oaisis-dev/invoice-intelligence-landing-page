import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const interBody = Inter({
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
      className={`${inter.variable} ${interBody.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
