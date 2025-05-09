import React, { useState, useMemo } from "react";
import {
  FaBed,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaWhatsapp,
} from "react-icons/fa";
import rentData from "../data/rentsData.json";
import Navbar from "../components/nav";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import HaveAQuestion from "../components/HaveAQuestion";
import { Range } from "react-range";

const ForRent: React.FC = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [areaRange, setAreaRange] = useState([500, 3000]);
  const [priceRange, setPriceRange] = useState([100000, 5000000]);

  const filteredProperties = useMemo(() => {
    return rentData.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBedrooms = bedrooms
        ? property.bedrooms == Number(bedrooms)
        : true;

      const matchesPrice =
        property.priceAED >= priceRange[0] &&
        property.priceAED <= priceRange[1];

      const matchesArea =
        property.areaSqft >= areaRange[0] && property.areaSqft <= areaRange[1];

      return matchesSearch && matchesBedrooms && matchesPrice && matchesArea;
    });
  }, [searchTerm, bedrooms, priceRange, areaRange]);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <div className="mb-16 md:mb-32 pt-5">
        <Navbar />
      </div>

      {/* Filters */}
      <div className="w-full md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-6">
        {/* Location */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-sm">Location</label>
          <input
            type="text"
            placeholder="Search by title or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white dark:bg-black border border-gray-400 dark:border-gray-600 px-4 py-2 rounded text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
        </div>

        {/* Property Type */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-sm">Property Type</label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="bg-white dark:bg-black border border-gray-400 dark:border-gray-600 px-4 py-2 rounded text-black dark:text-white"
          >
            <option value="">Any</option>
            <option value="1">Apartment</option>
            <option value="2">Villa</option>
            <option value="3">Townhouse</option>
          </select>
        </div>

        {/* Area Range */}
        <div className="flex flex-col w-full relative">
          <label className="mb-1 text-sm">Area</label>
          <div className="border border-gray-400 dark:border-gray-600 rounded px-4 pt-2 pb-2 bg-white dark:bg-black">
            <div className="flex justify-between text-xs mb-1">
              <span>{`min ${areaRange[0].toLocaleString()}`}</span>
              <span>{`max ${areaRange[1].toLocaleString()}`}</span>
            </div>
            <div className="absolute left-4 right-4 bottom-0">
              <Range
                step={100}
                min={500}
                max={3000}
                values={areaRange}
                onChange={setAreaRange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-1 rounded relative bg-gray-300 dark:bg-gray-700"
                    style={{
                      ...props.style,
                      background: `linear-gradient(to right, #ccc ${
                        ((areaRange[0] - 500) / (3000 - 500)) * 100
                      }%, var(--primary-color) ${
                        ((areaRange[0] - 500) / (3000 - 500)) * 100
                      }%, var(--primary-color) ${
                        ((areaRange[1] - 500) / (3000 - 500)) * 100
                      }%, #ccc ${
                        ((areaRange[1] - 500) / (3000 - 500)) * 100
                      }%)`,
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

        {/* Price Range */}
        <div className="flex flex-col w-full relative">
          <label className="mb-1 text-sm">Price (AED)</label>
          <div className="border border-gray-400 dark:border-gray-600 rounded px-4 pt-2 pb-2 bg-white dark:bg-black">
            <div className="flex justify-between text-xs mb-1">
              <span>{`min ${priceRange[0].toLocaleString()}`}</span>
              <span>{`max ${priceRange[1].toLocaleString()}`}</span>
            </div>
            <div className="absolute left-4 right-4 bottom-0">
              <Range
                step={100000}
                min={100000}
                max={5000000}
                values={priceRange}
                onChange={setPriceRange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-1 rounded relative bg-gray-300 dark:bg-gray-700"
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

      {/* Property Grid */}
      <div className="w-full md:w-[90%] mx-auto p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-screen">
        {filteredProperties.map((property, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-xl hover:shadow-[var(--primary-color)] shadow-md overflow-hidden cursor-pointer transition hover:scale-105 bg-white dark:bg-neutral-900"
            onClick={() =>
              navigate(`/forSaleDetails/${encodeURIComponent(property.title)}`)
            }
          >
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-60 object-cover"
            />
            <div className="py-4 px-4 space-y-4">
              <h2 className="text-lg font-raleway font-light dark:font-thin">
                {property.title}
              </h2>
              <div className="w-1/2 h-[1px] bg-black dark:bg-white my-2" />
              <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200 mb-2 font-raleway font-light dark:font-thin">
                <span className="flex items-center gap-1">
                  <FaBed />
                  BR {property.bedrooms}
                </span>
                <span className="flex items-center gap-1">
                  <FaRulerCombined />
                  {property.areaSqft} SqFt
                </span>
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt />
                  {property.location}
                </span>
              </div>
              <div className="flex gap-10 justify-between text-black dark:text-gray-200 mb-3">
                AED {property.priceAED.toLocaleString()}
                <a
                  href={property.contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center text-[var(--primary-color)] hover:opacity-80 gap-2"
                >
                  <FaWhatsapp className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <HaveAQuestion />
      <Footer />
    </div>
  );
};

export default ForRent;
