import React from 'react'
import BannerSection from './BannerSection';
import ContactFormSection from './ContactFormSection';
import CraftedSectioin from './CraftedSectioin';
import LearnMoreSection from './LearnMoreSection';
import PricingSection from './PricingSection';
import TestimonialSection from './TestimonialSection';

const IndexHome = () => {
  return (
    <div>
         <CraftedSectioin />
         <PricingSection />
         <TestimonialSection />
         <LearnMoreSection />
         <ContactFormSection />
         <BannerSection />
    </div>
  )
}

export default IndexHome;