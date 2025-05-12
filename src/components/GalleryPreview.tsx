"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bunnyImageLoader from '@/utils/imageLoader';

const GalleryPreview = () => {
  // Sample images for the preview
  const previewImages = [
    {
      src: "/Graphics/Story/VBLK2.webp",
      alt: "BLK Arena Event Poster - Professional Graphic Design by Miller Design Dubai",
      type: "poster"
    },
    {
      src: "/Graphics/Story/Occult Poster - Chontane.webp",
      alt: "Occult Poster for Chontane - Premium Event Design Dubai",
      type: "poster"
    },
    {
      src: "/Graphics/Story/Nebula Julian Jordan.webp",
      alt: "Nebula Julian Jordan Event Poster - Professional Event Design Dubai",
      type: "poster"
    },
    {
      src: "/Graphics/Story/TAGO MAGO DEMO.webp",
      alt: "TAGO MAGO Dubai Event Poster - Creative Design Agency Dubai",
      type: "poster"
    }
  ];

  return (
    <section className="pt-12 pb-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-cyan-100 to-teal-100 px-4 py-2 rounded-full">
            <span className="text-primary font-medium bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">Our Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Creative <span className="text-[#04b9d6]">Gallery</span>
          </h2>
          
          <p className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto">
            Explore our diverse portfolio of designs, showcasing event posters, branding materials, 
            and captivating videos that drive engagement.
          </p>
        </div>
        
        {/* Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {previewImages.map((image, index) => (
            <div 
              key={index} 
              className="relative rounded-lg overflow-hidden aspect-[3/4] md:aspect-square shadow-md group cursor-pointer"
            >
              <Image 
                src={image.src} 
                alt={image.alt}
                fill
                priority={true}
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 group-hover:scale-110"
                loader={bunnyImageLoader}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="flex justify-center">
          <Link 
            href="/gallery" 
            className="inline-flex items-center bg-[#04b9d6] hover:bg-sky-500 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Explore Full Gallery
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview; 