import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = window.location.pathname.split("/")[2]; // Extract user ID from URL

    try {
      const response = await axios.post("https://rangilaresto.onrender.com/logout", { id });

      if (response.data.success) {
        navigate("/", {state:{isLoggedin: response.data.isLoggedin}});
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Try again later.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 gap-10">
      <h1 className="text-2xl font-bold">Logout</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/3">
        
        <h1>Confirm Logout</h1>

        <button
          type="submit"
          className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default Logout;
