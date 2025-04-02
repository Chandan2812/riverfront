import { useState } from "react";
import { X, Menu, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:block hidden">
      {/* Top Navbar - Centered & 80% Width */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[80%] p-4 bg-transparent z-40 flex justify-between items-center">
        <button onClick={() => setIsOpen(true)} className="text-white text-xl z-50">
          <Menu size={30} />
        </button>

        {/* Centered Title */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <h1 className="text-3xl font-bold text-white">RIVERFRONT</h1>
        </div>

        {/* Right Section: Careers & Search */}
        <div className="absolute top-4 right-6 flex gap-4 items-center">
          <button className="border border-white text-white px-4 py-1 rounded-full">Careers</button>
          <button className="flex items-center gap-2 text-white">
            <Search size={24} strokeWidth={2} className="text-white" /> Find a Property
          </button>
        </div>
      </div>

      {/* Horizontal Line Below Navbar */}
      <div className="fixed top-[60px] left-1/2 transform -translate-x-1/2 w-[80%] border-t border-gray-100 z-30"></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[30%] bg-[#0D1B2A] text-white transform ${
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

        {/* Sidebar Header */}
        <div className="mt-8">
          <h1 className="text-2xl font-bold px-4">RIVERFRONT</h1>
          <div className="w-full border-t border-gray-500 my-4"></div> {/* Horizontal Line */}
        </div>

        {/* Menu Items */}
        <div className="p-6 space-y-4 text-lg">
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
