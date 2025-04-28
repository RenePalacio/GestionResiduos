import React from 'react';
import '../styles/ODS.css';

const ODS = () => {
  const objetivos = [
    {
      id: 6,
      titulo: "Agua limpia y saneamiento",
      descripcion: "Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos.",
      icono: "💧",
      color: "#26BDE2",
      metas: [
        "Lograr el acceso universal y equitativo al agua potable",
        "Mejorar la calidad del agua",
        "Aumentar el uso eficiente de los recursos hídricos"
      ]
    },
    {
      id: 11,
      titulo: "Ciudades y comunidades sostenibles",
      descripcion: "Lograr que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles.",
      icono: "🏙️",
      color: "#FD9D24",
      metas: [
        "Reducir el impacto ambiental negativo per cápita de las ciudades",
        "Proporcionar acceso universal a zonas verdes y espacios públicos",
        "Mejorar la gestión de residuos municipales"
      ]
    },
    {
      id: 12,
      titulo: "Producción y consumo responsables",
      descripcion: "Garantizar modalidades de consumo y producción sostenibles.",
      icono: "🔄",
      color: "#BF8B2E",
      metas: [
        "Lograr la gestión sostenible y el uso eficiente de los recursos naturales",
        "Reducir la generación de desechos",
        "Alentar a las empresas a adoptar prácticas sostenibles"
      ]
    },
    {
      id: 13,
      titulo: "Acción por el clima",
      descripcion: "Adoptar medidas urgentes para combatir el cambio climático y sus efectos.",
      icono: "🌍",
      color: "#48773E",
      metas: [
        "Fortalecer la resiliencia y la capacidad de adaptación a los riesgos relacionados con el clima",
        "Mejorar la educación y la sensibilización sobre el cambio climático",
        "Promover mecanismos para aumentar la capacidad de planificación y gestión"
      ]
    },
    {
      id: 14,
      titulo: "Vida submarina",
      descripcion: "Conservar y utilizar sosteniblemente los océanos, los mares y los recursos marinos.",
      icono: "🐠",
      color: "#007CBC",
      metas: [
        "Prevenir y reducir la contaminación marina",
        "Minimizar la acidificación de los océanos",
        "Regular la explotación pesquera y poner fin a la pesca excesiva"
      ]
    },
    {
      id: 15,
      titulo: "Vida de ecosistemas terrestres",
      descripcion: "Gestionar sosteniblemente los bosques, luchar contra la desertificación, detener e invertir la degradación de las tierras y detener la pérdida de biodiversidad.",
      icono: "🌳",
      color: "#56C02B",
      metas: [
        "Promover la gestión sostenible de todos los tipos de bosques",
        "Luchar contra la desertificación",
        "Adoptar medidas para reducir la degradación de los hábitats naturales"
      ]
    }
  ];

  return (
    <div className="ods-container">
      <div className="ods-header">
        <h1>Objetivos de Desarrollo Sostenible</h1>
        <p>Conoce los ODS relacionados con el medio ambiente y cómo contribuir a su cumplimiento</p>
      </div>

      <div className="ods-grid">
        {objetivos.map(objetivo => (
          <div key={objetivo.id} className="ods-card">
            <div className="ods-header-card" style={{ backgroundColor: objetivo.color }}>
              <span className="ods-icon">{objetivo.icono}</span>
              <h2>ODS {objetivo.id}</h2>
            </div>
            
            <div className="ods-content">
              <h3>{objetivo.titulo}</h3>
              <p>{objetivo.descripcion}</p>
              
              <div className="metas-container">
                <h4>Metas principales:</h4>
                <ul>
                  {objetivo.metas.map((meta, index) => (
                    <li key={index}>{meta}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="ods-footer">
              <button className="contribuir-btn">¿Cómo contribuir?</button>
            </div>
          </div>
        ))}
      </div>

      <div className="ods-info">
        <h2>¿Qué son los ODS?</h2>
        <p>
          Los Objetivos de Desarrollo Sostenible (ODS) son un conjunto de 17 objetivos globales establecidos por las Naciones Unidas 
          para abordar los desafíos más urgentes que enfrenta la humanidad. Estos objetivos buscan lograr un futuro mejor y más 
          sostenible para todos, abordando temas como la pobreza, la desigualdad, el cambio climático, la degradación ambiental, 
          la prosperidad, la paz y la justicia.
        </p>
        <p>
          Cada uno de nosotros puede contribuir al logro de estos objetivos a través de acciones cotidianas, como:
        </p>
        <ul>
          <li>Reducir nuestro consumo de recursos naturales</li>
          <li>Reciclar y gestionar adecuadamente nuestros residuos</li>
          <li>Apoyar iniciativas sostenibles en nuestra comunidad</li>
          <li>Educar a otros sobre la importancia de la sostenibilidad</li>
          <li>Participar en actividades de conservación ambiental</li>
        </ul>
      </div>
    </div>
  );
};

export default ODS; 