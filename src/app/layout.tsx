import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miller Design | Leading Graphic Design Agency Dubai",
  description: "Professional graphic design agency in Dubai with over 15 years of experience. Specializing in branding, web design, and creative solutions for businesses in Dubai and worldwide.",
  keywords: "graphic design Dubai, branding agency Dubai, web design Dubai, creative agency UAE, logo design Dubai, marketing design Dubai",
  authors: [{ name: "Geoff Miller" }],
  creator: "Geoff Miller",
  publisher: "Miller Design",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://millerdesign.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Miller Design | Leading Graphic Design Agency Dubai",
    description: "Professional graphic design agency in Dubai with over 15 years of experience. Specializing in branding, web design, and creative solutions.",
    url: 'https://millerdesign.ai',
    siteName: 'Miller Design',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Miller Design - Dubai Graphic Design Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miller Design | Leading Graphic Design Agency Dubai',
    description: 'Professional graphic design agency in Dubai with over 15 years of experience.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData />
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          async
          defer
        ></script>
      </head>
      <body className="antialiased bg-white text-secondary">
        {children}
      </body>
    </html>
  );
}
