import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propertiesData from "../data/offPlanData.json";
import { FaArrowRight } from "react-icons/fa";

export default function PropertySlider() {
  return (
    <div className="max-w-6xl mx-auto p-2 mt-10">
      <h2 className="text-2xl md:text-4xl text-gray-800 mb-6 text-center">
        <i>Off-Plan Properties</i>
      </h2>
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3">
        {propertiesData.slice(0, 8).map((property) => (
          <div
            key={property.projectName}
            className="relative w-full h-[250px] sm:h-[300px] md:h-[250px] lg:h-[200px] overflow-hidden rounded-lg shadow-md"
          >
            {/* Property Image */}
            <img
              src={property.images.primary}
              alt={property.projectName}
              className="w-full h-full object-cover"
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
              className="absolute bottom-2 right-2 border border-white rounded-lg text-white py-2 px-4 sm:px-5 sm:py-3 transition-transform inline-flex items-center justify-center"
            >
              <FaArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
      {/* View All Button */}
      <div className="flex items-center justify-center">
        <a
          href="/OffplanPropertyCard"
          className="inline-block px-8 py-2 text-lg text-white bg-[--primary-color] rounded-3xl hover:opacity-80 mt-6"
        >
          View All
        </a>
      </div>
    </div>
  );
}
