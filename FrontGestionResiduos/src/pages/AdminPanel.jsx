import { useState, useEffect } from 'react';
import '../styles/AdminPanel.css';

const API_BASE_URL = 'http://localhost:8080';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [centers, setCenters] = useState([]);
  const [recyclables, setRecyclables] = useState([]);
  const [recyclings, setRecyclings] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Access-Control-Allow-Origin': '*'
    };
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const headers = getAuthHeaders();
      const [usersRes, centersRes, recyclablesRes, recyclingsRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/users`, { 
          headers,
          mode: 'cors',
          credentials: 'include'
        }),
        fetch(`${API_BASE_URL}/api/recyclable-points`, { 
          headers,
          mode: 'cors',
          credentials: 'include'
        }),
        fetch(`${API_BASE_URL}/api/recyclables`, { 
          headers,
          mode: 'cors',
          credentials: 'include'
        }),
        fetch(`${API_BASE_URL}/api/recycling`, { 
          headers,
          mode: 'cors',
          credentials: 'include'
        })
      ]);

      if (!usersRes.ok || !centersRes.ok || !recyclablesRes.ok || !recyclingsRes.ok) {
        const errorData = await usersRes.json().catch(() => ({}));
        throw new Error(errorData.message || 'Error al cargar los datos');
      }

      const usersData = await usersRes.json();
      const centersData = await centersRes.json();
      const recyclablesData = await recyclablesRes.json();
      const recyclingsData = await recyclingsRes.json();

      setUsers(usersData);
      setCenters(centersData);
      setRecyclables(recyclablesData);
      setRecyclings(recyclingsData);
      setError(null);
    } catch (error) {
      console.error('Error en fetchData:', error);
      setError('Error al cargar los datos. Por favor, verifica que el servidor esté corriendo.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (entityType, data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/${entityType}`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al crear el registro');
      }

      await fetchData();
      setShowForm(false);
      setError(null);
    } catch (error) {
      setError('Error al crear: ' + error.message);
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (entityType, id, data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/${entityType}/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al actualizar el registro');
      }

      await fetchData();
      setShowForm(false);
      setError(null);
    } catch (error) {
      setError('Error al actualizar: ' + error.message);
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (entityType, id) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este registro?')) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/${entityType}/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al eliminar el registro');
      }

      await fetchData();
      setError(null);
    } catch (error) {
      setError('Error al eliminar: ' + error.message);
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderEntityList = (entities, entityType) => {
    if (!entities || entities.length === 0) {
      return (
        <div className="entity-list">
          <h3>{entityType.charAt(0).toUpperCase() + entityType.slice(1)}</h3>
          <p>No hay datos disponibles</p>
          <button onClick={() => {
            setSelectedEntity({ type: entityType });
            setFormData({});
            setShowForm(true);
          }}>Crear Nuevo</button>
        </div>
      );
    }

    return (
      <div className="entity-list">
        <h3>{entityType.charAt(0).toUpperCase() + entityType.slice(1)}</h3>
        <button onClick={() => {
          setSelectedEntity({ type: entityType });
          setFormData({});
          setShowForm(true);
        }}>Crear Nuevo</button>
        <table>
          <thead>
            <tr>
              {Object.keys(entities[0] || {}).map(key => (
                <th key={key}>{key}</th>
              ))}
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {entities.map(entity => (
              <tr key={entity.id}>
                {Object.entries(entity).map(([key, value]) => (
                  <td key={key}>{value}</td>
                ))}
                <td>
                  <button onClick={() => {
                    setSelectedEntity({ type: entityType, data: entity });
                    setFormData(entity);
                    setShowForm(true);
                  }}>Editar</button>
                  <button onClick={() => handleDelete(entityType, entity.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderForm = () => {
    if (!selectedEntity) return null;

    const handleSubmit = (e) => {
      e.preventDefault();
      if (selectedEntity.data) {
        handleUpdate(selectedEntity.type, selectedEntity.data.id, formData);
      } else {
        handleCreate(selectedEntity.type, formData);
      }
    };

    return (
      <div className="form-modal">
        <h2>{selectedEntity.data ? 'Editar' : 'Crear'} {selectedEntity.type}</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map(key => (
            <div key={key}>
              <label>{key}:</label>
              <input
                type="text"
                value={formData[key] || ''}
                onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
              />
            </div>
          ))}
          <button type="submit" disabled={loading}>
            {loading ? 'Guardando...' : 'Guardar'}
          </button>
          <button type="button" onClick={() => setShowForm(false)} disabled={loading}>
            Cancelar
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="admin-panel">
      <h1>Panel de Administración</h1>
      
      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => fetchData()}>Reintentar</button>
        </div>
      )}
      
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Cargando datos...</p>
        </div>
      )}
      
      <div className="admin-sections">
        {renderEntityList(users, 'users')}
        {renderEntityList(centers, 'recyclable-points')}
        {renderEntityList(recyclables, 'recyclables')}
        {renderEntityList(recyclings, 'recycling')}
      </div>

      {showForm && renderForm()}
    </div>
  );
};

export default AdminPanel; 