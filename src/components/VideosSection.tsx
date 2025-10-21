"use client";

import React, { useState, useRef } from 'react';
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import bunnyVideoLoader from '@/utils/videoLoader';
import bunnyImageLoader from '@/utils/imageLoader';

interface Video {
  title: string;
  src: string;
  thumbnail: string;
  featured: boolean;
}

const videos: Video[] = [
  {
    title: "Forged Irish Stout",
    src: "Forged Irish Stout Commercial - MDZN.mp4",
    thumbnail: "irish_stout_thumbnail.webp",
    featured: true
  },
  {
    title: "Ushuaia Dubai Trailer",
    src: "Michael Bibi Ushuaia Dubai Trailer.mp4",
    thumbnail: "ushuaia_thumbnail.webp",
    featured: false
  },
  {
    title: "Clap Ibiza Trailer",
    src: "CLAP IBZ NOW OPEN TEASER.mp4",
    thumbnail: "clap_ibiza_thumbnail.webp",
    featured: false
  },
  {
    title: "London Teaser",
    src: "London Teaser 2.mp4",
    thumbnail: "clap_london_thumbnail.webp", 
    featured: false
  },
  {
    title: "Summer sessions",
    src: "LS 3D Teaser.mp4",
    thumbnail: "summer_sessions_thumbnail.webp",
    featured: false
  },
  {
    title: "MDZN Amphitheatre",
    src: "MDZN AMPHITHEATRE_1.mp4",
    thumbnail: "ampitheatre_thumbnail.webp",
    featured: false
  }
];

const VideoCard = ({ video, onClick, selected }: { video: Video; onClick: (video: Video) => void; selected: boolean }) => {
  return (
    <div
      className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 flex items-center gap-4 p-3 mb-3 bg-[#04b9d6] min-h-20 border-2 ${selected ? 'border-black shadow-xl scale-105' : 'border-transparent'}`}
      onClick={() => onClick(video)}
    >
      {/* Thumbnail image instead of auto-playing video */}
      <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md border border-white">
        <img 
          src={bunnyImageLoader({ 
            src: `/images/${video.thumbnail}`, 
            width: 128, 
            quality: 40 
          })} 
          alt={`${video.title} thumbnail`}
          className="w-full h-full object-cover"
        />
      </div>
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
    <section id="videos" className="section bg-black py-20">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Videos</h2>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Featured Video */}
          <div ref={phoneRef} className="flex-1 flex flex-col items-center w-full lg:w-auto mb-8 lg:mb-0">
            <Iphone15Pro
              className="size-full max-w-[270px] max-h-[560px] mx-auto"
              videoSrc={bunnyVideoLoader(selectedVideo.src)}
            />
            <h3 className="text-2xl font-bold mt-4 text-center text-white">{selectedVideo.title}</h3>
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
          href="/contact"
          className="group relative mt-8 px-10 py-4 font-bold rounded-full text-center inline-flex items-center justify-center overflow-hidden bg-[#ff6b35] hover:bg-[#ff5722] transition-all duration-300 transform hover:scale-105 shadow-lg"
          aria-label="Get a free quote for your design project"
        >
          <span className="relative text-white z-10 flex items-center">
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