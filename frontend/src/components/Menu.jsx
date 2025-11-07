import React from "react";
import BurgersCat from "../assets/menu/BurgersCat.webp";
import DrinksCat from "../assets/menu/DrinksCat.webp";
import PizzasCat from "../assets/menu/PizzasCat.webp";
import StartersCat from "../assets/menu/StartersCat.webp";
import MexicanCat from "../assets/menu/MexicanCat.webp";
import PastasCat from "../assets/menu/PastasCat.webp";
import DessertsCat from "../assets/menu/DessertsCat.webp";

const Menu2 = () => {
  const menuItems = [
  {
    category: "Burgers",
    img: BurgersCat,
    items: [
      { 
        name: "Cheese Burger", 
        price: 120, 
        ingredients: "Soft bun, veg patty, cheese slice, lettuce, onion, tomato, special sauce" 
      },
      { 
        name: "Mayo Burger", 
        price: 110, 
        ingredients: "Toasted bun, veg patty, mayonnaise, lettuce, cucumber, onion" 
      },
      { 
        name: "Rangila Special Burger", 
        price: 150, 
        ingredients: "Signature bun, double veg patty, paneer tikka, cheese, onions, spicy mayo" 
      },
      { 
        name: "Spicy Paneer Burger", 
        price: 140, 
        ingredients: "Crispy bun, paneer patty, jalapenos, onions, spicy sauce, lettuce" 
      },
      { 
        name: "Classic Veg Burger", 
        price: 100, 
        ingredients: "Simple bun, veg patty, ketchup, onions, lettuce, tomato" 
      },
    ],
  },
  {
    category: "Pizzas",
    img: PizzasCat,
    items: [
      { 
        name: "Margherita Pizza", 
        price: 180, 
        ingredients: "Pizza base, mozzarella cheese, tomato sauce, basil" 
      },
      { 
        name: "Farmhouse Pizza", 
        price: 220, 
        ingredients: "Cheese base, capsicum, onion, tomato, mushroom" 
      },
      { 
        name: "Paneer Overload Pizza", 
        price: 240, 
        ingredients: "Cheese crust, paneer tikka, onions, capsicum, spicy sauce" 
      },
      { 
        name: "Spicy Jalapeno Pizza", 
        price: 210, 
        ingredients: "Cheese base, jalapenos, onions, chili flakes, oregano" 
      },
      { 
        name: "Rangila Special Pizza", 
        price: 260, 
        ingredients: "Double cheese, paneer, olives, mushrooms, capsicum, secret seasoning" 
      },
    ],
  },
  {
    category: "Pastas",
    img: PastasCat,
    items: [
      { 
        name: "White Sauce Pasta", 
        price: 190, 
        ingredients: "Penne pasta, creamy white sauce, garlic, herbs, parmesan cheese" 
      },
      { 
        name: "Red Sauce Pasta", 
        price: 190, 
        ingredients: "Penne pasta, tomato sauce, chili flakes, garlic, herbs" 
      },
      { 
        name: "Pink Sauce Pasta", 
        price: 200, 
        ingredients: "Penne pasta, mix of red & white sauces, herbs, mozzarella cheese" 
      },
      { 
        name: "Cheesy Baked Pasta", 
        price: 220, 
        ingredients: "Pasta, white sauce, red sauce, mozzarella cheese, oregano, baked to perfection" 
      },
    ],
  },
  {
    category: "Mexican",
    img: MexicanCat,
    items: [
      { 
        name: "Veg Tacos", 
        price: 150, 
        ingredients: "Crispy taco shell, beans, lettuce, salsa, cheese, sour cream" 
      },
      { 
        name: "Cheese Quesadilla", 
        price: 180, 
        ingredients: "Tortilla, melted cheese, onions, bell peppers, jalapenos" 
      },
      { 
        name: "Loaded Nachos", 
        price: 160, 
        ingredients: "Crispy nachos, cheese sauce, beans, jalapenos, salsa, olives" 
      },
      { 
        name: "Mexican Rice Bowl", 
        price: 200, 
        ingredients: "Steamed rice, beans, salsa, guacamole, sour cream, cheese" 
      },
    ],
  },
  {
    category: "Starters",
    img: StartersCat,
    items: [
      { 
        name: "Garlic Bread with Cheese", 
        price: 120, 
        ingredients: "Toasted bread, garlic butter, mozzarella cheese, oregano" 
      },
      { 
        name: "French Fries", 
        price: 90, 
        ingredients: "Crispy fried potatoes, salt, ketchup" 
      },
      { 
        name: "Peri Peri Fries", 
        price: 110, 
        ingredients: "Crispy fried potatoes, peri peri seasoning, mayo dip" 
      },
      { 
        name: "Crispy Corn", 
        price: 130, 
        ingredients: "Fried corn kernels, spices, onions, coriander, lemon juice" 
      },
      { 
        name: "Spring Rolls", 
        price: 130, 
        ingredients: "Crispy rolls stuffed with veggies, noodles, and spices" 
      },
      { 
        name: "Veg Manchurian Dry", 
        price: 140, 
        ingredients: "Fried veg balls, soy sauce, garlic, onion, capsicum, spring onions" 
      },
    ],
  },
  {
    category: "Drinks",
    img: DrinksCat,
    items: [
      { 
        name: "Coca-Cola (300ml)", 
        price: 30, 
        ingredients: "Carbonated soft drink" 
      },
      { 
        name: "Sprite (300ml)", 
        price: 30, 
        ingredients: "Lemon-flavored carbonated drink" 
      },
      { 
        name: "Cold Coffee", 
        price: 90, 
        ingredients: "Chilled milk, coffee, sugar, whipped cream" 
      },
      { 
        name: "Mango Milkshake", 
        price: 80, 
        ingredients: "Fresh mango pulp, milk, sugar, ice cream" 
      },
      { 
        name: "Lemon Mint Cooler", 
        price: 70, 
        ingredients: "Lemon juice, mint leaves, soda, sugar, ice" 
      },
    ],
  },
  {
    category: "Desserts",
    img: DessertsCat,
    items: [
      { 
        name: "Chocolate Brownie", 
        price: 100, 
        ingredients: "Cocoa, flour, butter, sugar, nuts, chocolate sauce" 
      },
      { 
        name: "Choco Lava Cake", 
        price: 110, 
        ingredients: "Chocolate cake, molten chocolate filling, vanilla ice cream (optional)" 
      },
      { 
        name: "Ice Cream Scoop", 
        price: 60, 
        ingredients: "Choice of flavors: vanilla, chocolate, strawberry" 
      },
      { 
        name: "Gulab Jamun", 
        price: 70, 
        ingredients: "Deep-fried khoya balls, sugar syrup, cardamom" 
      },
    ],
  },
];



  return(
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="md:text-5xl text-2xl md:m-10 m-6 font-bold">From Our Kitchen To You</h1>
        <div className="Catagory w-full">
        
          {menuItems.map((category, index) => (

            <div key={index} className=" flex flex-col items-center justify-start gap-10 mb-20 overflow-hidden ">
              <h1 className="text-4xl font-black p-2 menuCat flex items-center justify-center w-full  bg-black text-white">{category.category}</h1>
              
              <div className="flex items-center justify-around w-[90vw]">
                <div className="cards grid grid-cols-2 md:w-3/5 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="card bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between gap-2">
                    <h2 className="font-bold text-xl menuItems">{item.name}</h2>
                    <p className="text-gray-600 text-[10px]">{item.ingredients}</p>
                    <p className="text-gray-800 text-[12px] font-semibold">Price: ₹{item.price}</p>
                  </div>
                ))}
              </div>
              <div className="w-2/7 h-60 hidden md:flex p-5">
                <img src={category.img} alt={category.category} className="h-full w-full object-contain mt-4 rounded-lg" />
              </div>
              </div>

            </div>
          ))}

        </div>
        
    </div>
  )


};

export default Menu2;
