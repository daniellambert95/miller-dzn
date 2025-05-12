"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import bunnyImageLoader from '@/utils/imageLoader';
import Link from 'next/link';
const ServicesSection = () => {
  const [, setHoveredIndex] = useState<number | null>(null);

  const coreValues = [
    {
      title: 'Quality',
      description: 'Exceptional craftsmanship and attention to detail in every design we create.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: '#04b9d6',
      gradientFrom: 'from-cyan-500',
      gradientTo: 'to-cyan-400',
      bgLight: 'from-cyan-50',
      bgDark: 'to-cyan-100/30'
    },
    {
      title: 'Volume',
      description: 'Capacity to handle multiple projects and deliver high-quality content at scale.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: '#6366f1',
      gradientFrom: 'from-indigo-500',
      gradientTo: 'to-indigo-400',
      bgLight: 'from-indigo-50',
      bgDark: 'to-indigo-100/30'
    },
    {
      title: 'Speed',
      description: 'Fast turnaround with same-day delivery options for time-sensitive projects.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: '#ec4899',
      gradientFrom: 'from-pink-500',
      gradientTo: 'to-pink-400',
      bgLight: 'from-pink-50',
      bgDark: 'to-pink-100/30'
    },
    {
      title: 'Consistency',
      description: 'Reliable, high-quality output that maintains your brand identity across all designs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: '#84cc16',
      gradientFrom: 'from-lime-500',
      gradientTo: 'to-lime-400',
      bgLight: 'from-lime-50',
      bgDark: 'to-lime-100/30'
    },
    {
      title: 'Cost Effectiveness',
      description: 'Premium design services at competitive rates that maximize your ROI.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: '#f59e0b',
      gradientFrom: 'from-amber-500',
      gradientTo: 'to-amber-400',
      bgLight: 'from-amber-50',
      bgDark: 'to-amber-100/30'
    }
  ];

  return (
    <section id="services" className="section bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-200 to-indigo-100 opacity-30 blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-pink-200 to-cyan-100 opacity-30 blur-3xl -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <div className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Create Without Compromise
          </h2>
          
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We empower you to achieve your creative vision through our comprehensive design services
            and unwavering commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated background gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${value.bgLight} ${value.bgDark} opacity-0 group-hover:opacity-100 transition-all duration-500`}
              ></div>
              
              {/* Top decorator */}
              <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-50"></div>
              
              {/* Icon */}
              <div className={`relative z-10 bg-gradient-to-br ${value.gradientFrom} ${value.gradientTo} opacity-90 h-16 w-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                {React.cloneElement(value.icon, { 
                  className: "h-8 w-8 text-white", 
                  style: { color: 'white' } 
                })}
              </div>
              
              {/* Content */}
              <h3 
                className="text-xl font-bold mb-3 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
                style={{ color: value.color }}
              >
                {value.title}
              </h3>
              
              <p className="text-gray-700 relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                {value.description}
              </p>
              
              {/* Bottom decorator */}
              <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Portfolio Showcase */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#00b9d6] to-purple-500 bg-clip-text text-transparent">Our Creative Capabilities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative h-80 group overflow-hidden rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-500">
              <Image 
                src="/miller_design_work/Business Card Mockup_2aa.webp" 
                alt="Branding Services - Miller Design Dubai" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loader={bunnyImageLoader}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-bold text-xl mb-1">Premium Graphics</p>
                <p className="text-sm text-gray-300">Brand Identity</p>
                <div className="w-16 h-1 bg-gradient-to-r from-[#00e1ff] to-[#00b9d6] mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_8px_rgba(0,225,255,0.6)]"></div>
              </div>
            </div>
            
            <div className="relative h-80 group overflow-hidden rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-500">
              <Image 
                src="/miller_design_work/TOTEBAG MOCKUP FILE.webp" 
                alt="MDZN Design" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-bold text-xl mb-1">Branding</p>
                <p className="text-sm text-gray-300">Digital Art</p>
                <div className="w-16 h-1 bg-indigo-500 mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
            
            <div className="relative h-80 group overflow-hidden rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-500">
              <Image 
                src="/miller_design_work/Macbook on Wooden Slats.webp" 
                alt="Business Card Design" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-bold text-xl mb-1">Animations</p>
                <p className="text-sm text-gray-300">Print Design</p>
                <div className="w-16 h-1 bg-pink-500 mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
            
            <div className="relative h-80 group overflow-hidden rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-500">
              <Image 
                src="/miller_design_work/KIRA MOCKUP V2.webp" 
                alt="Club Invitation" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-bold text-xl mb-1">Reels</p>
                <p className="text-sm text-gray-300">Event Invitation</p>
                <div className="w-16 h-1 bg-lime-500 mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>

          {/* CTA */}
        <div className="flex justify-center mt-24">
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
        
        {/* Additional CTA Section */}
        <div className="mt-20">
          <div className="relative overflow-hidden rounded-3xl shadow-xl group hover:shadow-[0_30px_60px_-15px_rgba(4,185,214,0.25)] transition-all duration-300">
            <div className="relative h-72 w-full">
              <Image 
                src="/miller_design_work/Mockup.webp" 
                alt="Featured Design Work" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loader={bunnyImageLoader}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
              
              <div className="absolute inset-0 flex items-center px-10 md:px-16">
                <div className="max-w-xl">
                  <h3 className="text-white text-3xl font-bold mb-5">Ready to Transform Your Brand?</h3>
                  <p className="text-white/90 text-lg mb-8">Join the MDZN family and elevate your visual identity to new heights.</p>
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
      </div>
    </section>
  );
};

export default ServicesSection; 