import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://nbs-auth.com/Authentication/Handshake";

export const metadata: Metadata = {
  title: "Reset Password | National Benefit Services",
  description:
    "Forgot your National Benefit Services password? Reset your account securely by verifying your identity with your Social Security Number and date of birth.",
  keywords: [
    "reset password",
    "forgot password",
    "password reset",
    "account recovery",
    "National Benefit Services",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Reset Your Password | National Benefit Services",
    description:
      "Securely reset your National Benefit Services password through our account recovery process.",
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
      name: "How do I reset my National Benefit Services password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To reset your password, visit the forgot password page and enter your last 4 SSN digits and date of birth to verify your identity.",
      },
    },
    {
      "@type": "Question",
      name: "What information do I need to reset my password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll need the last 4 digits of your Social Security Number and your date of birth to verify your identity and reset your password.",
      },
    },
  ],
};
