// components/Navbar.tsx
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { X } from "lucide-react";
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

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/ServicesSection" },
    { name: "Top Properties", href: "/topProperties" },
    { name: "Contact Us", href: "/contact" },
    { name: "Book a Meeting", action: () => setIsBookMeetingOpen(true) },
    { name: "About Us", href: "/about" },
    { name: "Find a Property", action: () => setIsFindPropertyOpen(true) },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const backgroundClass =
    transparent && !isScrolled
      ? "bg-transparent"
      : "bg-white shadow-md";

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${backgroundClass}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
          <img
            src={logo}
            onClick={() => navigate("/")}
            alt="Logo"
            className="h-14 md:h-20 cursor-pointer py-2"
          />
          <ul className="hidden md:flex gap-10 text-[var(--secondary-color)] text-md">
            {navItems.map((item, index) =>
              item.href ? (
                <li key={index}>
                  <a href={item.href} className="hover:text-[var(--primary-color)]">
                    {item.name}
                  </a>
                </li>
              ) : (
                <li key={index}>
                  <button
                    onClick={item.action}
                    className="hover:text-[var(--primary-color)]"
                  >
                    {item.name}
                  </button>
                </li>
              )
            )}
          </ul>
          <button className="md:hidden text-black" onClick={() => setMenuOpen(true)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <img src={logo} alt="Logo" className="h-14" />
            <button onClick={() => setMenuOpen(false)}><X className="w-6 h-6" /></button>
          </div>
          <div className="flex flex-col px-6 py-4 space-y-6 text-lg font-medium text-black">
            {navItems.map((item, index) =>
              item.href ? (
                <a key={index} href={item.href} onClick={() => setMenuOpen(false)} className="hover:text-blue-600">{item.name}</a>
              ) : (
                <button key={index} onClick={() => { item.action?.(); setMenuOpen(false); }} className="text-left hover:text-blue-600">{item.name}</button>
              )
            )}
          </div>
        </div>
      )}

      <FindPropertyModal isOpen={isFindPropertyOpen} onClose={() => setIsFindPropertyOpen(false)} />
      <BookMeetingModal isOpen={isBookMeetingOpen} onClose={() => setIsBookMeetingOpen(false)} />
    </>
  );
};

export default Navbar;
