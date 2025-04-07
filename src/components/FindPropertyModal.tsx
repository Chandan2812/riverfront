// components/FindPropertyModal.tsx
import React from "react";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FindPropertyModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = React.useState(1);
  const [selectedBHK, setSelectedBHK] = React.useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = React.useState<string | null>(null);
  const [selectedTimeframe, setSelectedTimeframe] = React.useState<string | null>(null);

  const handleClose = () => {
    onClose();
    setStep(1);
    setSelectedBHK(null);
    setSelectedBudget(null);
    setSelectedTimeframe(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[var(--secondary-color)] flex flex-col justify-center items-center z-50">
      <div className="w-full bg-gray-800 py-5 flex justify-center fixed top-0 left-0">
        <button onClick={handleClose} className="text-white border border-white rounded-full p-2"><X size={28} /></button>
      </div>
      <div className="bg-[#0D1B2A] w-[90%] md:w-[50%] p-8 rounded-lg text-center mt-20">
        <h2 className="text-white text-3xl font-bold mb-6">FIND A PROPERTY</h2>

        {step === 1 && (
          <>
            <h3 className="text-white text-lg mb-4">Which type of property are you interested in?</h3>
            <div className="flex justify-center gap-2 mb-4">
              {["3BHK", "4BHK", "5BHK"].map((bhk) => (
                <button key={bhk} onClick={() => { setStep(2); setSelectedBHK(bhk); }} className={`border border-white px-4 py-2 rounded-full text-sm ${selectedBHK === bhk ? "bg-white text-black" : "text-white"}`}>{bhk}</button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="text-white text-lg mb-4">What is your preferred budget range?</h3>
            <div className="flex justify-center gap-2 mb-4">
              {["5-5.9 Million", "6 Million and above"].map((budget) => (
                <button key={budget} onClick={() => { setStep(3); setSelectedBudget(budget); }} className={`border border-white px-4 py-2 rounded-full text-sm ${selectedBudget === budget ? "bg-white text-black" : "text-white"}`}>{budget}</button>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3 className="text-white text-lg mb-4">When are you looking to purchase?</h3>
            <div className="flex justify-center gap-2 mb-4">
              {["0-3 Months", "3-9 Months", "Over a year"].map((timeframe) => (
                <button key={timeframe} onClick={() => { setStep(4); setSelectedTimeframe(timeframe); }} className={`border border-white px-4 py-2 rounded-full text-sm ${selectedTimeframe === timeframe ? "bg-white text-black" : "text-white"}`}>{timeframe}</button>
              ))}
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h3 className="text-white text-lg mb-4">Enter Your Contact Details</h3>
            <input type="text" placeholder="First Name" className="w-full p-3 rounded bg-white mb-2" />
            <input type="text" placeholder="Last Name" className="w-full p-3 rounded bg-white mb-2" />
            <input type="text" placeholder="Phone" className="w-full p-3 rounded bg-white mb-2" />
            <input type="email" placeholder="Email" className="w-full p-3 rounded bg-white mb-4" />
            <button className="w-full bg-[var(--primary-color)] hover:bg-[#e6a330] text-white py-2 rounded-full text-lg">SUBMIT</button>
          </>
        )}
      </div>
    </div>
  );
};

export default FindPropertyModal;
