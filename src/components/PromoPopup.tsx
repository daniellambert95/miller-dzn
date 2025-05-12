'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Show popup after delay on every visit
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // 10 seconds delay
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {isVisible && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 transition-opacity duration-300"
          style={{
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div
            className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transition-transform duration-300"
            style={{
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
            }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-[#04b9d6]">
                First timers go free!
              </h2>
              <p className="text-gray-600 mb-4">
                If you&apos;re a first time customer of Miller Design your first poster is on us, that&apos;s a fully custom static flyer to your preference completely free.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Contact us to collect your creative!
              </p>
              <Link
                href="#contact-form"
                onClick={handleClose}
                className="group relative px-10 py-3 font-medium rounded-full text-center inline-flex items-center justify-center overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-tr from-rose-500 via-red-500 to-rose-600 transition-all duration-300 ease-out group-hover:scale-105"></span>
                <span className="absolute inset-0 bg-gradient-to-tr from-rose-600 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                <span className="relative text-white font-semibold z-10 flex items-center">
                  Claim Your Free Poster
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PromoPopup; 