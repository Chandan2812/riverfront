import StatsSection from "../components/stats";
import Footer from "../components/footer";
import HeroSection from "../components/hero";
import AwardsSection from "../components/awards";
import OurStory from "../components/ourStory";
import TestimonialSlider from "../components/testimonials";
import WhatsAppButton from "../components/floatingBtn";
import PropertySlider from "../components/offPlan";
import Blog from "../components/blog";
import ForSaleComponent from "../components/ForSale";
import ForRentComponent from "../components/ForRent";

export const Landing = () => {
  return (
    <div>
      <>
        <HeroSection />
        <StatsSection />
        <AwardsSection />

        <ForSaleComponent />
        <ForRentComponent />
        <PropertySlider />
        <OurStory />
        <Blog />
        <TestimonialSlider />
        <Footer />
        <div className="hidden md:block">
          <WhatsAppButton />
        </div>
        <div className="fixed bottom-0 left-0 w-full z-50 flex md:hidden">
          <a
            href="tel:+918368573451"
            className="w-1/2 bg-[#D10B0B] text-white text-center py-4 font-semibold hover:bg-red-700 transition-all"
          >
            Call Me
          </a>
          <a
            href="https://wa.me/+918368573451"
            className="w-1/2 bg-[#1752B4] text-white text-center py-4 font-semibold hover:bg-blue-700 transition-all"
          >
            Contact Me
          </a>
        </div>
      </>
    </div>
  );
};
