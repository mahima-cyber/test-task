import './App.css';
import LayoutIndex from './Components/Layout/ index';
import { Route, Routes } from "react-router-dom";
import TestimonialForm from './Components/Testimonial/TestimonialForm';
import { IndexRoute } from './Routes';

function App() {
  return (
    <div className="App">
      <IndexRoute/>
    </div>
  );
}

export default App;
