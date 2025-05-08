"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

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
    {
      src: "/Graphics/Story/Zoo Project Glitch Teaser.webp",
      alt: "Zoo Project Glitch Event Teaser - Innovative Event Design Dubai"
    },
    {
      src: "/Graphics/Story/BI  BEACH STORY.webp",
      alt: "BI Beach Event Story - Creative Beach Event Design Dubai"
    },
    {
      src: "/Graphics/Story/BMT Imagination 2.webp",
      alt: "BMT Imagination Event Poster - Creative Event Design Dubai"
    },
    {
      src: "/Graphics/Story/Clap IBZ Friends and Family Invite 2025.webp",
      alt: "Clap IBZ Friends and Family Event 2025 - Exclusive Event Design Dubai"
    },
    {
      src: "/Graphics/Story/F1 Monaco Invite FLYER.webp",
      alt: "F1 Monaco Event Invite - Premium Racing Event Design Dubai"
    },
    {
      src: "/Graphics/Story/Fionn Queens Poster2345.webp",
      alt: "Fionn Queens Event Poster - Professional Event Design Dubai"
    },
    {
      src: "/Graphics/Story/KIMMIC NYE 5th Av.webp",
      alt: "KIMMIC New Year's Eve 5th Avenue Event - Premium NYE Design Dubai"
    },
    {
      src: "/Graphics/Story/Lovely Laura Poster.webp",
      alt: "Lovely Laura Event Poster - Creative Event Design Dubai"
    },
    {
      src: "/Graphics/Story/Mas Visa Poster.webp",
      alt: "Mas Visa Event Poster - Professional Event Design Dubai"
    },
    {
      src: "/Graphics/Story/Motorino Late Weekend Brunch.webp",
      alt: "Motorino Weekend Brunch Event - Creative Brunch Design Dubai"
    },
    {
      src: "/Graphics/Story/NYE 4.webp",
      alt: "New Year's Eve Event Design - Premium NYE Celebration Dubai"
    },
    {
      src: "/Graphics/Story/Occult Poster - JON10.webp",
      alt: "Occult Event Poster by JON10 - Creative Event Design Dubai"
    },
    {
      src: "/Graphics/Story/Shonen Sunday Poster 12.webp",
      alt: "Shonen Sunday Event Poster - Professional Event Design Dubai"
    },
    {
      src: "/Graphics/Story/Syon Lounge Poster.webp",
      alt: "Syon Lounge Event Poster - Premium Lounge Event Design Dubai"
    },
    {
      src: "/Graphics/Story/Ushuaia Demo Poster.webp",
      alt: "Ushuaia Event Demo Poster - Professional Event Design Dubai"
    }
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
  
  // State for the lightbox/modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  
  // Embla carousel for event posters
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    containScroll: 'trimSnaps'
  }, [
    AutoScroll({ 
      speed: 0.8,
      direction: 'forward',
      stopOnInteraction: false,
      playOnInit: true
    })
  ]);
  
  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle opening the modal with the clicked image
  const openModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Handle closing the modal
  const closeModal = () => {
    setModalOpen(false);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

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
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-gray-200 font-bold z-10 text-3xl md:text-4xl lg:text-5xl hidden xl:block" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            EVENT POSTERS
          </div>
          
          {/* Auto-scrolling carousel for all screen sizes */}
          <div className="relative mx-12 md:ml-16 overflow-hidden">
            <div className="embla lg:mx-8 overflow-hidden rounded-md" ref={emblaRef}>
              <div className="embla__container flex gap-8 py-6 pl-2 pr-12">
                {storyImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="embla__slide flex-shrink-0 min-w-[160px] md:min-w-[200px] w-[160px] md:w-[200px] h-[290px] md:h-[360px] shadow-md rounded-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1"
                    onClick={() => openModal(image)}
                  >
                    <div className="relative w-full h-full">
                      <Image 
                        src={image.src} 
                        alt={image.alt}
                        fill
                        priority={index < 5}
                        style={{ objectFit: 'cover' }}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Gradient fades for the carousel edges */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
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
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer transform hover:scale-[1.02]"
                onClick={() => openModal(image)}
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
            <div className="overflow-x-auto custom-scrollbar">
              <div className="flex gap-6 px-4 min-w-max">
                {wideImages.slice(3).map((image, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 group relative w-[280px] h-[220px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer transform hover:scale-[1.02]"
                    onClick={() => openModal(image)}
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
        </div>

        {/* Complete Portfolio Button */}
        <div className="flex justify-center mb-12 md:mb-24 mt-8 md:mt-12">
          <a
            href="https://www.dropbox.com/scl/fo/jzp7awxjmjlan176jyqr1/h?rlkey=tczwuq3e3n5pqhdsdrae0esj9&e=1&st=55vryip7&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-3/4 md:w-1/2 max-w-2xl block text-center bg-[#04b9d6] hover:bg-sky-500 text-white text-lg md:text-xl font-semibold rounded-xl py-4 md:py-6 px-3 md:px-4 transition-colors duration-200 shadow-md"
          >
            Complete Portfolio
          </a>
        </div>
      </div>

      {/* Image Lightbox/Modal */}
      {modalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full">
              <Image 
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-md"
              />
            </div>
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Custom scrollbar style */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .embla {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 auto;
          min-width: 0;
        }
      `}</style>
    </section>
  );
};

export default ArtworkSection; 