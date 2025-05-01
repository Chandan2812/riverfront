import { useParams } from "react-router-dom";
import propertyData from "../data/offPlanData.json";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import HaveAQuestion from "../components/HaveAQuestion";

function OffPlanDetails() {
  const { projectName } = useParams();
  const decodedTitle = projectName?.replace(":", "").replace(/%20/g, " ");
  const property = propertyData.find(
    (item) => item.projectName === decodedTitle
  );

  if (!property) {
    return <div className="p-10 text-center text-xl">Property not found</div>;
  }

  return (
    <div className="bg-black">
      <div className="mb-24">
        <Navbar />
      </div>

      {/* Header Image with Project Name overlay */}
      <div className="relative h-96 w-full">
        <img
          src={property.images.primary}
          alt={property.projectName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-5xl font-raleway font-thin">
            {property.projectName}
          </h1>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="w-[90%] mx-auto px-4 py-10 font-raleway font-thin text-white">
        {/* Description + Price + Image */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl mb-2">
              Project Details - {property.projectName}
            </h2>
            <hr className="border-t-2 border-black w-32 mb-6" />
            <p className="text-lg text-gray-200">{property.description}</p>
            <p className="text-xl font-thin text-white font-sans">
              Price: {property.price}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={property.images.secondary}
              alt="Secondary"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>

        {/* About Developer */}
        <div className="mt-16 flex flex-col md:flex-row items-start gap-10">
          <div className="w-full md:w-1/3">
            <img
              src={property.images.developerLogo}
              alt="Developer Logo"
              className="rounded-lg w-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl mb-1">About Developers</h3>
            <p className="text-lg font-thin mb-1">{property.developer}</p>
            <hr className="border border-gray-300 w-24 mb-4" />
            <p className="text-gray-200">{property.aboutDeveloper}</p>
          </div>
        </div>
      </div>

      <HaveAQuestion />

      <Footer />
    </div>
  );
}

export default OffPlanDetails;
