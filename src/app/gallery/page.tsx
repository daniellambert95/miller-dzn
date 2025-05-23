import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArtworkSection from "@/components/ArtworkSection";
import VideosSection from "@/components/VideosSection";
import Footer from "@/components/Footer";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";

export const metadata: Metadata = {
  title: "Miller Design Portfolio Gallery | Geoff Miller Design Work - Creative Showcase",
  description: "Explore Miller Design's stunning portfolio showcasing Geoff Miller design work including branding, logos, business cards, and creative solutions for Dubai businesses.",
  keywords: "Miller Design portfolio, geoff miller design work, design gallery Dubai, branding portfolio UAE, logo design showcase, creative work Dubai, Miller Design agency portfolio",
  openGraph: {
    title: "Design Portfolio Gallery | Miller Design Dubai",
    description: "Explore our stunning portfolio of graphic design work including branding, logos, and creative solutions for Dubai businesses.",
    url: 'https://millerdesign.ai/gallery',
    images: [
      {
        url: 'https://site-and-site-miller-design-images.b-cdn.net/miller-design-images/MDZN Blue.webp?width=1200&quality=80',
        width: 1200,
        height: 630,
        alt: 'Miller Design Portfolio Gallery - Dubai Graphic Design Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design Portfolio Gallery | Miller Design Dubai',
    description: 'Explore our stunning portfolio of graphic design work including branding, logos, and creative solutions.',
  },
  alternates: {
    canonical: 'https://millerdesign.ai/gallery',
  },
};

export default function Gallery() {
  return (
    <main>
      <BreadcrumbStructuredData />
      <Header />
      <Breadcrumbs />
      <ArtworkSection />
      <VideosSection />
      <Footer />
    </main>
  );
} 