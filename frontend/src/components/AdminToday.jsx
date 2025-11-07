import React from "react";
import { Link } from "react-router-dom";
// import { useLocation } from 'react-router-dom';



const AdminToday = () => {

  // const location = useLocation();

  // try {
  //   var { isLoggedin } = location.state;
  // } catch (err) {
  //   console.error("Error accessing location state:", err);
  //   isLoggedin = false;
  // }

  // if (!isLoggedin) {
  //   return (
  //     <div className="flex items-center justify-center flex-col h-screen w-screen">
  //       <h1 className="text-3xl font-bold">Access Denied</h1>
  //       <p>You must be logged in to view this page.</p>
  //       <Link to="/login" className="text-blue-500 underline">
  //         Go to Login
  //       </Link>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <h1 className="text-xl font-bold">Rangila Resto Daily Menu</h1>
        <div className="space-x-4 h-[7vh]">
          <Link to="/">
            <button className="bg-blue-500 p-2 rounded hover:bg-blue-700 cursor-pointer transition-all duration-300">
              Home
            </button>
          </Link>
        </div>
      </nav>
      <div className="flex gap-20 items-center justify-center p-10 place-items-center h-[87vh]">
        <Link to="/admin/selectitems">
          <div className="h-20 w-40 bg-sky-400 flex items-center justify-center font-semibold text-black hover:bg-sky-600 hover:text-white cursor-pointer transition duration-300 rounded-md">
            Select today's menu
          </div>
        </Link>
        <Link to="/admin/additems">
          <div className="h-20 w-40 bg-sky-400 flex items-center justify-center font-semibold text-black hover:bg-sky-600 hover:text-white cursor-pointer transition duration-300 rounded-md">
            Add items
          </div>
        </Link>
        <Link to="/admin/searchitems">
          <div className="h-20 w-40 bg-sky-400 flex items-center justify-center font-semibold text-black hover:bg-sky-600 hover:text-white cursor-pointer transition duration-300  rounded-md">
            Edit items
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminToday;
