import { User } from 'types/user.types'
import axios, { AxiosResponse } from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export class UserServices {
	static async getAllUsers(): Promise<User[]> {
		const response: AxiosResponse = await axios.get(`${BASE_URL}/users`)
		return response.data
	}

	static async updateUser(id: string, newState: string) {
		return axios.patch(`${BASE_URL}/users/${id}`, { status: newState })
	}
}
