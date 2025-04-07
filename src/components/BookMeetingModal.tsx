// components/BookMeetingModal.tsx
import React from "react";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const BookMeetingModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[var(--secondary-color)] flex flex-col justify-center items-center z-50">
      <div className="w-full bg-gray-800 py-5 flex justify-center fixed top-0 left-0">
        <button onClick={onClose} className="text-white border border-white rounded-full p-2"><X size={28} /></button>
      </div>
      <div className="bg-[#0D1B2A] w-[90%] md:w-[50%] p-8 rounded-lg text-center mt-20">
        <h2 className="text-white text-3xl font-bold mb-6">BOOK A MEETING</h2>
        <input type="text" placeholder="Your Name" className="w-2/3 p-3 rounded-full bg-transparent text-white mb-4 border border-white" />
        <input type="email" placeholder="Your Email" className="w-2/3 p-3 rounded-full bg-transparent text-white mb-4 border border-white" />
        <input type="datetime-local" className="w-2/3 p-3 rounded-full bg-transparent text-white mb-4 border border-white" />
        <button className="w-2/3 bg-[var(--primary-color)] hover:bg-[#e6a330] text-white py-2 rounded-full text-lg">BOOK NOW</button>
      </div>
    </div>
  );
};

export default BookMeetingModal;
