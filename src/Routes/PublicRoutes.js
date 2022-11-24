import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import TestimonialSetting from '../Components/Testimonial/TestimonialSetting';
import IndexHome from '../Pages/LandingPage/indexHome';

const PublicRoutes=()=> {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexHome/>}/>
          <Route path='/testimonialSetting' element={<TestimonialSetting/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default PublicRoutes