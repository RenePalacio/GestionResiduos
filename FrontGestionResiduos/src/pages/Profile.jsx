import { useState, useEffect } from 'react';
import recyclingService from '../services/recyclingService';
import '../styles/Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userRecyclings, setUserRecyclings] = useState([]);
  const [totalRecyclings, setTotalRecyclings] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [totalMaterials, setTotalMaterials] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('https://c43nt8lpv8.execute-api.us-east-1.amazonaws.com/prd/api/auth/me', {
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

    const fetchRecyclingsByUser = async () => {
      const session = localStorage.getItem('user');

      console.log('Fetching recyclings...');

      if(session){
        const userId = JSON.parse(session).id;
        console.log('User ID:', userId);

        try {
          const recyclings = await recyclingService.getRecyclingByUser(userId);
          console.log('Recyclings:', recyclings);

          if (recyclings) {
            const totalMaterials = recyclings.reduce((acc, recycling) => {
              const materials = recycling.details.reduce((sum, detail) => sum + detail.quantity, 0);
              return acc + materials;
            }
            , 0);

            setUserRecyclings(recyclings);
            setTotalRecyclings(recyclings.length);
            setTotalMaterials(totalMaterials);
            setTotalPoints(totalMaterials*10);

          }
        }
        catch (error) {
          console.error('Error fetching recyclings:', error);
          setError('Error al cargar los reciclajes');
        }
      }
      
    
    };


    fetchUserData();
    fetchRecyclingsByUser();
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
              <span className="label">Numero de Reciclajes:</span>
              <span className="value">{totalRecyclings || 0}</span>
            </div>
            <div className="info-item">
              <span className="label">Items Reciclados:</span>
              <span className="value">{totalMaterials || 0}</span>
            </div>
            <div className="info-item">
              <span className="label">Puntos Acumulados:</span>
              <span className="value">{totalPoints || 0}</span>
            </div>
          </div>
        </div>

        {/* <div className="profile-actions">
          <button className="action-button edit-profile">
            Editar Perfil
          </button>
          <button className="action-button change-password">
            Cambiar Contraseña
          </button>
          <button className="action-button view-history">
            Ver Historial
          </button>
        </div> */}

        <div className="recent-activity">
          <h2>Actividad Reciente</h2>
          {userRecyclings?.length > 0 ? (
            <div className="activity-list">
              {userRecyclings.map((activity, index) => (
                <div key={index} className="activity-item">
                  <span className="activity-id">
                    {activity.id}
                  </span>
                  <span className="activity-description">
                    {activity.description}
                  </span>
                  <span className="activity-point">
                    {activity.recyclablePoint.name}
                  </span>
                  <span className="activity-detail">
                    {activity.details.map((detail, index) => (

                      <span key={index} className="activity-detail">
                        {detail.recyclable.name},
                      </span>
                    ))}
                  </span>

                  <span className="activity-date">
                    {new Date(activity.createdAt).toLocaleString()}
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