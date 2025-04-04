import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "./nav";

const properties = [
  { id: 1, name: "Verdes by Haven 2", image: "https://uniqueproperties.ae/en/uploads/frontend/projects/615034/conversions/verdes-by-haven-2-resize.webp" },
  { id: 2, name: "Terra Golf Collection", image: "/images/property2.jpg" },
  { id: 3, name: "One by Nine", image: "/images/property3.jpg" },
  { id: 4, name: "Binghatti Mercedes-Benz Places", image: "/images/property4.jpg" },
  { id: 5, name: "LIV Waterside", image: "https://uniqueproperties.ae/en/uploads/frontend/projects/615034/conversions/verdes-by-haven-2-resize.webp" },
  { id: 6, name: "Le Boutique at Al Jaddaf", image: "/images/property6.jpg" },
  { id: 7, name: "Mered Iconic Tower", image: "/images/property7.jpg" },
  { id: 8, name: "Gharsi 1 Residences", image: "/images/property8.jpg" },
];

export default function OffPlanProperties() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="w-full">
        <Navbar />
     

      {/* Hero Section */}
      <div
        className="relative w-full h-[380px] bg-cover bg-center"
        style={{ backgroundImage: "url('https://uniqueproperties.ae/en/frontend/assets/images/banner/homeBg.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
          <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
            Off Plan Properties in Dubai
          </h1>

          {/* Filter Section */}
          <div className="bg-white shadow-md p-3 rounded-lg mt-4 w-full max-w-3xl">
            {/* Mobile View (Expandable Filters) */}
            {isMobile ? (
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Enter Location"
                  className="border p-2 rounded-l-md flex-1"
                />
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="border p-2 bg-gray-200"
                >
                  {isExpanded ? <FaMinus /> : <FaPlus />}
                </button>
                <button className="bg-black text-white px-2 py-2 rounded-r-md">
                  Find Now
                </button>
              </div>
            ) : (
              /* Desktop View (Full Filters Always Visible) */
              <div className="flex flex-wrap gap-2">
                <input type="text" placeholder="Enter Location" className="border p-2 rounded-md w-40" />
                <select className="border p-2 rounded-md">
                  <option>Community Name</option>
                </select>
                <select className="border p-2 rounded-md">
                  <option>Developer</option>
                </select>
                <select className="border p-2 rounded-md">
                  <option>Property Type</option>
                </select>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Find Now</button>
              </div>
            )}

            {/* Expanded Filters for Mobile View */}
            {isMobile && isExpanded && (
              <div className="bg-white shadow-md p-3 mt-2 rounded-lg w-full transition-all duration-300">
                <select className="border p-2 rounded-md w-full mb-2">
                  <option>Community Name</option>
                </select>
                <select className="border p-2 rounded-md w-full mb-2">
                  <option>Developer</option>
                </select>
                <select className="border p-2 rounded-md w-full">
                  <option>Property Type</option>
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* View Switch & Sorting */}
      {/* <div className="container w-[90%] mx-auto p-6 flex justify-between items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-md ${view === "grid" ? "bg-black text-white" : "bg-gray-200"}`}
          >
            <FaTh />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-md ${view === "list" ? "bg-black text-white" : "bg-gray-200"}`}
          >
            <FaList />
          </button>
        </div>
        <div>
          <label className="mr-2">Sort By:</label>
          <select className="border p-2 rounded-md">
            <option>New Launches</option>
          </select>
        </div>
      </div> */}

      {/* Properties Section */}
      <div
        className={`w-[90%] container mt-14 mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
      >
        {properties.map((property) => (
          <div key={property.id} className="bg-white shadow-lg rounded-md overflow-hidden">
            <img src={property.image} alt={property.name} className="w-full h-60 md:h-60 object-cover" />
            <div className="p-3">
              <h3 className="font-bold text-lg">{property.name}</h3>
              <button className="mt-2 bg-gray-200 p-2 rounded-md w-full">View Details</button>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}
