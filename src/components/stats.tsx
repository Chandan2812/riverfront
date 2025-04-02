import React, { useEffect, useRef, useState } from "react";
import { FaGlobe, FaUserFriends, FaIndustry, FaExchangeAlt, FaBuilding } from "react-icons/fa";

const stats = [
  { value: 30, label: "NATIONALITIES IN THE SALES TEAM", icon: <FaGlobe size={30} /> },
  { value: 100, label: "BUYER NATIONALITIES", icon: <FaUserFriends size={30} /> },
  { value: 17, label: "YEARS OF INDUSTRY EXPERIENCE", icon: <FaIndustry size={30} /> },
  { value: 800, label: "TRANSACTIONS EVERY YEAR", icon: <FaExchangeAlt size={30} /> },
  { value: 20, label: "WORTH OF PROPERTY SOLD", icon: <FaBuilding size={30} />, suffix: "B+" },
];

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setCurrentIndex(0); // Restart animation
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const durations = [1500, 2000, 1800, 2200, 2500];
    const steps = 50;

    stats.forEach((stat, index) => {
      let start = 0;
      const stepValue = Math.ceil(stat.value / steps);
      const duration = durations[index] / steps;

      const interval = setInterval(() => {
        start += stepValue;
        if (start >= stat.value) {
          start = stat.value;
          clearInterval(interval);
        }
        setAnimatedValues((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, duration);
    });
  }, [inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={sectionRef} className="w-full md:py-10 bg-white dark:bg-gray-900">
      {/* Desktop View */}
      <div className="hidden md:flex max-w-6xl mx-auto px-4 justify-center text-center">
        {stats.map((stat, index) => (
          <div key={index} className="w-1/5 p-4 flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-[var(--primary-color)] dark:text-white">
              {animatedValues[index]}{stat.suffix || "+"}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 uppercase mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div className="md:hidden flex justify-center items-center relative overflow-hidden w-full h-32 bg-[#0e1c2c]">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
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
