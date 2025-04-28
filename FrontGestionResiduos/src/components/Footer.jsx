import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/">Inicio</Link>
          <Link to="/centros-acopio">Centros de Acopio</Link>
          <Link to="/como-reciclar">Cultura Ambiental</Link>
        </div>
        <div className="footer-copyright">
          <p>© 2025 UNAB - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 