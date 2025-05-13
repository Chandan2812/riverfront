"use client";

import { useState } from "react";
import Image from "../assets/List_Your_Property.webp";
import PropertyForm from "./PropertyForm";

const ListProperty = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="bg-white dark:bg-black text-black dark:text-white py-10  ">
        <div className="w-full md:w-11/12 mx-auto container px-4 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={Image}
              alt="List Property"
              width={800}
              height={600}
              draggable={false}
              className="rounded-lg object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 font-raleway font-thin">
            <h2 className="text-3xl lg:text-4xl   mb-6">List Your Property</h2>
            <p className="text-gray-800 font-light dark:font-thin dark:text-gray-200 mb-8 text-lg leading-relaxed">
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
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => setShowForm(true)}
                className=" hover:opacity-80 text-black text-lg font-light px-6 py-2 rounded-full shadow-md transition-all duration-200 bg-[var(--primary-color)]"
              >
                List Your Property
              </button>
            </div>
          </div>
        </div>
      </section>

      {showForm && <PropertyForm onClose={() => setShowForm(false)} />}
    </>
  );
};

export default ListProperty;
