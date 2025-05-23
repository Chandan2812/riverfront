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
    <div className="w-full py-16 bg-white dark:bg-black text-center cursor-pointer font-raleway font-thin gradient-top relative">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl text-black dark:text-white mb-10">
        Awards & Recognitions
      </h2>

      {/* Awards List - Scrollable */}
      <div className="w-11/12 mx-auto overflow-hidden relative">
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
                draggable={false}
              />
              <p className="text-lg font-light text-gray-700 dark:text-gray-300">
                {award.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <a
        href="/awards"
        className="inline-block font-light px-8 py-2 text-lg text-black rounded-3xl hover:opacity-80 mt-10 bg-[var(--primary-color)]"
      >
        View All
      </a>
    </div>
  );
};

export default AwardsSection;
