import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export class AuthServices {
	static async login(data: any) {
		const user = await axios.post(`${BASE_URL}/auth/login`, data)
		return user.data
	}
	static async resetPassword(data: any) {
		const email = await axios.post(`${BASE_URL}/auth/reset-password`, data)
		return email.data
	}
	static async updatePassword(data: any) {
		const updateData = await axios.patch(`${BASE_URL}/auth/update-password`, data)
		return updateData.data
	}
	static async me(token: string) {
		const payload = await axios.post(`${BASE_URL}/auth/me`, { token })
		return payload
	}
}
