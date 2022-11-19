import React from 'react'
import Header from './Header'
import Footer from "./Footer"
import CraftedSectioin from '../../Pages/LandingPage/CraftedSectioin'
import TestimonialSection from '../../Pages/LandingPage/TestimonialSection'
import PricingSection from '../../Pages/LandingPage/PricingSection'
import LearnMoreSection from '../../Pages/LandingPage/LearnMoreSection'
import BannerSection from '../../Pages/LandingPage/BannerSection'
import ContactFormSection from '../../Pages/LandingPage/ContactFormSection'


const LayoutIndex = () => {
  return (
    <div>
      <Header />
      <CraftedSectioin />
      <PricingSection />
      <LearnMoreSection />
      <TestimonialSection />
      <BannerSection />
      <ContactFormSection />
      <Footer />
      {/* <Routes>
        <Route path ="/testimonialCard" element={<TestimonialCard/>}/>
      </Routes> */}
     
    </div>
  )
}

export default LayoutIndex