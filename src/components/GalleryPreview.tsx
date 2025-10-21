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
    <section className="py-16 md:py-20 lg:py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-[#04b9d6]/20 to-[#04b9d6]/10 px-4 py-2 rounded-full border border-[#04b9d6]/30">
            <span className="text-[#04b9d6] font-medium">Our Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Premium <span className="text-[#04b9d6]">Content Creation</span>
          </h2>

          <p className="text-white/70 text-lg mt-4 max-w-3xl mx-auto">
            Explore our diverse portfolio of designs, showcasing event posters, branding materials,
            and captivating videos that drive engagement.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {previewImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden aspect-[3/4] md:aspect-square group cursor-pointer border border-white/10 hover:border-[#04b9d6]/50 transition-all duration-300"
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center bg-[#04b9d6] hover:bg-[#04b9d6]/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#04b9d6]/50 transform hover:scale-105"
          >
            View Our Portfolio
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-40">
          <div className="relative overflow-hidden rounded-3xl shadow-xl group hover:shadow-[0_30px_60px_-15px_rgba(4,185,214,0.25)] transition-all duration-300">
            <div className="relative h-72 w-full">
              <Image 
                src="/miller_design_work/Mockup.webp" 
                alt="Featured Design Work" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loader={bunnyImageLoader}
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/30"></div>
              
              <div className="absolute inset-0 flex items-center px-10 md:px-16">
                <div className="max-w-xl">
                  <h3 className="text-white text-3xl font-bold mb-5">Ready to Transform Your Brand?</h3>
                  <p className="text-white/90 text-lg mb-8">Join the Miller Design family and elevate your visual identity to new heights.</p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center bg-white text-[#04b9d6] hover:bg-white/90 transition-all duration-300 px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Contact Us
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      
    </section>
  );
};

export default GalleryPreview; 