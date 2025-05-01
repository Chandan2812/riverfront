import { useParams } from "react-router-dom";
import Navbar from "../components/nav";
import forsaleImage from "../assets/image.png";
import salesData from "../data/salesData.json";
import { FaBed, FaBath, FaThLarge, FaRulerCombined } from "react-icons/fa";
import Footer from "../components/footer";

function ForSaleDetails() {
  const { title } = useParams();
  const decodedTitle = title?.replace(":", "").replace(/%20/g, " ");
  const property = salesData.find((item) => item.title === decodedTitle);

  if (!property) {
    return (
      <div className="text-white bg-black h-screen flex justify-center items-center">
        Property not found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen font-raleway font-thin">
      <div className="mb-24">
        <Navbar />
      </div>

      {/* Header Image + Title/Location */}
      <div className="relative">
        <img
          src={forsaleImage}
          alt=""
          className="h-[400px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-8">
          <div className="text-white text-center">
            <h1 className="text-4xl">{property.title}</h1>
            <p className="text-xl mt-2">{property.location}</p>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="w-[90%] mx-auto my-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        {property.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`property-${idx}`}
            className="rounded-xl h-60 object-cover w-full"
          />
        ))}
      </div>

      {/* Property Overview */}
      <div className="w-[90%] mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
        {/* Property Type */}
        <div className="flex items-center gap-3">
          <FaThLarge className="text-xl text-gray-300" />
          <span className="text-gray-100">Property Type:</span>
          <span className=" text-white ml-2">{property.propertyType}</span>
        </div>

        {/* Property Size */}
        <div className="flex items-center gap-3">
          <FaRulerCombined className="text-xl text-gray-300" />
          <span className="text-gray-100">Property Size:</span>
          <span className=" text-white ml-2">{property.areaSqft} Sq Ft</span>
        </div>

        {/* Bedrooms */}
        <div className="flex items-center gap-3">
          <FaBed className="text-xl text-gray-300" />
          <span className="text-gray-100">Bedrooms:</span>
          <span className=" text-white ml-2">{property.bedrooms} Bed</span>
        </div>

        {/* Bathrooms */}
        <div className="flex items-center gap-3">
          <FaBath className="text-xl text-gray-300" />
          <span className="text-gray-100">Bathrooms:</span>
          <span className=" text-white ml-2">{property.bathrooms} Baths</span>
        </div>
      </div>

      {/* Description + Sales Manager */}
      <div className="w-[90%] mx-auto my-10 flex flex-col lg:flex-row gap-8">
        {/* Left: Description */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl  mb-2">Description</h2>
          <p className="text-gray-200 mb-6">{property.description.short}</p>

          <h3 className="text-2xl mb-2">Features</h3>
          <ul className="list-disc pl-6 text-gray-200 space-y-2">
            {property.description.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Right: Sales Manager */}
        <div className="lg:w-1/3 bg-gray-700 p-6 rounded-xl shadow-md text-white">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="Sales Manager"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h4 className="text-xl">{property.salesManager}</h4>
            <p className="text-sm text-gray-200 mb-4">{property.agency}</p>
            <a
              href={property.contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition"
            >
              <span className="text-lg">{property.contact.icon}</span> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-black py-10 mt-10 ">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text */}
          <div className="text-center md:text-left font-raleway font-thin">
            <h2 className="text-3xl text-white mb-2">Have a question?</h2>
            <p className="text-gray-200">Our team is happy to assist you</p>
          </div>

          {/* Contact Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-[var(--primary-color)] hover:opacity-70 text-white px-6 py-2 rounded-md transition font-raleway font-thin">
              <a href="/contact">Contact Us</a>
            </button>
            <span className="text-lg font-medium text-gray-300">
              📞 +97147702260
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ForSaleDetails;
