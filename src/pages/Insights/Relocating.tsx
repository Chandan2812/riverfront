import { useEffect, useState } from "react";
import SubmitDetailsModal from "../../components/EnquireNow";
import Footer from "../../components/footer";
import Navbar from "../../components/nav";

const Relocating = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
      
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="mb-24 md:mb-32">
        <Navbar />
      </div>
      <section className="px-4 py-10 md:px-20 bg-white text-[#1e1e1e]">
        <h2 className="text-3xl md:text-4xl mb-6">
        Relocating To Dubai
        </h2>

        <div className="flex flex-col md:flex-row gap-6 mb-2">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://uniqueproperties.ae/en/uploads/frontend/contents/17709/conversions/sellerguide_image-resize.webp" // update with your actual image path
              alt="Dubai Skyline"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-justify text-sm md:text-base leading-relaxed space-y-4">
            <p>
            Dubai, the cosmopolitan metropolis of the United Arab Emirates, has become an increasingly popular destination for individuals and families looking to embark on a new chapter in their lives. With its thriving economy, stunning architecture, diverse culture, and exceptional quality of life, Dubai offers a unique blend of opportunities and experiences for those considering relocation. Here are some key aspects to consider when relocating to Dubai:            </p>
            <p>
            Dubai's strong economy and business-friendly environment provide ample job opportunities across various sectors. The city is home to numerous multinational corporations, as well as a thriving entrepreneurial ecosystem. Expatriates are drawn to Dubai's tax-free salaries, competitive compensation packages, and professional growth prospects.            </p>
          </div>
        </div>
        <div className="space-y-4 text-justify">
          <p>
          It is advisable to research the job market and explore potential employment options before making the move. Dubai offers a captivating blend of traditional Arabian heritage and modern cosmopolitan living. The city boasts luxurious residential communities, world-class shopping malls, fine dining restaurants, stunning beaches, and a vibrant nightlife scene. The multicultural nature of Dubai ensures a diverse and inclusive society, where individuals from different backgrounds coexist harmoniously. Embracing the local culture, customs, and traditions adds to the enriching experience of living in Dubai. Dubai offers excellent education and healthcare facilities, making it an ideal destination for families. The city is home to reputable international schools that offer a wide range of curricula, catering to different educational preferences. The healthcare system in Dubai is world-class, with state-of-the-art hospitals and clinics staffed by highly qualified medical professionals. Expatriates can expect access to quality education and comprehensive healthcare services for themselves and their families.          </p>
          <p>
          Finally, Dubai is known for its high standards of safety and security. The city has a low crime rate, stringent law enforcement, and a robust legal framework, ensuring a safe environment for residents. The government of Dubai places a strong emphasis on the well-being of its residents, providing peace of mind for individuals and families relocating to the city. Before relocating, it is essential to familiarize oneself with Dubai's visa and immigration requirements. Understanding the necessary documentation, visa processes, and legal obligations will help ensure a smooth transition. Additionally, it is advisable to consider the cost of living, housing options, transportation, and lifestyle preferences when planning the move.          </p>
          <p>
          Relocating to Dubai offers individuals and families an exciting opportunity to experience a dynamic and cosmopolitan city with a unique blend of cultures and opportunities. From its thriving economy to its exceptional lifestyle and infrastructure, Dubai provides a remarkable setting for those seeking new adventures and a high quality of life. To conclude, with careful planning and preparation, relocating to Dubai can be a transformative experience filled with personal and professional growth.          </p>
        </div>
      </section>

      <section className="mx-auto w-full md:w-[90%] my-12 flex flex-col md:flex-row items-center gap-4 justify-between text-black px-6 py-8">
        <h2 className="text-xl md:text-2xl text-center md:text-left font-semibold">
          Have a question?
          <br />
          <span className="text-xl md:text-2xl text-center md:text-left font-semibold">
            {" "}
            Our team is happy to assist you
          </span>
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

export default Relocating;
