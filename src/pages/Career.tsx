import { useState } from "react";
import Footer from "../components/footer";
import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
import Navbar from "../components/nav";

export default function Career() {
    const [formData, setFormData] = useState<{
        fullName: string;
        email: string;
        phone: string;
        cvFile: File | null;
      }>({
        fullName: "",
        email: "",
        phone: "",
        cvFile: null,
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
      const handlePhoneChange = (value: any) => {
        setFormData({ ...formData, phone: value });
      };
    
      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Optional chaining to prevent errors
        if (!file) return; // Early return if no file is selected
        setFormData((prev) => ({ ...prev, cvFile: file }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting Form:", formData);
      };
    return (
        <div>

<div className="mb-24 md:mb-36">
      <Navbar/>
      </div>

      <div className="w-full md:w-[90%] mx-auto px-6 pb-12 text-center">
        {/* Header Section */}
        <h1 className="text-3xl text-[var(--primary-color)] font-bold mb-4">Join An Award-winning Team</h1>
        <p className="text-md font-semibold text-gray-700 mb-8">
        RIVERFRONT, one of the top real estate firms in Dubai, has seen an upward trend in the buying of luxury properties within the UAE. Over the first half of the year, Dubai recorded an 18% increase in high-net-worth individuals (FINWIs).
        </p>
  
        {/* Contact Information - Two Column Layout */}
        <h2 className="text-2xl text-[var(--primary-color)] font-semibold mb-3 text-center">Why Join Us?</h2>
        <div className="w-full grid md:grid-cols-2 gap-4 text-left">
            
            <p className="text-gray-600 mb-4">
            Established in 2008, we have helped thousands of people from all over the world find their dream home and benefit from some of the best real estate investments available in Dubai.
            </p>
            <p className="text-gray-600 mb-4">
            Offering a wide range of professional services to buyers, sellers, landlords and tenants, we provide our clients with honest impartial advice and the highest levels of customer service.
            </p >
            <p className="text-gray-600 mb-4">
            Over the years we have won a plethora of prestigious awards from leading developers across the UAE, Including Emaar, Dubai Holding, Meraas, Damac, Nakheel, Aldar and many more. Click here to find out more.            </p >
            <p className="text-gray-600 mb-4">
            With exciting expansion plans on the horizon, we are looking to fill a variety of newly created roles in the near future.            </p >
        </div>
  
        <div className="mt-12 w-full md:w-2/3 text-center mx-auto flex flex-col">
          <h2 className="text-2xl text-[var(--primary-color)] font-semibold">Current Vacancies</h2>
          <p className="text-gray-600 mt-2">
          We are currently hiring for the below mentioned roles. Please click on the role to view the full job description and apply with your CV and cover letter.
          </p>
          <i className="text-gray-800">Good Luck!</i>
        </div>
      </div>


      <div className="flex justify-center items-center w-5/6 mx-auto px-6 py-8 text-center shadow-2xl rounded-lg mb-7">

      <div className="w-full max-w-lg bg-white rounded-lg p-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">Share Your CV With Us</h1>
        <p className="text-gray-600 mb-6">
          If no suitable vacancy is available, share your CV for future opportunities.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name & Email */}
            <input
              type="text"
              name="fullName"
              placeholder="Your Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-black"
              required
            />

          <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg w-full focus:ring-2 focus:ring-black"
              required
            />

<div className="w-full">
  <PhoneInput
    placeholder="Enter phone number"
    value={formData.phone}
    onChange={handlePhoneChange}
    defaultCountry="IN" // Sets default country to India (+91)
    international // Enables international format
    className="border border-gray-300 px-4 py-3 text-[16px] rounded-lg w-full focus:ring-2 focus:ring-black"
  />
</div>



          {/* File Upload (Choose File Button) */}
          <div className="mb-4">
            <label className="border border-gray-300 w-full p-2 rounded-lg cursor-pointer flex items-center justify-between bg-gray-100 hover:bg-gray-200">
              <span className="text-gray-600">Choose File</span>
              <input
                type="file"
                name="cvFile"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                required
              />
            </label>
            {formData.cvFile && <p className="text-sm text-gray-500 mt-2">Selected: {formData.cvFile.name}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[var(--primary-color)] text-white py-3 px-6 rounded-lg w-full hover:bg-[#f2ae37] transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
      <Footer/>
      </div>
    );
  }
  