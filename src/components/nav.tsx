import { useState } from "react";
import { X, Menu, Search, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFindPropertyOpen, setIsFindPropertyOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      {/* Navbar Container (Desktop Only) */}
      <div className="w-[90%] mx-auto p-4 bg-transparent flex justify-between items-center">
        {/* Menu Button (Desktop) */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-white text-xl md:block hidden"
        >
          <Menu size={30} />
        </button>

        {/* Title */}
        <h1
          className="text-3xl md:ml-48 font-bold text-white cursor-pointer mx-auto md:mx-0"
          onClick={() => navigate("/")}
        >
          RIVERFRONT
        </h1>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex gap-4 items-center">
          <button className="border border-white text-white px-4 py-1 rounded-full">
            Careers
          </button>
          <button
            onClick={() => setIsFindPropertyOpen(true)}
            className="flex items-center gap-2 text-white"
          >
            <Search size={24} className="text-white" /> Find a Property
          </button>
        </div>
      </div>

      {/* Horizontal Line (Desktop) */}
      <div className="w-[90%] mx-auto border-t border-gray-100 my-2 hidden md:block"></div>

      {/* Bottom Navigation (Mobile Only) */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0D1B2A] text-white flex justify-around py-3 md:hidden items-center">
        <button onClick={() => setIsSidebarOpen(true)} className="flex flex-col items-center">
          <Menu size={24} />
          <span className="text-xs">Menu</span>
        </button>

        <button onClick={() => setIsFindPropertyOpen(true)} className="flex flex-col items-center">
          <Search size={24} />
          <span className="text-xs">Find a Property</span>
        </button>

        <button className="flex flex-col items-center">
          <Video size={24} />
          <span className="text-xs">Book a Meeting</span>
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-[70%] md:w-[30%] bg-[#0D1B2A] text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-4 right-4 text-white text-xl"
        >
          <X size={24} />
        </button>

        {/* Sidebar Header */}
        <div className="mt-8 px-4">
          <h1 className="text-2xl font-bold">RIVERFRONT</h1>
          <div className="w-full border-t border-gray-500 my-4"></div>
        </div>

        {/* Menu Items */}
        <div className="p-6 space-y-4 text-lg">
          {[
            "Home",
            "Off Plan",
            "Resale",
            "Rental",
            "Services",
            "Area Guide",
            "Developers",
            "Contact Us",
            "Book a Meeting",
            "Find a Property",
          ].map((item) => (
            <a key={item} href="#" className="block">
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Find a Property Modal */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center ${
          isFindPropertyOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-[#0D1B2A] w-[90%] md:w-[50%] p-6 rounded-lg relative">
          {/* Close Button */}
          <button
            onClick={() => setIsFindPropertyOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            <X size={24} />
          </button>

          {/* Modal Content */}
          <h2 className="text-white text-2xl font-bold text-center mb-4">
            FIND A PROPERTY
          </h2>

          {/* Property Type Buttons */}
          <div className="flex justify-center gap-2 mb-4">
            {["OFF-PLAN", "RESALE", "EXCLUSIVE", "RENTALS"].map((type) => (
              <button
                key={type}
                className="border border-white text-white px-3 py-1 rounded-full text-sm"
              >
                {type}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Put any Keyword..."
            className="w-full p-2 rounded bg-white text-black mb-4"
          />

          {/* Search Button */}
          <button className="w-full bg-gray-500 text-white py-2 rounded">
            SEARCH
          </button>
        </div>
      </div>

      {/* Background Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
