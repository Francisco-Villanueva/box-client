import { CreatePackage, Package, PackageStatus } from 'types/packages.types'
import axios, { AxiosResponse } from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL
export class PackageServices {
	static async getAllPackages(): Promise<Package[]> {
		const response: AxiosResponse = await axios.get(`${BASE_URL}/packages`)
		return response.data
	}
	static async getPackageById(id: string) {
		return await axios.get(`${BASE_URL}/packages/${id}`)
	}
	static async getPackageByStatus(status: PackageStatus) {
		return await axios.get(`${BASE_URL}/packages/status/${status}`)
	}
	static async createPackage(data: CreatePackage) {
		return await axios.post(`${BASE_URL}/packages`, { ...data })
	}
	static async udapatePackage(id: string, data: Package) {
		return await axios.put(`${BASE_URL}/packages/${id}`, { ...data })
	}
}
