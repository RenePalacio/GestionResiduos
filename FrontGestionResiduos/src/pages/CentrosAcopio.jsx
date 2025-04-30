import { Link } from 'react-router-dom';
import '../styles/CentrosAcopio.css';

const CentrosAcopio = () => {
  const centros = [
    {
      id: 'recitodo',
      nombre: 'Recitodo',
      imagen: 'https://i.ibb.co/tw7J8ZKp/Recitodo.jpg',
      descripcion: 'Centro de acopio especializado en reciclaje de diversos materiales.'
    },
    {
      id: '6ta-avenida',
      nombre: 'C.A 6ta Avenida',
      imagen: 'https://i.ibb.co/JWLz1qjB/6taAV.jpg',
      descripcion: 'Centro de acopio ubicado en la 6ta Avenida Norte.'
    },
    {
      id: 'ayala',
      nombre: 'Ayala',
      imagen: 'https://i.ibb.co/JWLz1qjB/6taAV.jpg',
      descripcion: 'Centro de acopio Ayala, comprometido con el medio ambiente.'
    },
    {
      id: 'romero',
      nombre: 'Romero',
      imagen: 'https://i.ibb.co/Kc6g7X5S/Romero.jpg',
      descripcion: 'Centro de acopio Romero, facilitando el reciclaje en la comunidad.'
    },
    {
      id: 'el-tamarindo',
      nombre: 'El Tamarindo',
      imagen: 'https://i.ibb.co/3YzSPwT4/sl1.png',
      descripcion: 'Centro de acopio El Tamarindo, promoviendo la cultura del reciclaje.'
    },
    {
      id: 'sarmiento',
      nombre: 'Sarmiento',
      imagen: 'https://i.ibb.co/QWjNjwn/Sarmiento.jpg',
      descripcion: 'Centro de acopio Sarmiento, contribuyendo al desarrollo sostenible.'
    },
    {
      id: 'el-catedral',
      nombre: 'El Catedral',
      imagen: 'https://i.ibb.co/7JnMPxcj/Catedral.jpg',
      descripcion: 'Centro de acopio El Catedral, ubicado en el centro histórico.'
    },
    {
      id: 'rosa-rodriguez',
      nombre: 'Rosa Rodriguez',
      imagen: 'https://i.ibb.co/rGsRx53y/Rosa-Rodriguez.jpg',
      descripcion: 'Centro de acopio Rosa Rodriguez, comprometido con la comunidad.'
    },
    {
      id: 'planeta-limpio',
      nombre: 'Planeta Limpio',
      imagen: 'https://i.ibb.co/PvhC4k42/download.jpg',
      descripcion: 'Centro de acopio Planeta Limpio, trabajando por un mundo más verde.'
    },
    {
      id: 'majahual',
      nombre: 'Majahual',
      imagen: 'https://i.ibb.co/1tyqtDDq/Majahual.jpg',
      descripcion: 'Centro de acopio Majahual, promoviendo el reciclaje en la zona.'
    },
    {
      id: 'lese',
      nombre: 'LESE',
      imagen: 'https://i.ibb.co/JWxtQ8M2/LESE.jpg',
      descripcion: 'Centro de acopio LESE, especializado en materiales reciclables.'
    },
    {
      id: 'la-esperanza',
      nombre: 'La Esperanza',
      imagen: 'https://i.ibb.co/XZqk86Zg/La-Esperanza.jpg',
      descripcion: 'Centro de acopio La Esperanza, trabajando por un futuro mejor.'
    },
    {
      id: 'jefren',
      nombre: 'Jefren',
      imagen: 'https://i.ibb.co/s9jSVtt5/Jefren.jpg',
      descripcion: 'Centro de acopio Jefren, facilitando el reciclaje en la comunidad.'
    },
    {
      id: 'incodesa',
      nombre: 'INCODESA',
      imagen: 'https://i.ibb.co/9mvZsYHd/INCODESA.jpg',
      descripcion: 'Centro de acopio INCODESA, comprometido con el medio ambiente.'
    },
    {
      id: 'servicios-y-reciclajes',
      nombre: 'Servicios y Reciclajes',
      imagen: 'https://i.ibb.co/tTHgKJ9D/Servicios-YRecicla.jpg',
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