import { User } from 'types/user.types'
import axios, { AxiosResponse } from 'axios'
import { Package } from 'types'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export class UserServices {
	static async getAllUsers(): Promise<User[]> {
		const response: AxiosResponse = await axios.get(`${BASE_URL}/users`)

		return response.data
	}
	static async getUserById(id: string) {
		return await axios.get(`${BASE_URL}/users/${id}`)
	}
	static async updateUserStatus(id: string, newState: string) {
		return await axios.put(`${BASE_URL}/users/${id}`, { status: newState })
	}
	static async updateUserDeclarationTime(id: string, newDate: Date) {
		return await axios.put(`${BASE_URL}/users/${id}`, {
			rejectedDeclarationTime: new Date(newDate),
		})
	}
	static async addPackage(userId: string, packageId: string) {
		return await axios.post(`${BASE_URL}/users/${userId}/package`, {
			userId,
			packageId,
		})
	}
	static async removePackage(userId: string, packageId: string) {
		return await axios.patch(
			`${BASE_URL}/users/${userId}/removepackage/${packageId}`
		)
	}
	static async findPackageCarrier(packageId: string): Promise<User | undefined> {
		const response: AxiosResponse = await axios.get(`${BASE_URL}/users`)

		for (const user of response.data) {
			const foundPackage = user.packages.find((p: Package) => p._id === packageId)

			if (foundPackage !== undefined) {
				return user
			}
		}
		return undefined
	}
}
