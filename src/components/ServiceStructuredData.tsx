export default function ServiceStructuredData() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Graphic Design Services",
    "description": "Comprehensive graphic design and branding services including logo design, business cards, brochures, and digital marketing materials.",
    "provider": {
      "@type": "Organization",
      "name": "Miller Design",
      "url": "https://millerdesign.ai"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Dubai, UAE"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Graphic Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Identity Design",
            "description": "Complete brand identity packages including logo design, color schemes, and brand guidelines."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Logo Design",
            "description": "Professional logo design services for businesses and organizations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Print Design",
            "description": "Business cards, brochures, flyers, and other marketing materials."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design",
            "description": "Professional website design and digital marketing materials."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
} 