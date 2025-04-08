import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiHouse } from "react-icons/gi";
import propertyData from "../data/offPlanData.json";
import Navbar from "../components/nav";

const OffplanPropertyCard: React.FC = () => {
  return (
    <div>
         <div className="mb-32">
      <Navbar/>
      </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
      {propertyData.map((property, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border shadow-md w-full overflow-hidden flex flex-col"
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
            <h2 className="text-md font-semibold text-gray-900 mb-2">{property.projectName}</h2>
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
              <button className="flex items-center text-green-600 font-medium text-sm">
                <FaWhatsapp className="mr-1" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default OffplanPropertyCard;
    