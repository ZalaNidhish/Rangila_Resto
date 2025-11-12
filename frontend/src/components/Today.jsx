import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Today = () => {
  const [availableItems, setAvailableItems] = useState([]);

  useEffect(() => {
    fetch("https://rangilaresto.onrender.com/admin/availableitems") // backend endpoint
      .then((res) => res.json())
      .then((data) => setAvailableItems(data)) // update state with fetched items
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <h1 className="text-xl font-bold">Rangila Resto Daily Menu</h1>
        <div className="space-x-4 h-[7vh]">
          <Link to="/">
          <button className="bg-blue-500 p-2 rounded hover:bg-blue-700 cursor-pointer transition-all duration-300">Home</button>
          </Link>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center h-[83vh] bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Today's Available Items</h1>
        <ul className="bg-white shadow-md rounded-lg p-4 w-80 text-center">
          {availableItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Today;
