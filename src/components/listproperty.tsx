"use client";

import { useState } from "react";
import Image from "../assets/List_Your_Property.webp";
import PropertyForm from "./PropertyForm";

const ListProperty = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="bg-black py-16 max-w-6xl mx-auto">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={Image}
              alt="List Property"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 font-raleway font-thin">
            <h2 className="text-3xl lg:text-4xl  text-[#e6e8ec] mb-6">
              List Your Property
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Ready to sell or rent your property? Listing with us is quick,
              easy, and designed to get your property in front of the right
              buyers or tenants. Our platform gives you the tools and exposure
              you need to maximize interest and secure the best deal. As trusted
              real estate brokers in Dubai, we ensure your listing is showcased
              to a wide audience of qualified prospects. Whether you're a
              first-time seller or a seasoned investor, our expertise will help
              you turn your property into a successful transaction. Start today,
              and let us guide you through every step of the process!
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-light px-6 py-3 rounded shadow-md transition-all duration-200"
            >
              List Your Property
            </button>
          </div>
        </div>
      </section>

      {showForm && <PropertyForm onClose={() => setShowForm(false)} />}
    </>
  );
};

export default ListProperty;
