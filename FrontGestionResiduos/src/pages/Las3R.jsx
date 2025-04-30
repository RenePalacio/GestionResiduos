import React from 'react';
import '../styles/Las3R.css';

const Las3R = () => {
  const tresR = [
    {
      id: 1,
      nombre: "Reducir",
      icono: "♻️",
      descripcion: "Disminuir la cantidad de residuos que generamos en nuestra vida diaria.",
      consejos: [
        "Comprar solo lo necesario",
        "Elegir productos con menos embalaje",
        "Usar bolsas reutilizables",
        "Evitar productos desechables"
      ],
      color: "#4CAF50"
    },
    {
      id: 2,
      nombre: "Reutilizar",
      icono: "🔄",
      descripcion: "Dar una segunda vida a los objetos antes de desecharlos.",
      consejos: [
        "Reparar objetos en lugar de tirarlos",
        "Donar lo que ya no usamos",
        "Usar envases reutilizables",
        "Convertir residuos en manualidades"
      ],
      color: "#2196F3"
    },
    {
      id: 3,
      nombre: "Reciclar",
      icono: "♻️",
      descripcion: "Transformar los residuos en nuevos productos o materias primas.",
      consejos: [
        "Separar los residuos correctamente",
        "Conocer los puntos de reciclaje",
        "Lavar los envases antes de reciclar",
        "Informarse sobre los materiales reciclables"
      ],
      color: "#FFC107"
    }
  ];

  return (
    <div className="las3r-container">
      <div className="las3r-header">
        <h1>Las 3R del Reciclaje</h1>
        <p>Conoce y aplica las tres reglas básicas para una gestión sostenible de residuos</p>
      </div>

      <div className="las3r-grid">
        {tresR.map(r => (
          <div key={r.id} className="r-card">
            <div className="r-header" style={{ backgroundColor: r.color }}>
              <span className="r-icon">{r.icono}</span>
              <h2>{r.nombre}</h2>
            </div>
            
            <div className="r-content">
              <p>{r.descripcion}</p>
              
              <div className="consejos-container">
                <h3>Consejos para {r.nombre}:</h3>
                <ul>
                  {r.consejos.map((consejo, index) => (
                    <li key={index}>{consejo}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="r-footer">
            </div>
          </div>
        ))}
      </div>

      <div className="las3r-info">
        <h2>¿Por qué son importantes las 3R?</h2>
        <p>
          Las 3R son fundamentales para reducir el impacto ambiental de nuestros residuos. 
          Al aplicar estas reglas, contribuimos a:
        </p>
        <ul>
          <li>Disminuir la cantidad de basura que llega a los vertederos</li>
          <li>Ahorrar recursos naturales y energía</li>
          <li>Reducir la contaminación ambiental</li>
          <li>Promover una economía circular</li>
          <li>Crear conciencia sobre el consumo responsable</li>
        </ul>
      </div>
    </div>
  );
};

export default Las3R; 