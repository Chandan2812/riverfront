import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData.json"
import Footer from "../components/footer";
import Navbar from "../components/nav";

function ServiceDetails() {
    const { slug } = useParams();
  const service = servicesData.find((s: { slug: string | undefined; }) => s.slug === slug);

  if (!service) {
    return <div className="text-center text-red-500 text-xl mt-10">Service Not Found</div>;
  }

  return (
    <div>
        <Navbar/>

{/* Hero Section */}
      <div
        className="relative w-full h-[380px] bg-cover bg-center bg-black bg-opacity-40"
        style={{ backgroundImage: "url('https://uniqueproperties.ae/en/frontend/assets/images/banner/homeBg.webp')" }}
      >
         {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
    <div className="max-w-6xl mx-auto px-4 py-10">
    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-start">{service.title}</h1>

    <div className="grid md:grid-cols-2 gap-6">
      {/* Left - Image */}
      <div>
        <img src={service.image} alt={service.title} className="w-full rounded-lg shadow-md" />
      </div>

      {/* Right - Details */}
      <div>
        <p className="text-lg text-gray-600 mb-4">{service.description}</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {service.bullet_points.map((point, index) => (
            <li key={index} className="text-md">{point}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  <div className="bg-gray-100 py-10 mt-10">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
    {/* Text */}
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Have a question?</h2>
      <p className="text-gray-600">Our team is happy to assist you</p>
    </div>

    {/* Contact Actions */}
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <button className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-md transition">
        Contact Us
      </button>
      <span className="text-lg font-medium text-gray-800">📞 +1 (800) 123-4567</span>
    </div>
  </div>
</div>

  <Footer/>
  </div>
  )
}

export default ServiceDetails