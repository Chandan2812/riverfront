import { useState, useEffect, useRef } from "react";
import Navbar from "../components/nav";

export const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;

    const scrollImages = () => {
      if (scrollContainer) {
        scrollAmount += 2; // Speed of scrolling
        if (scrollAmount >= scrollContainer.scrollHeight / 2) {
          scrollContainer.scrollTop = 0; // Reset scroll
          scrollAmount = 0;
        } else {
          scrollContainer.scrollTop += 2;
        }
      }
    };

    const interval = setInterval(scrollImages, 10); // Smooth scrolling
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="bg-[var(--primary-color)]">
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row items-start gap-10 w-[90%] mx-auto py-8">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl text-[var(--primary-color)] mb-4">
            We are proud to be one of Dubai's leading real estate agencies.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Established in 2008, we've been in the business of helping people from all
            corners of the globe find their dream homes and make smart real estate investments.
          </p>
          <br />
          <p className="text-gray-700 leading-relaxed">
            Our main aim is to make sure our clients get the best deals out there. That means
            not just finding them houses they love but also spotting properties with great rental potential
            and future value hikes.
          </p>
          {expanded && (
            <p className="text-gray-700 leading-relaxed mt-4">
              We've got a bunch of services to cover all your real estate needs, whether you're buying, selling, or renting.
            </p>
          )}
          {/* Toggle Button */}
          <button
            className="mt-4 text-[var(--primary-color)] underline font-semibold"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "See Less" : "Read More"}
          </button>
        </div>

        {/* Right Section - Auto Scrolling Image Gallery */}
        <div
          ref={scrollContainerRef}
          className="md:w-1/2 flex flex-col gap-4 h-[500px] overflow-hidden"
        >
          <div className="flex flex-col gap-4">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4">
                <img src="https://uniqueproperties.ae/en/uploads/frontend/contents/95448/conversions/_0000_DSC02775-resize_gallers.webp" alt="Office 1" className="w-full rounded-lg" />
                <img src="https://uniqueproperties.ae/en/uploads/frontend/contents/95452/conversions/_0019_DSC03035-resize_gallers.webp" alt="Office 2" className="w-full rounded-lg" />
                <img src="https://uniqueproperties.ae/en/uploads/frontend/contents/95457/conversions/_0022_DSC03119-resize_gallers.webp" alt="Office 3" className="w-full rounded-lg" />
                <img src="https://uniqueproperties.ae/en/uploads/frontend/contents/95451/conversions/_0007_DSC02840-resize_gallers.webp" alt="Office 4" className="w-full rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CEO Message Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-[90%] mx-auto py-8">
        {/* Left Side - CEO Image */}
        <div className="md:w-1/3">
          <img 
            src="https://uniqueproperties.ae/en/uploads/frontend/contents/608933/conversions/ceo_image-resize.webp" 
            alt="CEO" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - CEO Message */}
        <div className="md:w-2/3">
          <h2 className="text-3xl text-[var(--primary-color)] mb-4">Message from our CEO, Arash Jalili</h2>
          <p className="text-gray-700 leading-relaxed">
            Since our formation in 2008, our core values have always remained at the heart of everything we do, and these include integrity, transparency, and respect, to name a few.
          </p>
          <br />
          <p className="text-gray-700 leading-relaxed">
            I formed Unique Properties with customer centricity and passion for real estate in mind, and this was our differentiating factor from other companies.
          </p>
          <br />
          <p className="text-gray-700 leading-relaxed">
            Our success as one of Dubai’s top real estate agencies is credited to our inspiring business partner and a skilled team of experienced, multilingual professionals. We've earned numerous awards and assisted thousands of clients in growing their wealth and real estate portfolios through custom investment strategies, focusing on the city’s prime developments in ideal locations.
          </p>
          <br />
          <p className="text-gray-700 leading-relaxed">
            Our aim is to be Dubai’s most trusted real estate partner, as we grow and introduce new divisions. We are committed to assisting both new and existing clients with their property needs in the future.
          </p>
          <br />
          <p className="text-gray-700 leading-relaxed font-semibold">
            It’s all about U.
          </p>
        </div>

        
      </div>

      {/* CEO Message Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-[90%] mx-auto py-8">
        

        {/* Left Side - CEO Message */}
        <div className="md:w-2/3">
          <h2 className="text-3xl text-[var(--primary-color)] mb-4">Message from the Partner, Armin Jalili</h2>
          <p className="text-gray-700 leading-relaxed">
          As a partner at Unique Properties, one of the UAE’s most influential real estate agencies, I have had the privilege of being part of its journey from the early stages. Throughout my time here, I have consistently demonstrated strong leadership and a natural talent for salesmanship, contributing to the agency's growth and success.          </p>
          <br />
          <p className="text-gray-700 leading-relaxed">
          I have always focused on driving innovation and excellence within the company. My strategic insights and forward-thinking approach have significantly contributed to our success and reputation as a leader in the real estate industry.          </p>
          <br />
          <p className="text-gray-700 leading-relaxed">
          We are proud to consistently meet and exceed our local and international investors expectations who have bought Dubai property to enjoy high yields, excellent ROI and all the benefits which the city has to offer from a lifestyle perspective.          </p>
          <br />
        </div>

        {/* Right Side - Partner Image */}
        <div className="md:w-1/3">
          <img 
            src="https://uniqueproperties.ae/en/uploads/frontend/partners/610578/armin-jalili_image.jpg" 
            alt="Partner" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        
      </div>
    </div>
  );
};