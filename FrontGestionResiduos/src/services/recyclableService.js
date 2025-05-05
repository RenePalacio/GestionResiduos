// src/services/recyclableService.js
import api from './api';

const recyclableService = {
  getAllRecyclables: async () => {
    try {
      const response = await api.get('/recyclables');
      if (!Array.isArray(response)) {
        console.warn('La respuesta no es un array:', response);
        return [];
      }
      return response;
    } catch (error) {
      console.error('Error obteniendo reciclables:', error);
      return [];
    }
  },

  getRecyclableById: async (id) => {
    try {
      const response = await api.get(`/recyclables/${id}`);
      return response;
    } catch (error) {
      console.error('Error obteniendo reciclable:', error);
      throw error;
    }
  },

  createRecyclable: async (recyclableData) => {
    try {
      const response = await api.post('/recyclables', recyclableData);
      return response;
    } catch (error) {
      console.error('Error creando reciclable:', error);
      throw error;
    }
  },

  updateRecyclable: async (id, recyclableData) => {
    try {
      const response = await api.put(`/recyclables/${id}`, recyclableData);
      return response;
    } catch (error) {
      console.error('Error actualizando reciclable:', error);
      throw error;
    }
  },

  deleteRecyclable: async (id) => {
    try {
      await api.delete(`/recyclables/${id}`);
      return true;
    } catch (error) {
      console.error('Error eliminando reciclable:', error);
      throw error;
    }
  }
};

export default recyclableService;