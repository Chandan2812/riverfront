import { useNavigate } from "react-router-dom";

export default function OurStory() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl text-gray-800 mb-6 text-center">Our Story</h2>
        <p className="mt-4 text-md text-gray-700 ">
          Since our formation in 2008, Unique Properties has embarked on a transformative
          journey fueled by our unwavering commitment to customer-centricity and a passion
          for real estate. This distinctive approach set us apart from the competition and
          propelled us to become one of Dubai's leading agencies, setting new standards for
          quality and excellence.
        </p>
        <button 
          onClick={() => navigate('/about')} 
          className="px-6 py-2 text-lg text-white font-semibold bg-[--primary-color] rounded-3xl hover:opacity-80 mt-6"
        >
          Read More About Us
        </button>
      </div>
    </div>
  );
}
