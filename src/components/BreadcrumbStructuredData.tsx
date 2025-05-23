'use client';

import { usePathname } from 'next/navigation';

export default function BreadcrumbStructuredData() {
  const pathname = usePathname();
  
  // Don't show breadcrumb structured data on home page
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(Boolean);
  
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://millerdesign.ai"
    }
  ];

  // Build breadcrumb structured data based on path
  pathSegments.forEach((segment, index) => {
    const position = index + 2;
    const url = `https://millerdesign.ai/${pathSegments.slice(0, index + 1).join('/')}`;
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": position,
      "name": name,
      "item": url
    });
  });

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
} 