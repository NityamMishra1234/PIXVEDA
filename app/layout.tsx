import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import ClientLayout from "@/components/layout/ClientLayout";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

const displayFont = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PIXVEDA | Enterprise Digital Marketing That Moves Markets",
  description:
    "PIXVEDA helps ambitious brands scale with performance marketing, premium creative, funnel strategy, and measurable digital growth systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
