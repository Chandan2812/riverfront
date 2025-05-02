import { useState } from "react";
import Footer from "../components/footer";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Navbar from "../components/nav";
import { Mail, MessageSquareText, Phone } from "lucide-react";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    <div className="bg-black">
      <div className="mb-32 md:mb-32 pt-3 md:pt-10">
        <Navbar />
      </div>

      <section className=" w-full md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 pb-8  text-white font-raleway font-light">
        {/* Head Office */}
        <div>
          <h2 className="text-xl mb-2 font-semibold">Dubai Office's</h2>
          <h2 className="text-sm mb-2 font-semibold text-gray-300">
            Head Office:
          </h2>
          <p className="mb-4 text-gray-300">
            1703, Damac XL tower, Marasi Drive, Business bay, Dubai, UAE.
          </p>
          <h2 className="text-sm mb-2 font-semibold text-gray-300">
            Branch Office:
          </h2>
          <p className="mb-4 text-gray-300">
            1002, Tower A, Prime business center, JVC{" "}
          </p>

          <h2 className="text-xl mb-2 font-semibold">India Office's</h2>
          <h2 className="text-sm mb-2 font-semibold text-gray-300">
            Head Office:
          </h2>
          <p>KPD Developers,</p>
          <p className="mb-4 text-gray-300">
            Plot # 2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India
          </p>
          <h2 className="text-sm mb-2 font-semibold text-gray-300">
            Branch Office:
          </h2>
          <p>KPD Developers,</p>
          <p className="mb-4 text-gray-300">
            CASA LOTUS House # 4/213 A, Porba Vaddo, Calangute 403516, Goa
          </p>
          <h2 className="text-sm mb-2 font-semibold text-gray-300">
            Branch Office:
          </h2>
          <p>KPD Developers,</p>
          <p className="mb-4 text-gray-300">
            26 Jacranda Marg DLF Phase - , Gurugram, Haryana
          </p>
          <hr className="mb-4" />
          <p className="text-gray-400">
            Our business operating hours are as follows:
          </p>
          <p className="mt-2">Monday to Friday: 9am - 6pm</p>
          <p>Saturdays: 10am - 4pm</p>
        </div>

        {/* Get in Touch */}
        <div>
          <h2 className="text-xl font-semibold mb-2 font-sans">Get in Touch</h2>
          <p className="mb-4 text-gray-300 font-sans">
            Please contact us via phone or email below or visit us at our Head
            Office in Business Bay during operating hours.
          </p>
          <div className="flex flex-col gap-4">
            {/* Phone Button */}
            <div className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans">
              <Phone className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">‪+97147702260‬</span>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+971509863828"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans"
            >
              <FaWhatsapp className="w-6 h-6 text-green-600" />
              <span className="text-sm text-gray-700">‪+971 509863828</span>
            </a>

            {/* Email Button */}
            <a
              href="mailto:info@riverfront.ae"
              className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans"
            >
              <Mail className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">info@riverfront.ae</span>
            </a>

            {/* SMS Button */}
            <a
              href="sms:‪+971502304888‬"
              className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans"
            >
              <MessageSquareText className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">‪+971 509863828</span>
            </a>
          </div>
                  
        </div>
      </section>
      <h2 className="px-5 w-full md:w-[90%] mx-auto text-lg text-gray-300">
        Need some advice, have some concerns or Interested in our services or
        properties?
      </h2>
      <p className="px-5 w-full md:w-[90%] mx-auto text-md text-gray-300">
        Simply contact us through email, phone call or alternatively fill the
        form below and your query will be promptly directed to the necessary
        RiverFront employee for a response within 24hrs.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-start w-full md:w-[90%] mx-auto px-6 py-8 gap-10 mb-7">
        {/* FORM SECTION */}
        <div className="w-full md:w-1/2 max-w-lg bg-black rounded-lg p-8 shadow text-center">
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
                defaultCountry="AE"
                international
                className="border border-gray-300 bg-white px-4 py-3 text-[16px] rounded-lg w-full"
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
              className=" text-white text-xl py-2 px-6 rounded-full w-full hover:bg-[#f2ae37] transition"
              style={{ background: "var(--bg-primary-gradient)" }}
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* MAP SECTION */}
        <div className="w-full md:w-1/2 h-[450px] rounded-lg overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.668560792657!2d55.264871674024235!3d25.18066683237258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69004a524faf%3A0x13d5b1575adb574a!2sBusiness%20Bay!5e0!3m2!1sen!2sin!4v1744201890505!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}
