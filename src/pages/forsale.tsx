import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import salesData from "../data/salesData.json";
import Navbar from "../components/nav";

const ForSale: React.FC = () => {
  const handleCardClick = (property: any) => {
    alert(`You clicked on: ${property.title}`);
    // or navigate using react-router-dom if needed
  };

  return (
    <div>
        <div className="mb-32">
      <Navbar/>
      </div>
    <div className=" w-full md:w-[90%] mx-auto p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-screen">
      {salesData.map((property, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition hover:scale-105"
          onClick={() => handleCardClick(property)}
        >
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-60 object-cover"
          />
          <div className="py-4 px-10 space-y-4">
            <h2 className="text-lg font-semibold">{property.title}</h2>
            <div className="w-10 h-[2px] bg-black my-2" />

            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>BR {property.bedrooms}</span>
              <span>{property.areaSqft} SqFt</span>
              <span>{property.location}</span>
            </div>

            <div className=" flex gap-10 text-black font-bold text-base mb-3">
              AED {property.priceAED.toLocaleString()}
              <a
              href={property.contact.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center text-green-600 hover:text-green-700 gap-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp
            </a>
            </div>

            
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ForSale;
