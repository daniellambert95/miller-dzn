"use client";

import React from 'react';
import Image from 'next/image';
import { NumberTicker } from "@/components/magicui/number-ticker";
import { BorderBeam } from "@/components/magicui/border-beam";
import bunnyImageLoader from '@/utils/imageLoader';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-50 py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1 relative">
            {/* Hero Background Image */}
           
            {/* BorderBeam Effect Around Image */}
            <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-xl z-10 px-4">
              <BorderBeam 
                size={120} 
                duration={8} 
                colorFrom="#04b9d6" 
                colorTo="#12c2e9" 
              />
              <div className="h-full w-full rounded-xl bg-white/80 backdrop-blur-md flex items-center justify-center">
                <Image 
                  src="/miller_design_work/0S5A1356-Photoroom.webp" 
                  alt="Geoff Miller, CEO of Miller Design" 
                  fill
                  className="object-contain transition-transform duration-500 hover:scale-105"
                  loader={bunnyImageLoader}
                />
                {/* Floating SVG Shape */}
                <svg className="absolute -top-8 -right-8 w-32 h-32 opacity-30 animate-spin-slow" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" stroke="#04b9d6" strokeWidth="8" strokeDasharray="12 8" />
                </svg>
                {/* Glassmorphism Caption Overlay */}
                <div className="absolute bottom-6 left-6 bg-white/30 backdrop-blur-lg rounded-lg px-6 py-3 shadow-lg">
                  <h3 className="font-bold text-xl text-[#04b9d6]">Geoff Miller</h3>
                  <p className="opacity-80 text-gray-800">Founder & Creative Director</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-primary/10 -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-60 h-60 rounded-full bg-primary/20 -z-10"></div>
          </div>
          
          {/* Content Column */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-primary font-medium" style={{ color: '#04b9d6' }}>About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              15+ Years of Creative Excellence
            </h2>
            
            <p className="text-gray-700 text-lg">
              With over 15 years of industry experience, we&apos;ve collaborated with major brands, 
              clubs, and DJs globally. Our passion for exceptional design drives us to constantly 
              push the boundaries of creativity.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-primary text-4xl font-bold mb-1" style={{ color: '#04b9d6' }}>
                  <NumberTicker 
                    value={15} 
                    className="text-primary text-4xl font-bold"
                    style={{ color: '#04b9d6' }} 
                  />+
                </h3>
                <p className="text-gray-700 font-medium">Years Experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-primary text-4xl font-bold mb-1" style={{ color: '#04b9d6' }}>
                  <NumberTicker 
                    value={200} 
                    className="text-primary text-4xl font-bold"
                    style={{ color: '#04b9d6' }} 
                  />+
                </h3>
                <p className="text-gray-700 font-medium">Global Clients</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-primary text-4xl font-bold mb-1" style={{ color: '#04b9d6' }}>
                  <NumberTicker 
                    value={5} 
                    className="text-primary text-4xl font-bold"
                    style={{ color: '#04b9d6' }} 
                  />k+
                </h3>
                <p className="text-gray-700 font-medium">Projects Completed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-primary text-4xl font-bold mb-1" style={{ color: '#04b9d6' }}>24/7</h3>
                <p className="text-gray-700 font-medium">Support & Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 