import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Search, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import FindPropertyModal from "./FindPropertyModal";
import BookMeetingModal from "./BookMeetingModal";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookMeetingOpen, setIsBookMeetingOpen] = useState(false);
  const [isFindPropertyOpen, setIsFindPropertyOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const backgroundClass =
  transparent && !isScrolled ? "bg-transparent" : "bg-white shadow-md";
const textColorClass =
  transparent && !isScrolled ? "text-white border border-white" : "text-black border border-black";
  const textColorClass2 =
  transparent && !isScrolled ? "text-white" : "text-black";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);
  

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${backgroundClass}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2 md:py-0">
          {/* --- Desktop Layout --- */}
          <div className="hidden md:flex w-full py-2 items-center justify-between">
            {/* Left: Hamburger */}
            <button onClick={() => setMenuOpen(true)} className={`${textColorClass2}`}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Center: Logo */}
            <img
              src={logo}
              onClick={() => navigate("/")}
              alt="Logo"
              className="h-14 md:h-20 md:ml-44 cursor-pointer"
            />

            {/* Right: Contact Us + Find a Property */}
            <div className="flex gap-6 text-[var(--secondary-color)] text-md">
              <a href="/contact" className={`hover:text-[var(--primary-color)] rounded-full px-3 py-1 ${textColorClass}`}>Contact Us</a>
              <button onClick={() => setIsFindPropertyOpen(true)} className={`flex items-center gap-2 text-black ${textColorClass2}`}>
              <Search size={24} /> Find a Property
              </button>
            </div>
          </div>

          {/* --- Mobile Layout --- */}
          <div className="flex md:hidden w-full items-center justify-between">
            {/* Left: Logo */}
            <img
              src={logo}
              onClick={() => navigate("/")}
              alt="Logo"
              className="h-14 cursor-pointer"
            />

            {/* Right: Hamburger */}
            <button onClick={() => setMenuOpen(true)} className="text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
  <div className="fixed inset-0 z-50">
    {/* Background Blur */}
    <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />

    {/* Slide-in Menu */}
    <div className="relative bg-white w-full md:w-1/2 h-full flex flex-col">
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <img src={logo} alt="Logo" className="h-14" />
        <button onClick={() => setMenuOpen(false)}><X className="w-6 h-6" /></button>
      </div>
      <div className="flex flex-col px-6 py-4 space-y-2 text-lg font-medium text-black">
        <a href="/" onClick={() => setMenuOpen(false)} className="hover:text-[var(--primary-color)]">Home</a>
        <a href="/forsale" onClick={() => setMenuOpen(false)} className="hover:text-[var(--primary-color)]">For Sale</a>
        <a href="/forrent" onClick={() => setMenuOpen(false)} className="hover:text-[var(--primary-color)]">For Rent</a>
        <a href="/OffplanPropertyCard" onClick={() => setMenuOpen(false)} className="hover:text-[var(--primary-color)]">Off-Plan</a>
        <a href="/ServicesSection" onClick={() => setMenuOpen(false)} className="hover:text-[var(--primary-color)]">Services</a>
        <a href="/topProperties" onClick={() => setMenuOpen(false)} className="hover:text-[var(--primary-color)]">Top Properties</a>
        <a href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[var(--primary-color)]">Contact Us</a>
        <button onClick={() => { setIsBookMeetingOpen(true); setMenuOpen(false); }} className="text-left hover:text-[var(--primary-color)]">Book a Meeting</button>
        <a href="/about" onClick={() => setMenuOpen(false)} className="hover:text-[var(--primary-color)]">About Us</a>
        <button onClick={() => { setIsFindPropertyOpen(true); setMenuOpen(false); }} className="text-left hover:text-[var(--primary-color)]">Find a Property</button>
      </div>
    </div>
  </div>
)}


      <FindPropertyModal isOpen={isFindPropertyOpen} onClose={() => setIsFindPropertyOpen(false)} />
      <BookMeetingModal isOpen={isBookMeetingOpen} onClose={() => setIsBookMeetingOpen(false)} />
    </>
  );
};

export default Navbar;
