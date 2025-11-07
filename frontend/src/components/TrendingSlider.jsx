import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import img1 from "../assets/slider/slider1.webp";
import img2 from "../assets/slider/slider2.webp";
import img3 from "../assets/slider/slider3.webp";
import img4 from "../assets/slider/slider4.webp";
import img5 from "../assets/slider/slider5.webp";

const TrendingSlider = () => {
  const exclusiveOffers = [
    {
      img: img1,
      text: "Buy 2 Get 1 Free on All Garlic Breads!",
    },
    {
      img: img2,
      text: "The Great Friday: Flat 70% Off on Pizzas!",
    },
    {
      img: img3,
      text: "Combo Blast: Burger + Fries + Mocktail @ ₹199",
    },
    {
      img: img4,
      text: "Midweek Madness: Lasagna at Half Price!",
    },
    {
      img: img5,
      text: "Weekend Treat: Chinese Platter for 2 @ ₹299",
    },
  ];

  return (
    <div className="h-[50vh] md:h-screen w-full flex items-center justify-center gap-0 bg-gray-100">
      <h1 className="Exclusives text-6xl font-bold rotate-270 text-center hidden md:flex">
        Exclusives <br />
        Offers
      </h1>
      <div className="h-[80%] w-4/5 md:h-6/7 md:w-1/2 flex flex-col items-center justify-center gap-0 ">
        <div className="swiper h-5/7 w-full rounded-4xl hover:cursor-grab active:cursor-grabbing relative shadow-2xl">
          <Swiper
            // navigation={true}
            pagination={{ clickable: true, el:'.custom-Bullets' }}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="h-full w-full flex items-center justify-center"
          >
            {exclusiveOffers.map((offer, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <img src={offer.img} className="h-full w-full object-cover" />
                <h1 className="Slidertext">{offer.text}</h1>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TrendingSlider;
