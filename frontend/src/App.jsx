import React from "react";
import HeroSection from "./pages/Hero Section/HeroSection";
import HowItWorks from "./pages/How it works/HowItWorks";
import DoctorSpecialties from "./pages/Choose Doctors/DoctorSpecialties";
import AboutUsSection from "./pages/About us section/AboutUsSection";
import TestimonialsV1 from "./pages/Testimonial/TestimonialsV1";
import InputDesign from "./pages/Section/InputDesign";
import FooterSection from "./pages/Footer Section/FooterSection"

function App() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <DoctorSpecialties />
      <AboutUsSection />
      <TestimonialsV1 />
      <InputDesign />
      <FooterSection />
    </div>
  );
}

export default App;
