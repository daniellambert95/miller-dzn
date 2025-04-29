import React from 'react';
import Iphone15Pro from "@/components/magicui/iphone-15-pro";

export function Iphone15ProDemo() {
  return (
    <div className="relative flex justify-center items-center">
      <Iphone15Pro
        className="size-full max-w-[270px] max-h-[560px]"
        videoSrc="https://videos.pexels.com/video-files/8946986/8946986-uhd_1440_2732_25fps.mp4"
      />
    </div>
  );
}

const VideosSection = () => {
  return (
    <section id="videos" className="section bg-gray-50 py-20">
      <div className="container-custom flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Videos</h2>
        <Iphone15ProDemo />
        <p className="mt-4 text-gray-500 text-center">Story-format videos will appear here soon.</p>
      </div>
    </section>
  );
};

export default VideosSection; 