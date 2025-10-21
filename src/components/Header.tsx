"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bunnyImageLoader from '@/utils/imageLoader';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // On non-home pages, always use solid background
  const headerBg = !isHomePage || isMenuOpen || isScrolled
    ? 'bg-black shadow-sm'
    : 'bg-transparent';

  return (
    <header className={`fixed w-full z-50 ${headerBg} transition-all duration-300`}>
      <div className="container-custom flex justify-between items-center py-8">
        {/* Logo - Left */}
        <div className="flex items-center flex-1">
          <Link href="/" className="flex items-center">
            <Image
              src="/miller_logos/MDZN New Logo 2025 TRANSPARENT.png"
              alt="Miller Design Logo"
              width={150}
              height={50}
              className="h-auto brightness-0 invert"
              priority
              loader={bunnyImageLoader}
            />
          </Link>
        </div>

        {/* Hamburger Menu Button - Center */}
        <button
          className="text-white flex-shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* CTA Button - Right */}
        <div className="flex items-center justify-end flex-1">
          <button
            onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
            className="px-6 py-2 rounded-full font-medium transition-all duration-300 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black cursor-pointer"
          >
            Book a Call
          </button>
        </div>
      </div>

      {/* Menu (mobile and desktop) - Full Screen Overlay */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bottom-0 w-full bg-black z-40">
          <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
            <Link href="/" className="text-white hover:text-[#04b9d6] transition-colors text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/#about" className="text-white hover:text-[#04b9d6] transition-colors text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/#services" className="text-white hover:text-[#04b9d6] transition-colors text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/#process" className="text-white hover:text-[#04b9d6] transition-colors text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>
              Process
            </Link>
            <Link href="/gallery" className="text-white hover:text-[#04b9d6] transition-colors text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="/contact" className="text-white hover:text-[#04b9d6] transition-colors text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;