import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Account | Alight Worklife",
  description:
    "Create a new Alight Worklife account for the Sutter Health employee portal and access your benefits securely.",
  keywords: [
    "new account",
    "create account",
    "sign up",
    "register",
    "Alight Worklife",
    "Sutter Health",
    "employee portal",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Create Your Alight Worklife Account",
    description:
      "Register for a new account to access your Sutter Health employee portal and benefits.",
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
      name: "How do I create a new Alight Worklife account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit the new account registration page and follow the steps to verify your identity and set up your login credentials.",
      },
    },
    {
      "@type": "Question",
      name: "What benefits can I manage through my Alight Worklife account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can manage your account and related employee benefits through the Alight Worklife portal for Sutter Health.",
      },
    },
  ],
};
