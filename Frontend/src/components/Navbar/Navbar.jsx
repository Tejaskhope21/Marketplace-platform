import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link className="link" to="/">
          MarketSetu
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <div
        className={`nav-links ${menuOpen ? "show" : ""}`}
        onClick={toggleMenu}
      >
        <Link className="link" to="/signin">
          Sign in
        </Link>
        <Link className="link" to="/seller">
          Seller
        </Link>
        <Link className="link" to="/bulkproducts">
          Bulk products
        </Link>
        <Link className="link" to="/shopping">
          Shopping
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
