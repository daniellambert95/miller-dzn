"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bunnyImageLoader from '@/utils/imageLoader';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`fixed w-full z-50 ${isMenuOpen ? 'bg-white shadow-sm' : isScrolled ? 'bg-white shadow-sm transition-all duration-300' : 'bg-transparent transition-all duration-300'}`}>
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {/* Use white logo when not scrolled, regular logo when scrolled or menu open */}
            {isScrolled || isMenuOpen ? (
              <Image 
                src="/miller_logos/Miller Design Logo.svg" 
                alt="Miller Design Logo" 
                width={120} 
                height={40} 
                className="h-auto" 
                priority
                loader={bunnyImageLoader}
              />
            ) : (
              <Image 
                src="/miller_logos/Miller Design Logo white.webp" 
                alt="Miller Design Logo" 
                width={120} 
                height={40} 
                className="h-auto" 
                priority
                loader={bunnyImageLoader}
              />
            )}
          </Link>
        </div>

        {/* Central Icon Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="flex items-center">
            {isScrolled || isMenuOpen ? (
              <Image 
                src="/miller_logos/Miller_Icon_transparent.svg" 
                alt="Miller Icon" 
                width={40} 
                height={40} 
                className="h-auto" 
                priority
                loader={bunnyImageLoader}
              />
            ) : (
              <Image 
                src="/miller_logos/miller white.webp" 
                alt="Miller Icon" 
                width={40} 
                height={40} 
                className="h-auto" 
                priority
                loader={bunnyImageLoader}
              />
            )}
          </Link>
        </div>

        {/* Social Icons - Right Side */}
        <div className="flex items-center gap-4 mr-8">
          <a href="https://www.instagram.com/millerdesign__/" target="_blank" className={`${isScrolled || isMenuOpen ? 'text-secondary' : 'text-white'} hover:text-primary transition-colors`} aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@millerdzn" target="_blank" className={`${isScrolled || isMenuOpen ? 'text-secondary' : 'text-white'} hover:text-primary transition-colors`} aria-label="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
            </svg>
          </a>
        </div>

        {/* Hamburger Menu Button (always visible) */}
        <button
          className={`${isMenuOpen ? 'text-secondary' : isScrolled ? 'text-secondary' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
      </div>

      {/* Menu (mobile and desktop) */}
      {isMenuOpen && (
        <div className="bg-white">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link href="#about" className="text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#services" className="text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="#process" className="text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Process
            </Link>
            <Link href="#pricing" className="text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="#contact" className="text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;