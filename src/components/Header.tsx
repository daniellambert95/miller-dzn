"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {/* Real logo instead of placeholder */}
            <Image 
              src="/miller_logos_icons/Miller Design Logo.png" 
              alt="Miller Design Logo" 
              width={120} 
              height={40} 
              className="h-auto" 
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-secondary hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#services" className="text-secondary hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#process" className="text-secondary hover:text-primary transition-colors">
            Process
          </Link>
          <Link href="#pricing" className="text-secondary hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#contact" className="text-secondary hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
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