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

const IndustryGoalSection = () => {
  const services = [
    {
      title: 'Creative Design',
      description: 'Your software solves problems — let&apos;s make sure the world knows it. We craft campaigns that dominate user acquisition, slash churn, and scale subscriptions.',
      icon: '/miller-design-images/DESIGN.png',
      color: 'cyan',
      titleColor: '#04b9d6'
    },
    {
      title: 'Branding',
      description: 'In a sector built on security and speed, we engineer campaigns that convert skeptics into loyal users. Regulatory-compliant ads, high-ROI funnels, and storytelling that turns complex tech into irresistible value.',
      icon: '/miller-design-images/BOOK.png',
      color: 'orange',
      titleColor: '#ff6b35'
    },
    {
      title: 'Reels/Animation',
      description: 'Turbocharge your store with performance marketing that doesn\'t just drive traffic — it drives sales. Dynamic ads, AI-powered retargeting, and checkout flows smoother than your best-selling product.',
      icon: '/miller-design-images/VIDEO.png',
      color: 'orange',
      titleColor: '#ff6b35'
    },
    {
      title: 'Social Media',
      description: 'High-trust industries demand high-impact strategies. We build compliant campaigns that turn cold leads into long-term clients. Think wealth management ads that perform as well as your funds.',
      icon: '/miller-design-images/SOCIALS.png',
      color: 'cyan',
      titleColor: '#04b9d6'
    }
  ];

  return (
    <section id="services" className="bg-black py-20 md:py-28 lg:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center sm:px-28 mb-16 md:mb-20 lg:mb-24">
          <div className="inline-block bg-gradient-to-r from-[#04b9d6]/20 to-[#04b9d6]/10 px-4 py-2 mb-6 rounded-full border border-[#04b9d6]/30">
            <span className="text-[#04b9d6] font-medium">Our Services</span>
          </div>
          <h2 className={`${inter.className} text-center max-w-4xl mx-auto text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight`}>
            Any Industry. Any Goal. <br className="block" />
            <span className={`${inter.className}`}>We Make Content Creation <br /> Stand Out for You</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            We don&apos;t need to compromise on quality for short-term profit because our subscription model is built on long-term, mutually beneficial partnerships with clients hiding.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a
              href="https://calendly.com/geoff-millerdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#ff6b35]/50"
            >
              Book a Demo
            </a>
            <a
              href="/gallery"
              className="px-12 py-4 bg-[#04b9d6] hover:bg-[#04b9d6]/90 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#04b9d6]/50"
            >
              Portfolio
            </a>
          </div>
        </div>

        {/* Service Cards Grid - Mobile (Custom Order: Creative Design, Branding, Social Media, Reels) */}
        <div className="grid grid-cols-1 gap-10 max-w-6xl mx-auto md:hidden">
          {[0, 1, 3, 2].map((serviceIndex) => {
            const service = services[serviceIndex];
            return (
            <div
              key={serviceIndex}
              className="bg-transparent border-t border-white/10 hover:border-white/20 transition-all duration-300 group flex gap-6 md:gap-8 pt-8 md:pt-10"
            >
              {/* Icon */}
              <div className={`w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 flex-shrink-0 rounded-2xl flex items-center justify-center ${
                service.color === 'cyan'
                  ? 'bg-gradient-to-br from-[#04b9d6]/20 to-[#04b9d6]/5'
                  : 'bg-gradient-to-br from-[#ff6b35]/20 to-[#ff6b35]/5'
              } group-hover:scale-105 transition-transform duration-300`}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={140}
                  height={140}
                  className="object-contain w-full h-full"
                  loader={bunnyImageLoader}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className={`${inter.className} text-2xl md:text-3xl font-bold mb-4 md:mb-5 tracking-wide`}
                  style={{ color: service.titleColor }}
                >
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
            );
          })}
        </div>

        {/* Service Cards Grid - Desktop (Natural Order) */}
        <div className="hidden md:grid grid-cols-2 gap-10 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-transparent border-t border-white/10 hover:border-white/20 transition-all duration-300 group flex gap-6 md:gap-8 pt-8 md:pt-10"
            >
              {/* Icon */}
              <div className={`w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 flex-shrink-0 rounded-2xl flex items-center justify-center ${
                service.color === 'cyan'
                  ? 'bg-gradient-to-br from-[#04b9d6]/20 to-[#04b9d6]/5'
                  : 'bg-gradient-to-br from-[#ff6b35]/20 to-[#ff6b35]/5'
              } group-hover:scale-105 transition-transform duration-300`}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={140}
                  height={140}
                  className="object-contain w-full h-full"
                  loader={bunnyImageLoader}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className={`${inter.className} text-2xl md:text-3xl font-bold mb-4 md:mb-5 tracking-wide`}
                  style={{ color: service.titleColor }}
                >
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryGoalSection;
