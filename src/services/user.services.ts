import { User } from 'types/user.types'
import { AxiosResponse } from 'axios'
import { Package } from 'types'
import axiosInstance from './axiosConfig'

export class UserServices {
	static async getAllUsers(): Promise<User[]> {
		const response: AxiosResponse = await axiosInstance.get('/users')

		return response.data
	}
	static async getUserById(id: string) {
		return await axiosInstance.get(`/users/${id}`)
	}
	static async updateUserStatus(id: string, newState: string) {
		return await axiosInstance.put(`/users/${id}`, { status: newState })
	}
	static async updateUserDeclarationTime(id: string, newDate: Date) {
		return await axiosInstance.put(`/users/${id}`, {
			rejectedDeclarationTime: new Date(newDate),
		})
	}
	static async addPackage(userId: string, packageId: string) {
		return await axiosInstance.post(`/users/${userId}/package`, {
			userId,
			packageId,
		})
	}
	static async removePackage(userId: string, packageId: string) {
		return await axiosInstance.patch(
			`/users/${userId}/removepackage/${packageId}`
		)
	}
	static async findPackageCarrier(packageId: string): Promise<User | undefined> {
		const response: AxiosResponse = await axiosInstance.get('/users')

		for (const user of response.data) {
			const foundPackage = user.packages.find((p: Package) => p._id === packageId)

			if (foundPackage !== undefined) {
				return user
			}
		}
		return undefined
	}
}
