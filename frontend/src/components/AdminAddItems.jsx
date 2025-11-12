import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminAddItems = () => {
  const navigate = useNavigate();

  const GoBack = () => {
    let isLoggedin = true;
    navigate("/admintoday", { state: { isLoggedin: isLoggedin } });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      itemName: form.itemName.value,
      itemPrice: form.itemPrice.value,
      itemDescription: form.itemDescription.value,
    };

    const response = await axios.post(
      "https://rangilaresto.onrender.com/admin/additem",
      data
    );

    console.log("response recieved");

    // Optionally, redirect or show success message here
    if (response.data.success) {
      alert(response.data.message);
      navigate("/admintoday");
    } else {
      alert("something went wrong"); // show backend error
      console.log(response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <h1 className="text-xl font-bold">Rangila Resto Daily Menu</h1>
        <div className="space-x-4 h-[7vh]">
          <button className="bg-blue-500 p-2 rounded hover:bg-blue-700 cursor-pointer transition-all duration-300" onClick={GoBack}>Admin Panel</button>
        </div>
      </nav>
      <div className="h-[83vh] flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-6 w-80 bg-white shadow-md rounded"
        >
          <h1 className="text-xl font-semibold w-full text-center mb-4">
            Add New Item To Menu
          </h1>
          <input
            type="text"
            name="itemName"
            placeholder="Item Name"
            className="outline-none p-2 border-none border-b-2 border-gray-300
        focus:border-blue-500 w-full"
          />
          <input
            type="number"
            name="itemPrice"
            placeholder="Item Price"
            className="outline-none p-2 border-none border-b-2 border-gray-300
        focus:border-blue-500 w-full"
          />
          <input
            type="text"
            name="itemDescription"
            placeholder="Item Description"
            className="outline-none p-2 border-none border-b-2 border-gray-300
        focus:border-blue-500 w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 cursor-pointer transition duration-300"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddItems;
