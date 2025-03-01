import React from "react";
import "./Bulkproduct.css";
const Bulkproduct = () => {
  const categories = [
    {
      id: 1,
      name: "Electrical Wires",
      image: "https://m.media-amazon.com/images/I/71PVHhZmydL._SX425_.jpg",
    },
    {
      id: 2,
      name: "Multimeters",
      image: "https://m.media-amazon.com/images/I/61w77yvk38L._SX425_.jpg",
    },
    {
      id: 3,
      name: "Inverters & Converters",
      image: "https://m.media-amazon.com/images/I/51WnOC+ZCOL._SX425_.jpg",
    },
    {
      id: 4,
      name: "Wall Switches",
      image: "https://m.media-amazon.com/images/I/61bvHI4jIaL._SX425_.jpg",
    },
    {
      id: 5,
      name: "Counters",
      image: "https://m.media-amazon.com/images/I/41Yc+FQoh6L._SX425_.jpg",
    },
    {
      id: 6,
      name: "Other LV Products",
      image: "https://m.media-amazon.com/images/I/41Y4+kkEAmL._SX425_.jpg",
    },
    {
      id: 7,
      name: "Rocker Switches",
      image: "https://m.media-amazon.com/images/I/61CG31K13HL._SX425_.jpg",
    },
    {
      id: 8,
      name: "Automatic Transfer Switch",
      image: "https://m.media-amazon.com/images/I/51u3DYz2cvL._SX425_.jpg",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Noise TWO with 50 Hours Playtime",
      image: "https://m.media-amazon.com/images/I/61fQz+9uDUL._SX425_.jpg",
      price: 1699,
      originalPrice: 4999,
      discount: 66,
      rating: 4.1,
      reviews: 8829,
    },
    {
      id: 2,
      name: "Boult Astra with Quad Mic ENC",
      image: "https://m.media-amazon.com/images/I/61dqks96bVL._SX425_.jpg",
      price: 1199,
      originalPrice: 3499,
      discount: 65,
      rating: 4.1,
      reviews: 120117,
    },
    {
      id: 3,
      name: "boAt Rockerz Trinity 150H Playback",
      image: "https://m.media-amazon.com/images/I/61m4h8YOIpL._SX425_.jpg",
      price: 999,
      originalPrice: 3990,
      discount: 74,
      rating: 4.5,
      reviews: 65554,
    },
    {
      id: 4,
      name: "Boult Z40 Pro 100H Battery, Quad Mic",
      image: "https://m.media-amazon.com/images/I/61tQZLDFbML._SX425_.jpg",
      price: 1299,
      originalPrice: 5499,
      discount: 76,
      rating: 4.1,
      reviews: 115909,
    },
    {
      id: 5,
      name: "TECHFIRE Bullets 360 TWS Earbuds 100H",
      image: "https://m.media-amazon.com/images/I/51tF1uA0lTL._SX425_.jpg",
      price: 470,
      originalPrice: 1999,
      discount: 76,
      rating: 3.6,
      reviews: 16918,
    },
    {
      id: 6,
      name: "Mivi DuoPods K6 TWS, Rich Bass, 50H Playtime",
      image: "https://m.media-amazon.com/images/I/51p3WzUuiDL._SX425_.jpg",
      price: 699,
      originalPrice: 3999,
      discount: 82,
      rating: 4.3,
      reviews: 38147,
    },
    {
      id: 7,
      name: "realme Buds Wireless 3 Neo with 13.4mm Driver",
      image: "https://m.media-amazon.com/images/I/61LPbC3tGkL._SX425_.jpg",
      price: 999,
      originalPrice: 2499,
      discount: 60,
      rating: 4.2,
      reviews: 46797,
    },
    {
      id: 8,
      name: "Noise Buds VS102 Neo with 40 Hrs Playtime",
      image: "https://m.media-amazon.com/images/I/51HbyLhdPgL._SX425_.jpg",
      price: 799,
      originalPrice: 3499,
      discount: 77,
      rating: 4.1,
      reviews: 90803,
    },
  ];

  return (
    <div className="electronics-page">
      <h2>Electronics Deals</h2>

      <div className="electrical-page">
        {/* Background Section */}
        <div className="hero-section">
          <h1>Electrical Equipment & Supplies</h1>
          <p>Discover new and trending products</p>
        </div>

        {/* Category Section */}
        <div className="category-container">
          <h2>Source by category</h2>
          <div className="category-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-card">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                <p className="category-name">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">
              <span className="current-price">₹{product.price}</span>
              <span className="original-price">₹{product.originalPrice}</span>
              <span className="discount">{product.discount}% off</span>
            </p>
            <p className="product-rating">
              ⭐ {product.rating} ({product.reviews})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bulkproduct;
