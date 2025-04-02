import { useState } from "react";
import { X, Menu, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      {/* Navbar Container */}
      <div className="w-[90%] mx-auto p-4 bg-transparent flex justify-between items-center">
        
        {/* Left: Menu Button (Visible on Desktop, Hidden on Mobile) */}
        <button onClick={() => setIsOpen(true)} className="text-white text-xl md:block hidden">
          <Menu size={30} />
        </button>

        {/* Center: Only "RIVERFRONT" is visible on Mobile */}
        <h1 className="text-3xl md:ml-48 font-bold text-white cursor-pointer mx-auto md:mx-0" onClick={() => navigate('/')}>
          RIVERFRONT
        </h1>

        {/* Right Section (Hidden on Mobile) */}
        <div className="hidden md:flex gap-4 items-center">
          <button className="border border-white text-white px-4 py-1 rounded-full">Careers</button>
          <button className="flex items-center gap-2 text-white">
            <Search size={24} strokeWidth={2} className="text-white" /> Find a Property
          </button>
        </div>
      </div>

      {/* Horizontal Line (Only on Desktop) */}
      <div className="w-[90%] mx-auto border-t border-gray-100 my-2 hidden md:block"></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-[70%] md:w-[30%] bg-[#0D1B2A] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
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
            "Communities",
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

      {/* Background Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
      )}
    </div>
  );
}
