import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TrendingSlider from "./TrendingSlider";
import MenuPage from "./MenuPage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Marque from "./Marque";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div id="Hero">
        <Hero />
      </div>
      <div id="TrendingSlider">
        <TrendingSlider />
      </div>
      <Marque />
      <div id="MenuPage">
        <MenuPage />
      </div>
      <div id="AboutUs">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
