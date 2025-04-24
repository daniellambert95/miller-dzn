"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatedBeam } from './AnimatedBeam';
import { Climate_Crisis } from 'next/font/google';
import { CustomWordRotate } from "./CustomWordRotate";
import { HyperText } from "@/components/magicui/hyper-text";
import { Particles } from "@/components/magicui/particles";

const climateCrisis = Climate_Crisis({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftTopRef = useRef<HTMLDivElement>(null);
  const rightTopRef = useRef<HTMLDivElement>(null);
  const leftBottomRef = useRef<HTMLDivElement>(null);
  const rightBottomRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative overflow-hidden pt-20" 
      ref={containerRef}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/Background Top.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={500}
        ease={10}
        color="#ffffff"
        refresh
      />
      
      {/* Wave Decoration Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <svg className="absolute -left-20 top-0 h-full w-40 text-white opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 C40,50 40,50 0,100 L0,0 Z" fill="currentColor" />
        </svg>
        <svg className="absolute right-0 bottom-0 h-full w-40 text-white opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M100,0 C60,50 60,50 100,100 L100,0 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="container-custom z-10 py-16 md:py-24 text-white">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          {/* Logo Mark - Centered */}
          <div className="w-24 h-24 md:w-32 md:h-32 relative mb-4">
            <Image 
              src="/miller_logos_icons/miller white.png" 
              alt="Miller Design Icon" 
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Brand Name - Centered */}
          <div className="text-center">
            <div className={`mb-3 tracking-wider`}>
              <span className="font-bold">MILLER</span> <span className="font-light">DESIGN</span>
            </div>
            <h1 className={`${climateCrisis.className} text-6xl md:text-7xl lg:text-8xl font-bold mb-2 text-white tracking-wide`}>
              <HyperText 
                className={`${climateCrisis.className} text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-wide`}
                duration={2000}
                animateOnHover={true}
              > MDZN
              </HyperText>
            </h1>
            <h2 className={`text-2xl md:text-3xl font-medium text-white uppercase tracking-widest mt-2`}>
            <span className="font-bold">DIGITAL</span> <span className="font-light">DISPLAY</span>

            </h2>
          </div>
          
          {/* Tagline */}
          <div className={`${climateCrisis.className} text-xl md:text-2xl font-medium text-white mt-4`}>
            <CustomWordRotate
              className={`${climateCrisis.className} text-xl md:text-2xl font-medium text-white`}
              words={["Think it.", "Create it."]}
              duration={3000}
            />
          </div>
          
          {/* CTA Button */}
          <a href="#contact" className="mt-8 bg-white text-primary-direct hover:bg-opacity-90 transition-colors px-10 py-3 font-medium rounded-full text-center inline-block" style={{ backgroundColor: '#ff4655', color: 'white' }}>
            Free Quote!
          </a>
        </div>
      </div>
      
      {/* Beam anchor points (invisible) */}
      <div className="absolute top-1/3 left-0 w-2 h-2 opacity-0" ref={leftTopRef}></div>
      <div className="absolute top-1/3 right-0 w-2 h-2 opacity-0" ref={rightTopRef}></div>
      <div className="absolute bottom-1/3 left-0 w-2 h-2 opacity-0" ref={leftBottomRef}></div>
      <div className="absolute bottom-1/3 right-0 w-2 h-2 opacity-0" ref={rightBottomRef}></div>
      
      {/* Animated beams - only render after component is mounted */}
      {mounted && (
        <>
          <AnimatedBeam 
            containerRef={containerRef}
            fromRef={leftTopRef}
            toRef={rightTopRef}
            curvature={50}
            beamSize={4}
            animationDuration={3}
          />
          
          <AnimatedBeam 
            containerRef={containerRef}
            fromRef={rightBottomRef}
            toRef={leftBottomRef}
            curvature={-50}
            beamSize={4}
            animationDuration={3}
            reverse={true}
          />
        </>
      )}
    </section>
  );
};

export default HeroSection; 