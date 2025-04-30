import React from 'react';
import '../styles/TiposPlasticos.css';

const TiposPlasticos = () => {
  const tiposPlastico = [
    {
      id: 1,
      codigo: "PET",
      nombre: "Tereftalato de Polietileno",
      descripcion: "Usado en botellas de agua, refrescos y envases de alimentos.",
      reciclable: true,
      ejemplos: ["Botellas de agua", "Envases de refrescos", "Bandejas de alimentos"],
      color: "#FFD700"
    },
    {
      id: 2,
      codigo: "HDPE",
      nombre: "Polietileno de Alta Densidad",
      descripcion: "Plástico rígido usado en envases de leche, detergentes y juguetes.",
      reciclable: true,
      ejemplos: ["Botellas de leche", "Envases de detergente", "Juguetes"],
      color: "#FFA500"
    },
    {
      id: 3,
      codigo: "PVC",
      nombre: "Policloruro de Vinilo",
      descripcion: "Usado en tuberías, muebles y envases de productos de limpieza.",
      reciclable: false,
      ejemplos: ["Tuberías", "Cables", "Cortinas de baño"],
      color: "#FF0000"
    },
    {
      id: 4,
      codigo: "LDPE",
      nombre: "Polietileno de Baja Densidad",
      descripcion: "Plástico flexible usado en bolsas y envoltorios.",
      reciclable: true,
      ejemplos: ["Bolsas de supermercado", "Envoltorios", "Bolsas de pan"],
      color: "#00FF00"
    },
    {
      id: 5,
      codigo: "PP",
      nombre: "Polipropileno",
      descripcion: "Usado en envases de alimentos, tapas y contenedores.",
      reciclable: true,
      ejemplos: ["Tuppers", "Tapas de botellas", "Envases de yogur"],
      color: "#0000FF"
    },
    {
      id: 6,
      codigo: "PS",
      nombre: "Poliestireno",
      descripcion: "Usado en envases de comida rápida y embalajes.",
      reciclable: false,
      ejemplos: ["Vasos desechables", "Bandejas de carne", "Embalajes"],
      color: "#800080"
    },
    {
      id: 7,
      codigo: "Otros",
      nombre: "Otros Plásticos",
      descripcion: "Incluye plásticos mixtos o de difícil clasificación.",
      reciclable: false,
      ejemplos: ["CDs", "Gafas de sol", "Materiales compuestos"],
      color: "#808080"
    }
  ];

  return (
    <div className="tipos-plasticos-container">
      <div className="tipos-plasticos-header">
        <h1>Tipos de Plásticos</h1>
        <p>Conoce los diferentes tipos de plásticos, sus usos y su reciclabilidad</p>
      </div>

      <div className="tipos-plasticos-grid">
        {tiposPlastico.map(tipo => (
          <div key={tipo.id} className="tipo-plastico-card">
            <div className="tipo-plastico-header" style={{ backgroundColor: tipo.color }}>
              <h2>{tipo.codigo}</h2>
              <span className={`reciclable-badge ${tipo.reciclable ? 'reciclable' : 'no-reciclable'}`}>
                {tipo.reciclable ? 'Reciclable' : 'No Reciclable'}
              </span>
            </div>
            
            <div className="tipo-plastico-content">
              <h3>{tipo.nombre}</h3>
              <p>{tipo.descripcion}</p>
              
              <div className="ejemplos-container">
                <h4>Ejemplos:</h4>
                <ul>
                  {tipo.ejemplos.map((ejemplo, index) => (
                    <li key={index}>{ejemplo}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="tipo-plastico-footer">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TiposPlasticos; 