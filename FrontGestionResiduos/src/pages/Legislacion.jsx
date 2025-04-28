import React from 'react';
import '../styles/Legislacion.css';

const Legislacion = () => {
  const leyesAmbientales = [
    {
      id: 1,
      titulo: "Ley General del Ambiente",
      descripcion: "Establece los principios y normas básicas para la protección del ambiente y el desarrollo sostenible.",
      fecha: "2005",
      articulos: ["Art. 1: Objeto de la ley", "Art. 2: Principios", "Art. 3: Definiciones"]
    },
    {
      id: 2,
      titulo: "Ley de Gestión Integral de Residuos Sólidos",
      descripcion: "Regula la gestión integral de los residuos sólidos, promoviendo la reducción, reutilización y reciclaje.",
      fecha: "2010",
      articulos: ["Art. 1: Objeto", "Art. 2: Ámbito de aplicación", "Art. 3: Definiciones"]
    },
    {
      id: 3,
      titulo: "Ley de Reciclaje y Responsabilidad Extendida del Productor",
      descripcion: "Establece el marco para la gestión de residuos y la responsabilidad de los productores.",
      fecha: "2016",
      articulos: ["Art. 1: Objeto", "Art. 2: Definiciones", "Art. 3: Obligaciones"]
    }
  ];

  return (
    <div className="legislacion-container">
      <div className="legislacion-header">
        <h1>Legislación Ambiental</h1>
        <p>Conoce las principales leyes y regulaciones relacionadas con el manejo de residuos y la protección ambiental.</p>
      </div>

      <div className="leyes-grid">
        {leyesAmbientales.map(ley => (
          <div key={ley.id} className="ley-card">
            <div className="ley-header">
              <h2>{ley.titulo}</h2>
              <span className="ley-fecha">{ley.fecha}</span>
            </div>
            
            <div className="ley-content">
              <p>{ley.descripcion}</p>
              
              <div className="ley-articulos">
                <h3>Artículos Relevantes:</h3>
                <ul>
                  {ley.articulos.map((articulo, index) => (
                    <li key={index}>{articulo}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="ley-actions">
              <button className="descargar-btn">Descargar PDF</button>
              <button className="compartir-btn">Compartir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legislacion; 