import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propertiesData from "../data/rentsData.json";
import { FaArrowRight } from "react-icons/fa";

export default function ForSaleComponent() {
  return (
    <div className=" font-raleway bg-white dark:bg-black py-10">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl text-black dark:text-white mb-6 text-center font-thin">
        Properties for Rent
      </h2>

      {/* Property Grid */}
      <div className="md:max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {propertiesData.slice(0, 8).map((property) => (
          <div
            key={property.title}
            className="relative w-full h-[250px] sm:h-[300px] font-light hover:shadow-md hover:shadow-[var(--primary-color)] md:h-[250px] lg:h-[200px] overflow-hidden rounded-lg shadow-md bg-gray-100 dark:bg-neutral-900"
          >
            {/* Property Image */}
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            {/* Transparent Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />

            {/* Property Title */}
            <div className="absolute top-2 left-2 text-white px-2 py-1 rounded-md text-sm sm:text-base bg-black bg-opacity-30">
              {property.title}
            </div>

            {/* Arrow Button */}
            <a
              href={`/forsaleDetails/${property.title}`}
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
          href="/forsale"
          className="inline-block px-8 py-2 text-lg text-white font-light rounded-3xl hover:opacity-80 mt-6 bg-gradient-to-r from-[#f9f295] via-[#e0aa3e] to-[#faf398]"
        >
          View All
        </a>
      </div>
    </div>
  );
}
