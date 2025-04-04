
import { useNavigate } from "react-router-dom";
import properties from "../data/propertiesData.json"; // Importing the JSON file
import HeroSection from "../components/hero";
import Footer from "../components/footer";

function TopProperties() {
  const navigate = useNavigate();

  return (
    <div>
      <HeroSection />
      <div className="p-6 w-[80%] mx-auto">
        <div className="space-y-6">
          {properties.map((property) => (
            <div
              key={property.slug}
              className="flex bg-gray-100 shadow-md p-6 rounded-xl transition h-60"
            >
              {/* Property Image - 50% width, fixed height */}
              <div className="w-1/2 h-full">
                <img
                  src={property.mainImage}
                  alt={property.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
  
              {/* Property Info */}
              <div className="w-1/2 pl-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{property.name}</h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {property.shortDescription}
                  </p>
                </div>
                <button
                  className="mt-4 px-4 py-2 rounded-lg text-white w-auto self-start"
                  style={{ backgroundColor: "var(--primary-color)" }}
                  onClick={() => navigate(`/property/${property.slug}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
  

  
}

export default TopProperties;
