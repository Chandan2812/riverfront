// components/HeroImageSlider.tsx

import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import propertyData from "../data/offPlanData.json";

const HeroImageSlider: React.FC = () => {
  const navigate = useNavigate();

  const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-90 p-2 rounded-full shadow-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );

  const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-90 p-2 rounded-full shadow-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-full overflow-hidden mb-8 md:mb-10">
      <Slider {...settings}>
        {propertyData.slice(0, 7).map((property, idx) => (
          <div key={idx} className="relative w-full h-[40vh] md:h-[70vh]">
            <img
              src={property.images.primary}
              alt={property.projectName}
              className="w-full h-full object-cover"
              draggable={false}
            />

            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                {property.projectName}
              </h2>
              <p className="text-md md:text-xl text-white mb-4">
                by {property.developer}
              </p>
              <button
                onClick={() =>
                  navigate(
                    `/offplan/${encodeURIComponent(property.projectName)}`
                  )
                }
                className="bg-[var(--secondary-color)] text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-200 hover:text-[var(--secondary-color)] transition"
              >
                Discover More Details
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroImageSlider;
