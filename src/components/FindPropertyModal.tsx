// components/FindPropertyModal.tsx

import React from "react";
import { X, ArrowLeft } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FindPropertyModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = React.useState(1);
  const [selectedPurpose, setSelectedPurpose] = React.useState<string | null>(
    null
  );
  const [selectedPropertyType, setSelectedPropertyType] = React.useState<
    string | null
  >(null);
  const [selectedBHK, setSelectedBHK] = React.useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = React.useState<string | null>(
    null
  );
  const [selectedTimeframe, setSelectedTimeframe] = React.useState<
    string | null
  >(null);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState<string | undefined>();
  const [email, setEmail] = React.useState("");

  const handleClose = () => {
    onClose();
    setStep(1);
    setSelectedPurpose(null);
    setSelectedPropertyType(null);
    setSelectedBHK(null);
    setSelectedBudget(null);
    setSelectedTimeframe(null);
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
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

  // All imports and component setup remain the same...
  const showBudget = () => {
    if (selectedPurpose === "Buy Property") {
      if (selectedPropertyType === "Apartments") {
        if (selectedBHK === "Studio") {
          return ["300K - 500K", "500K - 1 Million", "1 Million and above"];
        } else {
          return ["1 - 3 Million", "3 - 6 Million", "6 Million and above"];
        }
      } else if (selectedPropertyType === "Villas") {
        return ["2 - 4 Million", "4 - 7 Million", "7 Million and above"];
      } else if (selectedPropertyType === "Penthouse") {
        return ["1 - 3 Million", "3 - 6 Million", "6 Million and above"];
      }
    } else if (selectedPurpose === "Rent Property") {
      if (selectedPropertyType === "Apartments") {
        if (selectedBHK === "Studio") {
          return ["30K - 50K", "50K - 100K", "100K and above"];
        } else if (selectedBHK === "1 BHK") {
          return ["50K - 100K", "100K - 150K", "150K and above"];
        } else if (
          ["2 BHK", "3 BHK", "4BHK", "More"].includes(selectedBHK || "")
        ) {
          return ["70K - 150K", "150K - 250K", "250K - 500K", "500K and above"];
        }
      } else if (
        selectedPropertyType === "Villas" ||
        selectedPropertyType === "Penthouse"
      ) {
        return ["150K - 250K", "250K - 500K", "500K and above"];
      }
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[var(--secondary-color)] flex flex-col justify-center items-center z-50">
      <div className="w-full bg-gray-800 py-5 flex justify-center fixed top-0 left-0">
        <button
          onClick={handleClose}
          className="text-white border border-white rounded-full p-2"
        >
          <X size={28} />
        </button>
      </div>

      <div className="bg-[#0D1B2A] w-[90%] md:w-[50%] p-8 rounded-lg text-center mt-20">
        {/* Step 1 - Purpose */}
        {step === 1 && (
          <>
            <h2 className="text-white text-3xl font-bold mb-6">
              Select Purpose
            </h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {["Buy Property", "Sell Property", "Rent Property"].map(
                (purpose) => (
                  <button
                    key={purpose}
                    onClick={() => {
                      setSelectedPurpose(purpose);
                      setStep(2);
                    }}
                    className={`border border-white px-4 py-2 rounded-full text-sm ${
                      selectedPurpose === purpose
                        ? "bg-white text-black"
                        : "text-white"
                    }`}
                  >
                    {purpose}
                  </button>
                )
              )}
            </div>
          </>
        )}

        {/* Step 2 - Property Type */}
        {step === 2 && selectedPurpose && (
          <>
            {renderBackButton(1)}
            <h2 className="text-white text-3xl font-bold mb-6">
              Select Property Type
            </h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {["Apartments", "Villas", "Penthouse"].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedPropertyType(type);
                    if (type === "Apartments") {
                      setStep(3); // All purposes go to BHK if Apartments
                    } else if (selectedPurpose === "Sell Property") {
                      setStep(5); // Skip budget
                    } else {
                      setStep(4); // Go to budget
                    }
                  }}
                  className={`border border-white px-4 py-2 rounded-full text-sm ${
                    selectedPropertyType === type
                      ? "bg-white text-black"
                      : "text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Step 3 - BHK */}
        {step === 3 && selectedPropertyType === "Apartments" && (
          <>
            {renderBackButton(2)}
            <h2 className="text-white text-3xl font-bold mb-6">Select BHK</h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {["Studio", "1 BHK", "2 BHK", "3 BHK", "4BHK", "More"].map(
                (bhk) => (
                  <button
                    key={bhk}
                    onClick={() => {
                      setSelectedBHK(bhk);
                      if (selectedPurpose === "Sell Property") {
                        setStep(5); // Skip budget for selling
                      } else {
                        setStep(4); // Go to budget
                      }
                    }}
                    className={`border border-white px-4 py-2 rounded-full text-sm ${
                      selectedBHK === bhk ? "bg-white text-black" : "text-white"
                    }`}
                  >
                    {bhk}
                  </button>
                )
              )}
            </div>
          </>
        )}

        {/* Step 4 - Budget (Skip for Sell Property) */}
        {step === 4 &&
          selectedPurpose !== "Sell Property" &&
          showBudget().length > 0 && (
            <>
              {renderBackButton(
                selectedPropertyType === "Apartments" &&
                  selectedPurpose !== "Sell Property"
                  ? 3
                  : 2
              )}
              <h2 className="text-white text-3xl font-bold mb-6">
                {selectedPurpose === "Rent Property"
                  ? "Set Rent Price"
                  : "Set Your Budget"}
              </h2>
              <div className="flex justify-center gap-2 mb-4 flex-wrap">
                {showBudget().map((budget) => (
                  <button
                    key={budget}
                    onClick={() => {
                      setSelectedBudget(budget);
                      setStep(5);
                    }}
                    className={`border border-white px-4 py-2 rounded-full text-sm ${
                      selectedBudget === budget
                        ? "bg-white text-black"
                        : "text-white"
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </>
          )}

        {/* Step 5 - Timeframe */}
        {step === 5 && (
          <>
            {renderBackButton(selectedPurpose === "Sell Property" ? 2 : 4)}
            <h2 className="text-white text-3xl font-bold mb-6">
              When are you planning?
            </h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {["Immediately", "One month", "One month & Above"].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setSelectedTimeframe(t);
                    setStep(6);
                  }}
                  className={`border border-white px-4 py-2 rounded-full text-sm ${
                    selectedTimeframe === t
                      ? "bg-white text-black"
                      : "text-white"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Step 6 - Contact Info */}
        {step === 6 && (
          <>
            {renderBackButton(5)}
            <h2 className="text-white text-3xl font-bold mb-6">
              Enter Your Details
            </h2>
            <div className="flex flex-col gap-4 text-left">
              <input
                placeholder="First Name"
                className="p-2 rounded bg-white text-black w-full md:w-96 mx-auto"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                placeholder="Last Name"
                className="p-2 rounded bg-white text-black w-full md:w-96 mx-auto"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <PhoneInput
                defaultCountry="AE"
                value={phone}
                onChange={setPhone}
                className="bg-white text-black p-2 rounded w-full md:w-96 mx-auto"
              />
              <input
                placeholder="Email"
                className="p-2 rounded bg-white text-black w-full md:w-96  mx-auto"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleSubmit}
                className="bg-white text-black w-52 mx-auto px-4 py-2 rounded-full mt-4"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FindPropertyModal;
