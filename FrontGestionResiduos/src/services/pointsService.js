// src/services/pointsService.js
import api from './api';

const pointsService = {
  getAllPoints: async () => {
    try {
      return await api.get('/recyclable-points');
    } catch (error) {
      console.error('Error obteniendo puntos de reciclaje:', error);
      throw error;
    }
  },

  getPointById: async (id) => {
    try {
      return await api.get(`/recyclable-points/${id}`);
    } catch (error) {
      console.error('Error obteniendo punto de reciclaje:', error);
      throw error;
    }
  },

  createPoint: async (pointData) => {
    try {
      return await api.post('/recyclable-points', pointData);
    } catch (error) {
      console.error('Error creando punto de reciclaje:', error);
      throw error;
    }
  },

  updatePoint: async (id, pointData) => {
    try {
      return await api.put(`/recyclable-points/${id}`, pointData);
    } catch (error) {
      console.error('Error actualizando punto de reciclaje:', error);
      throw error;
    }
  },

  deletePoint: async (id) => {
    try {
      return await api.delete(`/recyclable-points/${id}`);
    } catch (error) {
      console.error('Error eliminando punto de reciclaje:', error);
      throw error;
    }
  }
};

export default pointsService;