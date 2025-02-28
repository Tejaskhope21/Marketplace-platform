import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category-container">
      <h1>Explore millions of offerings tailored to your business needs</h1>
      <div className="category-grid">
        <Link className="link" to="/consumer-electronics">
          <div className="category-card">
            <span className="icon">
              <i class="fa-solid fa-headphones"></i>
            </span>
            <p>Consumer Electronics</p>
          </div>
        </Link>
        <Link className="link" to="/industrial-machinery">
          <div className="category-card">
            <span className="icon">
              <i class="fa-solid fa-industry"></i>
            </span>
            <p>Industrial Machinery</p>
          </div>
        </Link>
        <Link className="link" to="/kids">
          <div className="category-card">
            <span className="icon">
              <i class="fa-solid fa-gamepad"></i>
            </span>
            <p>Mother, Kids & Toys </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
