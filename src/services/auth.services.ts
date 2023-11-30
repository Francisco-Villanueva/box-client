import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export class AuthServices {
	static async login(data: any) {
		const user = await axios.post(`${BASE_URL}/api/auth/login`, data)
		return user.data
	}
}
