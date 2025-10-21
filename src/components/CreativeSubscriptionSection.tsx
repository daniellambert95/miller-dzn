"use client";

import React from 'react';
import Image from 'next/image';
import bunnyImageLoader from '@/utils/imageLoader';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
  });

const CreativeSubscriptionSection = () => {
  return (
    <section className="py-12 md:py-20 bg-black text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className={`${inter.className} text-3xl md:text-4xl lg:text-5xl font-bold `}>
              All your Creative <br /> needs
               <span className="text-[#04b9d6]"> in one single</span><br />
              <span className={`${inter.className} italic text-[#FF6B35]`}>monthly subscription</span>
            </h2>

            <div className="space-y-4">
              <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
                Crystal Clear hourly billing and tonnes of creative experts at your disposal.
                That&apos;s what you get when you sign up for Miller Designs all in one creative service.
              </p>

              <div className="pt-1">
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 font-semibold rounded-full text-center bg-[#FF6B35] hover:bg-[#FF5722] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-white text-base"
                >
                  Book a Demo
                </a>
              </div>

              <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
                Design, develop, conceptualize and more within one convenient design subscription.
              </p>
            </div>
          </div>

          {/* Right Side - Images Grid (1/3 width) */}
          <div className="flex flex-col gap-3 w-full max-w-[400px] mx-auto">
            {/* Top - Creative & Socials Box */}
            <div className="relative rounded-2xl overflow-hidden bg-[#04b9d6] h-[400px]">
              <Image
                src="/section2/Box 1.png"
                alt="Your Creative & Socials Covered"
                fill
                className="object-contain"
                quality={95}
                loader={bunnyImageLoader}
              />
            </div>

            {/* Bottom - Strategy Box */}
            <div className="relative rounded-2xl overflow-hidden bg-black h-[200px]">
              <Image
                src="/section2/Box 3.png"
                alt="Our Strategy Your Success"
                fill
                className="object-contain"
                quality={95}
                loader={bunnyImageLoader}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeSubscriptionSection;
