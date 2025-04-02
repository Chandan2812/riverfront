import React, { useEffect, useState } from "react";
import { FaGlobe, FaUserFriends, FaIndustry, FaExchangeAlt, FaBuilding } from "react-icons/fa";

const stats = [
  { value: "30+", label: "NATIONALITIES IN THE SALES TEAM", icon: <FaGlobe size={30} /> },
  { value: "100+", label: "BUYER NATIONALITIES", icon: <FaUserFriends size={30} /> },
  { value: "17+", label: "YEARS OF INDUSTRY EXPERIENCE", icon: <FaIndustry size={30} /> },
  { value: "800+", label: "TRANSACTIONS EVERY YEAR", icon: <FaExchangeAlt size={30} /> },
  { value: "20B+", label: "WORTH OF PROPERTY SOLD", icon: <FaBuilding size={30} /> },
];

const StatsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-10 bg-white dark:bg-gray-900">
      <div className="hidden md:flex max-w-6xl mx-auto px-4 justify-center text-center">
        {stats.map((stat, index) => (
          <div key={index} className="w-1/5 p-4 flex flex-col items-center">
            {stat.icon}
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">{stat.value}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 uppercase mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div className="md:hidden flex justify-center items-center relative overflow-hidden w-full h-32 bg-[#0e1c2c]">
        <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {stats.map((stat, index) => (
            <div key={index} className="min-w-full flex flex-col items-center text-center p-4 text-gray-600">
              {stat.icon}
              <h2 className="text-2xl font-semibold text-white">{stat.value}</h2>
              <p className="text-sm text-white uppercase mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;