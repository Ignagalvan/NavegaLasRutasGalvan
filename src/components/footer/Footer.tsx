import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>TechStore</h3>
          <p>Tu tienda de tecnología de confianza</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#categorias">Categorías</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@techstore.com</p>
          <p>Teléfono: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TechStore. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;