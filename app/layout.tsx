import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const SITE_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://worklife.alight.com/ah-angular-afirst-web";
const SITE_DOMAIN = new URL(SITE_BASE_URL).hostname;
const SITE_BRAND = "Alight Worklife";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASE_URL),
  title: {
    default: "Alight Worklife - Sutter Health Login",
    template: "%s | Alight Worklife",
  },
  keywords: [
    "Alight Worklife",
    "Sutter Health",
    "employee portal",
    "benefits login",
    "secure sign in",
    "worklife login",
    "employee account access",
    "benefits portal",
    "account access",
    "Sutter Health employee login",
    "Alight Worklife sign in",
    "worklife portal",
  ],
  description: `${SITE_BRAND} – ${SITE_DOMAIN}. Sign in securely to the Sutter Health employee portal and access your account.`,

  authors: [{ name: "Alight Worklife" }],
  creator: "Alight Worklife",
  publisher: "Alight Worklife",
  applicationName: SITE_BRAND,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Alight Worklife - Sutter Health Login",
    description: `${SITE_BRAND} – ${SITE_DOMAIN}. Sign in securely to the Sutter Health employee portal and access your account.`,
    siteName: SITE_BRAND,
    url: SITE_BASE_URL,
    images: [
      {
        url: `${SITE_BASE_URL}/favicon-32x32.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_BRAND}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Alight Worklife - Sutter Health Login",
    description: `${SITE_BRAND} – ${SITE_DOMAIN}. Sign in securely to the Sutter Health employee portal and access your account.`,
    images: [`${SITE_BASE_URL}/favicon-32x32.png`],
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  category: "Business",
  alternates: {
    canonical: SITE_BASE_URL,
    languages: {
      "en-US": SITE_BASE_URL,
    },
  },
  other: {
    "geo.region": "US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#254650",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_BRAND,
  url: SITE_BASE_URL,
  logo: `${SITE_BASE_URL}/favicon-32x32.png`,
  description:
    "Alight Worklife provides secure access to the Sutter Health employee portal and account sign-in experience.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    availableLanguage: ["en"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I sign in to my Alight Worklife account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit the Alight Worklife sign-in page and enter your credentials to access the Sutter Health employee portal.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Alight Worklife portal used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Alight Worklife portal provides secure account access and employee benefits information for Sutter Health users.",
      },
    },
    {
      "@type": "Question",
      name: "How do I recover my Alight Worklife password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the forgot password option on the sign-in page and follow the required verification steps to reset your password.",
      },
    },
    {
      "@type": "Question",
      name: "What can I manage through the Alight Worklife portal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can manage account access and related employee benefits information through the secure Alight Worklife portal.",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_BRAND,
  url: SITE_BASE_URL,
};

const jsonLd = [organizationSchema, faqSchema, websiteSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        {jsonLd.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
