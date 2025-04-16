"use client";

import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  const coreValues = [
    {
      title: 'Quality',
      description: 'Exceptional craftsmanship and attention to detail in every design we create.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Volume',
      description: 'Capacity to handle multiple projects and deliver high-quality content at scale.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: 'Speed',
      description: 'Fast turnaround with same-day delivery options for time-sensitive projects.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Consistency',
      description: 'Reliable, high-quality output that maintains your brand identity across all designs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: 'Cost Effectiveness',
      description: 'Premium design services at competitive rates that maximize your ROI.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="section bg-white py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
            <span className="text-primary font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Create Without Compromise
          </h2>
          
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We empower you to achieve your creative vision through our comprehensive design services
            and unwavering commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-white border-2 border-primary text-gray-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
        
        {/* Portfolio Showcase */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-10 text-center text-primary">Our Creative Capabilities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image 
                src="/miller_design_work/KIRA MOCKUP V2.png" 
                alt="KIRA Design" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold text-lg">KIRA</p>
                <p className="text-sm">Brand Identity</p>
              </div>
            </div>
            
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image 
                src="/miller_design_work/MDZN Ab1.png" 
                alt="MDZN Design" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold text-lg">MDZN Abstract</p>
                <p className="text-sm">Digital Art</p>
              </div>
            </div>
            
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image 
                src="/miller_design_work/Business Card Mockup_2aa.png" 
                alt="Business Card Design" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold text-lg">Business Cards</p>
                <p className="text-sm">Print Design</p>
              </div>
            </div>
            
            <div className="relative h-80 group overflow-hidden rounded-lg">
              <Image 
                src="/miller_design_work/CLAP IBZ Invite.png" 
                alt="Club Invitation" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold text-lg">CLAP IBZ</p>
                <p className="text-sm">Event Invitation</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#pricing" className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors inline-block">
              View Our Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 