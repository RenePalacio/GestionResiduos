import { useState, useEffect } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          setError('Error al cargar los datos del perfil');
        }
      } catch (error) {
        setError('Error al conectar con el servidor');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="loading">Cargando perfil...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Mi Perfil</h1>
      </div>

      <div className="profile-content">
        <div className="profile-info">
          <div className="info-card">
            <h2>Información Personal</h2>
            <div className="info-item">
              <span className="label">Nombre de Usuario:</span>
              <span className="value">{userData?.name}</span>
            </div>
            <div className="info-item">
              <span className="label">Correo Electrónico:</span>
              <span className="value">{userData?.email}</span>
            </div>
            <div className="info-item">
              <span className="label">Fecha de Registro:</span>
              <span className="value">{new Date(userData?.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="info-card">
            <h2>Estadísticas</h2>
            <div className="info-item">
              <span className="label">Centros Visitados:</span>
              <span className="value">{userData?.visitedCenters || 0}</span>
            </div>
            <div className="info-item">
              <span className="label">Materiales Reciclados:</span>
              <span className="value">{userData?.recycledMaterials || 0} kg</span>
            </div>
            <div className="info-item">
              <span className="label">Puntos Acumulados:</span>
              <span className="value">{userData?.points || 0}</span>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <button className="action-button edit-profile">
            Editar Perfil
          </button>
          <button className="action-button change-password">
            Cambiar Contraseña
          </button>
          <button className="action-button view-history">
            Ver Historial
          </button>
        </div>

        <div className="recent-activity">
          <h2>Actividad Reciente</h2>
          {userData?.recentActivity?.length > 0 ? (
            <div className="activity-list">
              {userData.recentActivity.map((activity, index) => (
                <div key={index} className="activity-item">
                  <span className="activity-date">
                    {new Date(activity.date).toLocaleDateString()}
                  </span>
                  <span className="activity-description">
                    {activity.description}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p>No hay actividad reciente</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile; 