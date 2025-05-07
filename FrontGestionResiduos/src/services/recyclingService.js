// src/services/recyclingService.js
import api from './api';

const recyclingService = {
  getAllRecycling: async () => {
    try {
      const response = await api.get('/recycling');
      if (!Array.isArray(response)) {
        console.warn('La respuesta no es un array:', response);
        return [];
      }
      return response;
    } catch (error) {
      console.error('Error obteniendo registros de reciclaje:', error);
      return [];
    }
  },

  getRecyclingById: async (id) => {
    try {
      const response = await api.get(`/recycling/${id}`);
      return response;
    } catch (error) {
      console.error('Error obteniendo registro de reciclaje:', error);
      throw error;
    }
  },

  createRecycling: async (recyclingData) => {
    try {
      const response = await api.post('/recycling', recyclingData);
      return response;
    } catch (error) {
      console.error('Error creando registro de reciclaje:', error);
      throw error;
    }
  },

  updateRecycling: async (id, recyclingData) => {
    try {
      const response = await api.put(`/recycling/${id}`, recyclingData);
      return response;
    } catch (error) {
      console.error('Error actualizando registro de reciclaje:', error);
      throw error;
    }
  },

  deleteRecycling: async (id) => {
    try {
      await api.delete(`/recycling/${id}`);
      return true;
    } catch (error) {
      console.error('Error eliminando registro de reciclaje:', error);
      throw error;
    }
  },

  getRecyclingByUser: async (userId) => {
    try {
      return await api.get(`/users/${userId}/recyclings`);
    } catch (error) {
      console.error('Error obteniendo reciclajes del usuario:', error);
      throw error;
    }
  }
};

export default recyclingService;