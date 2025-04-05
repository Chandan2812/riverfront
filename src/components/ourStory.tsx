import { useNavigate } from "react-router-dom";

export default function OurStory() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl text-gray-800 mb-6 text-center">Our Story</h2>
        <p className="mt-4 text-md text-gray-700 ">
        At Riverfront Properties, our mission is to redefine the real estate experience in Dubai by providing exceptional service in buying, selling, and renting properties. We are committed to empowering women from diverse backgrounds by offering them career opportunities and a platform to thrive. Through integrity, innovation, and inclusivity, we aim to build lasting relationships with our clients and contribute to a more equitable and dynamic real estate market.

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
