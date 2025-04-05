import { Link } from "react-router-dom";
import Navbar from "../components/nav";

export default function InteriorDesign() {
  return (
    <div className="w-full">
        <Navbar/>
      {/* Breadcrumb */}
      <p className="text-gray-500 text-sm mb-4  mt-20">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link> &gt; 
        <Link to="/services" className="text-blue-500 hover:underline"> Services</Link> &gt; Interior Design
      </p>

      <h1 className="text-3xl font-bold mb-6">Interior Design</h1>

      {/* Image Left - Text Right */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        <img 
          src="https://uniqueproperties.ae/en/uploads/frontend/services/608874/conversions/interior-design-resize.webp" 
          alt="Interior Design" 
          className="w-96 md:w-1/2 rounded-md shadow-lg"
        />

        <div className="md:w-1/2">
          <p className="text-gray-700 mb-4">
            Aviva Collective is an award-winning, multi-disciplinary creative agency specialized in 
            architectural design and fit-out solutions for luxury residential, hospitality, commercial, 
            retail, and F&B sectors.
          </p>
          
          <p className="text-gray-700 mb-4">
            Established 20 years ago in New York City and now headquartered in Dubai, the company 
            provides innovative, turnkey creative solutions for discerning clients, redefining a 
            constant focus on decadence, originality, and thoughtful experiences.
          </p>
          
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Bespoke architectural design: Create unique, innovative spaces tailored to clients’ needs.</li>
            <li>Luxury interior design: Blend form, function, and style for stunning spaces.</li>
            <li>Optimize space utilization: Ensure efficient use while maintaining luxury.</li>
            <li>Project management: Oversee projects from concept to completion, ensuring timely delivery.</li>
            <li>Sustainable design: Incorporate green building principles for long-term value.</li>
            <li>Custom furniture and fixtures: Complement design aesthetics for a cohesive experience.</li>
            <li>Captivating lighting design: Enhance ambiance and functionality.</li>
            <li>Landscaping: Create inviting outdoor spaces blending with architecture.</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-10 bg-gray-100 p-6 rounded-md shadow-md text-center">
        <h2 className="text-lg font-semibold">Have a question?</h2>
        <p className="text-gray-600 mb-4">Our team is happy to assist you</p>
        <button className="bg-black text-white px-6 py-2 rounded-md">Contact Us</button>
        <p className="mt-2 text-gray-500">or Call: (+971) 44 55 8888</p>
      </div>
    </div>
  );
}
