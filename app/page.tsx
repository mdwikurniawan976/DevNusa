import React from "react";
import Hero from "./components/Home/Hero/Hero";
import About from "./components/Home/About/About";
import Feature from "./components/Home/Feature/Feature";
import Service from "./components/Home/Services/Service";
import ClientReview from "./components/Home/ClientReview/ClientReview";
import Team from "./components/Home/Team/Team";
import Pricing from "./components/Home/Pricing/Pricing";
import Footer from "./components/Footer/Footer";

const Homepage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      {/* <Service /> */}
      {/* <ClientReview />
      <Team/> */}
      <Pricing/>
      <Feature />
      
    </div>
  );
};

export default Homepage;
