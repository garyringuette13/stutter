import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const CANONICAL_URL = "https://worklife.alight.com/ah-angular-afirst-web";
const SITE_DOMAIN = "worklife.alight.com";
const SITE_BRAND = "Alight Worklife";

const PAGE_DESCRIPTION =
  "Alight Worklife - Secure sign-in for the Sutter Health employee portal. Access your account, manage benefits, and view employee information.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || CANONICAL_URL,
  ),
  title: {
    default: "Alight Worklife - Sutter Health Login",
    template: "%s | Alight Worklife",
  },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Alight Worklife",
    "Sutter Health",
    "Sutter Health employee portal",
    "Sutter Health login",
    "Alight Worklife login",
    "Alight Worklife sign in",
    "Alight Worklife Sutter Health",
    "employee portal login",
    "benefits login",
    "secure sign in",
    "worklife login",
    "employee account access",
    "benefits portal",
    "account access",
    "Sutter Health benefits",
    "Sutter Health employee benefits",
    "Alight Solutions",
    "Alight employee portal",
    "worklife.alight.com",
    "Sutter Health HR portal",
    "Sutter Health payroll",
    "Sutter Health 401k",
    "Sutter Health retirement",
    "employee benefits portal",
    "health benefits login",
    "dependent care login",
    "FSA login",
    "HSA login",
    "Alight Worklife password reset",
    "Alight Worklife account recovery",
    "Alight Worklife new user",
    "Alight Worklife registration",
    "Sutter Health new employee",
    "Sutter Health onboarding",
  ],
  publisher: "Alight Solutions",
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
    description: PAGE_DESCRIPTION,
    siteName: SITE_BRAND,
    url: CANONICAL_URL,
    images: [
      {
        url: "/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_BRAND} - Sutter Health Employee Portal`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alight Worklife - Sutter Health Login",
    description: PAGE_DESCRIPTION,
    images: ["/og-banner.jpg"],
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  category: "Business",
  alternates: {
    canonical: CANONICAL_URL,
    languages: {
      "en-US": CANONICAL_URL,
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

// \u2014\u2014 Schema.org Structured Data \u2014\u2014

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_BRAND,
  url: CANONICAL_URL,
  logo: `${process.env.NEXT_PUBLIC_BASE_URL || CANONICAL_URL}/favicon-32x32.png`,
  description:
    "Alight Worklife provides secure access to the Sutter Health employee portal for benefits management and account sign-in.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    availableLanguage: ["en"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_BRAND,
  url: CANONICAL_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${CANONICAL_URL}?search={search_term_string}`,
    "query-input": "required name=search_term_string",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: CANONICAL_URL,
    },
  ],
};

const jsonLd = [organizationSchema, websiteSchema, faqSchema, breadcrumbSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Core meta tags */}
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#254650" />
        <link rel="canonical" href={CANONICAL_URL} />
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
