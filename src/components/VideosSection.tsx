"use client";

import React, { useState, useRef } from 'react';
import Iphone15Pro from "@/components/magicui/iphone-15-pro";

interface Video {
  title: string;
  src: string;
  thumbnail: string;
  featured: boolean;
}

const videos: Video[] = [
  {
    title: "Forged Irish Stout",
    src: "/videos/Forged Irish Stout Commercial - MDZN.mp4",
    thumbnail: "/videos/Forged Irish Stout Commercial - MDZN.mp4",
    featured: true
  },
  {
    title: "Ushuaia Dubai Trailer",
    src: "/videos/Michael Bibi Ushuaia Dubai Trailer.mp4",
    thumbnail: "/videos/Michael Bibi Ushuaia Dubai Trailer.mp4",
    featured: false
  },
  {
    title: "Clap Ibiza Trailer",
    src: "/videos/CLAP IBZ NOW OPEN TEASER.mp4",
    thumbnail: "/videos/CLAP IBZ NOW OPEN TEASER.mp4",
    featured: false
  },
  {
    title: "London Teaser",
    src: "/videos/London Teaser 2.mp4",
    thumbnail: "/videos/London Teaser 2.mp4",
    featured: false
  },
  {
    title: "Summer sessions",
    src: "/videos/LS 3D Teaser.mp4",
    thumbnail: "/videos/LS 3D Teaser.mp4",
    featured: false
  },
  {
    title: "MDZN Amphitheatre",
    src: "/videos/MDZN AMPHITHEATRE_1.mp4",
    thumbnail: "/videos/MDZN AMPHITHEATRE_1.mp4",
    featured: false
  }
];

const VideoCard = ({ video, onClick, selected }: { video: Video; onClick: (video: Video) => void; selected: boolean }) => {
  return (
    <div
      className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 flex items-center gap-4 p-3 mb-3 bg-[#04b9d6] min-h-20 border-2 ${selected ? 'border-black shadow-xl scale-105' : 'border-transparent'}`}
      onClick={() => onClick(video)}
    >
      {/* Small video preview */}
      <video
        className="w-16 h-16 object-cover rounded-md border border-white bg-black"
        src={video.src}
        muted
        loop
        playsInline
        autoPlay
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-bold text-white mb-1">{video.title}</h3>
        <p className="text-xs text-blue-100">Click to view</p>
      </div>
    </div>
  );
};

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0]);
  const phoneRef = useRef<HTMLDivElement>(null);

  // Helper to handle card click and scroll on mobile
  const handleCardClick = (video: Video) => {
    setSelectedVideo(video);
    if (window.innerWidth < 1024 && phoneRef.current) {
      phoneRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="videos" className="section bg-gray-50 py-20">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Videos</h2>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Featured Video */}
          <div ref={phoneRef} className="flex-1 flex flex-col items-center w-full lg:w-auto mb-8 lg:mb-0">
            <Iphone15Pro
              className="size-full max-w-[270px] max-h-[560px] mx-auto"
              videoSrc={selectedVideo.src}
            />
            <h3 className="text-2xl font-bold mt-4 text-center">{selectedVideo.title}</h3>
          </div>
          {/* Right: Vertical List of Video Cards */}
          <div className="flex-1 w-full max-w-md mx-auto flex flex-col">
            {videos.map((video, index) => (
              <VideoCard
                key={index}
                video={video}
                onClick={handleCardClick}
                selected={selectedVideo.src === video.src}
              />
            ))}
          </div>
        </div>
        
      </div>
      {/* CTA Button */}
      <div className="flex my-6 justify-center">
        <a 
          href="#contact" 
          className="group relative mt-8 px-10 py-3 font-medium rounded-full text-center inline-flex items-center justify-center overflow-hidden"
          aria-label="Get a free quote for your design project"
        >
          <span className="absolute inset-0 bg-gradient-to-tr from-rose-500 via-red-500 to-rose-600 transition-all duration-300 ease-out group-hover:scale-105"></span>
          <span className="absolute inset-0 bg-gradient-to-tr from-rose-600 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
          <span className="relative text-white font-semibold z-10 flex items-center">
            Free Quote!
            <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </a>
      </div>
      
    </section>
  );
};

export default VideosSection; 