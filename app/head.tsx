const BASE =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://worklife.alight.com/ah-angular-afirst-web";

export default function Head() {
  return (
    <>
      <title>Alight Worklife — Sutter Health Login</title>
      <meta
        name="description"
        content="Secure sign-in for Alight Worklife and the Sutter Health employee portal."
      />
      <link rel="canonical" href={BASE} />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Alight Worklife — Sutter Health Login"
      />
      <meta
        property="og:description"
        content="Secure sign-in for Alight Worklife and the Sutter Health employee portal."
      />
      <meta property="og:url" content={BASE} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${BASE}/favicon-32x32.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Alight Worklife — Sutter Health Login"
      />
      <meta
        name="twitter:description"
        content="Secure sign-in for Alight Worklife and the Sutter Health employee portal."
      />
      <meta name="twitter:image" content={`${BASE}/favicon-32x32.png`} />
    </>
  );
}
