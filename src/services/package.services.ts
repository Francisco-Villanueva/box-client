import { CreatePackage, Package, PackageStatus } from 'types/packages.types'
import { AxiosResponse } from 'axios'
import axiosInstance from './axiosConfig'

export class PackageServices {
	static async getAllPackages(): Promise<Package[]> {
		const response: AxiosResponse = await axiosInstance.get('/packages')
		return response.data
	}
	static async getPackageById(id: string) {
		return await axiosInstance.get(`/packages/${id}`)
	}
	static async getPackageByStatus(status: PackageStatus) {
		return await axiosInstance.get(`/packages/status/${status}`)
	}
	static async createPackage(data: CreatePackage) {
		return await axiosInstance.post('/packages', { ...data })
	}
	static async udapatePackage(id: string, data: Package) {
		return await axiosInstance.put(`/packages/${id}`, { ...data })
	}
	static async deletePackage(id: string) {
		return await axiosInstance.delete(`/packages/${id}`)
	}
}
