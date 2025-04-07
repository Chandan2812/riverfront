
import { useNavigate } from "react-router-dom";
import properties from "../data/propertiesData.json"; // Importing the JSON file
import Footer from "../components/footer";
import HeroSection from "../components/hero";

function TopProperties() {
  const navigate = useNavigate();

  return (
    <div>
              <HeroSection/>
              <div className="w-full px-4 sm:px-6 md:w-[80%] md:mx-auto mb-10">

        <div className="space-y-6">
          {properties.map((property) => (
            <div
            key={property.slug}
            className="flex flex-col md:flex-row bg-gray-100 shadow-md p-4 md:p-6 rounded-xl transition md:h-[300px]"
          >
            <div className="w-full md:w-1/2 h-60 md:h-full">
              <img
                src={property.mainImage}
                alt={property.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          
            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">{property.name}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {property.shortDescription}
                </p>
              </div>
              <button
                className="mt-4 px-4 py-2 rounded-lg text-white w-full md:w-auto self-start"
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
