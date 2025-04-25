"use client";

import React from 'react';
import { BorderBeam } from "@/components/magicui/border-beam";

const ValueProposition = () => {
  return (
    <section className="section bg-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-200 to-cyan-50 opacity-40 blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-teal-200 to-sky-100 opacity-40 blur-3xl -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-block bg-gradient-to-r from-cyan-100 to-teal-100 px-4 py-2 rounded-full">
            <span className="text-primary font-medium bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl py-2 md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Creativity Drives Digital Success
          </h2>
          
          <p className="text-gray-700">
            In the digital space, creativity is the primary driver of campaign success. 
            Our data-driven approach ensures your brand stands out.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Impact Factor */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 group hover:border-cyan-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-cyan-100/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 h-16 w-16 rounded-full flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#04b9d6' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary" style={{ color: '#04b9d6' }}>Creativity</h3>
                <p className="text-gray-700 mb-5">
                  The #1 influencer of digital campaign success
                </p>
              </div>
              
              <div className="mt-auto relative z-10">
                <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-cyan-500 h-4 rounded-full" style={{ width: '89%' }}></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">Impact factor</span>
                  <div className="font-bold text-lg text-primary" style={{ color: '#04b9d6' }}>89%</div>
                </div>
              </div>
            </div>
            
            {/* Secondary Factors */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 group hover:border-teal-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-teal-100/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 h-16 w-16 rounded-full flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-teal-600">Brand</h3>
                <p className="text-gray-700 mb-5">
                  Secondary impact factor for campaign success
                </p>
              </div>
              
              <div className="mt-auto relative z-10">
                <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-teal-400 to-teal-500 h-4 rounded-full" style={{ width: '5%' }}></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">Impact factor</span>
                  <div className="font-bold text-lg text-teal-600">5%</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 group hover:border-blue-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-16 w-16 rounded-full flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-blue-600">Brand Identity</h3>
                <p className="text-gray-700 mb-5">
                  Supporting factor for campaign effectiveness
                </p>
              </div>
              
              <div className="mt-auto relative z-10">
                <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-4 rounded-full" style={{ width: '6%' }}></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">Impact factor</span>
                  <div className="font-bold text-lg text-blue-600">6%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="relative max-w-3xl mx-auto py-8 px-8 md:px-12 bg-white rounded-xl border border-transparent shadow-md overflow-hidden">
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Our commitment to quality ensures that your campaigns not only look beautiful 
              but also drive meaningful engagement and conversions.
            </p>
            <BorderBeam 
              size={150} 
              duration={8} 
              colorFrom="#04b9d6" 
              colorTo="#12c2e9" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition; 