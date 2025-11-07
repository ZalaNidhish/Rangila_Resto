import React from "react";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Today from "./components/Today";
import AdminToday from "./components/AdminToday";
import Logout from "./components/Logout";
import AdminSelectItems from "./components/AdminSelectItems";
import AdminAddItems from "./components/AdminAddItems";
import AdminEditItems from "./components/AdminEditItems";
import AdminSearchItems from "./components/AdminSearchItems";



import {Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout/:id" element={<Logout />} />
        <Route path="/today" element={<Today />} />
        <Route path="/admintoday" element={<AdminToday />} />
        <Route path="/admin/selectitems" element={<AdminSelectItems />} />
        <Route path="/admin/additems" element={<AdminAddItems />} />
        <Route path="/admin/searchitems" element={<AdminSearchItems />} />
        <Route path="/admin/edititems" element={<AdminEditItems />} />
      </Routes>
    </>
  );
};

export default App;
