
import StatsSection from '../components/stats'
import Footer from '../components/footer'
import HeroSection from '../components/hero'
import AwardsSection from '../components/awards'
import OurStory from '../components/ourStory'
import TestimonialSlider from '../components/testimonials'
import WhatsAppButton from '../components/floatingBtn'
import PropertySlider from '../components/offPlan'
import Blog from '../components/blog'
import ForSaleComponent from '../components/ForSale'
import ForRentComponent from '../components/ForRent'

export const Landing = () => {
  return (
    <div>
        <>
        <HeroSection/>
    <StatsSection/>
    <AwardsSection/>
    
    <ForSaleComponent/>
    <ForRentComponent/>
    <PropertySlider/>
    <OurStory/>
    <Blog/>
    <TestimonialSlider/>
      <Footer/>
      <WhatsAppButton /> {/* Floating WhatsApp Button */}

    </>
    </div>
  )
}
