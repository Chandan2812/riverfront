
import StatsSection from '../components/stats'
import Footer from '../components/footer'
import HeroSection from '../components/hero'
import Navbar from '../components/nav'
import AwardsSection from '../components/awards'

export const Landing = () => {
  return (
    <div>
        <>
        <Navbar/>
        <HeroSection/>
    <StatsSection/>
    <AwardsSection/>
      <Footer/>
    </>
    </div>
  )
}
