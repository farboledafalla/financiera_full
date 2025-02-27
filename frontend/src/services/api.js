import axios from 'axios';

// Crea una instancia de axios con la URL base de la API
// La URL base es la que se configura en vite.config.js
// Uno de los archivos que importan el api es auth.service.js del frontend
const api = axios.create({
   baseURL: 'http://localhost:3005/api',
   headers: {
      'Content-Type': 'application/json',
   },
});

// Interceptor para agregar el token a las peticiones
api.interceptors.request.use(
   (config) => {
      const token = localStorage.getItem('token');
      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

export default api;
