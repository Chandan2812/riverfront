import { CheckCircle } from "lucide-react";
import Navbar from "../../../components/nav";
import { useEffect, useState } from "react";
import Footer from "../../../components/footer";
import SubmitDetailsModal from "../../../components/EnquireNow";

const SellProperty = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
      
    
      const [isModalOpen, setIsModalOpen] = useState(false);
      
          const openModal = () => setIsModalOpen(true);
          const closeModal = () => setIsModalOpen(false);
  const features = [
    {
      title: "Sell Expertise and Experience",
      description:
        "RIVERFront brings a wealth of expertise and experience to the table. Our team of skilled professionals understands the intricacies of the real estate market and has a deep understanding of current trends and pricing strategies. With our knowledge and guidance, you can confidently navigate the selling process and maximize the value of your property.",
    },
    {
      title: "Extensive Network and Marketing Reach",
      description:
        "You gain access to our extensive network of potential buyers, investors, and contacts as we leverage our strong relationships and utilize a comprehensive marketing strategy to ensure maximum exposure for your property. From online listings and social media campaigns to traditional advertising channels, we leave no stone unturned in reaching qualified buyers.",
    },
    {
      title: "Tailored Marketing Approach",
      description:
        "At RIVERFront, we believe that each property is unique, and therefore, we tailor our marketing approach to showcase its distinctive features and appeal to the target audience. Our team crafts compelling property descriptions, high-quality visuals, and virtual tours to highlight the selling points of your property. We work closely with you to understand your goals and create a personalized marketing strategy that sets your property apart from the competition.",
    },
    {
        title: "Seamless Selling Process",
        description:
          "Selling a property can be a complex and time-consuming endeavor. However, with Unique Property by your side, you can expect a seamless selling process. We handle all aspects, from property valuations and negotiations to legal documentation and closing procedures. Our dedicated team is committed to providing you with a smooth and hassle-free experience, ensuring that you can focus on your next chapter while we take care of the details.",
      },
  ];

  return (
    <div>
        <div className="mb-24 md:mb-32">
        <Navbar />
      </div>
    <div className="px-4 py-10 md:py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-800">
        Why Sell Your Property With Us?
      </h2>

      <div className="space-y-10">
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <CheckCircle className="w-10 h-10 text-[var(--primary-color)] flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <section className="mx-auto w-full md:w-[90%] my-12 flex flex-col md:flex-row items-center justify-between gap-4 text-black px-6 py-8">
  <h2 className="text-xl md:text-2xl text-center md:text-left font-semibold">
  Have a question?
    <br/>
    <span className="text-xl md:text-2xl text-center md:text-left font-semibold"> Our team is happy to assist you</span>
  </h2>
  <div>
  <button onClick={openModal} className="bg-[var(--primary-color)] hover:opacity-80 text-white px-6 py-2 rounded-full font-medium">
    Enquire Now
  </button>
  <span>  or Call: +97147702260</span>
  </div>
</section>
      <Footer />
      <SubmitDetailsModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default SellProperty;
