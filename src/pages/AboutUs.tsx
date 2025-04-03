import { useState, useEffect, useRef } from "react";
import Navbar from "../components/nav";
import { FaLinkedinIn } from "react-icons/fa";
import AwardsSection from "../components/awards";
import Footer from "../components/footer";

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

  const teamMembers = [
    { name: "John Doe", designation: "CEO", image: "https://uniqueproperties.ae/en/uploads/frontend/agents/613529/sumeet-raina.jpg" },
    { name: "Jane Smith", designation: "CTO", image: "https://uniqueproperties.ae/en/uploads/frontend/agents/613530/johnny-hammond.jpg" },
    { name: "Mike Johnson", designation: "COO", image: "https://uniqueproperties.ae/en/uploads/frontend/agents/613531/roma-jivani.jpg" },
  ];

  return (
    <div>
      <div className="bg-[var(--primary-color)]">
        <Navbar />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-start gap-10 w-[90%] mx-auto py-8">
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
              <br /><br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, ratione. Tenetur necessitatibus voluptas reprehenderit consequuntur voluptatem blanditiis aliquam aliquid accusamus?
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

      {/* Partner Message Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 w-[90%] mx-auto py-8">
        

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


      <section className="py-12 text-center">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Team</h2>
  <p className="text-gray-600 max-w-2xl mx-auto mb-8">
    Our team comprises dedicated professionals who bring diverse perspectives, exceptional expertise, and an unwavering drive to every project.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0 md:w-4/5 w-full mx-auto">
    {teamMembers.map((member, index) => (
      <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
        {/* Team Member Image */}
        <img
          src={member.image}
          alt={member.name || "Team Member"}
          className="w-full h-auto max-h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Desktop Hover Effect */}
        <div className="absolute bottom-0 left-0 w-full bg-white p-3 text-black text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm">{member.designation}</p>
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[var(--primary-color)] p-1 rounded-sm"
            >
              <FaLinkedinIn className="cursor-pointer" /> {/* You can replace this with a LinkedIn icon */}
            </a>
          </div>
        </div>

        {/* Mobile View - Always Visible */}
        <div className="flex items-center justify-between bg-gray-100 p-3 md:hidden">
          <div className="text-left">
            <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.designation}</p>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[var(--primary-color)] p-1 rounded-sm"
          >
            <FaLinkedinIn className="cursor-pointer" /> 
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

<AwardsSection/>

<section className="py-12 bg-gray-100 flex justify-center">
  <div className="w-4/5"> {/* Whole Section is 75% of screen width */}
    <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
      
      {/* Left Section - Contact Details (30%) */}
      <div className="md:col-span-3">
        <h2 className="text-2xl text-gray-800 mb-4">Contact Us</h2>

        {/* Head Office */}
        <h3 className="text-lg text-gray-700 border-b border-gray-300 mb-2">Head Office</h3>
        <p className="text-gray-600 mb-4">
          The Bay Gate Tower, 31st Floor, Business Bay,<br />
          Dubai, United Arab Emirates
        </p>

        {/* Operating Hours */}
        <h3 className="text-lg text-gray-700 border-b border-gray-300 mb-2">Operating Hours</h3>
        <p className="text-gray-600 mb-4">
          Monday to Friday: 9am - 6pm<br />
          Saturdays: 10am - 4pm
        </p>

        {/* Contact Details */}
        <h3 className="text-lg text-gray-700 border-b border-gray-300 mb-2">Reach Us Now</h3>
        <p className="text-gray-600 mb-2">
          UAE FREE PHONE: 800 18881
        </p>
        <p className="text-gray-600 mb-2">
          TEL:(+971) 44 55 8888
        </p>
        <p className="text-gray-600 mb-2">
          EMAIL: <a href="mailto:info@uniqueproperties.ae" className=" hover:underline">info@uniqueproperties.ae</a>
        </p>
      </div>

      {/* Right Section - Google Map (70%) */}
      <div className="md:col-span-7">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Location</h3>
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.401429518472!2d55.262100815144835!3d25.188736283893865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69c8a91a4f4b%3A0x71cb11c55f5b5df1!2sThe%20Bay%20Gate%20Tower%2C%20Business%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1634557890123!5m2!1sen!2sae"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  </div>
</section>
<Footer/>
    </div>
  );
};