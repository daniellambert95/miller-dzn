"use client";

import React from 'react';
import Image from 'next/image';
import bunnyImageLoader from '@/utils/imageLoader';

const PricingSection = () => {
  const features = [
    {
      title: 'Monthly Creatives',
      value: '20+',
      description: 'Get a minimum of 20 custom designs each month to fuel your marketing efforts.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Turnaround Time',
      value: '1-3 days',
      description: 'Fast delivery to keep your campaigns moving forward without delays.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Revisions',
      value: 'Unlimited',
      description: "We refine until you&apos;re completely satisfied with every design.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: 'Platforms',
      value: 'All Digital',
      description: 'Content optimized for all major social and digital advertising platforms.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Account Management',
      value: 'Dedicated',
      description: 'Your personal account manager ensures seamless communication and project delivery.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const additionalBenefits = [
    {
      text: 'Unlimited design requests at a fixed monthly rate',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      text: 'Social media graphics, ads, emails, landing pages, and more',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      text: 'Quick turnaround times with same-day delivery options',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      text: 'Videos/animations available on request',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      text: 'Copyright ownership of all designs',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <section className="section py-32 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#04b9d6]/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 top-1/2 w-72 h-72 bg-[#04b9d6]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#04b9d6]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
            <span className="text-primary font-medium" style={{ color: '#04b9d6' }}>Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#04b9d6] to-[#04b9d6]">
            MDZN 360° Plan
          </h2>
          
          <p className="text-gray-700 text-lg">
            Our all-inclusive subscription plan delivers exceptional value with unlimited design requests 
            and revisions for one fixed monthly price.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_30px_60px_-15px_rgba(4,185,214,0.3)]">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#04b9d6] to-[#04b9d6]/80 text-white py-2 px-6 text-sm font-medium rounded-bl-2xl">
              Most Popular
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Pricing Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#04b9d6] to-[#04b9d6]/90 text-white p-10 lg:p-12 relative overflow-hidden" style={{ backgroundColor: '#04b9d6' }}>
                <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full"></div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full"></div>
                
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div>
                    <h3 className="text-3xl font-bold mb-3">Professional Plan</h3>
                    <p className="text-white/90 mb-10 text-lg">All-inclusive design partnership</p>
                    
                    <div className="mb-10 flex items-baseline">
                      <span className="text-7xl font-bold tracking-tight">€1997</span>
                      <span className="text-white/80 ml-2 text-xl">/month</span>
                    </div>
                    
                    <div className="space-y-6 mb-10">
                      <p className="text-lg leading-relaxed">
                        Everything you need to power your brand&apos;s visual identity with unlimited design requests
                        and dedicated support.
                      </p>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="font-medium">No contracts. Cancel anytime.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <a 
                      href="/contact" 
                      className="block w-full bg-white text-[#04b9d6] hover:bg-white/90 transition-all duration-300 text-center font-medium py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1" 
                      style={{ color: '#04b9d6' }}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <div className="lg:col-span-7 bg-white p-10 lg:p-12">
                <h3 className="text-2xl font-bold mb-10 text-gray-800">What&apos;s Included</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Core Features */}
                  <div>
                    <h4 className="text-lg font-bold text-[#04b9d6] mb-6">Core Features</h4>
                    
                    <div className="space-y-8">
                      {features.map((feature, index) => (
                        <div key={index} className="relative pl-12">
                          <div className="absolute left-0 top-0 w-8 h-8 bg-[#04b9d6]/10 text-[#04b9d6] rounded-lg flex items-center justify-center">
                            {feature.icon}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800 mb-1">{feature.title}: <span className="text-primary">{feature.value}</span></div>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Additional Benefits */}
                  <div>
                    <h4 className="text-lg font-bold text-[#04b9d6] mb-6">Additional Benefits</h4>
                    
                    <div className="space-y-5">
                      {additionalBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-[#04b9d6]/10 text-[#04b9d6] flex items-center justify-center mr-3">
                            {benefit.icon}
                          </div>
                          <span className="text-gray-700">{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
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

export default PricingSection;