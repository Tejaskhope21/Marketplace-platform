import React from 'react';
import items_display from './../../assets/assets'; // Ensure this path is correct
import './DisplayItems.css'
function DisplayItems() {
  return (
    <div className="display-items-container">
      {items_display.map(item => (
        <div className="item-card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p className="price">Price: ₹{item.price}</p>
          <p className="discount">Discount: {item.discount}% off</p>
          <p className="rating">Rating: {item.rating} ⭐</p>
          <p className="reviews">Reviews: {item.reviews}</p>
        </div>
      ))}
    </div>
  );
}
export default DisplayItems;