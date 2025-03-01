import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Shopping from "./pages/Shopping/Shopping";
import Bulkproduct from "./pages/Bulkproduct/Bulkproduct";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/bulkproducts" element={<Bulkproduct />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;