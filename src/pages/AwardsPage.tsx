import { useState, useEffect, useRef } from "react";
import Footer from "../components/footer";
import HeroSection from "../components/hero";

const awardsData = [
  { year: 2025, title: "Global Excellence Award", description: "Recognized for outstanding innovation and leadership.", images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"] },
  { year: 2024, title: "Best Industry Leader", description: "Awarded for exceptional contributions to the industry.", images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"] },
  { year: 2023, title: "Top Business Innovator", description: "Acknowledged for innovative business strategies.", images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"] },
  { year: 2022, title: "Customer Choice Award", description: "Voted as the best service provider by customers.", images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"] },
  { year: 2021, title: "Market Leader Award", description: "Recognized for dominating the market in 2021.", images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"] },
  { year: 2020, title: "Excellence in Service", description: "Awarded for exceptional customer service and support.", images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"] },
  { year: 2019, title: "Innovation in Business", description: "Celebrated for groundbreaking business ideas.", images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"] },
  { year: 2018, title: "Corporate Responsibility Award", description: "Recognized for social responsibility and sustainability.", images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"] },
  { year: 2017, title: "Best Workplace Award", description: "Awarded for an excellent work environment and culture.", images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"] },
  { year: 2016, title: "Dubai Properties Top Achievement", description: "Recognized for outstanding real estate achievements.", images: ["https://via.placeholder.com/300", "https://via.placeholder.com/300"] },
];

export const AwardsPage = () => {
  const [activeYear, setActiveYear] = useState(2025);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      awardsData.forEach(({ year }) => {
        const section = document.getElementById(`year-${year}`);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 150) {
            setActiveYear(year);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Container to ensure sidebar starts below HeroSection */}
      <div className="relative flex justify-center my-10">
        {/* Sidebar (Sticky Year Navigation) */}
        <div ref={sidebarRef} className="sticky top-20 left-0 h-fit w-28 py-4 bg-[#0D1B2A] text-white space-y-2">
          {awardsData.map(({ year }) => (
            <button
              key={year}
              className={`w-full py-2 rounded-md text-lg font-semibold ${
                activeYear === year ? "bg-white text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                document.getElementById(`year-${year}`)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-2/3 space-y-16 ml-32">
          {awardsData.map(({ year, title, description, images }) => (
            <div key={year} id={`year-${year}`} className="p-8 border-b border-gray-300">
              <h2 className="text-3xl font-bold">{title} ({year})</h2>
              <p className="text-lg text-gray-600">{description}</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {images.map((img, index) => (
                  <img key={index} src={img} alt={`Award ${year}`} className="rounded-lg" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};
