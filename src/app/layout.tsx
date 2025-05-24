import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import Script from "next/script";

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
    canonical: 'https://millerdesign.ai',
  },
  verification: {
    google: 'your-google-site-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  openGraph: {
    title: "Miller Design | Leading Graphic Design Agency Dubai",
    description: "Expert graphic design studio in Dubai with 15+ years of experience in branding, web design, and creative visual solutions.",
    url: 'https://millerdesign.ai',
    siteName: 'Miller Design',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: 'https://site-and-site-miller-design-images.b-cdn.net/miller-design-images/MDZN Blue.webp?width=1200&quality=80',
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
    images: ['https://site-and-site-miller-design-images.b-cdn.net/miller-design-images/MDZN Blue.webp?width=1200&quality=80'],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VK02GGPTG6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VK02GGPTG6');
          `}
        </Script>
        <StructuredData />
      </head>
      <body className="antialiased bg-white text-secondary">
        {children}
      </body>
    </html>
  );
}
