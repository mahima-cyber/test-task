import './App.css';
import LayoutIndex from './Components/Layout/ index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestimonialCard from './Components/Testimonial/  TestimonialCard';
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path="/" element={<LayoutIndex />} />
          <Route path="/testimonialCard" element={<TestimonialCard />} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
