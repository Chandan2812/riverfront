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

  if (!isOpen) return null;

  const handleSubmit = () => {
    console.log("User Details:");
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    // Optionally reset or close modal here
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

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-2/3 p-3 rounded-full text-black mb-4 border border-white"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-2/3 p-3 rounded-full text-black mb-4 border border-white"
        />

        <div className="w-2/3 mb-4 mx-auto text-left bg-white p-3 border border-white rounded-full">
        <PhoneInput
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
            defaultCountry="AE"
            className=""
        />
        </div>

        <button
          onClick={handleSubmit}
          className="w-2/3 bg-[var(--primary-color)] hover:bg-[#e6a330] text-white py-2 rounded-full text-lg"
        >
          SUBMIT DETAILS
        </button>
      </div>
    </div>
  );
};

export default SubmitDetailsModal;
