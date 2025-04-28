// src/services/recyclableService.js
import api from './api';

const recyclableService = {
  getAllRecyclables: async () => {
    try {
      return await api.get('/recyclables');
    } catch (error) {
      console.error('Error obteniendo reciclables:', error);
      throw error;
    }
  },

  getRecyclableById: async (id) => {
    try {
      return await api.get(`/recyclables/${id}`);
    } catch (error) {
      console.error('Error obteniendo reciclable:', error);
      throw error;
    }
  },

  createRecyclable: async (recyclableData) => {
    try {
      return await api.post('/recyclables', recyclableData);
    } catch (error) {
      console.error('Error creando reciclable:', error);
      throw error;
    }
  },

  updateRecyclable: async (id, recyclableData) => {
    try {
      return await api.put(`/recyclables/${id}`, recyclableData);
    } catch (error) {
      console.error('Error actualizando reciclable:', error);
      throw error;
    }
  },

  deleteRecyclable: async (id) => {
    try {
      return await api.delete(`/recyclables/${id}`);
    } catch (error) {
      console.error('Error eliminando reciclable:', error);
      throw error;
    }
  }
};

export default recyclableService;