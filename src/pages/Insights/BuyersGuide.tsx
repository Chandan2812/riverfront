import { useEffect } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/nav";
import HaveAQuestion from "../../components/HaveAQuestion";

const BuyerGuide = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-black font-raleway font-light text-white">
      <div className="mb-24 md:mb-32">
        <Navbar />
      </div>
      <section className="px-4 py-10 md:px-20">
        <h2 className="text-3xl md:text-4xl mb-6">Buyer's Guide</h2>

        <div className="flex flex-col md:flex-row gap-6 mb-2">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://uniqueproperties.ae/en/uploads/frontend/contents/17699/conversions/buyerguide_image-resize.webp" // update with your actual image path
              alt="Dubai Skyline"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-justify text-sm md:text-base leading-relaxed space-y-4">
            <p>
              Welcome to the Buyers' Guide, designed to provide you with
              comprehensive information and expert advice on purchasing property
              in Dubai. Whether you are a first-time buyer or an experienced
              investor, this guide will help you navigate the real estate market
              in Dubai and make informed decisions.
            </p>
            <p>
              The real estate market in Dubai has an extensive choice of
              property, including luxurious villas, elegant apartments, and
              commercial buildings. Before you make any purchases, it is crucial
              to research and understand market trends, price fluctuations, and
              demand-supply dynamics. Stay updated with current market
              conditions to make informed choices. Establishing your budget is a
              vital step in the property-buying process. Consider your financial
              situation, including down payment, mortgage options, and ongoing
              expenses such as maintenance fees and service charges.
            </p>
          </div>
        </div>
        <div className="space-y-4 text-justify mt-5">
          <p>
            Dubai offers properties in various price ranges, so it's essential
            to assess your financial capabilities and find a property that
            aligns with your budget. Furthermore, Dubai boasts a diverse range
            of neighborhoods, each offering its unique appeal. When choosing a
            location, consider factors like proximity to schools, workplaces,
            transportation hubs, and lifestyle amenities. Whether you prefer the
            bustling city center or a tranquil suburban area, Dubai has options
            to suit everyone's preferences. Dubai's real estate market also
            offers a plethora of property types, including apartments, villas,
            townhouses, penthouses, and mansions. Consider the size, layout, and
            amenities that are essential to you, such as swimming pools, gyms,
            parking spaces, and green spaces. Determine your needs and
            prioritize accordingly when exploring different property options. In
            addition, due diligence is essential when selecting a developer or
            project in Dubai. Research the reputation and track record of the
            developer, including their handover timelines and the quality of
            their previous projects. Explore their ongoing and completed
            projects to get a sense of their workmanship and commitment to
            customer satisfaction. Familiarize yourself with the legal and
            regulatory aspects of buying property in Dubai. Non-UAE nationals
            can own freehold properties in designated areas known as freehold
            zones, while other areas may require leasehold arrangements.
            Understand the legal processes, fees, and documentation required for
            property transactions to ensure a smooth buying experience.
          </p>
          <p>
            Moreover, working with reputable real estate agents and consultants
            can significantly simplify the property buying process. They have
            in-depth knowledge of the market, can provide expert advice, and
            help negotiate the best deals on your behalf. Ensure that you choose
            RERA licensed professionals who are well-versed in Dubai's real
            estate regulations. Consider your financing options when purchasing
            property in Dubai. Several banks and financial institutions offer
            mortgage products tailored to suit buyers' needs. Research the
            interest rates, loan tenure, eligibility criteria, and associated
            costs before finalizing a mortgage provider. Consult with financial
            advisors to understand the most suitable financing option for you.
            Conduct thorough due diligence before committing to a purchase. This
            includes property inspections, verifying ownership and title deeds,
            and reviewing all legal and financial aspects of the transaction.
            Engage a qualified legal professional who specializes in real estate
            to ensure all legal requirements are met and protect your interests.
          </p>
          <p>
            Finally, evaluate the potential return on investment (ROI) of the
            property you are considering. Dubai's real estate market has shown
            consistent growth over the years, but it's essential to assess the
            future prospects of the location and property type. Consider factors
            such as upcoming infrastructure projects, government initiatives,
            and market demand to gauge the long-term investment potential.
          </p>
          <p>
            Remember, buying property is a significant investment, and thorough
            research and careful consideration of all relevant factors is
            critical for each buyer.
          </p>
        </div>
      </section>

      <HaveAQuestion />
      <Footer />
    </div>
  );
};

export default BuyerGuide;
