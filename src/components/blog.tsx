import { useEffect, useRef, useState } from "react";
import podcast1 from "../assets/podcast1.webp";
import podcast2 from "../assets/podcast2.webp";
import "../index.css";

const RealStateInsights = () => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const data = [
    {
      title: "MONDUS TALK",
      desc: "Listen to podcasts from our real estate agents and stay up to date on the Dubai property market: latest news, expert advice, and more.",
      button: "ALL PODCASTS",
      img: podcast1,
    },
    {
      title: "MONDUS BLOG",
      desc: "Stay up to date on the latest trends and developments in the Dubai real estate market with our informative articles. With insights and advice from industry experts, our blog is a valuable resource for anyone interested in the Dubai property market.",
      button: "ALL ARTICLES",
      img: podcast2,
    },
  ];

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

    data.forEach((_, i) => {
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
    <div className="container mx-auto px-4 py-10 font-raleway font-thin">
      <h1 className="text-3xl md:text-5xl text-white mb-6 text-center">
        Latest News & Insights
      </h1>

      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {blogsData.map((blog) => (
          <div
            id={`slide-${i}`}
            key={i}
            className="min-w-full lg:min-w-[100%] border border-gray-300 dark:border-gray-600 flex flex-col lg:flex-row snap-center"
          >
            <img
              src={item.img}
              className="w-full lg:w-1/2 object-cover"
              alt={item.title}
            />
            <div className="p-6">
              <h2 className="text-xl mb-2 text-white">
                {blog.title.slice(0, 38)}...
              </h2>
              <p className="text-white text-sm mb-3">{blog.date}</p>
              <a
                href="/viewblogs"
                className="mt-6 border border-[var(--primary-color)] text-[var(--primary-color)] px-6 py-2 uppercase tracking-wide hover:bg-gradient-to-r from-[#C29579] via-[#e3c5b5] to-[#C29579] hover:text-black hover:font-light transition w-fit inline-block"
              >
                {item.button}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {data.map((_, i) => (
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
