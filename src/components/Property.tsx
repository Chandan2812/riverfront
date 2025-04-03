import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

interface PropertyProps {
  name: string;
  image: string;
  slug: string; // Used for navigation
}

const Property: React.FC<PropertyProps> = ({ name, image, slug }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/property/${slug}`);
  };

  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={handleNavigation}
    >
      {/* Property Image */}
      <img src={image} alt={name} className="w-full h-full object-cover" />

      {/* Property Name (Top Left) */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-md text-lg font-semibold">
        {name}
      </div>

      {/* Arrow Button (Bottom Right) */}
      <button
        onClick={handleNavigation}
        className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white p-3 rounded-full transition-transform hover:scale-110"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Property;
