import { useEffect, useState } from "react";
import Navbar from "../../components/nav";
import SubmitDetailsModal from "../../components/EnquireNow";
import Footer from "../../components/footer";

const faqs = [
  {
    question: "What kind of properties are available for sale in Dubai?",
    answer:
      "Dubai offers a wide range of properties including apartments, villas, townhouses, penthouses, and commercial units. These are available in freehold and leasehold areas, giving residents and investors multiple options depending on their budget and goals.",
  },
  {
    question: "What are the pros & cons of buying off-plan vs ready properties?",
    answer:
      "Off-plan properties are usually cheaper and offer flexible payment plans, but come with risks like construction delays. Ready properties are more expensive but available for immediate occupancy or rental income.",
  },
  {
    question: "What are the steps to buy an off-plan property?",
    answer:
      "1. Choose a developer and project\n2. Reserve the unit with a booking fee\n3. Sign the Sales Purchase Agreement (SPA)\n4. Follow the payment plan linked to construction milestones\n5. Take possession upon completion and registration.",
  },
  {
    question: "What are the steps to buy a ready property?",
    answer:
      "1. Select a property\n2. Sign a Memorandum of Understanding (MOU)\n3. Pay a deposit (usually 10%)\n4. Apply for a No Objection Certificate (NOC)\n5. Transfer ownership at the Dubai Land Department.",
  },
  {
    question:
      "How can I ensure that I find the property that suits my investment or lifestyle needs?",
    answer:
      "Work with a trusted real estate agent, define your budget and preferences clearly, research the community and developer, and always conduct due diligence before committing.",
  },
  {
    question: "Is Life insurance mandatory for taking a mortgage in the UAE?",
    answer:
      "Yes, life insurance is typically required when taking a mortgage in the UAE. It ensures the outstanding loan amount is covered in case of the borrower’s death.",
  },
  {
    question: "What are the recurring fees that homeowners pay in Dubai?",
    answer:
      "Homeowners pay service charges, maintenance fees, and sometimes cooling charges. These vary based on the size of the property and the services offered by the building or community.",
  },
  {
    question:
      "Is there any mortgage available for off-plan property in Dubai?",
    answer:
      "Yes, some banks offer mortgages for off-plan properties, usually after a certain percentage of the construction is completed. It's important to check with banks for eligibility and terms.",
  },
  {
    question: "Is Dubai a good place to live?",
    answer:
      "Absolutely. Dubai offers a safe, cosmopolitan environment with world-class infrastructure, tax-free income, excellent healthcare, and endless lifestyle options for individuals and families.",
  },
];

const FAQSection = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);

      const [isModalOpen, setIsModalOpen] = useState(false);
  
      const openModal = () => setIsModalOpen(true);
      const closeModal = () => setIsModalOpen(false);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
        <div className="mb-24 md:mb-32">
        <Navbar />
      </div>
    <section className="bg-gray-50 py-12 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
            >
              {faq.question}
              <span className="ml-2 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    <section className="mx-auto w-full md:w-[90%] my-12 flex flex-col md:flex-row items-center gap-4 justify-between text-black px-6 py-8">
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

export default FAQSection;
