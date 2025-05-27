import React from "react";
import Hero from "./components/Home/Hero/Hero";
import About from "./components/Home/About/About";
import Feature from "./components/Home/Feature/Feature";
import Pricing from "./components/Home/Pricing/Pricing";


const Homepage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Pricing/>
      <Feature />
      
    </div>
  );
};

export default Homepage;
