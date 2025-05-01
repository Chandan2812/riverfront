import { useState, useEffect, useRef } from "react";
import Footer from "../components/footer";
import Navbar from "../components/nav";

const awardsData = [
  {
    givenBy: "EMAAR",
    awardName: "Emaar Annual Broker Awards",
    year: 2025,
    awardImage:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/614231/conversions/emaar-annual-broker-awards_trophy-resize_trophies.webp",
    image:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/614235/conversions/3-resize_gallery.webp",
  },
  {
    givenBy: "MERAAS",
    awardName: "Meraas Black Onyx Awards",
    year: 2024,
    awardImage:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/19690/conversions/meraas-black-onyx-awards_trophy-resize_trophies.webp",
    image:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/19696/conversions/opt_0004_DSC05038.jpg-resize_gallery.webp",
  },
  {
    givenBy: "EMAAR",
    awardName: "Emaar Broker Awards",
    year: 2023,
    awardImage:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/611784/conversions/emaar-broker-awards_trophy-resize_trophies.webp",
    image:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/611786/conversions/IMG_0802-resize_gallery.webp",
  },
  {
    givenBy: "DAMAC",
    awardName: "Damac Billionaire Club",
    year: 2022,
    awardImage:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/95818/conversions/damac-billionaire-club_trophy-resize_trophies.webp",
    image:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/95820/conversions/2-resize_gallery.webp",
  },
  {
    givenBy: "DAMAC",
    awardName: "Damac Award Q4 2021",
    year: 2021,
    awardImage:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/95815/conversions/damac-award-q4-2021_trophy-resize_trophies.webp",
    image:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/95817/conversions/1-resize_gallery.webp",
  },
];

export const AwardsPage = () => {
  const [activeYear, setActiveYear] = useState(2025);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      awardsData.forEach(({ year }) => {
        const section = document.getElementById(`year-${year}`);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 150) {
            setActiveYear(year);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white font-raleway font-thin">
      <div className="mb-32 md:mb-32">
        <Navbar />
      </div>

      {/* Sidebar and Main Content */}
      <div className="relative flex justify-center py-10 ">
        {/* Sidebar (Sticky Year Navigation) */}
        <div
          ref={sidebarRef}
          className="sticky top-36 left-0 h-fit w-20 md:w-28 py-4 bg-[#0D1B2A] text-white space-y-2"
        >
          {awardsData.map(({ year }) => (
            <button
              key={year}
              className={`w-full py-2 rounded-md text-lg font-semibold ${
                activeYear === year ? "bg-white text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                document
                  .getElementById(`year-${year}`)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-2/3 space-y-10 ml-4 md:ml-32">
          {awardsData.map(({ givenBy, awardName, year, awardImage, image }) => (
            <div key={year} id={`year-${year}`}>
              {/* Responsive Layout: Column on mobile, Grid on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 items-center border border-[var(--primary-color)] px-2 py-2 md:px-8 md:py-4 rounded-xl">
                {/* Award Image (Mobile: Above the main image) */}
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-lg md:text-2xl font-medium text-[var(--primary-color)]">
                    {givenBy}
                  </p>
                  <h2 className="text-md md:text-xl font-light text-gray-200">
                    {awardName}
                  </h2>
                  <p className="text-sm md:text-lg text-gray-300">{year}</p>
                  <img
                    src={awardImage}
                    alt={`Award for ${year}`}
                    className="mt-2 md:mt-4 rounded-lg w-20 h-20 md:w-32 md:h-32 bg-gray-100 p-2 border border-gray-200"
                  />
                </div>

                {/* Achievement Image (Appears below the award image on mobile) */}
                <div className="flex justify-center">
                  <img
                    src={image}
                    alt={`Achievement ${year}`}
                    className="rounded-lg w-2/3 h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
