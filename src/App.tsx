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
import ServiceDetails from './pages/ServiceDetails';
import BlogDetails from './pages/BlogsDetails';



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
        <Route path="/service/:slug" element={<ServiceDetails/>} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
