import api from './api'; // Asegúrate de que este archivo esté configurado correctamente

// Servicio para registrar un nuevo usuario
// Es invocado desde Register.jsx
export const registerUser = async (userData) => {
   const response = await api.post('/auth/register', userData);
   return response.data;
};
