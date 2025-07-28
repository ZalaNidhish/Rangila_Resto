import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import img1 from "../assets/about/about1.avif";
import img2 from "../assets/about/about2.avif";
import img3 from "../assets/about/about3.avif";
import img4 from "../assets/about/about4.avif";
import img5 from "../assets/about/about5.avif";
import img6 from "../assets/about/about6.avif";
import img7 from "../assets/about/about7.avif";
import img8 from "../assets/about/about8.avif";

const AboutUs = () => {
  const aboutCards = [
    {
      title: "Farm to Fork",
      text: "We source our veggies fresh and local — supporting farmers and ensuring quality. Straight from the farm to your fork, our food is honest, clean, and packed with nutrition.",
      img: img1,
    },
    {
      title: "Veggies, but Make It Wow",
      text: "Who said vegetarian is boring? At Rangila, we turn everyday veggies into extraordinary plates with bold flavors and global twists that even meat lovers will crave.",
      img: img2,
    },
    {
      title: "Our Chefs, Our Artists",
      text: "Behind every sizzling garlic bread or bubbling lasagna is a chef with passion. Our kitchen is a studio, and the chefs are the artists of flavor.",
      img: img3,
    },
    {
      title: "The Rangila Vibe",
      text: "It's not just about food — it's about *how* you feel when you're here. Rangila Resto’s colorful ambiance, music, and chill vibe make every visit memorable.",
      img: img4,
    },
    {
      title: "Easy, Fast & Online",
      text: "Craving hits at midnight? Rangila’s got you. Browse the menu, customize your order, and we’ll handle the rest — just a few taps away.",
      img: img5,
    },
    {
      title: "Hygiene First",
      text: "Clean kitchen, clean food, clean conscience. Every dish at Rangila is prepared in a sanitized, safety-first environment. Your health is our top priority.",
      img: img6,
    },
    {
      title: "Our Green Promise",
      text: "We believe in sustainability — from biodegradable packaging to zero-waste practices, we’re doing our bit for the planet while serving up flavor bombs.",
      img: img7,
    },
    {
      title: "Community & Culture",
      text: "Rangila is more than a restaurant — it’s a gathering space. We celebrate festivals, support causes, and spread smiles with every meal.",
      img: img8,
    },
  ];

// rotate-348


  return (
    <div className="h-screen flex flex-col items-center justify-end relative pb-10">
      <div className="About text-6xl font-semibold absolute top-1/6">About Us</div>
      <div className="swiper h-3/6 w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false,  pauseOnMouseEnter: true,  }}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          className="h-full w-full flex items-baseline justify-center "
        >
          {aboutCards.map((item, index) => (
            <SwiperSlide key={index} className="h-full px-5 shadow-2xs">
              <div className="h-full w-full bg-amber-300 relative rounded-2xl overflow-hidden">
                <div className=" hover:opacity-0 active:opacity-0 transition-all cursor-grab active:cursor-grabbing duration-300 h-full w-full flex items-center rounded-2xl justify-center absolute top-0 left-0">
                  <div className="z-4 h-full w-full p-5 text-4xl text-white absolute top-10 font-bold">
                    {item.title}
                  </div>
                  <div className="h-full w-full rounded-2xl bg-[#ff1f1f] z-3">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover z-2"
                    />
                  </div>
                </div>
                <div className="text-[3vh] h-full w-full p-10 flex flex-col items-center justify-center gap-2 text-black">
                  <h1 className="text-1xl font-bold">{item.title}</h1>
                  {item.text}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutUs;
