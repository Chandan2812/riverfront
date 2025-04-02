import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 w-full p-4 bg-transparent z-40 flex justify-between items-center">
        <button onClick={() => setIsOpen(true)} className="text-white text-xl z-50">
          <Menu size={30} />
        </button>
        <div className="absolute top-6 flex justify-center w-full">
          <h1 className="text-3xl font-bold text-white">UNIQUE PROPERTIES</h1>
        </div>

        <div className="absolute top-6 right-6 flex gap-4">
          <button className="border border-white px-4 py-2 rounded-full">Careers</button>
          <button className="flex items-center gap-2">
            🔍 Find a Property
          </button>
        </div>
              </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0D1B2A] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white text-xl"
        >
          <X size={24} />
        </button>

        {/* Menu Items */}
        <div className="mt-16 p-6 space-y-4 text-lg">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">Off Plan</a>
          <a href="#" className="block">Resale</a>
          <a href="#" className="block">Rental</a>
          <a href="#" className="block">Services</a>
          <a href="#" className="block">Communities</a>
          <a href="#" className="block">Developers</a>
          <a href="#" className="block">Contact Us</a>
          <a href="#" className="block">Book a Meeting</a>
          <a href="#" className="block">Find a Property</a>
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
