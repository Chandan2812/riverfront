// components/FindPropertyModal.tsx
import React from "react";
import { X, ArrowLeft } from "lucide-react";
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FindPropertyModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = React.useState(1);
  const [selectedPurpose, setSelectedPurpose] = React.useState<string | null>(null);
  const [selectedPropertyType, setSelectedPropertyType] = React.useState<string | null>(null);
  const [selectedBHK, setSelectedBHK] = React.useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = React.useState<string | null>(null);
  const [selectedTimeframe, setSelectedTimeframe] = React.useState<string | null>(null);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phone, setPhone] = React.useState<string | undefined>();
  const [email, setEmail] = React.useState('');

  const [errors, setErrors] = React.useState<any>({});

  const handleClose = () => {
    onClose();
    setStep(1);
    setSelectedPurpose(null);
    setSelectedPropertyType(null);
    setSelectedBHK(null);
    setSelectedBudget(null);
    setSelectedTimeframe(null);
    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setErrors({});
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  const handleSubmit = () => {
    const data = {
      purpose: selectedPurpose,
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
    handleClose();
  };

  if (!isOpen) return null;

  const showBudget = () => {
    if (selectedPropertyType === 'Apartments') {
      if (selectedBHK === 'Studio') {
        return ["50K - 100K", "100K - 150K", "150K - 250K", "250K and above"];
      } else if (selectedBHK) {
        return ["1 - 3 Million", "3 - 6 Million", "6 Million and above"];
      }
    } else if (selectedPropertyType === 'Villas' || selectedPropertyType === 'Penthouse') {
      return ["1 - 3 Million", "3 - 6 Million", "6 Million and above"];
    }
    return [];
  };

  const renderBackButton = (targetStep: number) => (
    <button
      onClick={() => setStep(targetStep)}
      className="text-white flex justify-center items-center mb-4 w-full"
    >
      <ArrowLeft className="mr-2" />
    </button>
  );

  return (
    <div className="fixed inset-0 bg-[var(--secondary-color)] flex flex-col justify-center items-center z-50">
      <div className="w-full bg-gray-800 py-5 flex justify-center fixed top-0 left-0">
        <button onClick={handleClose} className="text-white border border-white rounded-full p-2"><X size={28} /></button>
      </div>

      <div className="bg-[#0D1B2A] w-[90%] md:w-[50%] p-8 rounded-lg text-center mt-20">
        {step === 1 && (
          <>
            <h2 className="text-white text-3xl font-bold mb-6">Purpose</h2>
            <h3 className="text-white text-lg mb-4">Are you looking to buy or sell property?</h3>
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {["Buy Property", "Sell Property"].map((purpose) => (
                <button
                  key={purpose}
                  onClick={() => { setStep(2); setSelectedPurpose(purpose); }}
                  className={`border border-white px-4 py-2 rounded-full text-sm ${selectedPurpose === purpose ? "bg-white text-black" : "text-white"}`}
                >
                  {purpose}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && selectedPurpose && (
          <>
            {renderBackButton(1)}
            <h2 className="text-white text-3xl font-bold mb-6">Property Type</h2>
            <h3 className="text-white text-lg mb-4">Which type of property are you interested in?</h3>
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {["Apartments", "Villas", "Penthouse"].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedPropertyType(type);
                    if (type === 'Apartments') {
                      setStep(3);
                    } else {
                      setSelectedBHK(null);
                      setStep(4);
                    }
                  }}
                  className={`border border-white px-4 py-2 rounded-full text-sm ${selectedPropertyType === type ? "bg-white text-black" : "text-white"}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 3 && selectedPropertyType === 'Apartments' && (
          <>
            {renderBackButton(2)}
            <h2 className="text-white text-3xl font-bold mb-6">Select Bedroom Type</h2>
            <h3 className="text-white text-lg mb-4">Which size are you looking for?</h3>
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {["Studio", "1BHK", "2BHK", "3BHK", "4BHK", "More"].map((bhk) => (
                <button
                  key={bhk}
                  onClick={() => { setStep(4); setSelectedBHK(bhk); }}
                  className={`border border-white px-4 py-2 rounded-full text-sm ${selectedBHK === bhk ? "bg-white text-black" : "text-white"}`}
                >
                  {bhk}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 4 && (
          <>
            {renderBackButton(selectedPropertyType === 'Apartments' ? 3 : 2)}
            <h2 className="text-white text-3xl font-bold mb-6">Set Your Budget</h2>
            <h3 className="text-white text-lg mb-4">What is your preferred budget range?</h3>
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {showBudget().map((budget) => (
                <button
                  key={budget}
                  onClick={() => { setStep(5); setSelectedBudget(budget); }}
                  className={`border border-white px-4 py-2 rounded-full text-sm ${selectedBudget === budget ? "bg-white text-black" : "text-white"}`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 5 && (
          <>
            {renderBackButton(4)}
            <h2 className="text-white text-3xl font-bold mb-6">Buying Timeline</h2>
            <h3 className="text-white text-lg mb-4">When are you looking to purchase?</h3>
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {["0-3 Months", "3-9 Months", "Over a year"].map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => { setStep(6); setSelectedTimeframe(timeframe); }}
                  className={`border border-white px-4 py-2 rounded-full text-sm ${selectedTimeframe === timeframe ? "bg-white text-black" : "text-white"}`}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 6 && (
          <>
            {renderBackButton(5)}
            <h2 className="text-white text-3xl font-bold mb-6">Contact Information</h2>
            <h3 className="text-white text-lg mb-4">Enter Your Contact Details</h3>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 rounded bg-white mb-1"
            />
            {errors.firstName && <p className="text-red-500 text-sm mb-2">{errors.firstName}</p>}
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 rounded bg-white mb-1"
            />
            {errors.lastName && <p className="text-red-500 text-sm mb-2">{errors.lastName}</p>}
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="IN"
              international
              value={phone}
              onChange={setPhone}
              className="w-full px-1 rounded bg-white mb-1 p-3"
            />
            {errors.phone && <p className="text-red-500 text-sm mb-2">{errors.phone}</p>}
            <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => {
    const value = e.target.value;
    setEmail(value);
    if (!isValidEmail(value)) {
      setErrors((prev: any) => ({ ...prev, email: "Please enter a valid email address" }));
    } else {
      setErrors((prev: any) => {
        const newErrors = { ...prev };
        delete newErrors.email;
        return newErrors;
      });
    }
  }}
  className="w-full p-3 rounded bg-white mb-1"
/>
{errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

            <button
              type="submit"
              onClick={handleSubmit}
              disabled={
                !firstName ||
                !lastName ||
                !phone ||
                !email ||
                !!errors.email
              }
              className={`w-full py-2 rounded-full text-lg text-white ${
                !firstName ||
                !lastName ||
                !phone ||
                !email ||
                !!errors.email
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[var(--primary-color)] hover:bg-[#e6a330]"
              }`}            >
              SUBMIT
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FindPropertyModal;