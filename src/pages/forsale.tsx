import React from "react";
import { FaBed, FaMapMarkerAlt, FaRulerCombined, FaWhatsapp } from "react-icons/fa";
import salesData from "../data/salesData.json";
import Navbar from "../components/nav";
import forsaleImage from "../assets/image.png"
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

const ForSale: React.FC = () => {
    const navigate=useNavigate()
  const handleCardClick = (property: any) => {
    // or navigate using react-router-dom if needed
    navigate(`/forsaleDetails/${encodeURIComponent(property.title)}`);

  };

  return (
    <div>
        <div className="mb-16 md:mb-24">
      <Navbar/>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
  <img src={forsaleImage} alt="" className="h-full w-full mb-8 object-cover" />

  {/* Centered "For Sale" text */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-gray-400 text-3xl md:text-5xl drop-shadow-lg">Properties for Sale</h1>
  </div>
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
          <div className="py-4 px-4 space-y-4">
            <h2 className="text-lg">{property.title}</h2>
            <div className="w-1/2 h-[1px] bg-black my-2" />

                        <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span className="flex items-center gap-1">
                <FaBed className="text-gray-500" />
                BR {property.bedrooms}
              </span>
              <span className="flex items-center gap-1">
                <FaRulerCombined className="text-gray-500" />
                {property.areaSqft} SqFt
              </span>
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-gray-500" />
                {property.location}
              </span>
            </div>

            <div className=" flex gap-10 text-black mb-3">
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
    <Footer/>
    </div>
  );
};

export default ForSale;
