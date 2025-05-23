import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import propertiesData from "../data/propertiesData.json";

const PropertySection = () => {
  const navigate = useNavigate();

  return (
    <div id="property" className="container mx-auto py-10 mt-10">
      <h2 className="text-2xl md:text-4xl text-gray-800 mb-6 text-center">
        <i>Best Selling Properties</i>
      </h2>

      <div className="mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {propertiesData.map((property) => (
          <div
            key={property.slug}
            className="relative w-full h-[250px] sm:h-[300px] md:h-[250px] lg:h-[200px] overflow-hidden rounded-lg shadow-md"
          >
            {/* Property Image */}
            <img
              src={property.mainImage}
              alt={property.name}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />{" "}
            {/* Transparent Black Overlay */}
            {/* Property Name (Top Left) */}
            <div className="absolute top-2 left-2 text-white px-2 py-1 rounded-md text-sm sm:text-base">
              {property.name}
            </div>
            {/* Arrow Button (Bottom Right) */}
            <button
              className="absolute bottom-2 right-2 border border-white rounded-lg text-white py-2 px-4 sm:px-5 sm:py-3 transition-transform"
              onClick={() => navigate(`/property/${property.slug}`)}
            >
              <FaArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
      {/* View All Button */}
      <div className="flex items-center justify-center">
        <button
          className="px-8 py-2 text-lg text-white bg-[--primary-color] rounded-3xl hover:opacity-80 mt-6"
          onClick={(e) => {
            e.stopPropagation(); // Prevent section click
            navigate("/topProperties");
          }}
        >
          View All Properties
        </button>
      </div>
    </div>
  );
};

export default PropertySection;
