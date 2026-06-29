import { MetadataRoute } from "next";

const BASE =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://worklife.alight.com/ah-angular-afirst-web";

export default function robots(): MetadataRoute.Robots {
  // Allow only the site root and explicitly disallow other known routes
  const disallowed = [
    "/new-user",
    "/verify",

    "/forgot-password-found",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowed,
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
