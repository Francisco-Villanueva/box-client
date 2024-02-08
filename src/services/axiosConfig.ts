import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('USER_TOKEN')

		config.headers.authorization = `Bearer ${token}`
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default axiosInstance
