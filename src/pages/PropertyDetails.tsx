import { useParams, useNavigate } from "react-router-dom";
import propertiesData from "../data/propertiesData.json";
import Footer from "../components/footer";
import HeroSection from "../components/hero";

const PropertyDetails = () => {
  const { slug } = useParams<{ slug: string }>(); // Get slug from URL
  const navigate = useNavigate();

  // Find the property by slug
  const property = propertiesData.find((p) => p.slug === slug);

  if (!property) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-800">Property Not Found</h2>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div>
                <HeroSection/>
    <div className="container w-[90%] mx-auto px-4 py-8">


      {/* Property Name */}
      <h1 className="text-4xl  text-[var(--primary-color)] mb-4">{property.name}</h1>

      {/* First Description */}
      <p className="text-gray-600 mb-6">{property.shortDescription}</p>

      {/* Main Image */}
      {/* Main Image Full Width with Fixed Height */}
<div className="w-full h-[500px] ">
  <img
    src={property.mainImage}
    alt={property.name}
    className="w-full h-full object-cover rounded-xl"
  />
</div>


      {/* Second Description */}
      <div className="text-gray-600 my-6 space-y-3">
  {property.longDescription.split("\n").map((line, index) => (
    <p key={index}>{line}</p>
  ))}
</div>

      {/* Image Gallery */}
      <h2 className="text-2xl font-semibold text-[var(--primary-color)] mb-4">Image Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {property.gallery.map((image:any, index) => (
          <img
            key={index}
            src={image.image}
            alt={`${property.name} ${index + 1}`}
            className="w-full h-[200px] object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default PropertyDetails;
