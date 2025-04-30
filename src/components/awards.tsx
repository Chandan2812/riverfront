import { useRef } from "react";

const awards = [
  {
    id: 1,
    name: "NASHAMA PROPERTIES",
    image:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/106043/conversions/nshama-top-agent_trophy-resize_trophies.webp",
  },
  {
    id: 2,
    name: "DUBAI PROPERTIES",
    image:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/95827/conversions/dubai-properties-top-broker-q1-2017_trophy-resize_trophies.webp",
  },
  {
    id: 3,
    name: "DUBAI SOUTH",
    image:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/95836/conversions/dubai-south-top-performer_trophy-resize_trophies.webp",
  },
  {
    id: 4,
    name: "EMAAR",
    image:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/614231/conversions/emaar-annual-broker-awards_trophy-resize_trophies.webp",
  },
  {
    id: 5,
    name: "MERAAS",
    image:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/19690/conversions/meraas-black-onyx-awards_trophy-resize_trophies.webp",
  },
  {
    id: 6,
    name: "DAMAC",
    image:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/95809/conversions/damac-broker-awards-2022_trophy-resize_trophies.webp",
  },
  {
    id: 7,
    name: "ALDAR",
    image:
      "https://uniqueproperties.ae/en/uploads/frontend/awards/1811/aldar-top-performer-2021_trophy.webp",
  },
];

const AwardsSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-full py-16 bg-black text-center cursor-pointer">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl text-white mb-10">
        Awards & Recognitions
      </h2>

      {/* Awards List - Scrollable */}
      <div className="max-w-6xl mx-auto overflow-hidden relative">
        <div
          ref={scrollRef}
          className="flex flex-nowrap overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {awards.map((award) => (
            <div
              key={award.id}
              className="flex flex-col items-center min-w-full md:min-w-[20%] snap-center"
            >
              <img
                src={award.image}
                alt={award.name}
                className="w-32 h-32 object-contain mb-4"
              />
              <p className="text-lg font-semibold text-gray-300">
                {award.name}
              </p>
              {/* Underline */}
              {/* <div className="w-48 h-[0.2px] bg-gray-300 mx-auto my-6"></div> */}
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <a
        href="/awards"
        className="inline-block px-8 py-2 text-lg text-white bg-[--primary-color] rounded-3xl hover:opacity-80 mt-10"
      >
        View All Awards
      </a>
    </div>
  );
};

export default AwardsSection;
