import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ErrorPages.css';

const Error500 = () => {
  return (
    <div className="error-container">
      <h1 className="error-code">500</h1>
      <h2 className="error-message">Error interno del servidor</h2>
      <p className="error-description">
        Lo sentimos, ha ocurrido un error inesperado. Nuestro equipo está trabajando para solucionarlo.
      </p>
      <Link to="/" className="home-button">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error500; 