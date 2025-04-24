"use client";

import React from 'react';
import Image from 'next/image';

const PricingSection = () => {
  const features = [
    {
      title: 'Monthly Creatives',
      value: '20+',
      description: 'Get a minimum of 20 custom designs each month to fuel your marketing efforts.'
    },
    {
      title: 'Turnaround Time',
      value: '1-3 days',
      description: 'Fast delivery to keep your campaigns moving forward without delays.'
    },
    {
      title: 'Revisions',
      value: 'Unlimited',
      description: "We refine until you&apos;re completely satisfied with every design."
    },
    {
      title: 'Platforms',
      value: 'All Digital',
      description: 'Content optimized for all major social and digital advertising platforms.'
    },
    {
      title: 'Account Management',
      value: 'Dedicated',
      description: 'Your personal account manager ensures seamless communication and project delivery.'
    }
  ];

  const additionalBenefits = [
    'Unlimited design requests at a fixed monthly rate',
    'Social media graphics, ads, emails, landing pages, and more',
    'Source files included (AI, PSD, etc.)',
    'Quick turnaround times with same-day delivery options',
    'Copyright ownership of all designs'
  ];

  return (
    <section id="pricing" className="section py-20 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-primary/10 rounded-tl-full -z-10"></div>
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-br-full -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
            <span className="text-primary font-medium" style={{ color: '#04b9d6' }}>Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            MDZN 360° Plan
          </h2>
          
          <p className="text-gray-700 text-lg">
            Our all-inclusive subscription plan delivers exceptional value with unlimited design requests 
            and revisions for one fixed monthly price.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden rounded-2xl shadow-2xl">
            {/* Pricing Card - 2 Columns */}
            <div className="lg:col-span-2 bg-primary text-black p-8 md:p-12" style={{ backgroundColor: '#04b9d6' }}>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Professional Plan</h3>
                  <p className="text-black/80 mb-8">All-inclusive design partnership</p>
                  
                  <div className="mb-8">
                    <span className="text-6xl font-bold">$1997</span>
                    <span className="text-black/80 ml-1">/month</span>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <p className="text-lg">
                      Everything you need to power your brand&apos;s visual identity with unlimited design requests
                      and dedicated support.
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p>No contracts. Cancel anytime.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <a href="#contact" className="block w-full bg-white text-primary hover:bg-white/90 transition-colors text-center font-medium py-4 rounded-lg" style={{ color: '#04b9d6' }}>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            
            {/* Features - 3 Columns */}
            <div className="lg:col-span-3 bg-white p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-8">What&apos;s Included</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Plan Features */}
                <div>
                  <h4 className="text-lg font-bold text-primary mb-4">Core Features</h4>
                  <ul className="space-y-6">
                    {features.map((feature, index) => (
                      <li key={index} className="flex">
                        <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div className="ml-3">
                          <div className="font-semibold">{feature.title}: {feature.value}</div>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Additional Benefits */}
                <div>
                  <h4 className="text-lg font-bold text-primary mb-4">Additional Benefits</h4>
                  <ul className="space-y-4">
                    {additionalBenefits.map((benefit, index) => (
                      <li key={index} className="flex">
                        <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-3">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  

                </div>
              </div>
            </div>
          </div>
          
          {/* Featured Project */}
          <div className="mt-16 relative overflow-hidden rounded-xl shadow-xl">
            <div className="relative h-64 w-full">
              <Image 
                src="/miller_design_work/Mockup.png" 
                alt="Featured Design Work" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/20"></div>
              <div className="absolute inset-0 flex items-center px-8 md:px-16">
                <div className="max-w-xl">
                  <h3 className="text-white text-3xl font-bold mb-4 ">Ready to Transform Your Brand?</h3>
                  <p className="text-white/90 mb-6">Join the MDZN family and elevate your visual identity to new heights.</p>
                  <a href="#contact" className="inline-block bg-white text-primary hover:bg-white/90 transition-colors px-8 py-3 rounded-lg font-medium">
                    Contact Us
                  </a>
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