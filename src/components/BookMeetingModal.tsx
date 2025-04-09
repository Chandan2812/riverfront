import React, { useState } from "react";
import { X } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const BookMeetingModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>();
  const [dateTime, setDateTime] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  if (!isOpen) return null;

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = () => {
    const meetingData = {
      name,
      email,
      phone,
      dateTime,
    };
    console.log("Meeting Booking Data:", meetingData);
    // You can send this data to your backend here
  };

  const isFormValid =
    name.trim() !== "" &&
    isEmailValid(email) &&
    phone &&
    dateTime.trim() !== "";

  return (
    <div className="fixed inset-0 bg-[var(--secondary-color)] flex flex-col justify-center items-center z-50">
      <div className="w-full bg-gray-800 py-5 flex justify-center fixed top-0 left-0">
        <button onClick={onClose} className="text-white border border-white rounded-full p-2">
          <X size={28} />
        </button>
      </div>

      <div className="bg-[#0D1B2A] w-[90%] md:w-[50%] p-8 rounded-lg text-center mt-20">
        <h2 className="text-white text-3xl font-bold mb-6">BOOK A MEETING</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-2/3 p-3 rounded-full bg-white text-black mb-2 border border-white"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (!emailTouched) setEmailTouched(true);
          }}
          className={`w-2/3 p-3 rounded-full mb-2 border ${
            !emailTouched || isEmailValid(email)
              ? "bg-white text-black border-white"
              : " border-red-400"
          }`}
        />
        {emailTouched && !isEmailValid(email) && (
          <p className="text-red-400 text-sm mb-3">Please enter a valid email address.</p>
        )}

        {/* Phone */}
        <div className="w-2/3 mx-auto mb-1">
          <PhoneInput
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
            defaultCountry="AE"
            onBlur={() => setPhoneTouched(true)}
            className={`w-full rounded-full p-3 mb-2 border ${
              !phoneTouched || phone
                ? "bg-white text-black border-white"
                : " border-red-400"
            }`}
          />
        </div>
        {phoneTouched && !phone && (
          <p className="text-red-400 text-sm mb-3">Phone number is required.</p>
        )}

        {/* Date & Time */}
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className="w-2/3 p-3 rounded-full bg-white text-black mb-4 border border-white"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`w-2/3 text-white py-2 rounded-full text-lg ${
            isFormValid
              ? "bg-[var(--primary-color)] hover:bg-[#e6a330]"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default BookMeetingModal;
