import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminEditItems = () => {
  const location = useLocation();
  const { id, name, price, description } = location.state || {};
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      id: id,
      name: form.name.value,
      price: form.price.value,
      description: form.description.value,
    };

    const response = await axios.post(
      "http://localhost:5000/admin/edititem",
      data
    );

    if (response.data.success) {
      alert("Item updated successfully");
      console.log(response.data.item);
      navigate("/admintoday");
    } else {
      alert("Failed to update item"); // show backend error
      console.log(response.data.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <h1 className="text-xl font-bold">Rangila Resto Daily Menu</h1>
        <div className="space-x-4 h-[7vh]">
          <Link to="/admintoday">
          <button className="bg-blue-500 p-2 rounded hover:bg-blue-700 cursor-pointer transition-all duration-300">Admin Panel</button>
          </Link>
        </div>
      </nav>
      <div className="flex flex-col gap-4 items-center justify-center h-[83vh]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Edit Item</h2>
          <input
            type="text"
            name="name"
            defaultValue={name}
            className="outline-none p-2 border-none border-b-2 border-gray-300
        focus:border-blue-500 w-full bg-neutral-200"
          />
          <input
            type="number"
            name="price"
            defaultValue={price}
            className="outline-none p-2 border-none border-b-2 border-gray-300
        focus:border-blue-500 w-full bg-neutral-200"
          />
          <textarea
            name="description"
            defaultValue={description}
            className="outline-none p-2 border-none border-b-2 border-gray-300
        focus:border-blue-500 w-full bg-neutral-200"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 cursor-pointer transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminEditItems;
