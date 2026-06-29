import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Your Account | Alight Worklife",
  description:
    "Verify your Alight Worklife account through secure authentication methods for the Sutter Health employee portal.",
  keywords: [
    "verify account",
    "identity verification",
    "two-factor authentication",
    "account access",
    "secure login",
    "Alight Worklife",
    "Sutter Health",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Verify Your Identity | Alight Worklife",
    description:
      "Complete secure account verification through the Alight Worklife portal for Sutter Health.",
    type: "website",
    locale: "en_US",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I verify my Alight Worklife account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After logging in, you can verify your account using the available secure sign-in methods for the Alight Worklife portal.",
      },
    },
    {
      "@type": "Question",
      name: "What verification methods does Alight Worklife offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alight Worklife offers secure verification methods to protect access to your Sutter Health employee account.",
      },
    },
    {
      "@type": "Question",
      name: "Is account verification required for Alight Worklife?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, account verification is a required security step to ensure only authorized users access your employee account.",
      },
    },
  ],
};
