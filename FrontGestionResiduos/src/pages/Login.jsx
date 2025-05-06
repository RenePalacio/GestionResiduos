import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Notification from '../components/Notification';
import '../styles/Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('success');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('login-page');
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: email,
          password 
        }),
      });
      console.log('Response:', response); 

      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error response:', errorData);
        if (response.status === 403) {
          throw new Error('Usuario o contraseña incorrectos');
        } else if (response.status === 401) {
          throw new Error(errorData.message);
        }
      }else{
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        localStorage.setItem('user', JSON.stringify(data));
        setIsAuthenticated(true);
        
        setNotificationMessage('¡Bienvenido! Has iniciado sesión exitosamente');
        setNotificationType('success');
        setShowNotification(true);
        
        setTimeout(() => {
          navigate('/');
        }, 1500);

      }
      
    } catch (err) {
      console.error('Error en login:', err);
      setError(err.message === 'Failed to fetch' 
        ? 'Error de conexión con el servidor' 
        : err.message);
      setNotificationMessage(err.message);
      setNotificationType('error');
      setShowNotification(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Bienvenido</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo electrónico"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
        <div className="register-link">
          <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
        </div>
      </div>
      {showNotification && (
        <Notification
          message={notificationMessage}
          type={notificationType}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default Login;
