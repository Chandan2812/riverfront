import React, { useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiHouse } from "react-icons/gi";
import propertyData from "../data/offPlanData.json";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import HeroImageSlider from "../components/ImageSlider";

const OffplanPropertyCard: React.FC = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [developerFilter, setDeveloperFilter] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000000);

  const handleCardClick = (projectName: string) => {
    navigate(`/offplan/${encodeURIComponent(projectName)}`);
  };

  // Get all unique developers
  const allDevelopers = useMemo(() => {
    return [...new Set(propertyData.map((item) => item.developer))];
  }, []);

  // Convert price string to number
  const parsePrice = (price: string): number => {
    const cleaned = price.replace(/[^\d]/g, "");
    return parseInt(cleaned, 10);
  };

  const filteredProperties = useMemo(() => {
    return propertyData.filter((property) => {
      const matchesSearch =
        property.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDeveloper = developerFilter
        ? property.developer === developerFilter
        : true;

      const propertyPrice = parsePrice(property.price);
      const matchesPrice = propertyPrice <= maxPrice;

      return matchesSearch && matchesDeveloper && matchesPrice;
    });
  }, [searchTerm, developerFilter, maxPrice]);

  return (
    <div>
      <div className="mb-16 md:mb-24">
        <Navbar />
      </div>
      <HeroImageSlider/>
      <h1 className="w-[90%] mx-auto text-2xl md:text-4xl text-center mb-5 md:mb-8">Off-Plan Properties in Dubai: Your Guide to Future Real Estate Investments</h1>

      {/* Filters */}
      <div className="w-full md:w-[90%] mx-auto px-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between">

        <input
          type="text"
          placeholder="Search by project or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-[var(--primary-color)] px-4 py-2 rounded-md"
        />

        <select
          value={developerFilter}
          onChange={(e) => setDeveloperFilter(e.target.value)}
          className="border border-[var(--primary-color)] px-4 py-2 rounded-md w-full"
        >
          <option value="">All Developers</option>
          {allDevelopers.map((dev, idx) => (
            <option key={idx} value={dev}>
              {dev}
            </option>
          ))}
        </select>

        <div className="flex flex-col w-full">
          <input
            type="range"
            min={0}
            max={10000000}
            step={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            className="accent-[var(--primary-color)]"
          />
          <span className="text-sm text-gray-600">
            Max Price: AED {maxPrice.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="w-full md:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
        {filteredProperties.map((property, index) => {
          const whatsappNumber = property.contact?.number?.replace(/\D/g, "");

          return (
            <div
              key={index}
              onClick={() => handleCardClick(property.projectName)}
              className="bg-white rounded-2xl border shadow-md w-full overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={property.images.primary}
                  alt={property.projectName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-md font-semibold text-gray-900 mb-2">
                  {property.projectName}
                </h2>
                <hr className="border-black w-20 mb-3" />

                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <GiHouse className="text-xl text-gray-500" />
                    <span>{property.developer}</span>
                  </div>
                  <div className="flex items-center gap-1 text-right">
                    <HiOutlineLocationMarker className="text-xl text-gray-500" />
                    <span>{property.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-md font-bold text-black">
                    {property.price}
                  </span>
                  {whatsappNumber ? (
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-green-600 font-medium text-sm"
                    >
                      <FaWhatsapp className="mr-1" />
                      WhatsApp
                    </a>
                  ) : (
                    <span className="text-sm text-gray-400">No WhatsApp</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-100 py-10 mt-10">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
    {/* Text */}
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Have a question?</h2>
      <p className="text-gray-600">Our team is happy to assist you</p>
    </div>

    {/* Contact Actions */}
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <button onClick={()=>navigate("/contact")} className="bg-[var(--primary-color)] hover:opacity-70 text-white px-6 py-2 rounded-md transition">
        Contact Us
      </button>
      <span className="text-lg font-medium text-gray-800">📞 +1 (800) 123-4567</span>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
};

export default OffplanPropertyCard;
