"use client";

import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-50 py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1 relative">
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/miller_design_work/Kafe Cup 2 Matte.png" 
                alt="Miller Design Team" 
                fill
                className="object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Image Caption */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-bold text-xl">Clap Ka-fe</h3>
                <p className="opacity-80">Brand Identity Design</p>
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
              With over 15 years of industry experience, we've collaborated with major brands, 
              clubs, and DJs globally. Our passion for exceptional design drives us to constantly 
              push the boundaries of creativity.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-primary text-4xl font-bold mb-1" style={{ color: '#04b9d6' }}>15+</h3>
                <p className="text-gray-700 font-medium">Years Experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-primary text-4xl font-bold mb-1" style={{ color: '#04b9d6' }}>100+</h3>
                <p className="text-gray-700 font-medium">Global Clients</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-primary text-4xl font-bold mb-1" style={{ color: '#04b9d6' }}>5k+</h3>
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