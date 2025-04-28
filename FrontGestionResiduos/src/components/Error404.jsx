import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ErrorPages.css';

const Error404 = () => {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">¡Ups! Página no encontrada</h2>
      <p className="error-description">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link to="/" className="home-button">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error404; 