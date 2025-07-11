import React from "react";
import Hero from "./components/Home/Hero/Hero";
import About from "./components/Home/About/About";
import Feature from "./components/Home/Feature/Feature";
import Pricing from "./components/Home/Pricing/Pricing";
import Portfolio from "./components/Home/Portfolio/Portfolio";
import FloatingWhatsApp from "./components/Global/FloatingWhatsapp";

const Homepage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      {/* <Service /> */}
      {/* <ClientReview />
      <Team/> */}
      <Pricing />
      <Portfolio/>
      <Feature />
      <FloatingWhatsApp />  
    </div>
  );
};

export default Homepage;
