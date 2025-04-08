// components/HeroSection.tsx
import React from "react";
import bg from "../assets/hero.webp";
import Navbar from "./nav";

const HeroSection: React.FC = () => {

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}>
      <Navbar transparent />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Discover Your Dream Property in Dubai</h1>
      </div>
    </div>
  );
};

export default HeroSection;
