import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import ServiceStructuredData from "@/components/ServiceStructuredData";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";

export const metadata: Metadata = {
  title: "Miller Design Pricing | Geoff Miller Design Studio Professional Packages",
  description: "Miller Design by Geoff Miller offers transparent pricing for professional graphic design services in Dubai. Geoff Miller Design provides comprehensive branding packages with clear, competitive rates.",
  keywords: "Miller Design pricing, geoff miller design cost, design packages UAE, branding cost Dubai, logo design price Dubai, Miller Design rates Dubai",
  openGraph: {
    title: "Graphic Design Pricing Dubai | Miller Design Professional Packages",
    description: "Transparent pricing for professional graphic design services in Dubai. Comprehensive branding packages with clear, competitive rates.",
    url: 'https://millerdesign.ai/pricing',
    images: [
      {
        url: 'https://site-and-site-miller-design-images.b-cdn.net/miller-design-images/MDZN Blue.webp?width=1200&quality=80',
        width: 1200,
        height: 630,
        alt: 'Miller Design Pricing - Professional Graphic Design Packages Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graphic Design Pricing Dubai | Miller Design Professional Packages',
    description: 'Transparent pricing for professional graphic design services in Dubai. Comprehensive branding packages with competitive rates.',
  },
  alternates: {
    canonical: 'https://millerdesign.ai/pricing',
  },
};

export default function Pricing() {
  return (
    <main>
      <ServiceStructuredData />
      <BreadcrumbStructuredData />
      <Header />
      <Breadcrumbs />
      <PricingSection />
      <Footer />
    </main>
  );
} 