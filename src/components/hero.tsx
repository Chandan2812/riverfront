// components/HeroSection.tsx
import React, { useEffect, useRef } from "react";
import Navbar from "./nav";
import videoBg from "../assets/Hero_video.mp4"; // Your background video

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 0.5x speed (slower)
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Navbar */}
      <Navbar transparent />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Find Your Dream Property in Dubai
        </h1>
        <i className="text-xl md:text-3xl mt-12 md:mt-14">Buy | Sell | Rent</i>
      </div>
    </div>
  );
};

export default HeroSection;
