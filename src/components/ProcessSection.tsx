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
      icon: '/Icons/Evaluate.png'
    },
    {
      number: '2',
      title: 'THINK',
      description: 'Our strategic planning phase involves your dedicated account manager creating a roadmap for success.',
      icon: '/Icons/Think.png'
    },
    {
      number: '3',
      title: 'CREATE',
      description: 'Fast-turn creation with same-day delivery options and unlimited revisions to ensure your complete satisfaction.',
      icon: '/Icons/Create.png'
    },
    {
      number: '4',
      title: 'POST',
      description: "We provide your finalized designs in multiple formats optimized for all your required platforms.",
      icon: '/Icons/Post.png'
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
      
      <div className="container-custom relative z-10 py-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-12">
          <h2 className={`${drukWide.className} text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide`}>
            Our Process
          </h2>
          
          <p className="text-white/80 text-lg max-w-3xl mx-auto">

          </p>
        </div>
        
        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 my-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:space-y-4">
              {/* Step Content */}
              <div>
                {/* Icon and Title Side by Side */}
                <div className="flex items-center gap-3 mb-4">
                  <Image 
                    src={step.icon}
                    alt={step.title}
                    width={45}
                    height={45}
                    className="flex-shrink-0"
                  />
                  
                  <h4 className={`${drukWide.className} text-white text-lg md:text-xl font-extrabold tracking-widest`}>
                    {step.number}. {step.title}
                  </h4>
                </div>
                
                {/* Description */}
                <p className="text-white/80 text-sm md:pl-[65px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Timeline at bottom */}
        <div className="relative mt-16">
          {/* Timeline with dots and phases */}
          <div className="hidden md:block">
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