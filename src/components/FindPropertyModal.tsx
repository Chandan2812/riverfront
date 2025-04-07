// components/FindPropertyModal.tsx
import React from "react";
import { X } from "lucide-react";
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FindPropertyModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = React.useState(1);
  const [selectedPropertyType, setSelectedPropertyType] = React.useState<string | null>(null);
  const [selectedBHK, setSelectedBHK] = React.useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = React.useState<string | null>(null);
  const [selectedTimeframe, setSelectedTimeframe] = React.useState<string | null>(null);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phone, setPhone] = React.useState<string | undefined>();
  const [email, setEmail] = React.useState('');

  const handleClose = () => {
    onClose();
    setStep(1);
    setSelectedPropertyType(null);
    setSelectedBHK(null);
    setSelectedBudget(null);
    setSelectedTimeframe(null);
    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
  };

  const handleSubmit = () => {
    const data = {
      propertyType: selectedPropertyType,
      bhk: selectedBHK,
      budget: selectedBudget,
      timeframe: selectedTimeframe,
      firstName,
      lastName,
      phone,
      email,
    };

    console.log("Submitted Data:", data);
    // Optional: Send this data to a backend here

    handleClose(); // close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[var(--secondary-color)] flex flex-col justify-center items-center z-50">
      <div className="w-full bg-gray-800 py-5 flex justify-center fixed top-0 left-0">
        <button onClick={handleClose} className="text-white border border-white rounded-full p-2"><X size={28} /></button>
      </div>

      <div className="bg-[#0D1B2A] w-[90%] md:w-[50%] p-8 rounded-lg text-center mt-20">
        {step === 1 && (
          <>
            <h2 className="text-white text-3xl font-bold mb-6">Property Type</h2>
            <h3 className="text-white text-lg mb-4">Which type of property are you interested in?</h3>
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {["Rentals", "Apartments", "Villas", "Penthouse"].map((type) => (
                <button
                  key={type}
                  onClick={() => { setStep(2); setSelectedPropertyType(type); }}
                  className={`border border-white px-4 py-2 rounded-full text-sm ${selectedPropertyType === type ? "bg-white text-black" : "text-white"}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-white text-3xl font-bold mb-6">Select Bedroom Type</h2>
            <h3 className="text-white text-lg mb-4">Which size are you looking for?</h3>
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {["Studio", "2BHK", "3BHK", "4BHK", "More"].map((bhk) => (
                <button
                  key={bhk}
                  onClick={() => { setStep(3); setSelectedBHK(bhk); }}
                  className={`border border-white px-4 py-2 rounded-full text-sm ${selectedBHK === bhk ? "bg-white text-black" : "text-white"}`}
                >
                  {bhk}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-white text-3xl font-bold mb-6">Set Your Budget</h2>
            <h3 className="text-white text-lg mb-4">What is your preferred budget range?</h3>
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {["1-3 Million", "3-6 Million", "6 Million and above"].map((budget) => (
                <button
                  key={budget}
                  onClick={() => { setStep(4); setSelectedBudget(budget); }}
                  className={`border border-white px-4 py-2 rounded-full text-sm ${selectedBudget === budget ? "bg-white text-black" : "text-white"}`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="text-white text-3xl font-bold mb-6">Buying Timeline</h2>
            <h3 className="text-white text-lg mb-4">When are you looking to purchase?</h3>
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {["0-3 Months", "3-9 Months", "Over a year"].map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => { setStep(5); setSelectedTimeframe(timeframe); }}
                  className={`border border-white px-4 py-2 rounded-full text-sm ${selectedTimeframe === timeframe ? "bg-white text-black" : "text-white"}`}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <h2 className="text-white text-3xl font-bold mb-6">Contact Information</h2>
            <h3 className="text-white text-lg mb-4">Enter Your Contact Details</h3>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 rounded bg-white mb-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 rounded bg-white mb-2"
            />
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="IN"
              international
              value={phone}
              onChange={setPhone}
              className="w-full px-1 rounded bg-white mb-2"
              inputComponent={({ className, ...props }) => (
                <input
                  {...props}
                  className={`bg-white text-black px-4 py-3 text-[16px] rounded-lg w-full focus:ring-2 focus:ring-black ${className}`}
                />
              )}
            
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-white mb-4"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-[var(--primary-color)] hover:bg-[#e6a330] text-white py-2 rounded-full text-lg"
            >
              SUBMIT
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FindPropertyModal;
