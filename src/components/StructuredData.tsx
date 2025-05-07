export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Miller Design",
    alternateName: "MDZN",
    url: "https://millerdesign.ai",
    logo: "https://millerdesign.ai/miller_logos/miller white.png",
    description: "Professional graphic design agency in Dubai with over 15 years of experience. Specializing in branding, web design, and creative solutions for businesses in Dubai and worldwide.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE"
    },
    sameAs: [
      "https://www.instagram.com/millerdesign",
      "https://www.linkedin.com/company/miller-design",
      "https://www.behance.net/millerdesign"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"]
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "25.2048",
        longitude: "55.2708"
      },
      geoRadius: "50000"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
} 