"use client";

import React from 'react';
import Image from 'next/image';
import { NumberTicker } from "@/components/magicui/number-ticker";
import bunnyImageLoader from '@/utils/imageLoader';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-black py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1 relative">
            {/* Geoff Photo */}
            <div className="relative h-[600px] w-full max-w-[400px] mx-auto rounded-2xl overflow-hidden bg-black">
              <Image
                src="/section2/Box 2.png"
                alt="Geoff - Creative Director"
                fill
                className="object-contain"
                quality={95}
                loader={bunnyImageLoader}
              />
              <div className="absolute bottom-6 left-4 right-4 text-center z-10">
                <p className="text-white text-sm md:text-base font-light drop-shadow-2xl">
                  Geoff - Creative Director
                </p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="inline-block bg-[#04b9d6]/20 px-4 py-2 rounded-full">
              <span className="font-medium" style={{ color: '#04b9d6' }}>About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              15+ Years of Creative Excellence
            </h2>

            <p className="text-gray-300 text-lg">
              With over 15 years of industry experience, we&apos;ve collaborated with major brands,
              clubs, and DJs globally. Our passion for exceptional design drives us to constantly
              push the boundaries of creativity.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
                <h3 className="text-4xl font-bold mb-1" style={{ color: '#04b9d6' }}>
                  <NumberTicker
                    value={15}
                    className="text-4xl font-bold"
                    style={{ color: '#04b9d6' }}
                  />+
                </h3>
                <p className="text-gray-300 font-medium">Years Experience</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
                <h3 className="text-4xl font-bold mb-1" style={{ color: '#04b9d6' }}>
                  <NumberTicker
                    value={200}
                    className="text-4xl font-bold"
                    style={{ color: '#04b9d6' }}
                  />+
                </h3>
                <p className="text-gray-300 font-medium">Global Clients</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
                <h3 className="text-4xl font-bold mb-1" style={{ color: '#04b9d6' }}>
                  <NumberTicker
                    value={5}
                    className="text-4xl font-bold"
                    style={{ color: '#04b9d6' }}
                  />k+
                </h3>
                <p className="text-gray-300 font-medium">Projects Completed</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
                <h3 className="text-4xl font-bold mb-1" style={{ color: '#04b9d6' }}>24/7</h3>
                <p className="text-gray-300 font-medium">Support & Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 