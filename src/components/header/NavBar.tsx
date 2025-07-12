import React from 'react';
import CartWidget from './CartWidget.tsx';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>TechStore</h2>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#categorias">Categorías</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;