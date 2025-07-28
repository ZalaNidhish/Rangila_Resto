import React from "react";
import Menu from "./components/Menu";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
};

export default App;
