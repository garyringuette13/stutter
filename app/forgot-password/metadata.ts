import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://worklife.alight.com/ah-angular-afirst-web";

export const metadata: Metadata = {
  title: "Reset Password | Alight Worklife",
  description:
    "Forgot your Alight Worklife password? Reset your account securely through the Sutter Health sign-in recovery process.",
  keywords: [
    "reset password",
    "forgot password",
    "password reset",
    "account recovery",
    "Alight Worklife",
    "Sutter Health",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Reset Your Password | Alight Worklife",
    description:
      "Securely reset your Alight Worklife password through the Sutter Health account recovery process.",
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
      name: "How do I reset my Alight Worklife password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To reset your password, visit the forgot password page and follow the verification steps for your Alight Worklife account.",
      },
    },
    {
      "@type": "Question",
      name: "What information do I need to reset my password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll need the required verification details for your Alight Worklife account to reset your password securely.",
      },
    },
  ],
};
