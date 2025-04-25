"use client";

import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';

const drukWide = localFont({
  src: '../../public/fonts/Druk-Wide-Medium.ttf',
  display: 'swap',
});

const ProcessSection = () => {
  const steps = [
    {
      number: '1',
      title: 'EVALUATE',
      description: 'We thoroughly analyze your brand identity and specific project requirements to ensure alignment with your goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'THINK',
      description: 'Our strategic planning phase involves your dedicated account manager creating a roadmap for success.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.29 7L12 12l8.71-5M12 22V12" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'CREATE',
      description: 'Fast-turn creation with same-day delivery options and unlimited revisions to ensure your complete satisfaction.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    },
    {
      number: '4',
      title: 'POST',
      description: "We provide your finalized designs in multiple formats optimized for all your required platforms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="section bg-white relative overflow-hidden my-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/Background Top.png"
          alt="Process Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#04b9d6]/90"></div>
      </div>
      
      <div className="container-custom relative z-10 pb-4">
        {/* Section Header */}

        
        {/* Desktop Process Steps - Only visible on large screens */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 my-12">
          {steps.map((step, index) => (
            <div key={`desktop-${index}`} className="flex flex-col space-y-4">
              {/* Step Content */}
              <div>
                {/* Icon and Title Side by Side */}
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="flex-shrink-0 w-11 h-11 bg-white rounded-full p-2 text-[#04b9d6]"
                  >
                    {step.icon}
                  </div>
                  
                  <h4 className={`${drukWide.className} text-white text-lg lg:text-xl font-extrabold tracking-widest`}>
                    {step.number}. {step.title}
                  </h4>
                </div>
                
                {/* Description */}
                <p className="text-white/80 text-sm pl-[65px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Medium Screen Layout - 2x2 Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-x-8 gap-y-12 my-10">
          {steps.map((step, index) => (
            <div key={`medium-${index}`} className="flex flex-col">
              <div className="flex items-start">
                <div className="mr-5 relative">
                  <div className="relative flex-shrink-0 w-12 h-12 bg-white rounded-full p-2.5 text-[#04b9d6]">
                    {step.icon}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full -z-10"></div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className={`${drukWide.className} text-white text-lg font-extrabold tracking-widest mb-3`}>
                    {step.number}. {step.title}
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
        {/* Mobile Process Steps with Vertical Timeline */}
        <div className="md:hidden my-8 relative">
          <div className="absolute left-9 top-4 bottom-4 w-1 bg-white/30 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={`mobile-${index}`} className="flex items-start mb-12 relative z-10">
              <div className="mr-6 relative">
                <div className="relative w-10 h-10">
                  <div className="w-10 h-10 bg-[#04b9d6] rounded-full flex items-center justify-center text-white p-2 relative z-10">
                    {step.icon}
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full -z-0"></div>
                </div>
              </div>
              
              <div className="flex-1">
                <h4 className={`${drukWide.className} text-white text-lg font-extrabold tracking-widest mb-2`}>
                  {step.number}. {step.title}
                </h4>
                <p className="text-white/80 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Timeline at bottom - Only for large screens */}
        <div className="relative mt-12 lg:mt-16 hidden lg:block">
          {/* Timeline with dots and phases */}
          <div>
            {/* Phase indicators above line */}
            <div className="flex justify-between px-4 mb-2">
              {steps.map((_, index) => (
                <div key={`phase-${index}`} className="text-white/70 text-xs font-medium">
                  phase {index + 1}
                </div>
              ))}
            </div>
            
            {/* Timeline track */}
            <div className="relative h-1 bg-white/30 mx-4">
              {/* Dots on line */}
              <div className="absolute top-0 left-0 right-0 flex justify-between">
                {steps.map((_, index) => (
                  <div 
                    key={`dot-${index}`} 
                    className="w-3 h-3 bg-white rounded-full transform -translate-y-1"
                    style={{ 
                      marginLeft: index === 0 ? '0' : undefined,
                      marginRight: index === steps.length - 1 ? '0' : undefined
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 