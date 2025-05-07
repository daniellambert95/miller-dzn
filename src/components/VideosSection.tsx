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
    title: "Clap London Teaser",
    src: "/videos/Clap London Teaser 1.mp4",
    thumbnail: "/videos/Clap London Teaser 1.mp4",
    featured: false
  },
  {
    title: "CLAP IBZ NOW OPEN TEASER",
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
    title: "LS 3D Teaser",
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
    </section>
  );
};

export default VideosSection; 