
import services from "../data/servicesData.json"
import Footer from "../components/footer";
import Navbar from "../components/nav";

export default function ServicesSection() {


  return (
    <div className="w-full">
      <div className="mb-12 md:mb-24">
      <Navbar/>
      </div>
        

      <div className="px-4 md:px-20 py-10 space-y-16">
      {services.map((service, index) => (
        <div
          key={service.slug}
          className={`flex flex-col-reverse md:flex-row items-center md:items-start ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } gap-8`}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div className="w-full md:w-1/2 text-[var(--primary-color)] space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {service.bullet_points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
      <Footer/>
    </div>
  );
}
