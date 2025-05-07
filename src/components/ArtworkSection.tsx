"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const ArtworkSection = () => {
  // State for active category with useEffect to prevent hydration mismatch
  const [activeCategory, setActiveCategory] = useState<'story' | 'branding'>('story');
  const [mounted, setMounted] = useState(false);
  
  // Mount effect to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Define images from Story folder (event posters)
  const storyImages = [
    {
      src: "/Graphics/Story/VBLK2.png",
      alt: "BLK Arena Event Poster - Professional Graphic Design by Miller Design Dubai"
    },
    {
      src: "/Graphics/Story/TAGO MAGO DEMO.png",
      alt: "TAGO MAGO Dubai Event Poster - Creative Design Agency Dubai"
    },
    {
      src: "/Graphics/Story/Occult Poster - Chontane.png",
      alt: "Occult Poster for Chontane - Premium Event Design Dubai"
    },
    {
      src: "/Graphics/Story/Nebula Julian Jordan.png",
      alt: "Nebula Julian Jordan Event Poster - Professional Event Design Dubai"
    },
    {
      src: "/Graphics/Story/Endor Poster.png",
      alt: "Endor Event Poster - Creative Design Solutions Dubai"
    },
    // {
    //   src: "/Graphics/Story/Clap IBZ Friends and Family Invite 2025.png",
    //   alt: "Clap IBZ Friends and Family Invite"
    // },
    {
      src: "/Graphics/Story/Belters Only Poster.png",
      alt: "Belters Only Event Poster - Professional Graphic Design Dubai"
    },
    {
      src: "/Graphics/Story/NYE LDN 2024 OFFICIAL FLYER v2.png",
      alt: "New Year's Eve London 2024 Official Flyer - Premium Event Design"
    },
    {
      src: "/Graphics/Story/Festive Brunch Flyer No Snow.png",
      alt: "Festive Brunch Flyer Design - Creative Event Marketing Dubai"
    },
  ];
  
  // Define images from Wide folder (branding & mockups)
  const wideImages = [
    {
      src: "/Graphics/Wide/Urban Wall Poster Mockup.png",
      alt: "Urban Wall Poster Mockup - Professional Branding Design Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/TUMBLER MOCKUP FILE 3.png",
      alt: "Custom Branded Tumbler Design - Brand Merchandise Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/TOTEBAG MOCKUP FILE.png",
      alt: "Custom Branded Tote Bag Design - Brand Merchandise Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/Mockup.png",
      alt: "Professional Brand Mockup - Creative Design Agency Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/Macbook on Wooden Slats.png",
      alt: "Macbook Brand Presentation - Digital Design Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/LIGHT BOX SIGN MOCKUP FILE.png",
      alt: "Light Box Sign Design - Professional Branding Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/KIRA MOCKUP V2.png",
      alt: "KIRA Branded Bags Collection - Premium Branding Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/KIRA Apron.png",
      alt: "KIRA Branded Apron Design - Professional Brand Merchandise Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/DJ Tennis.png",
      alt: "DJ Tennis Brand Design - Creative Branding Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/Business Card Mockup_2aa.png",
      alt: "Professional Business Card Design - Corporate Branding Dubai",
      category: "branding"
    }
  ];
  
  // Group story images for hero section
  const leftGroup = storyImages.slice(0, 2);
  const center = storyImages[2];
  const rightGroup = storyImages.slice(3, 5);
  
  // Reference for scroll functionality
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Get filtered images based on active category
  const getFilteredImages = () => {
    if (activeCategory === 'story') {
      return storyImages;
    } else {
      return wideImages;
    }
  };
  
  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // CSS classes for active/inactive tab states
  const activeTabClass = "bg-cyan-500 text-white shadow-md";
  const inactiveTabClass = "hover:bg-gray-200";

  return (
    <section className="pt-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-pink-200 to-pink-50 opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-0 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-200 to-purple-50 opacity-30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wider uppercase bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            ARTWORK
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The most versatile team of designers around.
          </p>
          
          {/* Quick navigation */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              onClick={() => scrollToSection('poster-showcase')}
              className="px-5 py-2 text-sm bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              Event Posters
            </button>
            <button 
              onClick={() => scrollToSection('branding-showcase')}
              className="px-5 py-2 text-sm bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              Branding
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="px-5 py-2 text-sm bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('videos')}
              className="px-5 py-2 text-sm bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              Videos
            </button>
          </div>
        </div>

        {/* Hero Section - Poster Showcase */}
        <div id="poster-showcase" className="relative mb-32">
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-5xl text-gray-200 font-bold hidden xl:block" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            EVENT POSTERS
          </div>
          
          {/* Main artwork display: Desktop version */}
          <div className="hidden md:block relative max-w-6xl mx-auto">
            <div className="flex items-center justify-center">
              {/* Left Group */}
              <div className="relative flex w-[380px] h-[480px]">
                <div className="absolute left-0 top-10 transform -rotate-3 z-20 hover:-translate-y-2 transition-all duration-300">
                  <div className="relative w-[200px] h-[380px] shadow-md rounded-md overflow-hidden">
                    <Image
                      src={leftGroup[0].src}
                      alt={leftGroup[0].alt}
                      fill
                      className="object-cover rounded-md"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute left-[170px] bottom-10 transform rotate-1 z-10 hover:-translate-y-2 transition-all duration-300">
                  <div className="relative w-[200px] h-[380px] shadow-md rounded-md overflow-hidden">
                    <Image
                      src={leftGroup[1].src}
                      alt={leftGroup[1].alt}
                      fill
                      className="object-cover rounded-md"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Center Image */}
              <div className="relative z-30 hover:-translate-y-2 transition-all duration-300 mx-4">
                <div className="relative w-[220px] h-[430px] shadow-lg rounded-md overflow-hidden">
                  <Image
                    src={center.src}
                    alt={center.alt}
                    fill
                    className="object-cover rounded-md"
                    priority
                  />
                </div>
              </div>
              
              {/* Right Group */}
              <div className="relative flex w-[380px] h-[480px]">
                <div className="absolute right-[170px] bottom-10 transform -rotate-1 z-10 hover:-translate-y-2 transition-all duration-300">
                  <div className="relative w-[200px] h-[380px] shadow-md rounded-md overflow-hidden">
                    <Image
                      src={rightGroup[0].src}
                      alt={rightGroup[0].alt}
                      fill
                      className="object-cover rounded-md"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute right-0 top-10 transform rotate-3 z-20 hover:-translate-y-2 transition-all duration-300">
                  <div className="relative w-[200px] h-[380px] shadow-md rounded-md overflow-hidden">
                    <Image
                      src={rightGroup[1].src}
                      alt={rightGroup[1].alt}
                      fill
                      className="object-cover rounded-md"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main artwork display: Mobile version (horizontal scroll) */}
          <div className="md:hidden relative mb-8 overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto pb-6 px-2 custom-scrollbar snap-x snap-mandatory"
              style={{ 
                scrollBehavior: 'smooth', 
                scrollbarWidth: 'none'
              }}
            >
              {storyImages.slice(0, 5).map((image, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-[160px] h-[290px] shadow-md rounded-md overflow-hidden snap-center"
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={image.src} 
                      alt={image.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-md"
                      priority={index < 3}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Branding Showcase */}
        <div id="branding-showcase" className="relative mb-32">
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-5xl text-gray-200 font-bold hidden xl:block" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            BRANDING
          </div>
          
          <div className="mb-12 md:mb-16 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Brand & Identity Design</h3>
            <p className="text-gray-600">We create comprehensive brand identities across various media formats.</p>
          </div>
          
          {/* Featured branding work - Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {wideImages.slice(0, 3).map((image, index) => (
              <div 
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="relative h-[280px] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loader={({ src }) => src}
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Horizontal scroll for additional branding items */}
          <div className="mt-12 relative">
            <div className="overflow-x-auto pb-8 custom-scrollbar">
              <div className="flex gap-6 px-4 min-w-max">
                {wideImages.slice(3).map((image, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 group relative w-[280px] h-[220px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                  >
                    <div className="relative h-[180px] w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="280px"
                        loader={({ src }) => src}
                        unoptimized
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Scroll indicators */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
              {/* CTA Button */}
          <div className="flex my-6 justify-center">
            <a 
              href="#contact" 
              className="group relative mt-8 px-10 py-3 font-medium rounded-full text-center inline-flex items-center justify-center overflow-hidden"
              aria-label="Get a free quote for your design project"
            >
              <span className="absolute inset-0 bg-gradient-to-tr from-rose-500 via-red-500 to-rose-600 transition-all duration-300 ease-out group-hover:scale-105"></span>
              <span className="absolute inset-0 bg-gradient-to-tr from-rose-600 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
              <span className="relative text-white font-semibold z-10 flex items-center">
                Free Quote!
                <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Full Gallery Section */}
        <div id="gallery" className="mb-20">
          <div className="mb-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Complete Gallery</h3>
            
            {/* Gallery filter tabs - only render when mounted to prevent hydration mismatch */}
            {mounted && (
              <div className="inline-flex rounded-full bg-gray-100 p-1 mb-8">
                <button
                  onClick={() => setActiveCategory('story')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === 'story' ? activeTabClass : inactiveTabClass}`}
                >
                  Event Posters
                </button>
                <button
                  onClick={() => setActiveCategory('branding')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === 'branding' ? activeTabClass : inactiveTabClass}`}
                >
                  Branding
                </button>
              </div>
            )}
          </div>
          
          {/* Masonry/grid gallery - only show when mounted to prevent hydration mismatch */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {mounted && getFilteredImages().map((image, index) => {
              const isWideImage = image.src.includes('/Wide/');
              return (
                <div 
                  key={index}
                  className={`group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-white ${
                    isWideImage 
                      ? 'aspect-video col-span-1 md:col-span-2' 
                      : 'aspect-[9/16]'
                  }`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={isWideImage ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"}
                      loader={({ src }) => src}
                      unoptimized={isWideImage}
                      className={isWideImage ? "object-contain" : "object-cover"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Complete Portfolio Button */}
        <div className="flex justify-center mt-16 mb-20">
          <a
            href="https://www.dropbox.com/scl/fo/jzp7awxjmjlan176jyqr1/h?rlkey=tczwuq3e3n5pqhdsdrae0esj9&e=1&st=55vryip7&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 max-w-2xl block text-center bg-[#04b9d6] hover:bg-sky-500 text-white text-xl font-semibold rounded-xl py-6 transition-colors duration-200 shadow-md"
          >
            Complete Portfolio
          </a>
        </div>
      </div>

      {/* Custom scrollbar style */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ArtworkSection; 