// src/services/authService.js
import api from './api';

const authService = {
  login: async (credentials) => {
    try {
      const response = await fetch(`${api.API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('loggedIn', 'true');
        return data;
      } else {
        throw new Error('Error en las credenciales');
      }
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  },

  register: async (userData) => {
    try {
      return await api.post('/auth/register', userData);
    } catch (error) {
      console.error('Error en registro:', error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('loggedIn');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },

  isAuthenticated: () => {
    return localStorage.getItem('loggedIn') === 'true';
  }
};

export default authService;