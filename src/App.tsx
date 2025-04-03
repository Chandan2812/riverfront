import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from './pages/Landing';
import { AwardsPage } from './pages/AwardsPage';
import { AboutUs } from './pages/AboutUs';
import PropertyDetails from './pages/PropertyDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/awards" element={<AwardsPage/>} /> 
        <Route path="/about" element={<AboutUs/>} /> 
        <Route path="/property/:slug" element={<PropertyDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
