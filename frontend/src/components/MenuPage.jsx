import { Link } from "react-router-dom";
import React from "react";
import img1 from "../assets/menuPage/menu1.webp";
import img2 from "../assets/menuPage/menu2.webp";
import img3 from "../assets/menuPage/menu3.webp";
import img4 from "../assets/menuPage/menu4.webp";

const MenuPage = () => {
  return (
    <div className="h-[50vh] md:h-screen w-screen relative bg-gray-100 mt-4">
      <div className="">
        <div className="menuFood1 md:h-[30vh] md:w-[30vh] h-[10vh] w-[10vh] overflow-hidden absolute top-2 md:top-10 left-2 md:left-10">
          <img src={img1} alt="" className=" h-full w-full object-contain" />
        </div>
        <div className="menuFood2 md:h-[30vh] md:w-[30vh] h-[10vh] w-[10vh] overflow-hidden absolute top-2 md:top-10 right-2 md:right-10">
          <img src={img2} alt="" className=" h-full w-full object-contain" />
        </div>
        <div className="menuFood3 md:h-[30vh] md:w-[30vh] h-[10vh] w-[10vh] overflow-hidden absolute bottom-2 md:bottom-10 left-2 md:left-10">
          <img src={img3} alt="" className=" h-full w-full object-contain" />
        </div>
        <div className="menuFood4 md:h-[30vh] md:w-[30vh] h-[10vh] w-[10vh] overflow-hidden absolute bottom-2 md:bottom-10 right-2 md:right-10">
          <img src={img4} alt="" className=" h-full w-full object-contain" />
        </div>
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center p-16">
        <p className="text-[18px] md:text-2xl font-bold w-[80vw] md:w-1/2 flex flex-col gap-4 text-center ">
          You’ve seen what’s trending. <br /> Now taste what’s timeless. <br />{" "}
          Our menu brings classic comfort <br /> with a twist <br /> 100%
          vegetarian, 100% irresistible. <br />
          <Link to="/menu">
            <span className="text-blue-600 underline cursor-pointer">
              Browse Our Full Menu  
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MenuPage;
