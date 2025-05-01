import React, { useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiHouse } from "react-icons/gi";
import propertyData from "../data/offPlanData.json";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import HaveAQuestion from "../components/HaveAQuestion";

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
    <div className="bg-black font-raleway">
      <div className="mb-16 md:mb-32 pt-5">
        <Navbar />
      </div>
      <h1 className="w-[90%] mx-auto text-2xl md:text-4xl text-center mb-5 md:mb-8 pt-6 text-white font-thin">
        Off-Plan Properties in Dubai: Your Guide to Future Real Estate
        Investments
      </h1>

      {/* Filters */}
      <div className="w-full md:w-[90%] mx-auto px-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between">
        <div className="flex flex-col w-full">
          <label className="mb-1 text-white">Location</label>
          <input
            type="text"
            placeholder="Search by project or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-[var(--primary-color)] px-4 py-2 rounded-md bg-transparent text-white"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-1 text-white">Developers</label>
          <select
            value={developerFilter}
            onChange={(e) => setDeveloperFilter(e.target.value)}
            className="border border-[var(--primary-color)] px-4 py-2 rounded-md w-full bg-black text-white"
          >
            <option value="">All Developers</option>
            {allDevelopers.map((dev, idx) => (
              <option key={idx} value={dev}>
                {dev}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full">
          <label className="mb-1 text-white">Max Price (AED)</label>
          <input
            type="range"
            min={0}
            max={10000000}
            step={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            className="accent-[var(--primary-color)]"
          />
          <span className="text-sm text-gray-300 mt-1">
            AED {maxPrice.toLocaleString()}
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
              className="border border-gray-700 rounded-xl hover:shadow-[var(--primary-color)] shadow-md overflow-hidden cursor-pointer transition hover:scale-105"
            >
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={property.images.primary}
                  alt={property.projectName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg text-white mb-2 font-raleway font-thin">
                  {property.projectName}
                </h2>
                <hr className="border-black w-20 mb-3" />

                <div className="flex items-center justify-between text-sm text-gray-200 mb-3 font-raleway font-thin">
                  <div className="flex items-center gap-1">
                    <GiHouse className="text-xl" />
                    <span>{property.developer}</span>
                  </div>
                  <div className="flex items-center gap-1 text-right">
                    <HiOutlineLocationMarker className="text-xl" />
                    <span>{property.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg text-gray-200">
                    {property.price}
                  </span>
                  {whatsappNumber ? (
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-[var(--primary-color)] font-medium text-sm"
                    >
                      <FaWhatsapp className="w-7 h-7" />
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

      <HaveAQuestion />

      <Footer />
    </div>
  );
};

export default OffplanPropertyCard;
