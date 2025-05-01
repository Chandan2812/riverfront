import services from "../data/servicesData.json";
import Footer from "../components/footer";
import Navbar from "../components/nav";
import { Phone, MessageCircle } from "lucide-react"; // Optional: Icons
import { useEffect } from "react";
import HaveAQuestion from "../components/HaveAQuestion";

export default function ServicesSection() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            const yOffset = -150; // adjust this to match your fixed header height
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }, 100); // slight delay ensures the DOM is fully rendered
        }
      }
    }
  }, []);

  return (
    <div className="w-full bg-black font-raleway font-light px-5">
      <div className="mb-20 md:mb-32">
        <Navbar />
      </div>

      <div className="px-4 md:px-20 py-10 space-y-16">
        {services.map((service, index) => (
          <div
            id={service.slug}
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
              <h2 className="text-2xl md:text-3xl font-bold ">
                {service.title}
              </h2>
              <p className="text-gray-300">{service.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {service.bullet_points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Contact Section */}
              {/* Contact Section - In Row */}
              {service.contact && (
                <div className="mt-4 flex flex-wrap items-center gap-6 text-gray-700">
                  <div className="flex items-center gap-2 font-sans">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span className="text-gray-300">
                      Call:{" "}
                      <a
                        href={`tel:${service.contact.call}`}
                        className=" hover:underline"
                      >
                        {service.contact.call}
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-sans">
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-300">
                      WhatsApp:{" "}
                      <a
                        href={`https://wa.me/${service.contact.whatsapp.replace(
                          /\D/g,
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:underline"
                      >
                        {service.contact.whatsapp}
                      </a>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <HaveAQuestion />
      <Footer />
    </div>
  );
}
