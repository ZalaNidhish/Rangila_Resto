import React from "react";
import BurgersCat from "../assets/menu/BurgersCat.webp"
import DrinksCat from "../assets/menu/DrinksCat.webp"
import PizzasCat from "../assets/menu/PizzasCat.webp"
import StartersCat from "../assets/menu/StartersCat.webp"
import MexicanCat from "../assets/menu/MexicanCat.webp"
import PastasCat from "../assets/menu/PastasCat.webp"
import DessertsCat from "../assets/menu/DessertsCat.webp"

const Menu2 = () => {
  const menuItems = [
    {
      category: "Burgers",
      img: BurgersCat,
      items: [
        { name: "Cheese Burger", price: 120 },
        { name: "Mayo Burger", price: 110 },
        { name: "Rangila Special Burger", price: 150 },
        { name: "Spicy Paneer Burger", price: 140 },
        { name: "Classic Veg Burger", price: 100 },

      ],
    },
    {
      category: "Pizzas",
      img: PizzasCat,
      items: [
        { name: "Margherita Pizza", price: 180 },
        { name: "Farmhouse Pizza", price: 220 },
        { name: "Paneer Overload Pizza", price: 240 },
        { name: "Spicy Jalapeno Pizza", price: 210 },
        { name: "Rangila Special Pizza", price: 260 },
      ],
    },
    {
      category: "Pastas",
      img: PastasCat,
      items: [
        { name: "White Sauce Pasta", price: 190 },
        { name: "Red Sauce Pasta", price: 190 },
        { name: "Pink Sauce Pasta", price: 200 },
        { name: "Cheesy Baked Pasta", price: 220 },
      ],
    },
    {
      category: "Mexican",
      img: MexicanCat,
      items: [
        { name: "Veg Tacos", price: 150 },
        { name: "Cheese Quesadilla", price: 180 },
        { name: "Loaded Nachos", price: 160 },
        { name: "Mexican Rice Bowl", price: 200 },
      ],
    },
    {
      category: "Starters",
      img: StartersCat,
      items: [
        { name: "Garlic Bread with Cheese", price: 120 },
        { name: "French Fries", price: 90 },
        { name: "Peri Peri Fries", price: 110 },
        { name: "Crispy Corn", price: 130 },
        { name: "Spring Rolls", price: 130 },
        { name: "Veg Manchurian Dry", price: 140 },
      ],
    },
    {
      category: "Drinks",
      img: DrinksCat,
      items: [
        { name: "Coca-Cola (300ml)", price: 30 },
        { name: "Sprite (300ml)", price: 30 },
        { name: "Cold Coffee", price: 90 },
        { name: "Mango Milkshake", price: 80 },
        { name: "Lemon Mint Cooler", price: 70 },
      ],
    },
    {
      category: "Desserts",
      img: DessertsCat,
      items: [
        { name: "Chocolate Brownie", price: 100 },
        { name: "Choco Lava Cake", price: 110 },
        { name: "Ice Cream Scoop", price: 60 },
        { name: "Gulab Jamun", price: 70 },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="md:text-5xl text-2xl md:m-10 m-6 font-bold">From Our Kitchen To You</h1>
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        {menuItems.map((category, index) => (
          <div key={index} className="mb-8">
            <h1 className="text-3xl font-black mb-2 menuCat">{category.category}</h1>
            <ul>
              <li>
                <div className="flex">
                  <div className="md:w-2/5 w-4/5">
                    <ul>
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="py-1 menuItems">
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-1/5">
                    <ul>
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="py-1">
                          ₹ {item.price}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-2/5 h-45 hidden md:flex">
                    <img src={category.img} alt="" className="h-full w-full object-contain"/>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu2;
