import { useParams, useNavigate } from "react-router-dom";
import propertiesData from "../data/propertiesData.json";

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
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        className="mb-6 px-4 py-2 bg-gray-700 text-white rounded-md"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      {/* Property Name */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{property.name}</h1>

      {/* First Description */}
      <p className="text-gray-600 mb-6">{property.shortDescription}</p>

      {/* Main Image */}
      <img
        src={property.mainImage}
        alt={property.name}
        className="w-full h-[400px] object-cover rounded-lg mb-6"
      />

      {/* Second Description */}
      <p className="text-gray-600 mb-6">{property.longDescription}</p>

      {/* Image Gallery */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {property.gallery.map((image:any, index) => (
          <img
            key={index}
            src={image}
            alt={`${property.name} ${index + 1}`}
            className="w-full h-[200px] object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyDetails;
