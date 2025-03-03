import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="container">
      <div className="category-container">
        <h1>Explore millions of offerings tailored to your business needs</h1>
        <div className="category-grid">
          <Link className="link" to="/consumer-electronics">
            <div className="category-card">
              <span className="icon">
                <i className="fa-solid fa-headphones"></i>
              </span>
              <p>Consumer Electronics</p>
            </div>
          </Link>
          <Link className="link" to="/industrial-machinery">
            <div className="category-card">
              <span className="icon">
                <i className="fa-solid fa-industry"></i>
              </span>
              <p>Industrial Machinery</p>
            </div>
          </Link>
          <Link className="link" to="/kids">
            <div className="category-card">
              <span className="icon">
                <i className="fa-solid fa-gamepad"></i>
              </span>
              <p> Kids & Toys </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="category-container">
        <h1>
          Explore a world of endless shopping choices tailored to your needs at
          unbeatable prices!
        </h1>
        <div className="category-grid">
          <Link className="link" to="/bulkproducts">
            <div className="category-card">
              <span className="icon">
                <i className="fa-solid fa-headphones"></i>
              </span>
              <p>Consumer Electronics</p>
            </div>
          </Link>
          <Link className="link" to="/industrial-machinery">
            <div className="category-card">
              <span className="icon">
                <i className="fa-solid fa-industry"></i>
              </span>
              <p>Industrial Machinery</p>
            </div>
          </Link>
          <Link className="link" to="/kids">
            <div className="category-card">
              <span className="icon">
                <i className="fa-solid fa-gamepad"></i>
              </span>
              <p> Kids & Toys </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
