import Banner from '../component/Banner';
import Blogs from '../component/Blogs';
import Footer from '../component/Footer';
import PricingPlans from '../component/PricingPlans';
import ProfessionalTeam from '../component/ProfessionalTeam';
import Testimonials from '../component/Testimonials';
import Project from '../component/Project';
import Services from '../component/Services';
import NavSlider from '../component/NavSlider';
import Faq from '../component/Faq';
import { useState,useEffect } from 'react';
// import './assets/css/style.css';
// import './assets/css/common.css';
// import common from '..public/common'
export default function Home() {
  return (
<>
<Banner />
<Services />
<Project />
<PricingPlans />
<ProfessionalTeam />
<Testimonials />
<Blogs />
<Faq />
<Footer />
{/* <NavSlider />  */}
</>
  );
}


