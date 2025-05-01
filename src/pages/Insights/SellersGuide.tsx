import { useEffect } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/nav";
import HaveAQuestion from "../../components/HaveAQuestion";

const SellerGuide = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-black font-raleway font-light text-white">
      <div className="mb-24 md:mb-32">
        <Navbar />
      </div>
      <section className="px-4 py-10 md:px-20">
        <h2 className="text-3xl md:text-4xl mb-6">Seller's Guide</h2>

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
              Selling a property can be a complex process, especially in a
              dynamic real estate market like Dubai. To help property owners
              navigate this journey with confidence, we present the ultimate
              Sellers' Guide for Dubai real estate. Whether you're a seasoned
              seller or new to the market, this comprehensive guide will provide
              you with valuable insights and expert advice to maximize the
              selling potential of your property.
            </p>
            <p>
              First impressions matter, and preparing your property for sale is
              crucial to attracting potential buyers. Start by decluttering,
              depersonalizing, and deep cleaning your property. Consider small
              repairs and renovations that can enhance its appeal. Professional
              staging can also help showcase your property's best features and
              create an inviting atmosphere for buyers. Determining the right
              price for your property is essential to attract interested buyers
              and achieve a successful sale.
            </p>
          </div>
        </div>
        <div className="space-y-4 text-justify mt-5">
          <p>
            Research the current market conditions, comparable properties in
            your area, and recent sales data. Consult with real estate agents or
            appraisers to obtain a professional valuation. Setting a competitive
            and realistic price will increase your chances of a timely sale.
            Working with a reputable and experienced real estate agency is
            invaluable when selling your property in Dubai. An expert agency
            will provide expert guidance, market insights, and a wide network of
            potential buyers. They will handle the marketing, negotiations, and
            paperwork, ensuring a smooth and efficient selling process. Choose
            an agent who specializes in your property type and has a track
            record of successful sales. Effective marketing is crucial to
            attracting potential buyers. Your agent will employ various
            strategies, including professional photography, virtual tours,
            online listings, and targeted advertising campaigns. Showcase your
            property's unique features and highlight its location, amenities,
            and any recent upgrades.
          </p>
          <p>
            A comprehensive marketing plan will maximize your property's
            visibility and reach a wide range of buyers. When offers start
            coming in, it's important to carefully review and consider each one.
            Your real estate agent will guide you through the negotiation
            process, ensuring your interests are protected while finding a
            win-win situation for both parties. Evaluate not only the offer
            price but also the buyer's financial position and terms of the
            offer. Once you accept an offer, work closely with your agent to
            navigate the necessary paperwork and legal procedures. During the
            due diligence period, the buyer will conduct inspections, and
            property surveys, and obtain financing approvals. Work closely with
            your agent to ensure a smooth due diligence process and provide any
            requested documentation promptly. Once the buyer is satisfied, both
            parties will proceed to sign the sales and purchase agreement, which
            outlines the terms and conditions of the sale. As the closing date
            approaches, coordinate with your agent, the buyer, and relevant
            parties to complete any outstanding requirements.
          </p>
          <p>
            This includes settling any outstanding payments, transferring
            utilities, and ensuring all legal obligations are met. On the
            closing day, finalize the transfer of ownership by completing the
            necessary paperwork and handing over the keys to the buyer. Dubai
            offers several tax benefits for property sellers. Consult with a tax
            advisor or real estate expert to understand the applicable tax
            regulations and exemptions. Being aware of these benefits can help
            optimize your financial gains from the sale.
          </p>
          <p>
            To conclude, selling your property in Dubai can be a rewarding
            experience when armed with the right knowledge and support. By
            following the steps outlined in this Sellers' Guide, you'll be
            well-equipped to navigate the process successfully. Remember,
            working with a professional real estate agent and conducting
            thorough research will maximize your chances of achieving a timely
            and profitable sale in the vibrant Dubai real estate market.
          </p>
        </div>
      </section>

      <HaveAQuestion />
      <Footer />
    </div>
  );
};

export default SellerGuide;
