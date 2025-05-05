import api from './api';

export const getMateriales = async () => {
    try {
        const response = await api.get('/recyclables');
        return response.data;
    } catch (error) {
        console.error('Error al obtener materiales:', error);
        throw error;
    }
};

export const getMaterialById = async (id) => {
    try {
        const response = await api.get(`/recyclables/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener material:', error);
        throw error;
    }
};

export const createMaterial = async (material) => {
    try {
        const response = await api.post('/recyclables', material);
        return response.data;
    } catch (error) {
        console.error('Error al crear material:', error);
        throw error;
    }
};

export const updateMaterial = async (id, material) => {
    try {
        const response = await api.put(`/recyclables/${id}`, material);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar material:', error);
        throw error;
    }
};

export const deleteMaterial = async (id) => {
    try {
        await api.delete(`/recyclables/${id}`);
    } catch (error) {
        console.error('Error al eliminar material:', error);
        throw error;
    }
}; 