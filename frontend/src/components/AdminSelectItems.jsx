import React, { useState, useEffect } from "react";
import axios from "axios";
import { data, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminSelectItems = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState([]); // all items from backend
  const navigate = useNavigate();

  // fetch items from backend on component mount
  useEffect(() => {
    fetch("http://localhost:5000/admin/items") // backend endpoint
      .then((res) => res.json())
      .then((data) => setItems(data)) // update state with fetched items
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedItems([...selectedItems, value]); // add item
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== value)); // remove item
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Selected items:", selectedItems);

    const data = {
      items: selectedItems,
    };

    const response = await axios.post(
      "http://rangilaresto.onrender.com/admin/availableitems",
      data
    );

    if (response.data.success) {
      alert("Available items updated successfully");
      navigate("/admintoday");
    } else {
      alert("Failed to update available items");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <h1 className="text-xl font-bold">Rangila Resto Daily Menu</h1>
        <div className="space-x-4 h-[7vh]">
          <Link to="/admintoday">
          <button className="bg-blue-500 p-2 rounded hover:bg-blue-700 cursor-pointer transition-all duration-300">Admin Panel</button>
          </Link>
        </div>
      </nav>
      <div className="flex flex-col gap-4 items-center justify-center h-[83vh]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center justify-center h-screen"
        >
          <h1 className="text-xl font-semibold">Select Available Items for Today's Menu</h1>
          {/* Render items as checkboxes */}
          {items.map((item, index) => (
            <div
              key={index}
              className="w-[20vw] flex items-center justify-start gap-2 bg-neutral-200 p-2 rounded"
            >
              <input
                type="checkbox"
                value={item.name} // assuming backend sends { name: "Pizza" }
                checked={selectedItems.includes(item.name)}
                onChange={handleChange}
              />
              {item.name}
            </div>
          ))}

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 cursor-pointer transition duration-300"
          >
            Select
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSelectItems;
