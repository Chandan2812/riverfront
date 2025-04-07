import { useState } from "react";
import Footer from "../components/footer";
import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
import Navbar from "../components/nav";
import { Mail, MessageSquareText } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState<{
        fullName: string;
        email: string;
        phone: string;
        message: string;
      }>({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
      const handlePhoneChange = (value: any) => {
        setFormData({ ...formData, phone: value });
      };
  
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting Form:", formData);
      };
    return (
        <div>

<div className="mb-32">
      <Navbar/>
      </div>

      <section className=" w-full md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 pb-8 bg-white text-gray-800">
      {/* Head Office */}
      <div>
        <h2 className="text-xl mb-2">Head Office</h2>
        <p className="mb-4">
        1703, Damac XL tower, marasi drive, Business bay, Dubai, UAE.
        </p>
        <hr className="mb-4" />
        <p className="text-gray-500">Our business operating hours are as follows:</p>
        <p className="mt-2">Monday to Friday: 9am - 6pm</p>
        <p>Saturdays: 10am - 4pm</p>
      </div>

      {/* Get in Touch */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p className="mb-4 text-gray-500">
          Please contact us via phone or email below or visit us at our Head Office in Business Bay during operating hours.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="border rounded-md px-4 py-2 text-sm hover:bg-gray-100">
            UAE FREE PHONE: 00971509863828
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
            TEL: (+971) 1234 5 789 
          </button>

          <a
  href="https://wa.me/0097147702260"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center border p-4 rounded-md flex-1 min-w-[220px] gap-4 hover:bg-gray-50 transition"
>
<FaWhatsapp className="w-7 h-7 text-green-600 flex-shrink-0" />
  <span className="text-sm text-gray-700">0097147702260</span>
</a>

<a
  href="mailto:info@riverfront.ae"
  className="bg-black text-white p-4 rounded-md flex items-center gap-4 flex-1 min-w-[220px] hover:bg-gray-800 transition"
>
  <Mail className="w-6 h-6" />
  <span className="text-sm">info@riverfront.ae</span>
</a>

<a
  href="sms:+971502304888"
  className="border p-4 rounded-md flex items-center gap-4 flex-1 min-w-[220px] hover:bg-gray-50 transition"
>
  <MessageSquareText className="w-6 h-6 text-gray-700" />
  <span className="text-sm text-gray-700">+971502304888</span>
</a>

        </div>
      </div>
    </section>
      <h2 className="px-5 w-full md:w-[90%] mx-auto text-lg text-[var(--secondary-color)]">
      Need some advice, have some concerns or Interested in our services or properties?
      </h2>
      <p className="px-5 w-full md:w-[90%] mx-auto text-md text-gray-400">Simply contact us through email, phone call or alternatively fill the form below and your query will be promptly directed to the necessary RiverFront employee for a response within 24hrs.

</p>
<div className="flex flex-col md:flex-row justify-center items-start w-full md:w-[90%] mx-auto px-6 py-8 gap-10 mb-7">
  {/* FORM SECTION */}
  <div className="w-full md:w-1/2 max-w-lg bg-white rounded-lg p-8 shadow text-center">
    <form onSubmit={handleSubmit} className="space-y-4">
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
          defaultCountry="IN"
          international
          className="border border-gray-300 px-4 py-3 text-[16px] rounded-lg w-full focus:ring-2 focus:ring-black"
        />
      </div>
      <textarea
        rows={4}
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-lg w-full focus:ring-2 focus:ring-black"
        required
      />
      <button
        type="submit"
        className="bg-[var(--primary-color)] text-white py-3 px-6 rounded-lg w-full hover:bg-[#f2ae37] transition"
      >
        SUBMIT
      </button>
    </form>
  </div>

  {/* MAP SECTION */}
  <div className="w-full md:w-1/2 h-[450px] rounded-lg overflow-hidden shadow">
    <iframe
      src="https://www.google.com/maps?q=1703,+Damac+XL+Tower,+Marasi+Drive,+Business+Bay,+Dubai,+UAE&output=embed"
      width="100%"
      height="100%"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full"
    ></iframe>
  </div>
</div>

      <Footer/>
      </div>
    );
  }
  