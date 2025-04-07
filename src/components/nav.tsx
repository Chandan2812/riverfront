// components/Navbar.tsx
import React from "react";
import logo from "../assets/logo.png";
import { X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  onOpenBookMeeting: () => void;
  onOpenFindProperty: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBookMeeting, onOpenFindProperty }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/ServicesSection" },
    { name: "Top Properties", href: "/topProperties" },
    { name: "Contact Us", href: "/contact" },
    { name: "Book a Meeting", action: onOpenBookMeeting },
    { name: "About Us", href: "/about" },
    { name: "Find a Property", action: onOpenFindProperty },
  ];

  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
  
    // Check once on load
    handleScroll();
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]); // add location as dependency
  

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
          <img src={logo} onClick={() => navigate("/")} alt="Logo" className="h-14 md:h-20 cursor-pointer py-2" />
          <ul className="hidden md:flex gap-6 text-[var(--secondary-color)] text-md">
            {navItems.map((item, index) =>
              item.href ? (
                <li key={index}><a href={item.href} className="hover:text-[var(--primary-color)]">{item.name}</a></li>
              ) : (
                <li key={index}><button onClick={item.action} className="hover:text-[var(--primary-color)]">{item.name}</button></li>
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
    </>
  );
};

export default Navbar;
