import { useEffect, useRef, useState } from "react";
import blogsData from "../data/blogsData.json";
import "../index.css";

const RealStateInsights = () => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll to specific slide when clicking dots
  const scrollToSlide = (i: number) => {
    setIndex(i);
    const element = document.getElementById(`slide-${i}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  // Drag-to-scroll logic
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    isDown = true;
    carouselRef.current.classList.add("grabbing");
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    carouselRef.current?.classList.remove("grabbing");
  };

  const handleMouseUp = () => {
    isDown = false;
    carouselRef.current?.classList.remove("grabbing");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Auto update navigation dots on scroll
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;

    let closestIndex = 0;
    let closestOffset = Infinity;

    blogsData.forEach((_, i) => {
      const slide = document.getElementById(`slide-${i}`);
      if (!slide) return;

      const offset = Math.abs(slide.offsetLeft - scrollLeft);
      if (offset < closestOffset) {
        closestOffset = offset;
        closestIndex = i;
      }
    });

    if (index !== closestIndex) {
      setIndex(closestIndex);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("scroll", handleScroll);
    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, [index]);

  return (
    <div className="px-4 py-10 bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin gradient-top relative">
      <h2 className="text-center text-3xl font-thin">
        EXPERT REAL ESTATE INSIGHTS
      </h2>
      <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-2">
        Discover the insider knowledge of Dubai real estate from our agents:
        expert analysis and in-depth information on the city and its property
        market.
      </p>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="w-full md:w-11/12 mx-auto mt-8 flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {blogsData.slice(0, 2).map((item, i) => (
          <div
            id={`slide-${i}`}
            key={i}
            className="min-w-full lg:min-w-[100%] border border-gray-300 dark:border-gray-600 flex flex-col lg:flex-row snap-center"
          >
            <img
              src={item.image}
              className="w-full lg:w-1/2 object-cover"
              alt={item.title}
              draggable={false}
            />
            <div className="p-8 bg-white dark:bg-black flex flex-col justify-center">
              <h3 className="text-2xl font-thin">{item.title}</h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {item.date}
              </p>
              <a
                href="/viewblogs"
                className="mt-6 rounded-full bg-[var(--primary-color)]  text-white font-light hover:opacity-70 px-6 py-2 uppercase tracking-wide   hover:font-light transition w-fit inline-block"
              >
                All Blogs
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {blogsData.slice(0, 2).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              scrollToSlide(i);
            }}
            className={`w-10 h-1 rounded-full transition-all duration-300 cursor-pointer ${
              index === i
                ? "bg-[var(--primary-color)]"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RealStateInsights;
