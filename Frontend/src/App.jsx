import React from "react";
// import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Footer /> */}
    </>
  );
};

export default App;
