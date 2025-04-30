import React from 'react';
import '../styles/ComoReciclar.css';

const ComoReciclar = () => {
  const materiales = [
    {
      id: 1,
      nombre: "Plástico",
      icono: "♻️",
      color: "#2196F3",
      pasos: [
        "Lava y seca los envases antes de reciclarlos",
        "Retira las tapas y etiquetas",
        "Aplasta los envases para reducir su volumen",
        "Separa según el tipo de plástico (PET, HDPE, etc.)"
      ],
      consejos: [
        "No recicles plásticos con restos de comida",
        "Verifica el símbolo de reciclaje en el envase",
        "Lleva los plásticos al punto de reciclaje más cercano"
      ]
    },
    {
      id: 2,
      nombre: "Papel y Cartón",
      icono: "📄",
      color: "#4CAF50",
      pasos: [
        "Separa el papel y cartón limpios",
        "Aplana las cajas de cartón",
        "Retira grapas, clips y cintas adhesivas",
        "No mezcles con papel sucio o encerado"
      ],
      consejos: [
        "Reutiliza el papel por ambas caras antes de reciclarlo",
        "No recicles papel higiénico o servilletas usadas",
        "Guarda el papel en un lugar seco hasta su reciclaje"
      ]
    },
    {
      id: 3,
      nombre: "Vidrio",
      icono: "🥛",
      color: "#9C27B0",
      pasos: [
        "Lava los envases de vidrio",
        "Retira las tapas y etiquetas",
        "Separa por colores (transparente, verde, ámbar)",
        "No rompas los envases"
      ],
      consejos: [
        "No recicles vidrios rotos o espejos",
        "Verifica que el vidrio esté limpio",
        "Lleva los envases al contenedor específico"
      ]
    },
    {
      id: 4,
      nombre: "Metal",
      icono: "🔩",
      color: "#FF9800",
      pasos: [
        "Separa latas de aluminio y acero",
        "Lava y seca las latas",
        "Aplasta las latas para reducir espacio",
        "Retira etiquetas y residuos"
      ],
      consejos: [
        "No mezcles metales con otros materiales",
        "Verifica que las latas estén limpias",
        "Lleva los metales al punto de reciclaje"
      ]
    },
    {
      id: 5,
      nombre: "Electrónicos",
      icono: "📱",
      color: "#607D8B",
      pasos: [
        "Busca puntos de reciclaje especializados",
        "Borra datos personales de dispositivos",
        "Separa componentes si es posible",
        "No tires a la basura común"
      ],
      consejos: [
        "Considera la reparación antes del reciclaje",
        "Investiga programas de reciclaje del fabricante",
        "Lleva los dispositivos a centros autorizados"
      ]
    },
    {
      id: 6,
      nombre: "Orgánicos",
      icono: "🍎",
      color: "#795548",
      pasos: [
        "Separa los residuos orgánicos",
        "Usa un contenedor con tapa",
        "Evita mezclar con otros residuos",
        "Considera hacer compost"
      ],
      consejos: [
        "No incluyas carne o lácteos en el compost",
        "Mantén el contenedor en un lugar fresco",
        "Aprende sobre técnicas de compostaje"
      ]
    }
  ];

  return (
    <div className="como-reciclar-container">
      <div className="como-reciclar-header">
        <h1>¿Cómo Reciclar?</h1>
        <p>Aprende a reciclar correctamente diferentes tipos de materiales</p>
      </div>

      <div className="materiales-grid">
        {materiales.map(material => (
          <div key={material.id} className="material-card">
            <div className="material-header" style={{ backgroundColor: material.color }}>
              <span className="material-icon">{material.icono}</span>
              <h2>{material.nombre}</h2>
            </div>
            
            <div className="material-content">
              <div className="pasos-container">
                <h3>Pasos para reciclar:</h3>
                <ol>
                  {material.pasos.map((paso, index) => (
                    <li key={index}>{paso}</li>
                  ))}
                </ol>
              </div>

              <div className="consejos-container">
                <h3>Consejos importantes:</h3>
                <ul>
                  {material.consejos.map((consejo, index) => (
                    <li key={index}>{consejo}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="material-footer">
            </div>
          </div>
        ))}
      </div>

      <div className="reciclaje-info">
        <h2>Beneficios del Reciclaje</h2>
        <div className="beneficios-grid">
          <div className="beneficio-card">
            <h3>Ambientales</h3>
            <ul>
              <li>Reduce la contaminación</li>
              <li>Conserva recursos naturales</li>
              <li>Disminuye la cantidad de residuos en vertederos</li>
              <li>Protege los ecosistemas</li>
            </ul>
          </div>
          <div className="beneficio-card">
            <h3>Económicos</h3>
            <ul>
              <li>Genera empleos verdes</li>
              <li>Ahorra energía en la producción</li>
              <li>Reduce costos de gestión de residuos</li>
              <li>Promueve la economía circular</li>
            </ul>
          </div>
          <div className="beneficio-card">
            <h3>Sociales</h3>
            <ul>
              <li>Mejora la calidad de vida</li>
              <li>Fomenta la conciencia ambiental</li>
              <li>Promueve la participación ciudadana</li>
              <li>Contribuye al desarrollo sostenible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoReciclar; 