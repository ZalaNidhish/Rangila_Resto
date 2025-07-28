import { Link } from "react-router-dom";
import React from "react";
import img1 from "../assets/menuPage/menu1.png";
import img2 from "../assets/menuPage/menu2.webp";
import img3 from "../assets/menuPage/menu3.png";
import img4 from "../assets/menuPage/menu4.png";

const MenuPage = () => {
  return (
    <div className="h-screen w-screen relative bg-gray-100">
      <div className="">
        <div className="menuFood1 h-[30vh] w-[30vh] overflow-hidden absolute top-10 left-10">
          <img src={img1} alt="" className=" h-full w-full object-contain" />
        </div>
        <div className="menuFood2 h-[30vh] w-[30vh] overflow-hidden absolute top-10 right-10">
          <img src={img2} alt="" className=" h-full w-full object-contain" />
        </div>
        <div className="menuFood3 h-[30vh] w-[30vh] overflow-hidden absolute bottom-10 left-10">
          <img src={img3} alt="" className=" h-full w-full object-contain" />
        </div>
        <div className="menuFood4 h-[30vh] w-[30vh] overflow-hidden absolute bottom-10 right-10">
          <img src={img4} alt="" className=" h-full w-full object-contain" />
        </div>
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center p-16">
        <p className="text-2xl font-bold w-1/2 flex flex-col gap-4 text-center ">
          You’ve seen what’s trending. <br /> Now taste what’s timeless. <br />{" "}
          Our menu brings classic comfort <br /> with a twist <br /> 100%
          vegetarian, 100% irresistible. <br />
          <Link to="/menu">
            <span className="text-blue-600 hover:underline cursor-pointer">
              Browse Our Full Menu →
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MenuPage;
