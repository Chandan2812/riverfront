import React, { useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiHouse } from "react-icons/gi";
import propertyData from "../data/offPlanData.json";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import HaveAQuestion from "../components/HaveAQuestion";
import { Range } from "react-range";

const OffplanPropertyCard: React.FC = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [developerFilter, setDeveloperFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000000]);

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

      const matchesPrice =
        propertyPrice >= priceRange[0] && propertyPrice <= priceRange[1];

      return matchesSearch && matchesDeveloper && matchesPrice;
    });
  }, [searchTerm, developerFilter, priceRange]);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway">
      <div className="mb-16 md:mb-32 pt-5">
        <Navbar />
      </div>

      <h1 className="w-[90%] mx-auto text-2xl md:text-4xl text-center mb-5 md:mb-8 pt-6 font-thin">
        Off-Plan Properties in Dubai: Your Guide to Future Real Estate
        Investments
      </h1>

      {/* Filters */}
      <div className="w-full md:w-[90%] mx-auto px-4 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between">
        <div className="flex flex-col w-full">
          <label className="mb-1">Location</label>
          <input
            type="text"
            placeholder="Search by project or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-[var(--primary-color)] px-4 py-2 rounded-md bg-transparent text-black dark:text-white placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-1">Developers</label>
          <select
            value={developerFilter}
            onChange={(e) => setDeveloperFilter(e.target.value)}
            className="border border-[var(--primary-color)] px-4 py-2 rounded-md w-full bg-white dark:bg-black text-black dark:text-white"
          >
            <option value="">All Developers</option>
            {allDevelopers.map((dev, idx) => (
              <option key={idx} value={dev}>
                {dev}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full relative">
          <label className="mb-1 text-sm">Price (AED)</label>
          <div className="border border-[var(--primary-color)] rounded px-4 pt-2 pb-3 bg-white dark:bg-black">
            <div className="flex justify-between text-xs mb-1">
              <span>{`min ${priceRange[0].toLocaleString()}`}</span>
              <span>{`max ${priceRange[1].toLocaleString()}`}</span>
            </div>
            <div className="absolute left-4 right-4 bottom-0">
              <Range
                step={100000}
                min={0}
                max={5000000}
                values={priceRange}
                onChange={setPriceRange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-1 bg-gray-300 dark:bg-gray-700 rounded relative"
                    style={{
                      ...props.style,
                      background: `linear-gradient(to right, #ccc ${
                        (priceRange[0] / 5000000) * 100
                      }%, var(--primary-color) ${
                        (priceRange[0] / 5000000) * 100
                      }%, var(--primary-color) ${
                        (priceRange[1] / 5000000) * 100
                      }%, #ccc ${(priceRange[1] / 5000000) * 100}%)`,
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="w-4 h-4 bg-[var(--primary-color)] rounded-full shadow"
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Property Cards */}
      <div className="w-full md:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
        {filteredProperties.map((property, index) => {
          const whatsappNumber = property.contact?.number?.replace(/\D/g, "");

          return (
            <div
              key={index}
              onClick={() => handleCardClick(property.projectName)}
              className="border border-gray-300 dark:border-gray-700 rounded-xl hover:shadow-[var(--primary-color)] shadow-md overflow-hidden cursor-pointer transition hover:scale-105 bg-white dark:bg-black"
            >
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={property.images.primary}
                  alt={property.projectName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg mb-2 font-raleway font-light dark:font-thin">
                  {property.projectName}
                </h2>
                <hr className="border-black dark:border-white w-20 mb-3" />

                <div className="flex items-center justify-between text-sm mb-3 font-raleway font-light dark:font-thin text-gray-700 dark:text-gray-200">
                  <div className="flex items-center gap-1">
                    <GiHouse className="text-xl" />
                    <span>{property.developer}</span>
                  </div>
                  <div className="flex items-center gap-1 text-right">
                    <HiOutlineLocationMarker className="text-xl" />
                    <span>{property.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto text-gray-700 dark:text-gray-200">
                  <span className="text-lg">{property.price}</span>
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
                    <span className="text-sm text-gray-400 dark:text-gray-500">
                      No WhatsApp
                    </span>
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
