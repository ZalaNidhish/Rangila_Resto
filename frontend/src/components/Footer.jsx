import React from "react";
import logo from "../assets/RangilaRestoLogo.png";

import call from "../assets/Footer/call.png"
import facebook from "../assets/Footer/facebook.png"
import instagram from "../assets/Footer/instagram.png"
import whatsapp from "../assets/Footer/whatsapp.png"
import twitter from "../assets/Footer/twitter.png"


const Footer = () => {
  return (
    <div className="h-[45vh] md:h-[50vh] w-full bg-slate-300 md:p-10 p-4 flex flex-col gap-5 font-semibold mt-20">
      <div className="flex items-center justify-evenly gap-6"> 
        <div className="logo h-full w-50 flex items-start justify-center">
          <img
            src={logo}
            alt=""
            className="md:h-50 md:w-50 object-cover rounded-4xl"
          />
        </div>
        <div className="h-full">
          <p className="text-[15px]">
            Rangila Resto <br />
            Shop No. 12, Ground Floor, <br />
            Shivneri Heights, MG Road, <br />
            Andheri East, Mumbai – 400069 <br />
            Maharashtra, India
          </p>
          <p className="flex">
            <span className="w-fit"><img src={call} alt="" className="h-7 w-7 object-cover mx-2 my-4"/></span>
            <span className="w-fit"><img src={whatsapp} alt="" className="h-7 w-7 object-cover mx-2 my-4"/></span>
            <span className="w-fit"><img src={instagram} alt="" className="h-7 w-7 object-cover mx-2 my-4"/></span>
            <span className="w-fit"><img src={facebook} alt="" className="h-7 w-7 object-cover mx-2 my-4"/></span>
            <span className="w-fit"><img src={twitter} alt="" className="h-7 w-7 object-cover mx-2 my-4"/></span>
          </p>
        </div>
         <div className="flex-col items-start h-full hidden md:flex">
            <span className="hover:underline hover:text-blue-600 transition-all duration-200 cursor-pointer "><a href="#Hero">Home</a></span>
            <span className="hover:underline hover:text-blue-600 transition-all duration-200 cursor-pointer "><a href="#TrendingSlider">Exclusive Offers</a></span>
            <span className="hover:underline hover:text-blue-600 transition-all duration-200 cursor-pointer "><a href="#MenuPage">Menu</a></span>
            <span className="hover:underline hover:text-blue-600 transition-all duration-200 cursor-pointer "><a href="/">Book Table</a></span>
            <span className="hover:underline hover:text-blue-600 transition-all duration-200 cursor-pointer "><a href="#AboutUs">About Us</a></span>
            <span className="hover:underline hover:text-blue-600 transition-all duration-200 cursor-pointer "><a href="/">Contact Us</a></span>
         </div>
      </div>
      <div className="w-full text-center text-[#222d17] font-semibold">
        Crafted with spice & code by <span className="text-blue-600">Nidhish </span>
        | Copyright and Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
