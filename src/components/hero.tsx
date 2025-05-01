// components/HeroSection.tsx
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./nav";
import videoBg from "../assets/Hero_video.mp4";
import { ChevronDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeTab, setActiveTab] = useState("Buy");

  const tabs = ["Buy", "Rent", "Off Plan"];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
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
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar transparent />
      </div>

      {/* Text & Form Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-raleway font-thin">
          Find Your Dream Property in Dubai
        </h1>
        <i className="text-xl md:text-3xl mt-12 md:mt-14 font-thin font-raleway">
          Buy | Sell | Rent | Collaborate
        </i>

        <div className="mt-10 bg-[#121212]/90 p-4 md:p-6 rounded-xl shadow-xl w-[90%] md:w-[80%] lg:w-[60%] mx-auto text-black font-raleway">
          {/* Tabs */}
          <div className="flex space-x-4 justify-center mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm md:text-base rounded-full font-medium transition ${
                  activeTab === tab
                    ? "bg-[var(--primary-color)] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dropdowns and Search */}
          <div className="flex flex-wrap items-end gap-4 justify-between">
            {/* Property Type */}
            <div className="flex-1 min-w-[140px]">
              <label className="block text-sm text-white mb-1">
                Property Type
              </label>
              <div className="relative">
                <select className="w-full border rounded font-sans px-3 py-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]">
                  <option>Apartments</option>
                  <option>Villa</option>
                  <option>Townhouses</option>
                  <option>Penthouses</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                  size={18}
                />
              </div>
            </div>

            {/* Beds */}
            <div className="flex-1 min-w-[100px]">
              <label className="block text-sm text-white mb-1 font-sans">
                Beds
              </label>
              <div className="relative">
                <select className="w-full border rounded px-3 py-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                  size={18}
                />
              </div>
            </div>

            {/* Price */}
            <div className="flex-1 min-w-[140px]">
              <label className="block text-sm text-white mb-1">Price</label>
              <div className="relative">
                <select className="w-full border font-sans rounded px-3 py-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]">
                  <option>Below AED 500K</option>
                  <option>AED 500K-1M</option>
                  <option>AED 1M - 2M</option>
                  <option>AED 2M - 5M</option>
                  <option>Above AED 5M</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                  size={18}
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-2">
              <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:opacity-80 text-white px-6 py-2 rounded-md transition font-semibold w-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
