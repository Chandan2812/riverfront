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
        <Route path="/forsale" element={<ForSale/>} />
        <Route path="/forsaleDetails/:title" element={<ForSaleDetails/>} />
        <Route path="/forrent" element={<ForRent/>} />
        <Route path="/forrentDetails/:title" element={<ForRentDetails/>} />
        <Route path="/OffplanPropertyCard" element={<OffplanPropertyCard/>} />
      </Routes>
    </Router>
  );
}

export default App;
