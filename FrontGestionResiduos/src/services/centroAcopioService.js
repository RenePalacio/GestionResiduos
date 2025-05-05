import api from './api';

export const getCentrosAcopio = async () => {
    try {
        const response = await api.get('/api/recyclable-points');
        return response.data;
    } catch (error) {
        console.error('Error al obtener centros de acopio:', error);
        throw error;
    }
};

export const getCentroAcopioById = async (id) => {
    try {
        const response = await api.get(`/api/recyclable-points/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener centro de acopio:', error);
        throw error;
    }
};

export const createCentroAcopio = async (centro) => {
    try {
        const response = await api.post('/api/recyclable-points', centro);
        return response.data;
    } catch (error) {
        console.error('Error al crear centro de acopio:', error);
        throw error;
    }
};

export const updateCentroAcopio = async (id, centro) => {
    try {
        const response = await api.put(`/api/recyclable-points/${id}`, centro);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar centro de acopio:', error);
        throw error;
    }
};

export const deleteCentroAcopio = async (id) => {
    try {
        await api.delete(`/api/recyclable-points/${id}`);
    } catch (error) {
        console.error('Error al eliminar centro de acopio:', error);
        throw error;
    }
}; 