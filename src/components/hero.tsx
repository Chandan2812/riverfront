// components/HeroSection.tsx
import React, { useState } from "react";
import bg from "../assets/hero.webp";
import Navbar from "./nav";
import BookMeetingModal from "./BookMeetingModal";
import FindPropertyModal from "./FindPropertyModal";

const HeroSection: React.FC = () => {
  const [isBookMeetingOpen, setIsBookMeetingOpen] = useState(false);
  const [isFindPropertyOpen, setIsFindPropertyOpen] = useState(false);

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}>
      <Navbar
        onOpenBookMeeting={() => setIsBookMeetingOpen(true)}
        onOpenFindProperty={() => setIsFindPropertyOpen(true)}
      />
      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Discover Your Dream Property in Dubai</h1>
      </div>
      <FindPropertyModal isOpen={isFindPropertyOpen} onClose={() => setIsFindPropertyOpen(false)} />
      <BookMeetingModal isOpen={isBookMeetingOpen} onClose={() => setIsBookMeetingOpen(false)} />
    </div>
  );
};

export default HeroSection;
