import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
