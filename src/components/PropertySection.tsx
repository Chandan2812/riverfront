import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import propertiesData from "../data/propertiesData.json";

const PropertySection = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl md:text-4xl text-gray-800 mb-6 text-center">
        Dubai Top Properties
      </h2>

      <div className="mx-auto w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" /> {/* Transparent Black Overlay */}
            

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
    </div>
  );
};

export default PropertySection;
