
import StatsSection from '../components/stats'
import Footer from '../components/footer'
import HeroSection from '../components/hero'
import AwardsSection from '../components/awards'
import OurStory from '../components/ourStory'
import TestimonialSlider from '../components/testimonials'
import WhatsAppButton from '../components/floatingBtn'
import PropertySection from '../components/PropertySection'
import PropertySlider from '../components/offPlan'
import Blog from '../components/blog'

export const Landing = () => {
  return (
    <div>
        <>
        <HeroSection/>
    <StatsSection/>
    <AwardsSection/>
    <PropertySection/>
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
