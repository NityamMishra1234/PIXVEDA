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
  metadataBase: new URL("https://pixveda.in"),

  title: {
    default: "PIXVEDA | Enterprise Digital Marketing Agency",
    template: "%s | Pixveda",
  },

  description:
    "Pixveda is a premium digital marketing agency helping brands grow through SEO, Performance Marketing, Branding, Website Development, Social Media Marketing, Content Strategy, and AI-powered growth solutions.",

  keywords: [
    "Digital Marketing Agency",
    "SEO Agency",
    "Performance Marketing",
    "Social Media Marketing",
    "Google Ads",
    "Meta Ads",
    "Branding",
    "Website Development",
    "Web Design",
    "Content Marketing",
    "Lead Generation",
    "Digital Marketing India",
    "Enterprise Marketing",
    "Marketing Agency",
    "AI Marketing",
    "PIXVEDA",
    "Pixveda",
    "Pixveda"
  ],

  authors: [
    {
      name: "Pixveda",
      url: "https://pixveda.in",
    },
  ],

  creator: "Pixveda",

  publisher: "Pixveda",

  category: "Digital Marketing",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "PIXVEDA | Enterprise Digital Marketing Agency",
    description:
      "Scale your business with enterprise-level SEO, Performance Marketing, Branding, Creative Design, and AI-powered digital growth.",
    url: "https://pixveda.in",
    siteName: "PIXVEDA",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "PIXVEDA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PIXVEDA | Enterprise Digital Marketing Agency",
    description:
      "Premium SEO, Branding, Paid Advertising, AI Marketing & Web Development.",

    images: ["/favicon.ico"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: "/favicon.ico",

    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PIXVEDA",
              url: "https://pixveda.in",
              logo: "https://pixveda.in/pixvedaLogo.png",
              sameAs: [
                "https://linkedin.com/company/pixveda",
                "https://instagram.com/pixveda",
              ],
              description:
                "Enterprise Digital Marketing Agency specializing in SEO, Branding, Paid Media, AI Marketing, and Web Development.",
            }),
          }}
        />
      </head>

      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
