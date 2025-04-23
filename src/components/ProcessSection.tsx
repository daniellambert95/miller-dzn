"use client";

import React from 'react';
import Image from 'next/image';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Evaluate',
      description: 'We thoroughly analyze your brand identity and specific project requirements to ensure alignment with your goals.',
      image: '/miller_design_work/3D-Projector Display Screen Mockup 001.png'
    },
    {
      number: '02',
      title: 'Think',
      description: 'Our strategic planning phase involves your dedicated account manager creating a roadmap for success.',
      image: '/miller_design_work/Kafe Cup 2 Matte.png'
    },
    {
      number: '03',
      title: 'Create',
      description: 'Fast-turn creation with same-day delivery options and unlimited revisions to ensure your complete satisfaction.',
      image: '/miller_design_work/FTR 3.png'
    },
    {
      number: '04',
      title: 'Post',
      description: "We provide your finalized designs in multiple formats optimized for all your required platforms.",
      image: '/miller_design_work/Urban Wall Poster Mockup.png'
    }
  ];

  return (
    <section id="process" className="section bg-white relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Our Process
          </h2>
          
          <p className="text-gray-700 text-lg">
            Our streamlined workflow ensures efficient delivery of high-quality creative assets
            tailored to your specific business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Image & Number */}
              <div className="relative mb-8 group">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image 
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                
                {/* Number Badge */}
                <div className="absolute -top-5 -right-5 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full h-0.5 bg-primary/30 w-12 z-10" style={{ transform: 'translateX(-50%)' }}></div>
                )}
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-primary" style={{ color: '#04b9d6' }}>{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#pricing" className="bg-primary text-black hover:bg-primary/90 transition-colors px-8 py-3 font-medium rounded-md inline-block shadow-md" style={{ backgroundColor: '#04b9d6' }}>
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 