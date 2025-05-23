import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propertiesData from "../data/offPlanData.json";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function PropertySlider() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className=" bg-white dark:bg-black py-10 font-raleway relative gradient-top">
      <h2 className="text-3xl md:text-5xl text-black dark:text-white mb-6 text-center font-thin">
        Off-Plan Properties
      </h2>
      <div className="w-full md:w-11/12 mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(isMobile
          ? propertiesData.slice(0, 4)
          : propertiesData.slice(0, 8)
        ).map((property) => (
          <div
            key={property.projectName}
            className="relative w-full h-[250px] sm:h-[300px] font-light hover:shadow-md hover:shadow-[var(--primary-color)] md:h-[250px] lg:h-[200px] overflow-hidden rounded-lg shadow-md"
          >
            {/* Property Image */}
            <img
              src={property.images.primary}
              alt={property.projectName}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />{" "}
            {/* Transparent Black Overlay */}
            {/* Property Name (Top Left) */}
            <div className="absolute top-2 left-2 text-white px-2 py-1 rounded-md text-sm sm:text-base">
              {property.projectName}
            </div>
            {/* Arrow Button (Bottom Right) */}
            <a
              href={`/offplan/${property.projectName}`}
              className="absolute bottom-2 right-2 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] border border-white rounded-lg text-white py-2 px-4 sm:px-5 sm:py-3 transition-transform inline-flex items-center justify-center"
            >
              <FaArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
      {/* View All Button */}
      <div className="flex items-center justify-center font-light">
        <a
          href="/OffplanPropertyCard"
          className="inline-block px-8 py-2 text-lg text-black font-light rounded-3xl hover:opacity-80 mt-6 bg-[var(--primary-color)] "
        >
          View All
        </a>
      </div>
         
    </div>
  );
}
