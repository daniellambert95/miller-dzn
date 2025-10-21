"use client";

import React from 'react';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

const drukWide = localFont({
  src: '../../public/fonts/Druk-Wide-Medium.ttf',
  display: 'swap',
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
  });

const ProcessSection = () => {
  const steps = [
    {
      number: '1',
      title: 'EVALUATE',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'THINK',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <line x1="9" y1="18" x2="15" y2="18" />
          <line x1="10" y1="22" x2="14" y2="22" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'CREATE',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
      )
    },
    {
      number: '4',
      title: 'POST',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polyline points="16 16 12 12 8 16" />
          <line x1="12" y1="12" x2="12" y2="21" />
          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
          <polyline points="16 16 12 12 8 16" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="bg-black py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Cyan Box Container with 3-color gradient */}
        <div className="bg-gradient-to-r from-[#04b9d6] via-[#04b9d6] to-[#13cbc2] rounded-3xl p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">

          {/* Section Header */}
          <h2 className={`${inter.className} text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16`}>
            Creative <span className="font-light">Social Media & Content</span>
          </h2>

          {/* Process Steps - Horizontal on Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full p-3 md:p-4 text-[#04b9d6] mb-4 shadow-lg">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className={`${drukWide.className} text-white text-base md:text-lg lg:text-xl font-bold tracking-wider`}>
                  {step.number}. {step.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Timeline - Desktop Only */}
          <div className="hidden md:block relative mb-8">
            {/* Phase indicators */}
            <div className="flex justify-between mb-2 px-6">
              {steps.map((_, index) => (
                <div key={`phase-${index}`} className="text-white/80 text-xs font-medium">
                  phase {index + 1}
                </div>
              ))}
            </div>

            {/* Timeline line */}
            <div className="relative h-0.5 bg-white/40 mx-6">
              {/* Dots */}
              <div className="absolute top-0 left-0 right-0 flex justify-between">
                {steps.map((_, index) => (
                  <div
                    key={`dot-${index}`}
                    className="w-2.5 h-2.5 bg-white rounded-full transform -translate-y-1"
                  ></div>
                ))}
              </div>

              {/* Flag at end */}
              {/* <div className="absolute -right-1 -top-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 18V2M3 7L13 4L3 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div> */}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <button className="bg-[#ff6b35] hover:bg-[#ff5722] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Sign Up Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 