"use client";

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-white">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 bg-pattern"></div>
      
      <div className="container-custom z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Logo Mark */}
            <div className="w-20 h-20 relative">
              <Image 
                src="/miller_logos_icons/Miller_icon_transparent.png" 
                alt="Miller Design Icon" 
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Brand Name */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 color-primary-direct" style={{ color: '#04b9d6' }}>
                MDZN
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-secondary">
                Digital Display
              </h2>
            </div>
            
            {/* Tagline */}
            <h3 className="text-xl md:text-2xl font-medium text-secondary">
              Think it. <span className="font-bold color-primary-direct" style={{ color: '#04b9d6' }}>Create it.</span>
            </h3>
            
            {/* Brief Description */}
            <p className="text-gray-700 max-w-md text-lg">
              Elevating brands through exceptional design for over 15 years. 
              We collaborate with the industry&apos;s best to redefine creativity standards.
            </p>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="bg-primary-direct text-black hover:bg-opacity-90 transition-colors px-8 py-3 font-medium rounded-md text-center">
                Start Creating
              </a>
              <a href="#services" className="border border-primary text-primary hover:bg-primary/10 transition-colors px-8 py-3 font-medium rounded-md text-center color-primary-direct">
                Our Services
              </a>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative h-[600px] w-full overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500">
              {/* Featured project image */}
              <Image 
                src="/miller_design_work/DJ Tennis.png" 
                alt="Featured Design Work" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium opacity-80">Featured Project</p>
                <p className="text-xl font-bold">DJ Tennis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 