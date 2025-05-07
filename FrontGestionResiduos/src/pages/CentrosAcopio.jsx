import { Link } from 'react-router-dom';
import '../styles/CentrosAcopio.css';
import Tamarindo from '../assets/images/Tamarindo.jpg';
import RosaRodriguez from '../assets/images/RosaRodriguez.jpg';
import Sarmiento from '../assets/images/Sarmiento.jpg';
import Jefren from '../assets/images/Jefren.jpg';
import SextaAV from '../assets/images/6taAV.jpg';

const CentrosAcopio = () => {
  // Array de imágenes locales
  const imagenesLocales = [
    Tamarindo,
    RosaRodriguez,
    Sarmiento,
    Jefren,
    SextaAV
  ];

  // Función para obtener una imagen aleatoria
  const getImagenAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * imagenesLocales.length);
    return imagenesLocales[indiceAleatorio];
  };

  const centros = [
    {
      id: 'recitodo',
      nombre: 'Recitodo',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio especializado en reciclaje de diversos materiales.'
    },
    {
      id: '6ta-avenida',
      nombre: 'C.A 6ta Avenida',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio ubicado en la 6ta Avenida Norte.'
    },
    {
      id: 'ayala',
      nombre: 'Ayala',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio Ayala, comprometido con el medio ambiente.'
    },
    {
      id: 'romero',
      nombre: 'Romero',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio Romero, facilitando el reciclaje en la comunidad.'
    },
    {
      id: 'el-tamarindo',
      nombre: 'El Tamarindo',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio El Tamarindo, promoviendo la cultura del reciclaje.'
    },
    {
      id: 'sarmiento',
      nombre: 'Sarmiento',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio Sarmiento, contribuyendo al desarrollo sostenible.'
    },
    {
      id: 'el-catedral',
      nombre: 'El Catedral',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio El Catedral, ubicado en el centro histórico.'
    },
    {
      id: 'rosa-rodriguez',
      nombre: 'Rosa Rodriguez',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio Rosa Rodriguez, comprometido con la comunidad.'
    },
    {
      id: 'planeta-limpio',
      nombre: 'Planeta Limpio',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio Planeta Limpio, trabajando por un mundo más verde.'
    },
    {
      id: 'majahual',
      nombre: 'Majahual',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio Majahual, promoviendo el reciclaje en la zona.'
    },
    {
      id: 'lese',
      nombre: 'LESE',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio LESE, especializado en materiales reciclables.'
    },
    {
      id: 'la-esperanza',
      nombre: 'La Esperanza',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio La Esperanza, trabajando por un futuro mejor.'
    },
    {
      id: 'jefren',
      nombre: 'Jefren',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio Jefren, facilitando el reciclaje en la comunidad.'
    },
    {
      id: 'incodesa',
      nombre: 'INCODESA',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio INCODESA, comprometido con el medio ambiente.'
    },
    {
      id: 'servicios-y-reciclajes',
      nombre: 'Servicios y Reciclajes',
      imagen: getImagenAleatoria(),
      descripcion: 'Centro de acopio Servicios y Reciclajes, ofreciendo soluciones integrales.'
    }
  ];

  return (
    <div className="centros-acopio-container">
      <h1>Centros de Acopio</h1>
      <div className="centros-grid">
        {centros.map((centro) => (
          <Link to={`/centros-acopio/${centro.id}`} key={centro.id} className="centro-card">
            <img src={centro.imagen} alt={centro.nombre} />
            <h2>{centro.nombre}</h2>
            <p>{centro.descripcion}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CentrosAcopio; 