const BASE = process.env.NEXT_PUBLIC_BASE_URL || 'https://nbs-auth.com'

export default function Head() {
  return (
    <>
      <title>National Benefit Services — Login</title>
      <meta name="description" content="Secure login for National Benefit Services participant portal. Manage FSA, HSA, COBRA, and more." />
      <link rel="canonical" href={`${BASE}/`} />

      {/* Open Graph */}
      <meta property="og:title" content="National Benefit Services — Login" />
      <meta property="og:description" content="Secure login for National Benefit Services participant portal. Manage FSA, HSA, COBRA, and more." />
      <meta property="og:url" content={BASE} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${BASE}/Nbs%20banner_new.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="National Benefit Services — Login" />
      <meta name="twitter:description" content="Secure login for National Benefit Services participant portal. Manage FSA, HSA, COBRA, and more." />
      <meta name="twitter:image" content={`${BASE}/Nbs%20banner_new.png`} />
    </>
  )
}
