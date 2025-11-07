import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon.jpg";

const Navbar = ({id, isLoggedin, isAdmin }) => {
  let log = `/login`;
  let box3 = "Login";
  
  if(isLoggedin){
    log = `/logout/${id}`;
    box3 = "Logout";
  }

  return (
    <div className="z-2 h-16 text-black flex items-center justify-between gap-2 md:gap-68 px-12 md:px-18 sticky top-0 left-0 right-0 bg-slate-300">
      <div className="h-10 w-30 text-lg font-bold flex items-center justify-center gap-3">
        <img
          src={icon}
          alt=""
          className="h-full w-full object-contain rounded-2xl"
        />
        <h1 className=" text-nowrap text-[15px] md:text-2xl">Rangila Resto</h1>
      </div>
      <nav>
        <ul className="flex space-x-7">
          <li className="hover:underline cursor-pointer text-[14px] hidden md:flex py-1">
            <a href="#Hero">Home</a>
          </li>
          <li className="hover:underline cursor-pointer text-[14px] hidden md:flex py-1 text-nowrap">
            <a href="#TrendingSlider">Exclusive Offers</a>
          </li>
          <li className="hover:underline cursor-pointer text-[14px] hidden md:flex py-1 text-nowrap">
            <a href="#AboutUs">About Us</a>
          </li>
          <li className="hover:underline cursor-pointer text-[14px]  bg-blue-700 px-2 py-1 rounded text-white  md:bg-blue-700 md:px-4 md:rounded md:text-white text-nowrap">
            <Link to="/today">Today's Menu</Link>
          </li>
          <li className="hover:underline cursor-pointer text-[14px]  bg-blue-700 px-2 py-1 rounded text-white  md:bg-blue-700 md:px-4 md:rounded md:text-white text-nowrap">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="hover:underline cursor-pointer text-[14px]  bg-blue-700 px-2 py-1 rounded text-white  md:bg-blue-700 md:px-4 md:rounded md:text-white text-nowrap">
            <Link to={log}>{box3}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
