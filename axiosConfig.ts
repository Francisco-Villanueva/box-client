import axios, { AxiosInstance } from 'axios'

const apiUrl = process.env.API_URL

const axiosInstance: AxiosInstance = axios.create({
	baseURL: 'http://localhost:3001', //TODO: Reemplazar por variable de entorno
	//timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
})

// Configuración de interceptors si se necesitan (Quizás la usemos para persistencia)
/* axiosInstance.interceptors.request.use(
  (config) => {
    let token = Cookies.get("token");
    
    config.headers.Authorization = `Bearer ${token}`;
    
    return config;
  },
  (error) => {
    // Manejo de errores en las solicitudes
    return Promise.reject(error);
  }
); */

/* axiosInstance.interceptors.response.use(
  (config) => {
    let token = Cookies.get("token");
    
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
); */

export default axiosInstance
