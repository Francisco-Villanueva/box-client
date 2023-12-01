import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export class AuthServices {
	static async login(data: any) {
		const user = await axios.post(`${BASE_URL}/api/auth/login`, data)
		return user.data
	}
	static async resetPassword(data: any) {
		const email = await axios.post(`${BASE_URL}/api/auth/reset-password`, data)
		return email.data
	}
	static async updatePassword(data: any) {
		const updateData = await axios.patch(
			`${BASE_URL}/api/auth/update-password`,
			data
		)
		return updateData.data
	}
}
