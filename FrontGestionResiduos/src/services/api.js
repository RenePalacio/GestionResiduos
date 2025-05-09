const API_BASE_URL = 'https://c43nt8lpv8.execute-api.us-east-1.amazonaws.com/prd/api';

// Configuración base para las llamadas a la API
const api = {
  // Método GET genérico
  get: async (endpoint) => {
    const token = localStorage.getItem('token');
    try {
      console.log('Token:', token);
      console.log('URL:', `${API_BASE_URL}${endpoint}`);

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        
        if (response.status === 403) {
          throw new Error('No tienes permisos para acceder a este recurso');
        } else if (response.status === 401) {
          throw new Error('Tu sesión ha expirado. Por favor, inicia sesión nuevamente');
        }
        
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const text = await response.text();
      if (!text) return [];
      
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error('Error parsing JSON:', e);
        return [];
      }
    } catch (error) {
      console.error('Error en GET:', error);
      throw error;
    }
  },

  // Método POST genérico
  post: async (endpoint, data) => {
    const token = localStorage.getItem('token');
    try {
      console.log('Token:', token);
      console.log('URL:', `${API_BASE_URL}${endpoint}`);
      console.log('Data:', data);

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        
        if (response.status === 403) {
          throw new Error('No tienes permisos para realizar esta acción');
        } else if (response.status === 401) {
          throw new Error('Tu sesión ha expirado. Por favor, inicia sesión nuevamente');
        }
        
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const text = await response.text();
      if (!text) return null;
      
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error('Error parsing JSON:', e);
        return null;
      }
    } catch (error) {
      console.error('Error en POST:', error);
      throw error;
    }
  },

  // Método PUT genérico
  put: async (endpoint, data) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        
        if (response.status === 403) {
          throw new Error('No tienes permisos para realizar esta acción');
        } else if (response.status === 401) {
          throw new Error('Tu sesión ha expirado. Por favor, inicia sesión nuevamente');
        }
        
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const text = await response.text();
      if (!text) return null;
      
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error('Error parsing JSON:', e);
        return null;
      }
    } catch (error) {
      console.error('Error en PUT:', error);
      throw error;
    }
  },

  // Método DELETE genérico
  delete: async (endpoint) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        
        if (response.status === 403) {
          throw new Error('No tienes permisos para realizar esta acción');
        } else if (response.status === 401) {
          throw new Error('Tu sesión ha expirado. Por favor, inicia sesión nuevamente');
        }
        
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const text = await response.text();
      if (!text) return true;
      
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error('Error parsing JSON:', e);
        return true;
      }
    } catch (error) {
      console.error('Error en DELETE:', error);
      throw error;
    }
  }
};

export default api; 