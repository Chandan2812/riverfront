import { useState, useEffect } from "react";
import { FiMenu, FiSun, FiMoon } from "react-icons/fi";
import logo from "../assets/Logo for riverfront .png";
import FindPropertyModal from "./FindPropertyModal";
import BookMeetingModal from "./BookMeetingModal";
import { Search } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookMeetingOpen, setIsBookMeetingOpen] = useState(false);
  const [isFindPropertyOpen, setIsFindPropertyOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : true; // default to dark
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { label: "Buy", path: "/buy" },
    { label: "Sell", path: "/forsale" },
    { label: "Rent", path: "/forrent" },
    { label: "Off-Plan", path: "/OffplanPropertyCard" },
    { label: "Services", path: "/ServicesSection" },
    { label: "Property Advisors", path: "/AgentsSection" },
    { label: "Blogs", path: "/viewblogs" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const googleTranslateElementInit = () => {
      // @ts-ignore
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
    // Check if the script has already been added
    const loadGoogleTranslateScript = () => {
      if (!window.googleTranslateElementInit) {
        const script = document.createElement("script");
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
        window.googleTranslateElementInit = googleTranslateElementInit;
      }
    };

    loadGoogleTranslateScript();
  }, []);

  return (
    <>
      <nav className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin w-full fixed top-0 z-50 border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-28 items-center">
            {/* Mobile View */}
            <div className="flex items-center w-full justify-between md:hidden py-10">
              <a href="/">
                <img
                  src={logo}
                  alt=" Logo"
                  className="w-32"
                  draggable={false}
                />
              </a>
              <div className="flex gap-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-xl text-inherit"
                  title="Toggle Theme"
                >
                  {darkMode ? <FiSun /> : <FiMoon />}
                </button>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-inherit text-2xl"
                >
                  <FiMenu />
                </button>
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex w-full justify-between items-center">
              {/* Left logo and menu */}
              <div className="flex items-center space-x-4">
                <div className="h-20 flex items-center">
                  <a href="/">
                    <img
                      src={logo}
                      alt=" Logo"
                      className="w-44 py-2"
                      draggable={false}
                    />
                  </a>
                </div>
                <div className="border-l self-stretch border-gray-400"></div>
                <div className="flex items-center gap-8">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.path}
                      onClick={() => setActiveItem(item.label)}
                      className={`relative pb-2 text-sm text-inherit transition-colors hover:text-[var(--primary-color)] ${
                        activeItem === item.label ? "font-light text-md" : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right section */}
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-xl text-inherit transition-colors"
                  title="Toggle Theme"
                >
                  {darkMode ? <FiSun /> : <FiMoon />}
                </button>
                <button
                  onClick={() => setIsBookMeetingOpen(true)}
                  className="text-sm text-[var(--primary-color)] hover:underline font-light"
                >
                  Book a Meeting
                </button>
                <button
                  onClick={() => setIsFindPropertyOpen(true)}
                  className="flex items-center gap-1 text-sm text-[var(--primary-color)] hover:underline font-light"
                >
                  <Search size={18} />
                  <span>Find a Property</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-[9999] bg-white dark:bg-black flex flex-col pl-2 pr-5 pb-4">
            {/* Header with logo and close */}
            <div className="flex justify-between items-center">
              <img
                src={logo}
                alt=" Logo"
                className="w-28 pt-5"
                draggable={false}
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-inherit"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* Navigation items */}
            <div className="flex flex-col space-y-4 px-5 py-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  onClick={() => {
                    setActiveItem(item.label);
                    setIsOpen(false);
                  }}
                  className="text-lg text-inherit hover:text-[var(--primary-color)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Bottom row with icons */}
            {/* Bottom action box with 2 buttons side by side */}
            <div className="flex mt-6 border border-[var(--primary-color)] rounded-md overflow-hidden text-center">
              <button
                onClick={() => {
                  setIsBookMeetingOpen(true);
                  setIsOpen(false);
                }}
                className="w-1/2 py-3 text-sm text-[var(--primary-color)] hover:underline font-light border-r border-[var(--primary-color)]"
              >
                Book a Meeting
              </button>
              <button
                onClick={() => {
                  setIsFindPropertyOpen(true);
                  setIsOpen(false);
                }}
                className="w-1/2 py-3 flex items-center justify-center gap-1 text-sm text-[var(--primary-color)] hover:underline font-light"
              >
                <Search size={18} />
                <span>Find a Property</span>
              </button>
            </div>
          </div>
        )}
      </nav>
      {!isOpen && (
        <div
          id="google_translate_element"
          className="fixed z-[99] right-[90px] top-10 translate-x-0 md:right-[280px] md:top-[40px] md:-translate-x-1/2"
        />
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
