import React, { useState, useMemo } from "react";
import {
  FaBed,
  FaMapMarkerAlt,
  FaRulerCombined,
  FaWhatsapp,
} from "react-icons/fa";
import salesData from "../data/salesData.json";
import Navbar from "../components/nav";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import HaveAQuestion from "../components/HaveAQuestion";

const ForSale: React.FC = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [priceRange, setPriceRange] = useState([0, 46000000]);

  const handleCardClick = (property: any) => {
    navigate(`/forsaleDetails/${encodeURIComponent(property.title)}`);
  };

  const filteredProperties = useMemo(() => {
    return salesData.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBedrooms = bedrooms
        ? property.bedrooms == Number(bedrooms)
        : true;
      const matchesBathrooms = bathrooms
        ? property.bathrooms == Number(bathrooms)
        : true;
      const matchesPrice =
        property.priceAED >= priceRange[0] &&
        property.priceAED <= priceRange[1];

      return (
        matchesSearch && matchesBedrooms && matchesBathrooms && matchesPrice
      );
    });
  }, [searchTerm, bedrooms, bathrooms, priceRange]);

  return (
    <div className="bg-black ">
      <div className="mb-16 md:mb-32 pt-5">
        <Navbar />
      </div>

      {/* Filters */}
      <div className="w-full md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 justify-between px-4 py-6">
        {/* Location / Search */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-white">Location</label>
          <input
            type="text"
            placeholder="Search by title or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-white placeholder:text-gray-500 border border-[var(--primary-color)] px-4 py-2 rounded-md"
          />
        </div>

        {/* Bedrooms */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-white">Bedrooms</label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="bg-black text-white border border-[var(--primary-color)] px-4 py-2 rounded-md"
          >
            <option value="">Select Bedrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>

        {/* Bathrooms */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-white">Bathrooms</label>
          <select
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            className="bg-black text-white border border-[var(--primary-color)] px-4 py-2 rounded-md"
          >
            <option value="">Select Bathrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="flex flex-col w-full">
          <label className="mb-1 text-white">Max Price</label>
          <input
            type="range"
            min={0}
            max={46000000}
            step={500000}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="accent-[var(--primary-color)]"
          />
          <span className="text-sm text-gray-300 mt-1">
            AED {priceRange[1].toLocaleString()}
          </span>
        </div>
      </div>

      {/* Property Grid */}
      <div className="w-full md:w-[90%] mx-auto p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-screen">
        {filteredProperties.map((property, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl hover:shadow-[var(--primary-color)] shadow-md overflow-hidden cursor-pointer transition hover:scale-105"
            onClick={() => handleCardClick(property)}
          >
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-60 object-cover"
            />
            <div className="py-4 px-4 space-y-4">
              <h2 className="text-lg text-white font-raleway font-thin">
                {property.title}
              </h2>
              <div className="w-1/2 h-[1px] bg-white my-2" />

              <div className="flex justify-between text-md text-gray-200 mb-2 font-raleway font-thin">
                <span className="flex items-center gap-1">
                  <FaBed className="text-gray-300" />
                  BR {property.bedrooms}
                </span>
                <span className="flex items-center gap-1">
                  <FaRulerCombined className="text-gray-200" />
                  {property.areaSqft} SqFt
                </span>
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-gray-200" />
                  {property.location}
                </span>
              </div>

              <div className="flex gap-10 text-gray-200 mb-3 font-thin justify-between">
                AED {property.priceAED.toLocaleString()}
                <a
                  href="https://wa.me/+971509863828"
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

export default ForSale;
