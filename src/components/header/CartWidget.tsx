
import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="m1 1 4 4 7 8 7-8 4-4"></path>
        <path d="M7 8h12l-1 5H8z"></path>
      </svg>
      <span className="cart-count">3</span>
    </div>
  );
};

export default CartWidget;