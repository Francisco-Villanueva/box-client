import axios from 'axios'
import { ICredentials, IEmailData, IRegisterData, IUpdateData } from 'types'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export class AuthServices {
	static async login(data: ICredentials) {
		const user = await axios.post(`${BASE_URL}/auth/login`, data)
		return user.data
	}

	static async register(data: IRegisterData) {
		const user = await axios.post(`${BASE_URL}/auth/register`, data)
		return user.data
	}

	static async resetPassword(data: IEmailData) {
		const email = await axios.post(`${BASE_URL}/auth/reset-password`, data)
		return email.data
	}

	static async updatePassword(data: IUpdateData) {
		const updateData = await axios.patch(
			`${BASE_URL}/auth/update-password`,
			data
		)

		return updateData.data
	}
	static async me(token: string) {
		const payload = await axios.post(`${BASE_URL}/auth/me`, { token })
		return payload
	}
}
