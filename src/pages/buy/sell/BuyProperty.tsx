import { CheckCircle } from "lucide-react";
import Navbar from "../../../components/nav";
import { useEffect } from "react";
import Footer from "../../../components/footer";
import HaveAQuestion from "../../../components/HaveAQuestion";

const BuyProperty = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    {
      title: "Extensive Tenant Network",
      description:
        "Leasing your property with us gives you access to our extensive network of prospective tenants. We have a wide pool of qualified renters actively seeking properties, allowing us to match your property with the right tenant quickly and efficiently. Our comprehensive screening process ensures that only reliable and responsible individuals are considered for your property.",
    },
    {
      title: "Expert Market Knowledge",
      description:
        "We have a deep understanding of the local rental market. We stay updated on rental trends, pricing dynamics, and legal requirements, allowing us to provide accurate and informed advice. With our expertise, we can help you determine the optimal rental rate, negotiate favorable lease terms, and ensure compliance with relevant regulations, giving you peace of mind.",
    },
    {
      title: "Effective Marketing Strategies",
      description:
        "When it comes to marketing your rental property, we employ targeted and effective strategies to attract quality tenants. From professional property photography and compelling listings to online advertising and social media campaigns, we leverage various channels to showcase the unique features and appeal of your property. Our goal is to reduce vacancy periods and maximize your rental income.",
    },
    {
      title: "Streamlined Rental Process",
      description:
        "Leasing your property can involve numerous tasks, from tenant inquiries and property viewings to lease agreement preparation and tenant screening. With us, you can experience a streamlined rental process. Our expert agents at RIVERFront will handle all aspects, from marketing and tenant selection to lease negotiations and move-in inspections. Our efficient procedures and attention to detail ensure a smooth and hassle-free experience for both landlords and tenants.",
    },
  ];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <div className="mb-24 md:mb-28">
        <Navbar />
      </div>
      <div className="px-4 py-10 md:py-16 w-full md:w-11/12 mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Why Lease Your Property With Us?
        </h2>

        <div className="space-y-10">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="w-10 h-10 text-[var(--primary-color)] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className=" leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HaveAQuestion />
      <Footer />
    </div>
  );
};

export default BuyProperty;
