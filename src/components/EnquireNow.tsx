import React, { useState } from "react";
import { X } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SubmitDetailsModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");

  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  if (!isOpen) return null;

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    fullName.trim() !== "" && isEmailValid(email) && phone?.trim() !== "";

  const handleSubmit = () => {
    console.log("User Details:");
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    // Reset or close modal if needed
    // setFullName("");
    // setEmail("");
    // setPhone("");
    // onClose();
  };

  return (
    <div className="fixed inset-0 bg-[var(--secondary-color)] flex flex-col justify-center items-center z-50">
      {/* Top Close Button */}
      <div className="w-full bg-gray-800 py-5 flex justify-center fixed top-0 left-0">
        <button
          onClick={onClose}
          className="text-white border border-white rounded-full p-2"
        >
          <X size={28} />
        </button>
      </div>

      {/* Modal Content */}
      <div className="bg-[#0D1B2A] w-[90%] md:w-[50%] p-8 rounded-lg text-center mt-20">
        <h2 className="text-white text-3xl font-bold mb-6">
          SUBMIT YOUR DETAILS
        </h2>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full md:w-2/3 p-3 rounded-full text-black mb-2 border border-white"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (!emailTouched) setEmailTouched(true);
          }}
          className={`w-full md:w-2/3 p-3 rounded-full mb-2 border ${
            !emailTouched || isEmailValid(email)
              ? "bg-white text-black border-white"
              : " border-red-400"
          }`}
        />
        {emailTouched && !isEmailValid(email) && (
          <p className="text-red-400 text-sm mb-3">
            Please enter a valid email address.
          </p>
        )}

        {/* Phone */}
        <div className="w-full md:w-2/3 mb-2 mx-auto text-left bg-white p-3 border rounded-full">
          <PhoneInput
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
            defaultCountry="AE"
            onBlur={() => setPhoneTouched(true)}
            className={`${
              !phoneTouched || phone ? "text-black" : "text-red-500"
            }`}
          />
        </div>
        {phoneTouched && !phone && (
          <p className="text-red-400 text-sm mb-3">Phone number is required.</p>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`w-full md:w-2/3 text-white py-2 rounded-full text-lg ${
            isFormValid
              ? "bg-[var(--primary-color)] hover:bg-[#e6a330]"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          SUBMIT DETAILS
        </button>
      </div>
    </div>
  );
};

export default SubmitDetailsModal;
