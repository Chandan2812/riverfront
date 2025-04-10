import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from './pages/Landing';
import { AwardsPage } from './pages/AwardsPage';
import { AboutUs } from './pages/AboutUs';
import PropertyDetails from './pages/PropertyDetails';
import Contact from './pages/Contact';
import OffPlanProperties from './components/offPlanProperties';
import TopProperties from './pages/TopProperties';
import ServicesSection from './pages/Services';
import BlogDetails from './pages/BlogsDetails';
import ForSale from './pages/forsale';
import OffplanPropertyCard from './pages/forOffPlan';
import ForRent from './pages/forRent';
import ForSaleDetails from './pages/ForSaleDetails';
import ForRentDetails from './pages/ForRentDetails';
import OffPlanDetails from './pages/offPlanDetails';
import WhyInvest from './pages/Insights/WhyInvest';
import AboutDubai from './pages/Insights/AboutDubai';
import BuyerGuide from './pages/Insights/BuyersGuide';
import SellerGuide from './pages/Insights/SellersGuide';
import Relocating from './pages/Insights/Relocating';
import FAQSection from './pages/Insights/Faq';
import SellProperty from './pages/buy/sell/SellProperty';
import BuyProperty from './pages/buy/sell/BuyProperty';
import Career from './pages/Career';
import AllBlogs from './pages/AllBlogs';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/awards" element={<AwardsPage/>} /> 
        <Route path="/about" element={<AboutUs/>} /> 
        <Route path="/property/:slug" element={<PropertyDetails />} />
        <Route path="/topProperties" element={<TopProperties />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/OffPlanProperties" element={<OffPlanProperties/>} />
        <Route path="/ServicesSection" element={<ServicesSection/>} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
        <Route path="/viewblogs" element={<AllBlogs/>} />
        <Route path="/forsale" element={<ForSale/>} />
        <Route path="/forsaleDetails/:title" element={<ForSaleDetails/>} />
        <Route path="/forrent" element={<ForRent/>} />
        <Route path="/forrentDetails/:title" element={<ForRentDetails/>} />
        <Route path="/OffplanPropertyCard" element={<OffplanPropertyCard/>} />
        <Route path="/offplan/:projectName" element={<OffPlanDetails/>} />
        <Route path="/insights/why-invest-in-dubai" element={<WhyInvest/>} />
        <Route path="/insights/About-Dubai" element={<AboutDubai/>} />
        <Route path="/insights/buyers-guide" element={<BuyerGuide/>} />
        <Route path="/insights/sellers-guide" element={<SellerGuide/>} />
        <Route path="/insights/relocating-to-dubai" element={<Relocating/>} />
        <Route path="/insights/faq" element={<FAQSection/>} />
        <Route path="/sell/sell-property" element={<SellProperty/>} />
        <Route path="/sell/lease-property" element={<BuyProperty/>} />
        <Route path="/career" element={<Career/>} />

      </Routes>
    </Router>
  );
}

export default App;
