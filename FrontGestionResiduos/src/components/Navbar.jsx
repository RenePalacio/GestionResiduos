import { Link } from 'react-router-dom';
import { useState } from 'react';
import Notification from './Notification';
import ConfirmModal from './ConfirmModal';
import '../styles/Navbar.css';
import { useLocation } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('success');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const location = useLocation();
  const isLoginOrRegisterPage = location.pathname === '/login' || location.pathname === '/register';

  const handleLogout = () => {
    setShowConfirmModal(true);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const confirmLogout = () => {
    localStorage.clear();
    setNotificationMessage('Sesión cerrada exitosamente');
    setNotificationType('success');
    setShowNotification(true);
    setShowConfirmModal(false);
    setTimeout(() => {
      window.location.href = '/login';
    }, 1500);
  };

  return (
    <>
      <header>
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img src="https://i.ibb.co/q3GGBwm2/logo.png" alt="Logo de YoReciclosv" width="100px" height="100px" />
            </Link>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            >
            ☰
          </button>
          <nav className={menuOpen ? 'open' : ''}>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/centros-acopio">Centros de Acopio</Link></li>
              <li>
                <a href="https://www.google.com/maps/d/u/2/viewer?mid=1PzHyuXLcr5-T_CfUTF7GAVERschFqq0&ll=13.785532043551068%2C-89.17800313997114&z=17">
                  Ubicación Geográfica C.A
                </a>
              </li>
              <li><Link to="/como-reciclar">Cultura Ambiental</Link></li>
              
              {isAuthenticated ? (
                <>
                  <li><Link to="/admin">Administración</Link></li>
                  <li>
                    <button className="cerrar-sesion" onClick={handleLogout}>
                      Cerrar Sesión
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="auth-link">Iniciar Sesión</Link>
                  </li>
                  <li>
                    <Link to="/register" className="auth-link register">Registrarse</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      {showNotification && (
        <Notification
          message={notificationMessage}
          type={notificationType}
          onClose={() => setShowNotification(false)}
        />
      )}
      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={confirmLogout}
        message="¿Estás seguro que deseas cerrar sesión?"
      />
    </>
  );
};

export default Navbar; 