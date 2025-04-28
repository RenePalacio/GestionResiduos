// src/services/recyclingService.js
import api from './api';

const recyclingService = {
  getAllRecycling: async () => {
    try {
      return await api.get('/recycling');
    } catch (error) {
      console.error('Error obteniendo procesos de reciclaje:', error);
      throw error;
    }
  },

  getRecyclingById: async (id) => {
    try {
      return await api.get(`/recycling/${id}`);
    } catch (error) {
      console.error('Error obteniendo proceso de reciclaje:', error);
      throw error;
    }
  },

  createRecycling: async (recyclingData) => {
    try {
      return await api.post('/recycling', recyclingData);
    } catch (error) {
      console.error('Error creando proceso de reciclaje:', error);
      throw error;
    }
  },

  updateRecycling: async (id, recyclingData) => {
    try {
      return await api.put(`/recycling/${id}`, recyclingData);
    } catch (error) {
      console.error('Error actualizando proceso de reciclaje:', error);
      throw error;
    }
  },

  deleteRecycling: async (id) => {
    try {
      return await api.delete(`/recycling/${id}`);
    } catch (error) {
      console.error('Error eliminando proceso de reciclaje:', error);
      throw error;
    }
  },

  getRecyclingByUser: async (userId) => {
    try {
      return await api.get(`/recycling/user/${userId}`);
    } catch (error) {
      console.error('Error obteniendo reciclajes del usuario:', error);
      throw error;
    }
  }
};

export default recyclingService;