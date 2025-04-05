import { useEffect, useState } from "react";
import { X, Menu, Search, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isFindPropertyOpen, setIsFindPropertyOpen] = useState(false);
    const [isBookMeetingOpen, setIsBookMeetingOpen] = useState(false);
    const navigate = useNavigate();
    const [isSticky, setIsSticky] = useState(false);
    const [step, setStep] = useState(1);
  const [selectedBHK, setSelectedBHK] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState<string | null>(null);

   // Detect scroll position to change navbar background color
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* Navbar Container (Desktop Only) */}

      <div
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isSticky ? "bg-[var(--primary-color)] shadow-md" : "bg-transparent"
        }`}
      >
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
          <button className="border border-white text-white px-4 py-1 rounded-full" onClick={()=>navigate("/contact")}>
            Contact Us
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
      </div>
      {/* Bottom Navigation (Mobile Only) */}
      <div className="fixed z-50 bottom-0 left-0 w-full bg-[#0D1B2A] text-white flex justify-around py-3 md:hidden items-center backdrop-blur-sm pb-safe"
  style={{ WebkitTransform: 'translate3d(0, 0, 0)' }}>


        <button onClick={() => setIsSidebarOpen(true)} className="flex flex-col items-center">
          <Menu size={24} />
          <span className="text-xs">Menu</span>
        </button>

        <button onClick={() => setIsFindPropertyOpen(true)} className="flex flex-col items-center">
          <Search size={24} />
          <span className="text-xs">Find a Property</span>
        </button>

        <button onClick={() => setIsBookMeetingOpen(true)} className="flex flex-col items-center">
          <Video size={24} />
          <span className="text-xs">Book a Meeting</span>
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-[70%] md:w-[30%] z-50 bg-[#0D1B2A] text-white transform ${
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
        <div className="mt-8 px-4 z-500">
          <h1 className="text-2xl font-bold">RIVERFRONT</h1>
          <div className="w-full border-t border-gray-500 my-4"></div>
        </div>

        {/* Menu Items */}
        <div className="p-6 space-y-4 text-lg">
        {[
            { name: "Home", path: "/" },
            { name: "Off Plan", path: "/OffPlanProperties" },
            { name: "Services", path: "/ServicesSection" },
            { name: "Top Properties", path: "/topProperties" },
            { name: "Contact Us", path: "/contact" },
            { name: "Book a Meeting", path: "#", action: () => {
              setIsBookMeetingOpen(true); // open modal
            }  },
            { name: "About Us", path: "/about" },
            { name: "Find a Property", path: "#", action: () => {
              setIsFindPropertyOpen(true); // Open the Find a Property modal
            } },
          ].map(({ name, path,action }) => (
            <button
      key={name}
      onClick={() => {
        if (action) {
          action(); // Call the action function if it exists
        } else {
          navigate(path);
        }
        setIsSidebarOpen(false);
      }}
      className="block w-full text-left"
    >
              {name}
            </button>
          ))}
        </div>
      </div>

      {isFindPropertyOpen && (
  <div className="fixed inset-0 bg-[var(--primary-color)] flex flex-col justify-center items-center z-50">
    {/* Fixed Top Section with Different Background */}
    <div className="w-full bg-gray-800 py-5 flex justify-center fixed top-0 left-0">
      {/* Close Button */}
      <button
        onClick={() => setIsFindPropertyOpen(false)}
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
          <button className="w-full bg-gray-500 text-white py-2 rounded-full text-lg">
            SUBMIT
          </button>
        </>
      )}
    </div>
  </div>
)}

{isBookMeetingOpen && (
  <div className="fixed inset-0 bg-[var(--primary-color)] flex flex-col justify-center items-center z-50">
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

      <button className="w-2/3 bg-gray-500 text-white py-2 rounded-full text-lg">
        BOOK NOW
      </button>
    </div>
  </div>
)}



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
