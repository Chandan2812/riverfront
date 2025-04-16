import React, { useState, useEffect } from "react";
import logo from "../assets/logo-riverfront.png";
import { X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import FindPropertyModal from "./FindPropertyModal";
import BookMeetingModal from "./BookMeetingModal";
import {
  Home,
  Building2,
  Building,
  Landmark,
  Wrench,
  Newspaper,
  Phone,
  Calendar,
  Info,
  Search,
} from "lucide-react";

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
    transparent && !isScrolled
      ? "bg-transparent"
      : "bg-[var(--secondary-color)] shadow-md";
  const textColorClass =
    transparent && !isScrolled
      ? "text-white border border-white"
      : "text-white border border-white";
  const textColorClass2 =
    transparent && !isScrolled ? "text-white" : "text-white";

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
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${backgroundClass}`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2 md:py-0">
          {/* --- Desktop Layout --- */}
          <div className="hidden md:flex w-full py-2 items-center justify-between">
            {/* Left: Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`${textColorClass2}`}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Center: Logo */}
            <img
              src={logo}
              onClick={() => navigate("/")}
              alt="Logo"
              className="h-20 md:h-28 md:ml-44 cursor-pointer"
            />

            {/* Right: Contact Us + Find a Property */}
            <div className="flex gap-6 text-[var(--secondary-color)] text-md">
              <a
                href="/contact"
                className={`hover:text-[var(--primary-color)] rounded-full px-3 py-1 ${textColorClass}`}
              >
                Contact Us
              </a>
              <button
                onClick={() => setIsFindPropertyOpen(true)}
                className={`flex items-center gap-2 text-black ${textColorClass2}`}
              >
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
              className="h-20 cursor-pointer"
            />

            {/* Right: Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="text-[var(--primary-color)]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Background Blur */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Slide-in Menu */}
          <div className="relative w-full bg-[var(--secondary-color)] md:w-1/5 h-full flex flex-col">
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <img src={logo} alt="Logo" className="h-24" />
              <button onClick={() => setMenuOpen(false)}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="flex flex-col px-6 py-4 space-y-3 text-base text-[var(--primary-color)]">
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-hanken flex items-center gap-2 hover:text-[var(--primary-color)]"
              >
                <Home size={20} /> Home
              </a>
              <a
                href="/forsale"
                onClick={() => setMenuOpen(false)}
                className="font-hanken flex items-center gap-2 hover:text-[var(--primary-color)]"
              >
                <Building2 size={20} /> For Sale
              </a>
              <a
                href="/forrent"
                onClick={() => setMenuOpen(false)}
                className="font-hanken flex items-center gap-2 hover:text-[var(--primary-color)]"
              >
                <Building size={20} /> For Rent
              </a>
              <a
                href="/OffplanPropertyCard"
                onClick={() => setMenuOpen(false)}
                className="font-hanken flex items-center gap-2 hover:text-[var(--primary-color)]"
              >
                <Landmark size={20} /> Off-Plan
              </a>
              <a
                href="/ServicesSection"
                onClick={() => setMenuOpen(false)}
                className="font-hanken flex items-center gap-2 hover:text-[var(--primary-color)]"
              >
                <Wrench size={20} /> Services
              </a>
              <a
                href="/viewblogs"
                onClick={() => setMenuOpen(false)}
                className="font-hanken flex items-center gap-2 hover:text-[var(--primary-color)]"
              >
                <Newspaper size={20} /> Blog's
              </a>
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="font-hanken flex items-center gap-2 hover:text-[var(--primary-color)]"
              >
                <Phone size={20} /> Contact Us
              </a>
              <button
                onClick={() => {
                  setIsBookMeetingOpen(true);
                  setMenuOpen(false);
                }}
                className="font-hanken flex items-center gap-2 text-left hover:text-[var(--primary-color)]"
              >
                <Calendar size={20} /> Book a Meeting
              </button>
              <a
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="font-hanken flex items-center gap-2 hover:text-[var(--primary-color)]"
              >
                <Info size={20} /> About Us
              </a>
              <button
                onClick={() => {
                  setIsFindPropertyOpen(true);
                  setMenuOpen(false);
                }}
                className="font-hanken flex items-center gap-2 text-left hover:text-[var(--primary-color)]"
              >
                <Search size={20} /> Find a Property
              </button>
            </div>
          </div>
        </div>
      )}

      <FindPropertyModal
        isOpen={isFindPropertyOpen}
        onClose={() => setIsFindPropertyOpen(false)}
      />
      <BookMeetingModal
        isOpen={isBookMeetingOpen}
        onClose={() => setIsBookMeetingOpen(false)}
      />
    </>
  );
};

export default Navbar;
