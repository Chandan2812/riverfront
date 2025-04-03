import Property from "./Property";
import propertiesData from "../data/propertiesData.json";

const PropertySection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Dubai's Top Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {propertiesData.map((property) => (
          <Property
            key={property.slug}
            name={property.name}
            image={property.mainImage}
            slug={property.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertySection;
