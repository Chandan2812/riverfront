import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from './pages/Landing';
import { AwardsPage } from './pages/AwardsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/awards" element={<AwardsPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
