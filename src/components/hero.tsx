import { useState } from "react";
import hero from "../assets/frame_img.png";

export default function Hero() {
  const [selectedCurrency, setSelectedCurrency] = useState<
    "GBP" | "CNY" | "EUR" | "AED" | "USD" | "INR"
  >("AED");
  const [_minPrice, setMinPrice] = useState(40000);
  const [_maxPrice, setMaxPrice] = useState(5000000);

  // Currency conversion rates for demo purposes
  const conversionRates: {
    [key in "GBP" | "CNY" | "EUR" | "AED" | "USD" | "INR"]: number;
  } = {
    GBP: 0.22,
    CNY: 1.56,
    EUR: 0.92,
    AED: 1,
    USD: 0.27,
    INR: 22.5,
  };

  const handleCurrencyChange = (
    currency: "GBP" | "CNY" | "EUR" | "AED" | "USD" | "INR"
  ) => {
    setSelectedCurrency(currency);
    const conversionRate = conversionRates[currency];
    setMinPrice(40000 * conversionRate);
    setMaxPrice(5000000 * conversionRate);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col pt-28 pb-10 md:pt-5 lg:flex-row items-center justify-between px-6 sm:px-10 relative overflow-hidden dark:bg-black dark:text-white">
      {/* Background Image */}
      <img
        src={hero}
        alt="Dubai Tower"
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
        style={{ background: "var(--bg-primary-gradient)" }}
      />

      {/* Left Content */}
      <div className="font-raleway font-thin relative z-10 w-full sm:w-1/2 lg:w-1/3 px-4 sm:px-6 md:px-10 mb-8 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl leading-snug mb-6">
          INVEST IN DUBAI <br />
          REAL ESTATE WITH{" "}
          <span className="text-[var(--primary-color)]">RIVERFRONT</span>
        </h1>
        <p className="text-lg mb-8 text-white/80">
          We bring <span className="font-semibold">Due Diligence</span> at Your
          service
        </p>
        <a href="/contact">
          <button className="border border-[var(--primary-color)] bg-gradient-to-r from-[#f9f295] via-[#e0aa3e] to-[#faf398] rounded-full font-light text-white px-6 py-3 hover:opacity-75 transition ">
            Contact Us
          </button>
        </a>
      </div>

      {/* Right Form */}
      <div className="relative z-10 w-full sm:w-1/3 lg:w-1/3 bg-[#121212]/90 dark: p-8 rounded-lg">
        {/* Property Type */}
        <div className="mb-4">
          <label className="text-sm mb-1 block">Property type</label>
          <select className="w-full bg-[#1f1f1f] p-3 text-white dark:bg-[#1f1f1f]">
            <option>Villa</option>
            <option>Apartment</option>
            <option>Townhouse</option>
            <option>Studio</option>
            <option>Penthouse</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div className="mb-4">
          <label className="text-sm mb-1 block">Bedrooms</label>
          <select className="w-full bg-[#1f1f1f] p-3 text-white dark:bg-[#1f1f1f]">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </select>
        </div>

        {/* Currency */}
        <div className="mb-4">
          <label className="text-sm mb-1 block">Currency</label>
          <div className="flex space-x-4 text-sm text-white/60 cursor-pointer">
            <span
              className={
                selectedCurrency === "GBP"
                  ? "text-[var(--primary-color)] font-semibold"
                  : ""
              }
              onClick={() => handleCurrencyChange("GBP")}
            >
              GBP
            </span>
            <span
              className={
                selectedCurrency === "CNY"
                  ? "text-[var(--primary-color)] font-semibold"
                  : ""
              }
              onClick={() => handleCurrencyChange("CNY")}
            >
              CNY
            </span>
            <span
              className={
                selectedCurrency === "EUR"
                  ? "text-[var(--primary-color)] font-semibold"
                  : ""
              }
              onClick={() => handleCurrencyChange("EUR")}
            >
              EUR
            </span>
            <span
              className={
                selectedCurrency === "AED"
                  ? "text-[var(--primary-color)] font-semibold"
                  : ""
              }
              onClick={() => handleCurrencyChange("AED")}
            >
              AED
            </span>
            <span
              className={
                selectedCurrency === "USD"
                  ? "text-[var(--primary-color)] font-semibold"
                  : ""
              }
              onClick={() => handleCurrencyChange("USD")}
            >
              USD
            </span>
            <span
              className={
                selectedCurrency === "INR"
                  ? "text-[var(--primary-color)] font-semibold"
                  : ""
              }
              onClick={() => handleCurrencyChange("INR")}
            >
              INR
            </span>
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-4">
          <label className="text-sm mb-1 block">Price</label>
          <select
            className="w-full bg-[#1f1f1f] text-white p-3 rounded dark:bg-[#1f1f1f]"
            onChange={(e) => {
              const [min, max] = e.target.value.split("-").map(Number);
              setMinPrice(min);
              setMaxPrice(max);
            }}
          >
            {[
              [100000, 500000],
              [500001, 1000000],
              [1000001, 2000000],
              [2000001, 5000000],
            ].map(([min, max]) => {
              const rate = conversionRates[selectedCurrency];
              const convertedMin = Math.round(min * rate);
              const convertedMax = Math.round(max * rate);
              return (
                <option
                  key={`${min}-${max}`}
                  value={`${convertedMin}-${convertedMax}`}
                >
                  {convertedMin.toLocaleString()} –{" "}
                  {convertedMax.toLocaleString()} {selectedCurrency}
                </option>
              );
            })}
          </select>
        </div>

        {/* Buttons */}
        <button className="w-full bg-gradient-to-r from-[#f9f295] via-[#e0aa3e] to-[#faf398] text-white py-3 mb-4 hover:opacity-75 transition font-light text-xl rounded-full">
          Search
        </button>
      </div>
    </div>
  );
}
