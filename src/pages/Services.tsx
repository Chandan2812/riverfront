
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/nav";
import services from "../data/servicesData.json"
import Footer from "../components/footer";

export default function ServicesSection() {
  const navigate = useNavigate();


  return (
    <div className="w-full">
        <Navbar/>
      <div className="relative w-full h-[380px] bg-cover bg-center" style={{ backgroundImage: "url('https://uniqueproperties.ae/en/frontend/assets/images/banner/homeBg.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
          <h1 className="text-white text-3xl font-bold text-center">Our Services</h1>
          <p className="text-white text-sm mt-2">Home &gt; Services</p>
        </div>
      </div>

      <div className="mx-auto w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {services.map((service) => (
          <div
            key={service.slug}
            className="relative w-full h-[250px] sm:h-[300px] md:h-[250px] lg:h-[200px] overflow-hidden rounded-lg shadow-md"
            
          >
            {/* Property Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" /> {/* Transparent Black Overlay */}
            

            {/* Property Name (Top Left) */}
            <div className="absolute top-2 left-2 text-white px-2 py-1 rounded-md text-sm sm:text-base">
              {service.title}
            </div>

            {/* Arrow Button (Bottom Right) */}
            <button
  className="absolute bottom-2 right-2 border border-white rounded-lg text-white py-2 px-4 sm:px-5 sm:py-3 transition-transform"
  onClick={() => navigate(`/service/${service.slug}`)}
>
  <FaArrowRight size={16} />
</button>

          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
