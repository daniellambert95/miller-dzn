"use client";

import React from 'react';

const ValueProposition = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
            <span className="text-primary font-medium" style={{ color: '#04b9d6' }}>Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            Creativity Drives Digital Success
          </h2>
          
          <p className="text-gray-700">
            In the digital space, creativity is the primary driver of campaign success. 
            Our data-driven approach ensures your brand stands out.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Impact Factor */}
            <div className="bg-white rounded-xl p-6 shadow-sm md:col-span-1 md:row-span-2 flex flex-col justify-between border-2 border-primary/20">
              <div>
                <div className="bg-primary/20 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#04b9d6' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary" style={{ color: '#04b9d6' }}>Creativity</h3>
                <p className="text-gray-700 mb-4">
                  The #1 influencer of digital campaign success
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="w-full bg-gray-100 rounded-full h-4">
                  <div className="bg-primary h-4 rounded-full" style={{ width: '89%', backgroundColor: '#04b9d6' }}></div>
                </div>
                <p className="font-bold text-primary text-right mt-1" style={{ color: '#04b9d6' }}>89%</p>
              </div>
            </div>
            
            {/* Secondary Factors */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div>
                <div className="bg-gray-200 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Brand</h3>
                <p className="text-gray-700 mb-4">
                  Secondary impact factor for campaign success
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="bg-gray-400 h-3 rounded-full" style={{ width: '5%' }}></div>
                </div>
                <p className="font-medium text-gray-600 text-right mt-1">5%</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div>
                <div className="bg-gray-200 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Brand Identity</h3>
                <p className="text-gray-700 mb-4">
                  Supporting factor for campaign effectiveness
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div className="bg-gray-400 h-3 rounded-full" style={{ width: '6%' }}></div>
                </div>
                <p className="font-medium text-gray-600 text-right mt-1">6%</p>
              </div>
            </div>
          </div>
        </div>
        
          <div className="text-center mt-8">
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our commitment to quality ensures that your campaigns not only look beautiful but also drive meaningful engagement and conversions.
            </p>
          </div>
      </div>
    </section>
  );
};

export default ValueProposition; 