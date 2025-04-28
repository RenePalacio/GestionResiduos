import { useParams, Link } from 'react-router-dom';
import '../styles/CentroAcopioDetalle.css';

const CentroAcopioDetalle = () => {
  const { id } = useParams();

  const centros = {
    'recitodo': {
      nombre: 'Recitodo',
      imagen: '/imagenes/Recitodo.jpg',
      descripcion: 'Centro de acopio especializado en reciclaje de diversos materiales.',
      direccion: 'Calle Principal #123, San Salvador',
      telefono: '2222-2222',
      horario: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio', 'Metal', 'Electrónicos']
    },
    '6ta-avenida': {
      nombre: 'C.A 6ta Avenida',
      imagen: '/imagenes/6taAV.jpg',
      descripcion: 'Centro de acopio ubicado en la 6ta Avenida Norte.',
      direccion: '6ta Avenida Norte #456, San Salvador',
      telefono: '2222-3333',
      horario: 'Lunes a Sábado: 7:00 AM - 6:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio']
    },
    'ayala': {
      nombre: 'Ayala',
      imagen: '/imagenes/Ayala.jpg',
      descripcion: 'Centro de acopio Ayala, comprometido con el medio ambiente.',
      direccion: 'Calle Ayala #789, San Salvador',
      telefono: '2222-4444',
      horario: 'Lunes a Viernes: 9:00 AM - 4:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio', 'Metal']
    },
    'romero': {
      nombre: 'Romero',
      imagen: '/imagenes/Romero.jpg',
      descripcion: 'Centro de acopio Romero, facilitando el reciclaje en la comunidad.',
      direccion: 'Avenida Romero #101, San Salvador',
      telefono: '2222-5555',
      horario: 'Lunes a Sábado: 8:00 AM - 5:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio', 'Metal', 'Electrónicos']
    },
    'el-tamarindo': {
      nombre: 'El Tamarindo',
      imagen: '/imagenes/Tamarindo.jpg',
      descripcion: 'Centro de acopio El Tamarindo, promoviendo la cultura del reciclaje.',
      direccion: 'Calle El Tamarindo #202, San Salvador',
      telefono: '2222-6666',
      horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio']
    },
    'sarmiento': {
      nombre: 'Sarmiento',
      imagen: '/imagenes/Sarmiento.jpg',
      descripcion: 'Centro de acopio Sarmiento, contribuyendo al desarrollo sostenible.',
      direccion: 'Avenida Sarmiento #303, San Salvador',
      telefono: '2222-7777',
      horario: 'Lunes a Sábado: 7:00 AM - 6:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio', 'Metal']
    },
    'el-catedral': {
      nombre: 'El Catedral',
      imagen: '/imagenes/Catedral.jpg',
      descripcion: 'Centro de acopio El Catedral, ubicado en el centro histórico.',
      direccion: 'Calle Catedral #404, San Salvador',
      telefono: '2222-8888',
      horario: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio', 'Metal', 'Electrónicos']
    },
    'rosa-rodriguez': {
      nombre: 'Rosa Rodriguez',
      imagen: '/imagenes/RosaRodriguez.jpg',
      descripcion: 'Centro de acopio Rosa Rodriguez, comprometido con la comunidad.',
      direccion: 'Calle Rosa Rodriguez #505, San Salvador',
      telefono: '2222-9999',
      horario: 'Lunes a Sábado: 8:00 AM - 5:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio']
    },
    'planeta-limpio': {
      nombre: 'Planeta Limpio',
      imagen: '/imagenes/Planetalimpio.jpg',
      descripcion: 'Centro de acopio Planeta Limpio, trabajando por un mundo más verde.',
      direccion: 'Avenida Planeta Limpio #606, San Salvador',
      telefono: '2222-0000',
      horario: 'Lunes a Viernes: 9:00 AM - 4:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio', 'Metal', 'Electrónicos']
    },
    'majahual': {
      nombre: 'Majahual',
      imagen: '/imagenes/Majahual.jpg',
      descripcion: 'Centro de acopio Majahual, promoviendo el reciclaje en la zona.',
      direccion: 'Calle Majahual #707, San Salvador',
      telefono: '2222-1111',
      horario: 'Lunes a Sábado: 8:00 AM - 5:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio', 'Metal']
    },
    'lese': {
      nombre: 'LESE',
      imagen: '/imagenes/LESE.jpg',
      descripcion: 'Centro de acopio LESE, especializado en materiales reciclables.',
      direccion: 'Avenida LESE #808, San Salvador',
      telefono: '2222-2222',
      horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio', 'Metal', 'Electrónicos']
    },
    'la-esperanza': {
      nombre: 'La Esperanza',
      imagen: '/imagenes/LaEsperanza.jpg',
      descripcion: 'Centro de acopio La Esperanza, trabajando por un futuro mejor.',
      direccion: 'Calle La Esperanza #909, San Salvador',
      telefono: '2222-3333',
      horario: 'Lunes a Sábado: 7:00 AM - 6:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio']
    },
    'jefren': {
      nombre: 'Jefren',
      imagen: '/imagenes/Jefren.jpg',
      descripcion: 'Centro de acopio Jefren, facilitando el reciclaje en la comunidad.',
      direccion: 'Avenida Jefren #1010, San Salvador',
      telefono: '2222-4444',
      horario: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio', 'Metal', 'Electrónicos']
    },
    'incodesa': {
      nombre: 'INCODESA',
      imagen: '/imagenes/INCODESA.jpg',
      descripcion: 'Centro de acopio INCODESA, comprometido con el medio ambiente.',
      direccion: 'Calle INCODESA #1111, San Salvador',
      telefono: '2222-5555',
      horario: 'Lunes a Sábado: 8:00 AM - 5:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio', 'Metal']
    },
    'servicios-y-reciclajes': {
      nombre: 'Servicios y Reciclajes',
      imagen: '/imagenes/ServiciosYRecicla.jpg',
      descripcion: 'Centro de acopio Servicios y Reciclajes, ofreciendo soluciones integrales.',
      direccion: 'Avenida Servicios #1212, San Salvador',
      telefono: '2222-6666',
      horario: 'Lunes a Viernes: 9:00 AM - 4:00 PM',
      materiales: ['Plástico', 'Papel', 'Vidrio', 'Metal', 'Electrónicos']
    }
  };

  const centro = centros[id];

  if (!centro) {
    return (
      <div className="centro-detalle-container">
        <h2>Centro de acopio no encontrado</h2>
        <Link to="/centros-acopio" className="volver-link">
          Volver a Centros de Acopio
        </Link>
      </div>
    );
  }

  return (
    <div className="centro-detalle-container">
      <div className="centro-detalle-header">
        <Link to="/centros-acopio" className="volver-link">
          ← Volver a Centros de Acopio
        </Link>
        <h1>{centro.nombre}</h1>
      </div>

      <div className="centro-detalle-content">
        <div className="centro-imagen">
          <img src={centro.imagen} alt={centro.nombre} />
        </div>

        <div className="centro-info">
          <p className="descripcion">{centro.descripcion}</p>
          
          <div className="info-section">
            <h3>Información de Contacto</h3>
            <p><strong>Dirección:</strong> {centro.direccion}</p>
            <p><strong>Teléfono:</strong> {centro.telefono}</p>
            <p><strong>Horario:</strong> {centro.horario}</p>
          </div>

          <div className="info-section">
            <h3>Materiales Aceptados</h3>
            <div className="materiales-list">
              {centro.materiales.map((material, index) => (
                <span key={index} className="material-tag">
                  {material}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentroAcopioDetalle; 