import { useNavigate } from "react-router-dom";

export default function OurStory() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl text-gray-800 mb-6 text-center">Our Story</h2>
        <p className="mt-4 text-md text-gray-700 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam minus, adipisci, assumenda cupiditate excepturi ducimus suscipit reprehenderit hic eius, dolore sunt quod eligendi quidem quos molestiae aperiam officia. Praesentium, impedit harum. Et modi inventore hic? Sapiente, ratione magni molestias veritatis adipisci ipsa accusamus praesentium, corporis deserunt, officia assumenda.
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
