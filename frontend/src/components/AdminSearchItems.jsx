import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminSearchItems = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      itemName: form.itemName.value,
    };

    const response = await axios.post(
      "https://rangilaresto.onrender.com/admin/searchitem",
      data
    );

    if (response.data.success) {
      console.log(response.data);
      navigate("/admin/edititems", {
        state: {
          id: response.data.id,
          name: response.data.name,
          price: response.data.price,
          description: response.data.description,
        },
      });
    } else {
      alert("Item not found"); // show backend error
      console.log(response.data.message);
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
          <h1 className="text-xl font-semibold mb-4">Edit Item in Menu</h1>
          <input
            type="text"
            name="itemName"
            placeholder="Search Item Name"
            className="outline-none p-2 border-none border-b-2 border-gray-300
        focus:border-blue-500 w-full bg-neutral-200"
          />
          <button
            type="submit"
            className="bg-blue-500 mt-4 text-white p-2 rounded hover:bg-blue-700 cursor-pointer transition duration-300"
          >
            Search Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSearchItems;
