import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import bg from "../assets/hero.webp";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookMeetingOpen, setIsBookMeetingOpen] = useState(false);
  const [isFindPropertyOpen, setIsFindPropertyOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedBHK, setSelectedBHK] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState<string | null>(null);
  const navigate=useNavigate()

  const navItems: { name: string; href?: string; action?: () => void }[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/ServicesSection" },
    { name: "Top Properties", href: "/topProperties" },
    { name: "Contact Us", href: "/contact" },
    { name: "Book a Meeting", action: () => setIsBookMeetingOpen(true) },
    { name: "About Us", href: "/about" },
    { name: "Find a Property", action: () => setIsFindPropertyOpen(true) },
  ];

  const handleCloseFindProperty = () => {
    setIsFindPropertyOpen(false);
    setStep(1);
    setSelectedBHK(null);
    setSelectedBudget(null);
    setSelectedTimeframe(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
          <img src={logo} onClick={()=>navigate("/")} alt="Logo" className="h-14 md:h-20 cursor-pointer py-2" />

          <ul className="hidden md:flex gap-6 text-[var(--secondary-color)] font-semibold text-md">
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

          <button
            className="md:hidden text-black"
            onClick={() => setMenuOpen(true)}
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
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <img src={logo} alt="Logo" className="h-14" />
            <button onClick={() => setMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col px-6 py-4 space-y-6 text-lg font-medium text-black">
            {navItems.map((item, index) =>
              item.href ? (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-600"
                >
                  {item.name}
                </a>
              ) : (
                <button
                  key={index}
                  onClick={() => {
                    item.action?.();
                    setMenuOpen(false);
                  }}
                  className="text-left hover:text-blue-600"
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* HERO TEXT (optional) */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Discover Your Dream Property in Dubai
        </h1>
      </div>

      {isFindPropertyOpen && (
  <div className="fixed inset-0 bg-[var(--secondary-color)] flex flex-col justify-center items-center z-50">
    {/* Fixed Top Section with Different Background */}
    <div className="w-full bg-gray-800 py-5 flex justify-center fixed top-0 left-0">
      {/* Close Button */}
      <button
        onClick={handleCloseFindProperty}
        className="text-white border border-white rounded-full p-2 transition-all"
      >
        <X size={28} />
      </button>
    </div>

    {/* Modal Content - Adjusted for Fixed Top Bar */}
    <div className="bg-[#0D1B2A] w-[90%] md:w-[50%] p-8 rounded-lg text-center mt-20">
      <h2 className="text-white text-3xl font-bold mb-6">FIND A PROPERTY</h2>
      
      {step === 1 && (
        <>
          <h3 className="text-white text-lg mb-4">Which type of property are you interested in?</h3>
          <div className="flex justify-center gap-2 mb-4">
            {["3BHK", "4BHK", "5BHK"].map((bhk) => (
              <button
                key={bhk}
                onClick={() => {
                    setStep(2);
                    setSelectedBHK(bhk);
                  }}
                className={`border border-white px-4 py-2 rounded-full text-sm transition-all ${
                  selectedBHK === bhk ? "bg-white text-black" : "text-white"
                }`}
              >
                {bhk}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h3 className="text-white text-lg mb-4">What is your preferred budget range?</h3>
          <div className="flex justify-center gap-2 mb-4">
            {["5-5.9 Million", "6 Million and above"].map((budget) => (
              <button
                key={budget}
                onClick={() => {
                    setStep(3);
                    setSelectedBudget(budget);
                  }}
                className={`border border-white px-4 py-2 rounded-full text-sm transition-all ${
                  selectedBudget === budget ? "bg-white text-black" : "text-white"
                }`}
              >
                {budget}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h3 className="text-white text-lg mb-4">When are you looking to purchase?</h3>
          <div className="flex justify-center gap-2 mb-4">
            {["0-3 Months", "3-9 Months", "Over a year"].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => {
                    setStep(4);
                    setSelectedTimeframe(timeframe);
                  }}
                className={`border border-white px-4 py-2 rounded-full text-sm transition-all ${
                  selectedTimeframe === timeframe ? "bg-white text-black" : "text-white"
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h3 className="text-white text-lg mb-4">Enter Your Contact Details</h3>
          <input type="text" placeholder="First Name" className="w-full p-3 rounded bg-white mb-2" />
          <input type="text" placeholder="Last Name" className="w-full p-3 rounded bg-white mb-2" />
          <input type="text" placeholder="Phone" className="w-full p-3 rounded bg-white mb-2" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-white mb-4" />
          <button className="w-full bg-[var(--primary-color)] hover:bg-[#e6a330] text-white py-2 rounded-full text-lg">
            SUBMIT
          </button>
        </>
      )}
    </div>
  </div>
)}

{isBookMeetingOpen && (
  <div className="fixed inset-0 bg-[var(--secondary-color)] flex flex-col justify-center items-center z-50">
    {/* Fixed Top Section */}
    <div className="w-full bg-gray-800 py-5 flex justify-center fixed top-0 left-0">
      <button
        onClick={() => setIsBookMeetingOpen(false)}
        className="text-white border border-white rounded-full p-2"
      >
        <X size={28} />
      </button>
    </div>

    {/* Modal Content */}
    <div className="bg-[#0D1B2A] w-[90%] md:w-[50%] p-8 rounded-lg text-center mt-20">
      <h2 className="text-white text-3xl font-bold mb-6">BOOK A MEETING</h2>

      <input
        type="text"
        placeholder="Your Name"
        className="w-2/3 p-3 rounded-full bg-transparent text-white mb-4 border border-white"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-2/3 p-3 rounded-full bg-transparent text-white mb-4 border border-white"
      />
      <input
        type="datetime-local"
        className="w-2/3 p-3 rounded-full bg-transparent text-white mb-4 border border-white"
      />

      <button className="w-2/3 bg-[var(--primary-color)] hover:bg-[#e6a330] text-white py-2 rounded-full text-lg">
        BOOK NOW
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default HeroSection;
