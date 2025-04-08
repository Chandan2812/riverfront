import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiHouse } from "react-icons/gi";
import propertyData from "../data/offPlanData.json";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const OffplanPropertyCard: React.FC = () => {
  const navigate = useNavigate();
  const handleCardClick = (projectName: string) => {
    navigate(`/offplan/${encodeURIComponent(projectName)}`);
  };
  return (
    <div>
      <div className="mb-32">
        <Navbar />
      </div>
      <div className="w-full md:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
        {propertyData.map((property, index) => {
          const whatsappNumber = property.contact?.number?.replace(/\D/g, "");

          return (
            <div
              key={index}
              onClick={() => handleCardClick(property.projectName)}
              className="bg-white rounded-2xl border shadow-md w-full overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Top image */}
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={property.images.primary}
                  alt={property.projectName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom content */}
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-md font-semibold text-gray-900 mb-2">
                  {property.projectName}
                </h2>
                <hr className="border-black w-20 mb-3" />

                {/* Developer and Location */}
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

                {/* Price and WhatsApp */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-md font-bold text-black">{property.price}</span>
                  {whatsappNumber ? (
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
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
      <Footer/>
    </div>
  );
};

export default OffplanPropertyCard;
