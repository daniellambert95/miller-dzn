import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";

export const metadata: Metadata = {
  title: "Contact Miller Design | Geoff Miller Design Studio - Get Your Quote Today",
  description: "Contact Miller Design by Geoff Miller - Dubai's premier graphic design agency. Get in touch with Geoff Miller Design for branding, logo design, and creative solutions.",
  keywords: "contact Miller Design, geoff miller design contact, design agency Dubai contact, Miller Design Dubai, graphic design quote Dubai, branding consultation UAE",
  openGraph: {
    title: "Miller Design | Geoff Miller Design Studio - Leading Graphic Design Agency Dubai",
    description: "Miller Design by Geoff Miller - Expert graphic design studio in Dubai with 15+ years of experience in branding, web design, and creative visual solutions.",
    url: 'https://millerdesign.ai/contact',
    images: [
      {
        url: 'https://site-and-site-miller-design-images.b-cdn.net/miller-design-images/MDZN Blue.webp?width=1200&quality=80',
        width: 1200,
        height: 630,
        alt: 'Miller Design - Geoff Miller Design Studio Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miller Design | Geoff Miller Design Studio Dubai',
    description: 'Miller Design by Geoff Miller - Professional graphic design agency in Dubai with over 15 years of experience.',
  },
  alternates: {
    canonical: 'https://millerdesign.ai/contact',
  },
};

export default function Contact() {
  return (
    <main>
      <BreadcrumbStructuredData />
      <Header />
      <Breadcrumbs />
      <ContactSection />
      <Footer />
    </main>
  );
} 