"use client";

import React from 'react';
import Image from 'next/image';
import bunnyImageLoader from '@/utils/imageLoader';

// Client logos and venue photos
const clientLogos = [
  { name: "Bourjois", path: "/client_logos/Bourjois.webp", isLogo: true },
  { name: "Cadillac", path: "/client_logos/Cadillac.webp", isLogo: true },
  { name: "CLAP", path: "/client_logos/CLAP.webp", isLogo: true },
  { name: "IHG", path: "/client_logos/IHG.webp", isLogo: true },
  { name: "IRis", path: "/client_logos/IRis.webp", isLogo: true },
  { name: "JA", path: "/client_logos/JA.webp", isLogo: true },
  { name: "JJBL", path: "/client_logos/JJBL.webp", isLogo: true },
  { name: "Schwepps", path: "/client_logos/Schwepps.webp", isLogo: true },
  { name: "Sony", path: "/client_logos/Sony.webp", isLogo: true },
  { name: "Surf Club", path: "/client_logos/Surf Club.webp", isLogo: true },
  { name: "Tiktok", path: "/client_logos/Tiktok.webp", isLogo: true },
  { name: "Ushuaia", path: "/client_logos/Ushuaia.webp", isLogo: true },
  { name: "White", path: "/client_logos/White.webp", isLogo: true },
  { name: "Be Beach", path: "/Be Beach.webp", isLogo: false },
  { name: "Coca Cola Arena", path: "/Coca Cola Arena.webp", isLogo: false },
  { name: "Conrad", path: "/Conrad.webp", isLogo: false },
  { name: "O Beach", path: "/O beach.webp", isLogo: false },
  { name: "SO Uptown", path: "/SO Uptown.webp", isLogo: false },
  { name: "Soho Garden", path: "/Soho Garden.webp", isLogo: false },
  { name: "Voco", path: "/Voco.webp", isLogo: false },
];

const LogoBanner = () => {
  return (
    <section className="py-10 bg-black overflow-hidden border-t border-b border-gray-800">

      {/* First Banner - Right to Left */}
      <div className="relative overflow-hidden">
        <div className="logo-container">
          <div className="logo-track">
            {/* First set of logos */}
            {clientLogos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="logo-item"
              >
                <Image
                  src={logo.path}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={40}
                  loading={index < 10 ? "eager" : "lazy"}
                  className={`object-contain ${logo.isLogo ? 'brightness-0 invert' : ''}`}
                  loader={bunnyImageLoader}
                />
              </div>
            ))}

            {/* Duplicate set for continuous scrolling */}
            {clientLogos.map((logo, index) => (
              <div
                key={`logo-dup-${index}`}
                className="logo-item"
              >
                <Image
                  src={logo.path}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={40}
                  loading="lazy"
                  className={`object-contain ${logo.isLogo ? 'brightness-0 invert' : ''}`}
                  loader={bunnyImageLoader}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Banner - Left to Right (Reverse) */}
      <div className="relative overflow-hidden mt-6">
        <div className="logo-container">
          <div className="logo-track-reverse">
            {/* First set of logos */}
            {clientLogos.map((logo, index) => (
              <div
                key={`logo-reverse-${index}`}
                className="logo-item"
              >
                <Image
                  src={logo.path}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={40}
                  loading={index < 10 ? "eager" : "lazy"}
                  className={`object-contain ${logo.isLogo ? 'brightness-0 invert' : ''}`}
                  loader={bunnyImageLoader}
                />
              </div>
            ))}

            {/* Duplicate set for continuous scrolling */}
            {clientLogos.map((logo, index) => (
              <div
                key={`logo-reverse-dup-${index}`}
                className="logo-item"
              >
                <Image
                  src={logo.path}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={40}
                  loading="lazy"
                  className={`object-contain ${logo.isLogo ? 'brightness-0 invert' : ''}`}
                  loader={bunnyImageLoader}
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
          animation: scroll 40s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }

        .logo-track-reverse {
          display: flex;
          animation: scroll-reverse 40s linear infinite;
          white-space: nowrap;
          will-change: transform;
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

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0); /* Move from left to right */
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