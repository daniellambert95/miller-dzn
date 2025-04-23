"use client";

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20" style={{ backgroundColor: '#04b9d6' }}>
      {/* Wave Decoration Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <svg className="absolute -left-20 top-0 h-full w-40 text-white opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 C40,50 40,50 0,100 L0,0 Z" fill="currentColor" />
        </svg>
        <svg className="absolute right-0 bottom-0 h-full w-40 text-white opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M100,0 C60,50 60,50 100,100 L100,0 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="container-custom z-10 py-16 md:py-24 text-white">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          {/* Logo Mark - Centered */}
          <div className="w-24 h-24 md:w-32 md:h-32 relative mb-4">
            <Image 
              src="/miller_logos_icons/miller white.png" 
              alt="Miller Design Icon" 
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Brand Name - Centered */}
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2 text-white tracking-wide">
              MDZN
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white uppercase tracking-widest mt-2">
              DIGITAL DISPLAY
            </h2>
          </div>
          
          {/* Tagline */}
          <h3 className="text-xl md:text-2xl font-medium text-white mt-4">
            Think it. <span className="font-bold">Create it.</span>
          </h3>
          
          {/* CTA Button */}
          <a href="#contact" className="mt-8 bg-white text-primary-direct hover:bg-opacity-90 transition-colors px-10 py-3 font-medium rounded-full text-center inline-block" style={{ backgroundColor: '#ff4655', color: 'white' }}>
            Free Quote!
          </a>
        </div>
      </div>
      
      {/* Optional: Animated glowing line effect */}
      <div className="absolute top-1/3 right-1/4 w-1/2 h-1 bg-white opacity-30 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1/2 h-1 bg-white opacity-30 rounded-full"></div>
    </section>
  );
};

export default HeroSection; 