"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';

const ArtworkSection = () => {
  // Define images from Story folder (event posters)
  const storyImages = [
    {
      src: "/Graphics/Story/VBLK2.webp",
      alt: "BLK Arena Event Poster - Professional Graphic Design by Miller Design Dubai"
    },
    {
      src: "/Graphics/Story/TAGO MAGO DEMO.webp",
      alt: "TAGO MAGO Dubai Event Poster - Creative Design Agency Dubai"
    },
    {
      src: "/Graphics/Story/Occult Poster - Chontane.webp",
      alt: "Occult Poster for Chontane - Premium Event Design Dubai"
    },
    {
      src: "/Graphics/Story/Nebula Julian Jordan.webp",
      alt: "Nebula Julian Jordan Event Poster - Professional Event Design Dubai"
    },
    {
      src: "/Graphics/Story/Endor Poster.webp",
      alt: "Endor Event Poster - Creative Design Solutions Dubai"
    },
    {
      src: "/Graphics/Story/Belters Only Poster.webp",
      alt: "Belters Only Event Poster - Professional Graphic Design Dubai"
    },
    {
      src: "/Graphics/Story/NYE LDN 2024 OFFICIAL FLYER v2.webp",
      alt: "New Year's Eve London 2024 Official Flyer - Premium Event Design"
    },
    {
      src: "/Graphics/Story/Festive Brunch Flyer No Snow.webp",
      alt: "Festive Brunch Flyer Design - Creative Event Marketing Dubai"
    },
  ];
  
  // Define images from Wide folder (branding & mockups)
  const wideImages = [
    {
      src: "/Graphics/Wide/Urban Wall Poster Mockup.webp",
      alt: "Urban Wall Poster Mockup - Professional Branding Design Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/TUMBLER MOCKUP FILE 3.webp",
      alt: "Custom Branded Tumbler Design - Brand Merchandise Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/TOTEBAG MOCKUP FILE.webp",
      alt: "Custom Branded Tote Bag Design - Brand Merchandise Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/Mockup.webp",
      alt: "Professional Brand Mockup - Creative Design Agency Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/Macbook on Wooden Slats.webp",
      alt: "Macbook Brand Presentation - Digital Design Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/LIGHT BOX SIGN MOCKUP FILE.webp",
      alt: "Light Box Sign Design - Professional Branding Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/KIRA MOCKUP V2.webp",
      alt: "KIRA Branded Bags Collection - Premium Branding Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/KIRA Apron.webp",
      alt: "KIRA Branded Apron Design - Professional Brand Merchandise Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/DJ Tennis.webp",
      alt: "DJ Tennis Brand Design - Creative Branding Dubai",
      category: "branding"
    },
    {
      src: "/Graphics/Wide/Business Card Mockup_2aa.webp",
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
  
  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [firstImageLoaded, setFirstImageLoaded] = useState(false);

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
                      loading={firstImageLoaded ? "eager" : "lazy"}
                      onLoad={() => setFirstImageLoaded(true)}
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
                      loading={firstImageLoaded ? "eager" : "lazy"}
                      onLoad={() => setFirstImageLoaded(true)}
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
                    loading={firstImageLoaded ? "eager" : "lazy"}
                    onLoad={() => setFirstImageLoaded(true)}
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
                      loading={firstImageLoaded ? "eager" : "lazy"}
                      onLoad={() => setFirstImageLoaded(true)}
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
                      loading={firstImageLoaded ? "eager" : "lazy"}
                      onLoad={() => setFirstImageLoaded(true)}
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
                      loading={firstImageLoaded ? "eager" : "lazy"}
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
                    loading={firstImageLoaded ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Horizontal scroll for additional branding items */}
          <div className="mt-12 relative">
            <div className="overflow-x-auto custom-scrollbar">
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
                        loading={firstImageLoaded ? "eager" : "lazy"}
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
        </div>

        {/* Complete Portfolio Button */}
        <div className="flex justify-center mb-24">
          <a
            href="https://www.dropbox.com/scl/fo/jzp7awxjmjlan176jyqr1/h?rlkey=tczwuq3e3n5pqhdsdrae0esj9&e=1&st=55vryip7&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 max-w-2xl block text-center bg-[#04b9d6] hover:bg-sky-500 text-white text-xl font-semibold rounded-xl py-6 px-4 transition-colors duration-200 shadow-md"
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