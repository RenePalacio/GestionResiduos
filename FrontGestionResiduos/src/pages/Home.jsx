import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Slider */}
      <section className="slider">
        <div className="slider-content">
          <h1>Gestión de Residuos</h1>
          <p>Promoviendo una cultura de reciclaje y sostenibilidad</p>
          <Link to="/como-reciclar" className="cta-button">Aprende a Reciclar</Link>
        </div>
      </section>

      {/* Sección de Bienvenida */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h2>Bienvenido a Nuestra Plataforma</h2>
          <p>
            Somos una iniciativa comprometida con el medio ambiente,
            promoviendo el reciclaje y la gestión sostenible de residuos
            en El Salvador.
          </p>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="services-section">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <Link to="/centros-acopio">
              <h3>Centros de Acopio</h3>
              <p>Encuentra los centros de reciclaje más cercanos</p>
            </Link>
          </div>
          <div className="service-card">
            <Link to="/tipos-plasticos">
              <h3>Tipos de Plásticos</h3>
              <p>Aprende sobre los diferentes tipos de plásticos</p>
            </Link>
          </div>
          <div className="service-card">
            <Link to="/las-3r">
              <h3>Las 3R</h3>
              <p>Reduce, Reutiliza, Recicla</p>
            </Link>
          </div>
          <div className="service-card">
            <Link to="/legislacion">
              <h3>Legislación</h3>
              <p>Conoce las leyes ambientales</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Galería */}
      <section className="gallery-section">
        <h2>Galería de Imágenes</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200" alt="Reciclaje" />
            <p>Centro de Acopio</p>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200" alt="Reciclaje" />
            <p>Proceso de Reciclaje</p>
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200" alt="Reciclaje" />
            <p>Materiales Reciclables</p>
          </div>
        </div>
      </section>

      {/* Sección de Historia */}
      <section className="history-section">
        <h2>Nuestra Historia</h2>
        <div className="history-content">
          <p>
            El origen de "GestionDeResiduos" surge como una iniciativa de estudiantes
            de la Universidad Dr. Andrés Bello (UNAB), miembros del programa ambiental
            UNAB VERDE, ante la necesidad de plantear una propuesta enfocada en la
            gestión y el reciclaje de residuos.
          </p>
          <p>
            UNAB VERDE es un pequeño comité formado por estudiantes de la carrera de
            Ingeniería en Sistemas y Computación de la Universidad Dr. Andrés Bello (UNAB).
            Su objetivo es promover una cultura ambiental sostenible dentro de la universidad.
          </p>
        </div>
      </section>

      {/* Sección de Desarrolladores */}
      <section className="developers-section">
        <h2>Desarrolladores</h2>
        <div className="developers-grid">
          <div className="developer-card">
            <h3>Mario Galdamez</h3>
            <a href="https://github.com/mgaldamez" target="_blank" rel="noopener noreferrer" className="github-link">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
          <div className="developer-card">
            <h3>René Palacio</h3>
            <a href="https://github.com/RenePalacio" target="_blank" rel="noopener noreferrer" className="github-link">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
          <div className="developer-card">
            <h3>Andres Fuentes</h3>
            <a href="https://github.com/andresfgh" target="_blank" rel="noopener noreferrer" className="github-link">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 