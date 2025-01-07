import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../components/Screens/Product";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default AppRouter;
