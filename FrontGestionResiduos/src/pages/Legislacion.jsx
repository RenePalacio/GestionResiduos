import React from 'react';
import '../styles/Legislacion.css';
import leyGeneralAmbiente from '../assets/pdf/Ley General del Ambiente.pdf';
import leyGestionResiduos from '../assets/pdf/Ley de Gestión Integral de Residuos Sólidos.pdf';
import leyReciclaje from '../assets/pdf/Ley de Reciclaje y Responsabilidad Extendida del Productor.pdf';

const Legislacion = () => {
  const leyesAmbientales = [
    {
      id: 1,
      titulo: "Ley General del Ambiente",
      descripcion: "Establece los principios y normas básicas para la protección del ambiente y el desarrollo sostenible.",
      fecha: "2005",
      pdf: leyGeneralAmbiente
    },
    {
      id: 2,
      titulo: "Ley de Gestión Integral de Residuos Sólidos",
      descripcion: "Regula la gestión integral de los residuos sólidos, promoviendo la reducción, reutilización y reciclaje.",
      fecha: "2010",
      pdf: leyGestionResiduos
    },
    {
      id: 3,
      titulo: "Ley de Reciclaje y Responsabilidad Extendida del Productor",
      descripcion: "Establece el marco para la gestión de residuos y la responsabilidad de los productores.",
      fecha: "2016",
      pdf: leyReciclaje
    }
  ];

  const handleDescargarPDF = (pdfUrl, titulo) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${titulo}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            </div>

            <div className="ley-actions">
              <button 
                className="descargar-btn"
                onClick={() => handleDescargarPDF(ley.pdf, ley.titulo)}
              >
                Descargar PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legislacion; 