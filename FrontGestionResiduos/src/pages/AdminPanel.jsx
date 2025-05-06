import React, { useState, useEffect } from 'react';
import '../styles/AdminPanel.css';
import pointsService from '../services/pointsService';
import recyclableService from '../services/recyclableService';
import recyclingService from '../services/recyclingService';
import api from '../services/api';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('usuarios');
  const [users, setUsers] = useState([]);
  const [points, setPoints] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [recyclings, setRecyclings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Estados para los formularios
  const [userForm, setUserForm] = useState({ name: '', email: '', password: '', phone: '', role: '' });
  const [pointForm, setPointForm] = useState({
    name: '',
    phone: '',
    location: '',
    latitud: '',
    longitud: '',
    operating_hours: '',
    imageUrl: '',
    description: '',
    acceptedMaterials: []
  });
  const [recyclableForm, setRecyclableForm] = useState({
    name: '',
    category: '',
    description: '',
    recomendation: ''
  });
  const [recyclingForm, setRecyclingForm] = useState({
    description: '',
    userId: '',
    recyclablePointId: '',
    details: [{ recyclableId: '', quantity: '' }]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        switch (activeSection) {
          case 'usuarios':
            const usersResponse = await api.get('/users');
            if (Array.isArray(usersResponse)) {
              setUsers(usersResponse);
            } else {
              setError('Formato de respuesta inválido');
            }
            break;
          case 'puntos':
            const pointsResponse = await pointsService.getAllPoints();
            setPoints(pointsResponse);
            // Cargar materiales para la selección
            const materialsResponse = await recyclableService.getAllRecyclables();
            setMaterials(materialsResponse);
            break;
          case 'materiales':
            console.log('Obteniendo materiales reciclables...');
            const materialsResponse2 = await recyclableService.getAllRecyclables();
            console.log('Respuesta de materiales:', materialsResponse2);
            setMaterials(materialsResponse2);
            break;
          case 'registros':
            const recyclingsResponse = await recyclingService.getAllRecycling();
            setRecyclings(recyclingsResponse);
            const recyclingPointsResponse = await pointsService.getAllPoints();
            setPoints(recyclingPointsResponse);
            break;
        }
        setError(null);
      } catch (err) {
        console.error('Error:', err);
        if (err.message.includes('403')) {
          setError('No tienes permisos para acceder a esta información');
        } else if (err.message.includes('401')) {
          setError('Sesión expirada. Por favor, inicia sesión nuevamente');
        } else {
          setError('Error al cargar los datos');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeSection]);

  const handleDelete = async (type, id) => {
    // Mostrar confirmación
    const confirmMessage = type === 'user' ? '¿Estás seguro de que deseas eliminar este usuario?' :
                          type === 'point' ? '¿Estás seguro de que deseas eliminar este punto de reciclaje?' :
                          type === 'material' ? '¿Estás seguro de que deseas eliminar este material?' :
                          '¿Estás seguro de que deseas eliminar este registro?';

    if (!window.confirm(confirmMessage)) {
      return;
    }

    try {
      switch (type) {
        case 'user':
          await api.delete(`/users/${id}`);
          setUsers(users.filter(user => user.id !== id));
          setSuccessMessage('Usuario eliminado exitosamente');
          break;
        case 'point':
          await pointsService.deletePoint(id);
          setPoints(points.filter(point => point.id !== id));
          setSuccessMessage('Punto de reciclaje eliminado exitosamente');
          break;
        case 'material':
          await recyclableService.deleteRecyclable(id);
          setMaterials(materials.filter(material => material.id !== id));
          setSuccessMessage('Material eliminado exitosamente');
          break;
        case 'recycling':
          await recyclingService.deleteRecycling(id);
          setRecyclings(recyclings.filter(recycling => recycling.id !== id));
          setSuccessMessage('Registro eliminado exitosamente');
          break;
      }
    } catch (err) {
      console.error('Error:', err);
      if (err.message.includes('403')) {
        setError('No tienes permisos para realizar esta acción');
      } else if (err.message.includes('401')) {
        setError('Sesión expirada. Por favor, inicia sesión nuevamente');
      } else {
        setError('Error al eliminar el elemento');
      }
    }
  };

  const handleEdit = (type, item) => {
    setEditingItem(item);
    switch (type) {
      case 'user':
        setUserForm({ name: item.name, email: item.email, password: '', phone: item.phone, role: item.role });
        break;
      case 'point':
        setPointForm({
          name: item.name,
          phone: item.phone,
          location: item.location,
          latitud: item.latitud,
          longitud: item.longitud,
          operating_hours: item.operating_hours,
          imageUrl: item.imageUrl,
          description: item.description,
          acceptedMaterials: item.acceptedMaterials?.map(material => material.id) || []
        });
        break;
      case 'material':
        setRecyclableForm({
          name: item.name,
          category: item.category,
          description: item.description,
          recomendation: item.recomendation
        });
        break;
      case 'recycling':
        setRecyclingForm({ 
          description: item.description,
          userId: item.user?.id, 
          recyclablePointId: item.recyclablePoint?.id,
          details: item.details?.map(detail => ({
            recyclableId: detail.recyclable.id,
            quantity: detail.quantity
          })) || [{ recyclableId: '', quantity: '' }]
        });
        break;
    }
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (activeSection === 'usuarios') {
        if (editingItem) {
          const updatedUser = await api.put(`/users/${editingItem.id}`, userForm);
          setUsers(users.map(u => 
            u.id === editingItem.id ? updatedUser : u
          ));
          setSuccessMessage('Usuario actualizado exitosamente');
        } else {
          const newUser = await api.post('/users', userForm);
          setUsers([...users, newUser]);
          setSuccessMessage('Usuario creado exitosamente');
        }
      } else if (activeSection === 'puntos') {
        // Preparar los datos del punto de reciclaje
        const pointData = {
          ...pointForm,
          acceptedMaterials: pointForm.acceptedMaterials.map(id => ({ id }))
        };

        if (editingItem) {
          const updatedPoint = await pointsService.updatePoint(editingItem.id, pointData);
          setPoints(points.map(p => 
            p.id === editingItem.id ? updatedPoint : p
          ));
          setSuccessMessage('Punto de reciclaje actualizado exitosamente');
        } else {
          const newPoint = await pointsService.createPoint(pointData);
          setPoints([...points, newPoint]);
          setSuccessMessage('Punto de reciclaje creado exitosamente');
        }
      } else if (activeSection === 'materiales') {
        if (editingItem) {
          console.log('Actualizando material:', editingItem.id, recyclableForm);
          await recyclableService.updateRecyclable(editingItem.id, recyclableForm);
          const updatedMaterials = materials.map(m => 
            m.id === editingItem.id ? { ...m, ...recyclableForm } : m
          );
          setMaterials(updatedMaterials);
          setSuccessMessage('Material actualizado exitosamente');
        } else {
          console.log('Creando nuevo material:', recyclableForm);
          const newMaterial = await recyclableService.createRecyclable(recyclableForm);
          setMaterials([...materials, newMaterial]);
          setSuccessMessage('Material creado exitosamente');
        }
      } else if (activeSection === 'registros') {
        await handleRecyclingSubmit(e);
      }
      setShowForm(false);
      setEditingItem(null);
      resetForms();
    } catch (err) {
      console.error('Error:', err);
      if (err.message.includes('403')) {
        setError('No tienes permisos para realizar esta acción');
      } else if (err.message.includes('401')) {
        setError('Sesión expirada. Por favor, inicia sesión nuevamente');
      } else {
        setError('Error al guardar los datos');
      }
    }
  };

  const handleRecyclingSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingItem) {
        await recyclingService.updateRecycling(editingItem.id, recyclingForm);
        setSuccessMessage('Registro de reciclaje actualizado exitosamente');
      } else {
        await recyclingService.createRecycling(recyclingForm);
        setSuccessMessage('Registro de reciclaje creado exitosamente');
      }
      setShowForm(false);
      setEditingItem(null);
      //fetchRecyclings();
    } catch (error) {
      setError('Error al guardar el registro de reciclaje');
      console.error('Error:', error);
    }
  };

  const handleAddMaterial = () => {
    setRecyclingForm(prev => ({
      ...prev,
      details: [...prev.details, { recyclableId: '', quantity: '' }]
    }));
  };

  const handleRemoveMaterial = (index) => {
    setRecyclingForm(prev => ({
      ...prev,
      details: prev.details.filter((_, i) => i !== index)
    }));
  };

  const handleMaterialChange = (index, field, value) => {
    setRecyclingForm(prev => ({
      ...prev,
      details: prev.details.map((detail, i) => 
        i === index ? { ...detail, [field]: value } : detail
      )
    }));
  };

  const resetForms = () => {
    setUserForm({ name: '', email: '', password: '', phone: '' });
    setPointForm({
      name: '',
      phone: '',
      location: '',
      latitud: '',
      longitud: '',
      operating_hours: '',
      imageUrl: '',
      description: '',
      acceptedMaterials: []
    });
    setRecyclableForm({
      name: '',
      category: '',
      description: '',
      recomendation: ''
    });
    setRecyclingForm({
      description: '',
      userId: '',
      recyclablePointId: '',
      details: [{ recyclableId: '', quantity: '' }]
    });
  };

  // Función para limpiar mensajes después de un tiempo
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const renderForm = () => {
    if (!showForm) return null;

    const formContent = (() => {
      switch (activeSection) {
        case 'usuarios':
          return (
            <form onSubmit={handleSubmit} className="admin-form">
              <h3>{editingItem ? 'Editar Usuario' : 'Nuevo Usuario'}</h3>
              <input
                type="text"
                placeholder="Nombre"
                value={userForm.name}
                onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={userForm.email}
                onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={userForm.password}
                onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                required={!editingItem}
              />
              <input
                type="text"
                placeholder="Teléfono"
                value={userForm.phone}
                onChange={(e) => setUserForm({ ...userForm, phone: e.target.value })}
                required
              />
              <select value={userForm.role} onChange={(e) => setUserForm({ ...userForm, role: e.target.value })} required>
                <option value="">Seleccionar rol</option>
                <option value="admin">Administrador</option>
                <option value="user">Usuario</option>
              </select>
              <div className="button-group">
                <button type="submit">Guardar</button>
                <button type="button" onClick={() => { setShowForm(false); setEditingItem(null); resetForms(); }}>
                  Cancelar
                </button>
              </div>
            </form>
          );
        case 'puntos':
          return renderPointForm();
        case 'materiales':
          return (
            <form onSubmit={handleSubmit} className="admin-form">
              <h3>{editingItem ? 'Editar Material' : 'Nuevo Material'}</h3>
              <input
                type="text"
                placeholder="Nombre"
                value={recyclableForm.name}
                onChange={(e) => setRecyclableForm({ ...recyclableForm, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Categoría"
                value={recyclableForm.category}
                onChange={(e) => setRecyclableForm({ ...recyclableForm, category: e.target.value })}
              />
              <textarea
                placeholder="Descripción"
                value={recyclableForm.description}
                onChange={(e) => setRecyclableForm({ ...recyclableForm, description: e.target.value })}
                required
              />
              <textarea
                placeholder="Recomendación"
                value={recyclableForm.recomendation}
                onChange={(e) => setRecyclableForm({ ...recyclableForm, recomendation: e.target.value })}
              />
              <div className="button-group">
                <button type="submit">Guardar</button>
                <button type="button" onClick={() => { setShowForm(false); setEditingItem(null); resetForms(); }}>
                  Cancelar
                </button>
              </div>
            </form>
          );
        case 'registros':
          return renderRecyclingForm();
        default:
          return null;
      }
    })();

    return (
      <div className="admin-popup-overlay">
        <div className="admin-popup">
          {formContent}
        </div>
      </div>
    );
  };

  const renderPointForm = () => (
    <form onSubmit={handleSubmit} className="admin-form">
      <h3>{editingItem ? 'Editar Punto de Reciclaje' : 'Nuevo Punto de Reciclaje'}</h3>
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          value={pointForm.name}
          onChange={(e) => setPointForm(prev => ({ ...prev, name: e.target.value }))}
          required
        />
      </div>
      <div className="form-group">
        <label>Teléfono:</label>
        <input
          type="text"
          value={pointForm.phone}
          onChange={(e) => setPointForm(prev => ({ ...prev, phone: e.target.value }))}
          required
        />
      </div>
      <div className="form-group">
        <label>Ubicación:</label>
        <input
          type="text"
          value={pointForm.location}
          onChange={(e) => setPointForm(prev => ({ ...prev, location: e.target.value }))}
          required
        />
      </div>
      <div className="form-group">
        <label>Latitud:</label>
        <input
          type="text"
          value={pointForm.latitud}
          onChange={(e) => setPointForm(prev => ({ ...prev, latitud: e.target.value }))}
        />
      </div>
      <div className="form-group">
        <label>Longitud:</label>
        <input
          type="text"
          value={pointForm.longitud}
          onChange={(e) => setPointForm(prev => ({ ...prev, longitud: e.target.value }))}
        />
      </div>
      <div className="form-group">
        <label>Horario de Operación:</label>
        <input
          type="text"
          value={pointForm.operating_hours}
          onChange={(e) => setPointForm(prev => ({ ...prev, operating_hours: e.target.value }))}
        />
      </div>
      <div className="form-group">
        <label>URL de Imagen:</label>
        <input
          type="text"
          value={pointForm.imageUrl}
          onChange={(e) => setPointForm(prev => ({ ...prev, imageUrl: e.target.value }))}
        />
      </div>
      <div className="form-group">
        <label>Descripción:</label>
        <textarea
          value={pointForm.description}
          onChange={(e) => setPointForm(prev => ({ ...prev, description: e.target.value }))}
          required
        />
      </div>
      <div className="form-group">
        <label>Materiales Aceptados:</label>
        <select
          multiple
          value={pointForm.acceptedMaterials}
          onChange={(e) => {
            const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
            setPointForm(prev => ({
              ...prev,
              acceptedMaterials: selectedOptions
            }));
          }}
          className="materials-select"
        >
          {materials.map(material => (
            <option key={material.id} value={material.id}>
              {material.name} - {material.category}
            </option>
          ))}
        </select>
        <small className="form-text">Mantén presionado Ctrl (Cmd en Mac) para seleccionar múltiples materiales</small>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {editingItem ? 'Actualizar' : 'Crear'}
        </button>
        <button
          type="button"
          onClick={() => {
            setShowForm(false);
            setEditingItem(null);
            resetForms();
          }}
          className="btn btn-secondary"
        >
          Cancelar
        </button>
      </div>
    </form>
  );

  const renderRecyclingForm = () => (
    <form onSubmit={handleRecyclingSubmit} className="admin-form">
      <div className="form-group">
        <label>Descripción:</label>
        <input
          type="text"
          value={recyclingForm.description}
          onChange={(e) => setRecyclingForm(prev => ({ ...prev, description: e.target.value }))}
          required
        />
      </div>
      <div className="form-group">
        <label>Usuario:</label>
        <select
          value={recyclingForm.userId}
          onChange={(e) => setRecyclingForm(prev => ({ ...prev, userId: e.target.value }))}
          required
        >
          <option value="">Seleccionar usuario</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Punto de Reciclaje:</label>
        <select
          value={recyclingForm.recyclablePointId}
          onChange={(e) => setRecyclingForm(prev => ({ ...prev, recyclablePointId: e.target.value }))}
          required
        >
          <option value="">Seleccionar punto</option>
          {points.map(point => (
            <option key={point.id} value={point.id}>{point.name}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Materiales:</label>
        {recyclingForm.details.map((detail, index) => (
          <div key={index} className="material-detail">
            <select
              value={detail.recyclableId}
              onChange={(e) => handleMaterialChange(index, 'recyclableId', e.target.value)}
              required
            >
              <option value="">Seleccionar material</option>
              {materials.map(material => (
                <option key={material.id} value={material.id}>{material.name}</option>
              ))}
            </select>
            <input
              type="number"
              value={detail.quantity}
              onChange={(e) => handleMaterialChange(index, 'quantity', e.target.value)}
              placeholder="Cantidad"
              required
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => handleRemoveMaterial(index)}
                className="btn btn-delete"
              >
                Eliminar
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddMaterial}
          className="btn btn-add"
        >
          Agregar Material
        </button>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {editingItem ? 'Actualizar' : 'Crear'}
        </button>
        <button
          type="button"
          onClick={() => {
            setShowForm(false);
            setEditingItem(null);
          }}
          className="btn btn-secondary"
        >
          Cancelar
        </button>
      </div>
    </form>
  );

  const renderRecyclingTable = () => (
    <div className="table-container">
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Punto de Reciclaje</th>
            <th>Descripción</th>
            <th>Materiales</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {recyclings.map((recycling) => (
            <tr key={recycling.id}>
              <td>{recycling.id}</td>
              <td>{recycling.user?.name}</td>
              <td>{recycling.recyclablePoint?.name}</td>
              <td>{recycling.description}</td>
              <td>
                {recycling.details?.map((detail, index) => (
                  <div key={index}>
                    {detail.recyclable.name}: {detail.quantity}
                  </div>
                ))}
              </td>
              <td>
                <button
                  onClick={() => handleEdit('recycling', recycling)}
                  className="edit-btn"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete('recycling', recycling.id)}
                  className="delete-btn"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderPointsTable = () => (
    <div className="table-container">
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Ubicación</th>
            <th>Horario</th>
            <th>Materiales Aceptados</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {points.map((point) => (
            <tr key={point.id}>
              <td>{point.id}</td>
              <td>{point.name}</td>
              <td>{point.phone}</td>
              <td>{point.location}</td>
              <td>{point.operating_hours}</td>
              <td>
                {point.acceptedMaterials?.map(material => material.name).join(', ')}
              </td>
              <td>
                <button
                  onClick={() => handleEdit('point', point)}
                  className="edit-btn"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete('point', point.id)}
                  className="delete-btn"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="admin-content-centered">
      <nav className="admin-navbar">
        <ul className="admin-navbar-list">
          <li className={activeSection === 'usuarios' ? 'active' : ''} onClick={() => setActiveSection('usuarios')}>Usuarios</li>
          <li className={activeSection === 'puntos' ? 'active' : ''} onClick={() => setActiveSection('puntos')}>Puntos de Reciclaje</li>
          <li className={activeSection === 'materiales' ? 'active' : ''} onClick={() => setActiveSection('materiales')}>Materiales Reciclables</li>
          <li className={activeSection === 'registros' ? 'active' : ''} onClick={() => setActiveSection('registros')}>Registros de Reciclaje</li>
        </ul>
      </nav>
      <div className="admin-section-content">
        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        {loading ? (
          <div className="loading">Cargando...</div>
        ) : (
          <>
            {activeSection === 'usuarios' && (
              <section>
                <h2>Gestión de Usuarios</h2>
                <button className="add-btn" onClick={() => setShowForm(true)}>Agregar Usuario</button>
                <div className="admin-table-wrapper">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(user => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.phone}</td>
                          <td>{user.role}</td>
                          <td>
                            <button className="edit-btn" onClick={() => handleEdit('user', user)}>Editar</button>
                            <button className="delete-btn" onClick={() => handleDelete('user', user.id)}>Eliminar</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
            {activeSection === 'puntos' && (
              <section>
                <h2>Puntos de Reciclaje</h2>
                <button className="add-btn" onClick={() => setShowForm(true)}>Agregar Punto</button>
                {renderPointsTable()}
              </section>
            )}
            {activeSection === 'materiales' && (
              <section>
                <h2>Materiales Reciclables</h2>
                <button className="add-btn" onClick={() => setShowForm(true)}>Agregar Material</button>
                <div className="admin-table-wrapper">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Descripción</th>
                        <th>Recomendación</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {materials.map(material => (
                        <tr key={material.id}>
                          <td>{material.id}</td>
                          <td>{material.name}</td>
                          <td>{material.category}</td>
                          <td>{material.description}</td>
                          <td>{material.recomendation}</td>
                          <td>
                            <button className="edit-btn" onClick={() => handleEdit('material', material)}>Editar</button>
                            <button className="delete-btn" onClick={() => handleDelete('material', material.id)}>Eliminar</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
            {activeSection === 'registros' && (
              <section>
                <h2>Registros de Reciclaje</h2>
                <button className="add-btn" onClick={() => setShowForm(true)}>Agregar Registro</button>
                {renderRecyclingTable()}
              </section>
            )}
          </>
        )}
      </div>
      {renderForm()}
    </div>
  );
};

export default AdminPanel;
