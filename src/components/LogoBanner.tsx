"use client";

import React from 'react';
import Image from 'next/image';

// Use all 8 logos
const clientLogos = [
  { name: "Client 1", path: "/client_logos/Bourjois.png" },
  { name: "Client 2", path: "/client_logos/Cadillac.png" },
  { name: "Client 3", path: "/client_logos/CLAP.png" },
  { name: "Client 4", path: "/client_logos/IHG.png" },
  { name: "Client 5", path: "/client_logos/IRis.png" },
  { name: "Client 6", path: "/client_logos/JA.png" },
  { name: "Client 7", path: "/client_logos/JJBL.png" },
  { name: "Client 8", path: "/client_logos/Schwepps.png" },
  { name: "Client 8", path: "/client_logos/Sony.png" },
  { name: "Client 8", path: "/client_logos/Surf Club.png" },
  { name: "Client 8", path: "/client_logos/Tiktok.png" },
  { name: "Client 8", path: "/client_logos/Ushuaia.png" },
  { name: "Client 8", path: "/client_logos/White.png" },
];

const LogoBanner = () => {
  return (
    <section className="py-10 bg-white overflow-hidden border-t border-b border-gray-200">
      <div className="container-custom">
        <h3 className="text-center text-gray-400 mb-8 uppercase tracking-wider text-sm font-medium">
          Trusted by leading brands
        </h3>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="logo-container">
          <div className="logo-track">
            {/* First set of logos */}
            {clientLogos.map((logo, index) => (
              <div 
                key={`logo-${index}`} 
                className="logo-item grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image 
                  src={logo.path}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
            
            {/* Duplicate set for continuous scrolling */}
            {clientLogos.map((logo, index) => (
              <div 
                key={`logo-dup-${index}`} 
                className="logo-item grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image 
                  src={logo.path}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Simple CSS for scrolling animation */}
      <style jsx global>{`
        .logo-container {
          overflow: hidden;
          width: 100%;
          height: 100px;
          display: flex;
          align-items: center;
        }
        
        .logo-track {
          display: flex;
          animation: scroll 30s linear infinite;
          white-space: nowrap;
        }
        
        .logo-item {
          flex: 0 0 auto;
          width: 180px; /* Fixed width for each logo */
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 20px; /* Consistent spacing between logos */
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Move exactly half the width */
          }
        }
        
        @media (max-width: 768px) {
          .logo-item {
            width: 160px;
            margin: 0 15px;
          }
        }
        
        @media (max-width: 640px) {
          .logo-item {
            width: 140px;
            margin: 0 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoBanner; 