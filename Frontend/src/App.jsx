import React from "react";
import Footer from "./components/Footer/Footer";
import Navebar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home/Home";

const App = () => {
  return <>
  <Navebar/>
  <Home/>
  <Footer/>
  </>;

};

export default App;
