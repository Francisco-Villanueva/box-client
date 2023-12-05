import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

interface Credentials {
	user: string
	password: string
}

interface UpdateData {
	password: string
	resetToken: string | string[]
}

interface RegisterData {
	name: string
	lastName: string
	userName: string
	email: string
	password: string
	image?: string
}

interface EmailData {
	email: string
}

export class AuthServices {
	static async login(data: Credentials) {
		const user = await axios.post(`${BASE_URL}/auth/login`, data)
		return user.data
	}

	static async register(data: RegisterData) {
		const user = await axios.post(`${BASE_URL}/auth/login`, data)
		return user.data
	}

	static async resetPassword(data: EmailData) {
		const email = await axios.post(`${BASE_URL}/auth/reset-password`, data)
		return email.data
	}
	static async updatePassword(data: UpdateData) {
		const updateData = await axios.patch(
			`${BASE_URL}/api/auth/update-password`,
			data
		)
		return updateData.data
	}
	static async me(token: string) {
		const payload = await axios.post(`${BASE_URL}/auth/me`, { token })
		return payload
	}
}
